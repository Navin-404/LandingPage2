import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Modern font [cite: 8]
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kasparro | Optimizing for the AI Search Era",
  description: "Build a strong visual and informational identity in the AI Search Era.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}