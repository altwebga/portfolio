import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Header } from "@/components/shared/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/app-sidebar";

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
  return (
    <>
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
