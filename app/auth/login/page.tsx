import { LoginForm } from "@/components/login-form";
import { Logo } from "@/components/app-logo";

export default function LoginPage() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
      <Logo className="w-14 h-14" />
      <LoginForm />
    </div>
  );
}
