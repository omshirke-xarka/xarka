interface ContactData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildContactEmail(data: ContactData): string {
  const { name, email, company, phone, message } = data;

  const optionalRows = [
    company
      ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;width:120px;">Company</td><td style="padding:8px 12px;">${escapeHtml(company)}</td></tr>`
      : "",
    phone
      ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;width:120px;">Phone</td><td style="padding:8px 12px;">${escapeHtml(phone)}</td></tr>`
      : "",
  ]
    .filter(Boolean)
    .join("");

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
