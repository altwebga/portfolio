import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, text, url } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"), // Преобразуем порт в число
      secure: true, // Используем SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"Сайт SEOMIX" <send@seomix.ru>', // Адрес отправителя
      to: "altwebga@ya.ru", // Адрес получателя
      subject: "Новая заявка с сайта",
      text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${text}\nURL страницы: ${url}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Ошибка при отправке почты:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
