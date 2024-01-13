import 'dotenv/config';
import nodemailer from 'nodemailer';
import emailTemplate from './emailTemplate.js';

async function sendEmail() {
  console.log(process.env.EMAIL_USERNAME)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASS,
    }
  });

  const options = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL,
    subject: 'Testing function',
    html: emailTemplate()
  }

  const info = await transporter.sendMail(options);
  console.log(info.messageId)
}

export default sendEmail;