import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { contactRouter } from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json({ limit: "10kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:8080",
    methods: ["POST"],
  })
);

app.use("/api", contactRouter);

// In production, serve the frontend build
if (process.env.NODE_ENV === "production") {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const frontendDist = path.join(__dirname, "../../dist");
  app.use(express.static(frontendDist));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
