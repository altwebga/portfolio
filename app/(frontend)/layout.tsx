import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function FrontEndLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container p-4 mx-auto grow">{children}</main>
      <Footer />
    </div>
  );
}
