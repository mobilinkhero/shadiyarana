import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadiyarana - Wedding Vendor Marketplace",
  description: "Find the perfect vendors for your dream wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
