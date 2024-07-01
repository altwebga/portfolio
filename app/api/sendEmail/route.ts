"use server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const pageUrl = formData.get("pageUrl") as string;

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

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "Новая заявка с контактной формы",
      text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}\nСтраница: ${pageUrl}`,
    });

    return new Response(null, {
      status: 303,
      headers: { Location: "/contact?success=true" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Ошибка при отправке почты." }),
      { status: 500 }
    );
  }
}
