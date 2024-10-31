import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SEOMIX",
  description:
    "Разработка сайтов в Горно-Алтайске по низким ценам, частный вебмастер.",
  keywords:
    "разработка сайтов, заказать, мобильное приложение, продвижение сайтов, поддержка, обслуживание, создание сайтов, seo, seo оптимизация",
  openGraph: {
    title: "SEOMIX",
    description: "Разработка и продвижение сайтов.",
    url: "https://seomix.ru",
    siteName: "SEOMIX",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow px-4 pt-8 container mx-auto">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
