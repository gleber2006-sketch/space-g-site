import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space-G Agência | Destaque-se no Digital",
  description: "A Space-G impulsiona seu sucesso através de tráfego pago, automação de WhatsApp, gestão de redes sociais e criação de sites modernos.",
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: "Space-G Agência | Destaque-se no Digital",
    description: "A Space-G impulsiona seu sucesso através de tráfego pago, automação de WhatsApp, gestão de redes sociais e criação de sites modernos.",
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Space-G Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
