"use client";

import { SmartCaptcha } from "@yandex/smart-captcha";
import { useState } from "react";

type SmartCaptchaProps = {
  onToken: (token: string) => void;
  language?: "ru" | "en";
};

export function SmartCaptchaWidget({
  onToken,
  language = "ru",
}: SmartCaptchaProps) {
  const sitekey = process.env.NEXT_PUBLIC_YANDEX_SMARTCAPTCHA_SITEKEY;

  // используется для принудительного reset капчи
  const [captchaKey, setCaptchaKey] = useState(0);

  if (!sitekey) {
    return null;
  }

  function resetCaptcha() {
    onToken("");
    setCaptchaKey((v) => v + 1);
  }

  return (
    <SmartCaptcha
      key={captchaKey}
      sitekey={sitekey}
      language={language}
      onSuccess={onToken}
      onTokenExpired={resetCaptcha}
      onNetworkError={resetCaptcha}
    />
  );
}
