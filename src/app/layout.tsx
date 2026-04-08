import type { Metadata } from "next";
import { AucraEdge } from "@aucra/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ntung110s-projects.vercel.app"),
  title: "Your Name | Portfolio",
  description:
    "Portfolio website featuring selected projects, background, and resume.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Your Name | Portfolio",
    description:
      "Portfolio website featuring selected projects, background, and resume.",
    url: "/",
    siteName: "Your Name Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] font-sans">
        {children}
        <AucraEdge publisherKey = {process.env.AUCRA_KEY!}/>
      </body>
    </html>
  );
}
