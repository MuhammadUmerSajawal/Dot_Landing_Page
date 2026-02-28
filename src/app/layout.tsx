import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import "./globals.css";

const seeds = localFont({
  src: [
    {
      path: "../../Seeds_font/Seeds_for_Gaza-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Seeds_font/Seeds_for_Gaza-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-seeds",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${seeds.variable} bg-bgPrimary font-sans text-textPrimary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
