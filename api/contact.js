import nodemailer from "nodemailer";
import { useTranslation } from "react-i18next";

export default async function handler(req, res) {
  const { t } = useTranslation();

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <support@okdesign.ge>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${t(service)}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Service: ${t(service)}
Message:
${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return res.status(500).json({ error: "Internal Server Error" }); // always JSON
  }
}
