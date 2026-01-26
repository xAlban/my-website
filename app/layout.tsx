import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
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
  metadataBase: new URL("https://alban-elezi.dev"),
  title: {
    default: "Alban Elezi | Software Engineer",
    template: "%s | Alban Elezi",
  },
  description:
    "Freelance Software Engineer specializing in Next.js, TypeScript, and Tailwind CSS. Building accessible, high-performance, and visually stunning web applications.",
  keywords: [
    "Alban Elezi",
    "Software Engineer",
    "Web Developer",
    "Freelance",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Developer",
  ],
  authors: [{ name: "Alban Elezi", url: "https://alban-elezi.dev" }],
  creator: "Alban Elezi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alban-elezi.dev",
    title: "Alban Elezi | Software Engineer",
    description:
      "Freelance Software Engineer specializing in modern web development with Next.js and TypeScript.",
    siteName: "Alban Elezi Portfolio",
    images: [
      {
        url: "/profile_pic.jpg",
        width: 1200,
        height: 630,
        alt: "Alban Elezi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alban Elezi | Software Engineer",
    description:
      "Freelance Software Engineer specializing in modern web development with Next.js and TypeScript.",
    images: ["/profile_pic.jpg"],
    creator: "@albanelezi",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black" style={{ backgroundColor: "#000" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        style={{ backgroundColor: "#000" }}
      >
        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
