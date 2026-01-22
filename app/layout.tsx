import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; 
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
  title: "SHUHIZ | שוחיז - שיווק דיגיטלי ויצירת תוכן",
  description: "משרד פרסום המתמחה בסושיאל מדיה, PPC, מיתוג עסקים והפקת תוכן ויזואלי.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}