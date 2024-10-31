"use server";
import { signIn } from "@/auth";

type nodemailerAuthProps = {
  email: string;
};

export async function nodemailerAuth(data: nodemailerAuthProps) {
  try {
    await signIn("nodemailer", data);
  } catch (error) {
    console.log(error);
  }
}

export async function yandexAuth() {
  try {
    await signIn("yandex");
  } catch (error) {
    console.log(error);
  }
}
