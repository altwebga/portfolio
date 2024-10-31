import type { NextAuthConfig } from "next-auth";
import Yandex from "next-auth/providers/yandex";
import Nodemailer from "next-auth/providers/nodemailer";
import { createTransport } from "nodemailer";
import {
  EmailHtmlTemplate,
  EmailTextTemplate,
} from "@/components/EmailTemplate"; // Убедитесь, что путь корректный

export default {
  providers: [
    Yandex,
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_SERVER_USER,
      async sendVerificationRequest({ identifier: email, url, provider }) {
        const { server, from } = provider;

        const transport = createTransport(server);

        // Отправка письма с использованием кастомного шаблона
        const result = await transport.sendMail({
          to: email,
          from,
          subject: `Вход на сайт ${new URL(url).host}`,
          text: EmailTextTemplate({ url, host: new URL(url).host }),
          html: EmailHtmlTemplate({ url, host: new URL(url).host }),
        });

        const failed = result.rejected.concat(result.pending).filter(Boolean);
        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
