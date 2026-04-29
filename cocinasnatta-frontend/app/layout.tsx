import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Natta Cocinas | Diseño de Cocinas Premium",
  description: "Diseño y fabricación de cocinas de alta gama en Alicante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-grow animate-page">
          {children}
        </main>
      </body>
    </html>
  );
}
