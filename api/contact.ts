import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ConfidentialClientApplication } from "@azure/msal-node";
import { Client } from "@microsoft/microsoft-graph-client";

// --- Validation ---
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: any): string | null {
  const { name, email, message, company, phone } = body || {};
  if (!name || typeof name !== "string" || !name.trim()) return "Name is required.";
  if (name.length > 100) return "Name must be 100 characters or less.";
  if (!email || typeof email !== "string" || !email.trim()) return "Email is required.";
  if (email.length > 255 || !EMAIL_RE.test(email.trim())) return "Please provide a valid email address.";
  if (!message || typeof message !== "string" || !message.trim()) return "Message is required.";
  if (message.length > 1000) return "Message must be 1000 characters or less.";
  if (company !== undefined && (typeof company !== "string" || company.length > 100)) return "Company must be 100 characters or less.";
  if (phone !== undefined && (typeof phone !== "string" || phone.length > 20)) return "Invalid phone number.";
  return null;
}

// --- Rate limiting (in-memory, per instance) ---
const MAX_REQUESTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) return true;
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

// --- HTML escape ---
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildContactEmail(data: { name: string; email: string; company?: string; phone?: string; message: string }): string {
  const { name, email, company, phone, message } = data;
  const optionalRows = [
    company ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;width:120px;">Company</td><td style="padding:8px 12px;">${escapeHtml(company)}</td></tr>` : "",
    phone ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;width:120px;">Phone</td><td style="padding:8px 12px;">${escapeHtml(phone)}</td></tr>` : "",
  ].filter(Boolean).join("");

  return `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
  <div style="background:#1a1a2e;padding:24px;text-align:center;">
    <h2 style="margin:0;color:#ffffff;font-size:20px;">New Contact Form Submission</h2>
  </div>
  <div style="padding:24px;background:#f9f9f9;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 12px;font-weight:bold;color:#555;width:120px;">Name</td><td style="padding:8px 12px;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:bold;color:#555;width:120px;">Email</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}" style="color:#1a73e8;">${escapeHtml(email)}</a></td></tr>
      ${optionalRows}
    </table>
    <div style="margin-top:20px;padding:16px;background:#ffffff;border:1px solid #e0e0e0;border-radius:6px;">
      <p style="margin:0 0 8px;font-weight:bold;color:#555;">Message</p>
      <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>
    </div>
  </div>
  <div style="padding:12px;text-align:center;color:#999;font-size:12px;background:#f0f0f0;">
    Sent from xarka.in contact form
  </div>
</div>`;
}

// --- Graph API client ---
const msalClient = new ConfidentialClientApplication({
  auth: {
    clientId: process.env.AZURE_CLIENT_ID!,
    clientSecret: process.env.AZURE_CLIENT_SECRET!,
    authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
  },
});

async function getGraphClient(): Promise<Client> {
  const result = await msalClient.acquireTokenByClientCredential({
    scopes: ["https://graph.microsoft.com/.default"],
  });
  if (!result?.accessToken) {
    throw new Error("Failed to acquire OAuth2 access token");
  }
  return Client.init({
    authProvider: (done) => done(null, result.accessToken),
  });
}

// --- Handler ---
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ success: false, message: "Too many requests. Please try again later." });
  }

  const error = validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, message: error });
  }

  const { name, email, company, phone, message } = req.body;

  try {
    const graphClient = await getGraphClient();

    await graphClient
      .api(`/users/${process.env.SMTP_USER}/sendMail`)
      .post({
        message: {
          subject: `New Contact Form Submission from ${name}`,
          body: {
            contentType: "HTML",
            content: buildContactEmail({ name, email, company, phone, message }),
          },
          from: {
            emailAddress: { address: process.env.SMTP_USER },
          },
          toRecipients: [
            { emailAddress: { address: "xarka.tech@xarka.in" } },
          ],
          replyTo: [
            { emailAddress: { address: email } },
          ],
        },
      });

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ success: false, message: "Failed to send email. Please try again later." });
  }
}
