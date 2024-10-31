"use server";
import nodemailer from "nodemailer";

// Определите тип, если еще не сделали этого
type FormDataType = {
  name: string;
  phone: string;
  url: string;
};

export async function sendFormSMTP(formData: FormDataType) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "Заявка с сайта",
    text: `Имя: ${formData.name}\nТелефон: ${formData.phone}\nСсылка: ${formData.url}`,
    html: `<h1>Заявка с сайта</h1><p>Имя: ${formData.name}</p><p>Телефон: ${formData.phone}</p><p>Ссылка: ${formData.url}</p>`,
  });
}
