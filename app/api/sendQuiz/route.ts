"use server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  const services = formData.getAll("services") as string[];
  const customService = formData.get("customService") as string;
  const websites = formData.getAll("websites") as string[];
  const budget = formData.get("budget") as string;
  const timeframe = formData.get("timeframe") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const file = formData.get("file") as File;

  if (!name || !phone) {
    return new Response(
      JSON.stringify({ error: "Все обязательные поля должны быть заполнены." }),
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.beget.com",
    port: 465, // Защищенный SSL
    secure: true, // Использование SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Отключение проверки сертификата для отладки
    },
    logger: true, // Включение логирования
    debug: true, // Включение отладочной информации
  });

  let attachments = [];

  if (file) {
    const arrayBuffer = await file.arrayBuffer();

    attachments.push({
      filename: file.name,
      content: Buffer.from(arrayBuffer),
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "Новая заявка с контактной формы",
      text: `
        Услуги: ${services.join(", ")}
        Свой вариант услуг: ${customService}
        Сайты: ${websites.join(", ")}
        Бюджет: ${budget}
        Сроки: ${timeframe}
        Имя: ${name}
        Телефон: ${phone}
        Сообщение: ${message}
      `,
      attachments,
    });

    return new Response(null, {
      status: 303,
      headers: { Location: "/contact?success=true" },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Ошибка при отправке почты:", error);

    return new Response(
      JSON.stringify({ error: "Ошибка при отправке почты." }),
      { status: 500 }
    );
  }
}
