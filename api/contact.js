import nodemailer from "nodemailer";

export default async function handler(req, res) {
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
      user: process.env.ZOHO_EMAIL, // your main mailbox
      pass: process.env.ZOHO_PASSWORD, // app password from Zoho
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <info@okdesign.ge>`, // alias appears as sender
      to: process.env.ZOHO_EMAIL, // your main inbox
      replyTo: email, // reply goes to visitor
      subject: `Contact Form: ${service}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Service: ${service}
Message: ${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
