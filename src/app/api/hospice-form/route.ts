import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // 1️⃣ Parse form data from frontend
    const data = await req.json();

    const {
      fullName = "",
      email = "",
      phone = "",
      ...answers
    } = data;

    // 2️⃣ Build email body text
    const lines = [];
    lines.push("🕊️ Hospice Eligibility Questionnaire Submission");
    lines.push("==================================================");
    lines.push(`Full Name: ${fullName}`);
    lines.push(`Email: ${email}`);
    lines.push(`Phone: ${phone}`);
    lines.push("");

    for (const [key, value] of Object.entries(answers)) {
      lines.push(`${key}: ${value || "-"}`);
    }

    const textBody = lines.join("\n");

    // 3️⃣ Configure SMTP Transporter (Namecheap Webmail)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // mail server
      port: Number(process.env.SMTP_PORT), // 465
      secure: process.env.SMTP_SECURE === "true", // true for SSL
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your email password
      },
    });

    // 4️⃣ Send the email to your hospice inbox
    await transporter.sendMail({
      from: `"Hospice & Beyond" <${process.env.MAIL_FROM}>`,
      to: "info@hospiceandbeyond.com",
      subject: `New Hospice Eligibility Submission — ${fullName}`,
      text: textBody,
      html: `<pre style="font-family: ui-monospace; white-space: pre-wrap;">${textBody}</pre>`,
      replyTo: email || undefined,
    });

    // 5️⃣ Return success response
    return new Response("✅ Email sent successfully!", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("❌ Failed to send email: " + error.message, { status: 500 });
  }
}
