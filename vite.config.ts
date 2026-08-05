import { defineConfig, loadEnv, type Connect } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import nodemailer from "nodemailer";

// Reads the JSON body off a Node request stream.
function readJsonBody(req: Connect.IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) reject(new Error("Payload too large"));
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

// Middleware that turns POST /api/contact into an SMTP email.
function contactMiddleware(env: Record<string, string>) {
  return async (req: Connect.IncomingMessage, res: any, next: () => void) => {
    if (req.url !== "/api/contact" || req.method !== "POST") return next();

    const send = (status: number, body: object) => {
      res.statusCode = status;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(body));
    };

    try {
      const { name, email, message } = await readJsonBody(req);
      if (!name || !email || !message) {
        return send(400, { error: "Name, email and message are required." });
      }

      const pass = (env.SMTP_PASS || "").replace(/\s+/g, "");
      if (!pass) {
        return send(500, { error: "SMTP_PASS is not set in .env." });
      }

      const port = Number(env.SMTP_PORT || 587);
      const transport = nodemailer.createTransport({
        host: env.SMTP_HOST || "smtp.gmail.com",
        port,
        secure: env.SMTP_SECURE === "true" || port === 465,
        auth: { user: env.SMTP_USER, pass },
      });

      const to = env.CONTACT_TO_EMAIL || env.SMTP_USER;
      const esc = (s: string) =>
        String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));

      await transport.sendMail({
        from: `"${env.SMTP_FROM_NAME || "Portfolio Contact"}" <${env.SMTP_FROM_EMAIL || env.SMTP_USER}>`,
        to,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px">
            <h2 style="color:#c85000;margin:0 0 16px">New contact form submission</h2>
            <div style="background:#f0ede4;padding:16px;border-radius:10px;margin-bottom:16px">
              <p style="margin:0 0 6px"><strong>Name:</strong> ${esc(name)}</p>
              <p style="margin:0"><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
            </div>
            <div style="border:1px solid #e4e0d5;padding:16px;border-radius:10px">
              <p style="margin:0 0 8px;color:#8d3118"><strong>Message</strong></p>
              <p style="line-height:1.6;white-space:pre-wrap;margin:0">${esc(message)}</p>
            </div>
          </div>`,
      });

      return send(200, { success: true });
    } catch (err: any) {
      console.error("[contact] send failed:", err?.message || err);
      return send(500, { error: err?.message || "Failed to send email." });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: "contact-smtp-endpoint",
        configureServer(server) {
          server.middlewares.use(contactMiddleware(env));
        },
        configurePreviewServer(server) {
          server.middlewares.use(contactMiddleware(env));
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
