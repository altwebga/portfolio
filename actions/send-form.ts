"use server";

import { IRequest } from "@/config/types";

const API_KEY = process.env.TOKEN;
const API_URL = process.env.API_URL;

export async function sendForm(data: IRequest) {
  try {
    const res = await fetch(`${API_URL}/items/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    // если пустой ответ — просто выходим
    const text = await res.text();
    if (!res.ok) {
      throw new Error(text || "Ошибка при отправке формы");
    }

    if (!text) return { ok: true };

    return { ok: true, data: JSON.parse(text) };
  } catch (error: unknown) {
    console.error("sendForm error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: message };
  }
}
