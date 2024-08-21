import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header2";
import { Footer } from "@/components/footer2";
import { Toaster } from "@/components/ui/toaster";
import { siteMetaData } from "@/config/site";
import OGImage from "@/public/images/opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
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
