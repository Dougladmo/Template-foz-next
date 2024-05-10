import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Header from "@/components/Layout/Header/Header";
import Footer from '@/components/Layout/Footer/Footer'
import JivoChat from "@/components/Chat/JivoChat";

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Foz Advogados",
  description: "A Foz Advogados oferece prestação de serviço no Direito Administrativo, Tributário e Civil com software de gestão. Leia mais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        <Header />
        {children}
        <JivoChat />
        <Footer />
      </body>
    </html>
  );
}
