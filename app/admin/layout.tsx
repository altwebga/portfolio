import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
    return null;
  }
  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
    return null;
  }
  return <>{children}</>;
}
