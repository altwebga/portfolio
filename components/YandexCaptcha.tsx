import { SmartCaptcha } from "@yandex/smart-captcha";

const sitekey =
  process.env.NEXT_PUBLIC_YANDEX_SMART_CAPTCHA_CLIENT_KEY || "test";

// Типизируем пропсы
interface YandexCaptchaProps {
  onVerify: (token: string) => void;
}

export const YandexCaptcha: React.FC<YandexCaptchaProps> = ({ onVerify }) => {
  const handleSuccess = (captchaToken: string) => {
    onVerify(captchaToken); // Передаем токен вверх через коллбэк
  };

  return (
    <SmartCaptcha
      sitekey={sitekey}
      onSuccess={handleSuccess}
      language="ru"
      test={false}
    />
  );
};
