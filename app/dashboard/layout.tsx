import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
    return null;
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
