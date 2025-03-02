import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

import localFont from "next/font/local";
import "./globals.css";

const tildaSans = localFont({
  src: "../public/fonts/TildaSans-VF.woff",
  variable: "--font-tilda-sans",
  weight: "100 900",
});

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SEOMIX",
    template: "%s | SEOMIX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${tildaSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
