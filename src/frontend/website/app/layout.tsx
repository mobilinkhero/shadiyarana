import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding Vendor Marketplace - Find Perfect Wedding Vendors in Pakistan",
  description: "Discover and book the best wedding vendors in Pakistan. Photographers, venues, caterers, makeup artists, and more.",
  keywords: "wedding vendors, pakistan, karachi, lahore, islamabad, wedding photography, wedding venues",
  openGraph: {
    title: "Wedding Vendor Marketplace",
    description: "Find perfect wedding vendors in Pakistan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
