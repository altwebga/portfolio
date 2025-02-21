import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 mt-4 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
