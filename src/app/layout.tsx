import { onest } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artistsweb | Digital Agency",
  description:
    "Artistsweb is a digital agency that helps artists to showcase their work and connect with their audience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} antialiased font-onest`}>
        {children}
      </body>
    </html>
  );
}
