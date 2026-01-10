"use server";

import * as z from "zod";
import directus from "@/lib/directus";
import { createItem } from "@directus/sdk";
import { headers } from "next/headers";

const schema = z.object({
  client: z.string().trim().min(1),
  phone: z.string().trim().min(1),
  message: z.string().trim().max(2000).optional(),
  page_url: z.string().trim().optional(),
  captcha_token: z.string().trim().min(1, "Токен капчи обязателен"),
});

async function validateCaptcha(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.YANDEX_SMARTCAPTCHA_SECRET;

  if (!secret) {
    console.error("YANDEX_SMARTCAPTCHA_SECRET не установлен");
    return false;
  }

  try {
    const params = new URLSearchParams({ secret, token });
    if (ip) params.append("ip", ip);

    const response = await fetch(
      "https://smartcaptcha.cloud.yandex.ru/validate",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );

    const result = await response.json();
    return result.status === "ok";
  } catch (error) {
    console.error("Ошибка при проверке капчи:", error);
    return false;
  }
}

export async function createRequestWebsite(input: unknown) {
  const data = schema.parse(input);

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    undefined;

  const isCaptchaValid = await validateCaptcha(data.captcha_token, ip);
  if (!isCaptchaValid) {
    return { ok: false, error: "Капча не прошла проверку" };
  }

  await directus.request(
    createItem("requests_website", {
      client: data.client,
      phone: data.phone,
      page_url: data.page_url,
      // ✅ новое поле (если в Directus оно называется иначе — переименуй тут)
      message: data.message || null,
    })
  );

  return { ok: true };
}
