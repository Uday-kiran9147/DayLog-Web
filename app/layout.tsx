import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DayLog — Minimalist Focus Timer & Daily Reflection Journal",
  description:
    "DayLog is a minimalist, privacy-first focus timer and daily reflection journal designed to help you stay productive, reflect with intention, and build consistent habits—with zero cloud lock-in, zero accounts, and 100% offline privacy.",
  keywords: [
    "DayLog",
    "focus timer",
    "daily reflection journal",
    "offline-first journal",
    "deep work timer",
    "pomodoro",
    "productivity tracker",
    "app-ads.txt",
    "admob",
    "developer journal",
    "DSA study tracker",
  ],
  authors: [{ name: "DayLog Team" }],
  creator: "DayLog",
  publisher: "DayLog",
  metadataBase: new URL("https://daylog.app"),
  openGraph: {
    title: "DayLog — Focus Timer & Daily Reflection Journal",
    description:
      "Stay productive, reflect with intention, and build consistent habits. Zero cloud lock-in, zero accounts, and 100% offline privacy.",
    url: "https://daylog.app",
    siteName: "DayLog",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/daylog-icon_v8.png?v=8",
        width: 512,
        height: 512,
        alt: "DayLog App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DayLog — Focus Timer & Daily Reflection Journal",
    description:
      "Minimalist, privacy-first focus timer and 4-question daily reflection journal.",
    images: ["/daylog-icon_v8.png?v=8"],
  },
  icons: {
    icon: [
      { url: "/daylog-icon_v8.png?v=8" },
      { url: "/daylog-icon_v8.png?v=8", sizes: "32x32", type: "image/png" },
      { url: "/daylog-icon_v8.png?v=8", sizes: "192x192", type: "image/png" },
      { url: "/daylog-icon_v8.png?v=8", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/daylog-icon_v8.png?v=8", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/daylog-icon_v8.png?v=8"],
  },
};

export const viewport: Viewport = {
  themeColor: "#c85a32",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/daylog-icon_v8.png?v=8" />
        <link rel="icon" type="image/png" sizes="192x192" href="/daylog-icon_v8.png?v=8" />
        <link rel="icon" type="image/png" sizes="512x512" href="/daylog-icon_v8.png?v=8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/daylog-icon_v8.png?v=8" />
        <link rel="shortcut icon" href="/daylog-icon_v8.png?v=8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#faf7f2] dark:bg-[#141210] text-[#231f1c] dark:text-[#f6f0e6] antialiased min-h-screen flex flex-col selection:bg-[#c85a32] selection:text-white`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
