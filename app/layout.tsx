import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { siteMetaData } from "@/config/site";
import OGImage from "@/public/images/opengraph-image.png";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: siteMetaData.metadataBase,
  title: {
    default: siteMetaData.title,
    template: `%s - ${siteMetaData.title}`,
  },
  description: siteMetaData.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: siteMetaData.keywords,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    images: OGImage.src,
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen flex flex-col justify-between">
            <Header />
            <main className="flex-grow">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
