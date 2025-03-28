import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { AppProvider } from "@/components/app-provider";
// import { YandexMetrikaContainer } from "@/components/shared/yandex-metrika";

import localFont from "next/font/local";
import "./globals.css";

const tildaSans = localFont({
  src: "../public/fonts/TildaSans-VF.woff",
  variable: "--font-tilda-sans",
  weight: "100 900",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SEOMIX",
    template: "%s | SEOMIX",
  },
  description: "Разработка и продвижение сайтов в Горно-Алтайске",
  keywords:
    "вебмастер, разработка сайтов, продвижение сайтов, SEO, Горно-Алтайск, Республика Алтай, создание сайтов, частный специалист, поддержка сайтов, портфолио",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${tildaSans.variable} antialiased`}>
        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
        {/* <YandexMetrikaContainer /> */}
      </body>
    </html>
  );
}
