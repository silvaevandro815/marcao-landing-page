import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcão AI — Seu Personal Trainer no WhatsApp. Impiedoso. Inteligente. Eficaz.",
  description: "O único personal trainer com IA que te chama atenção quando você precisa, entende quando você está doente e nunca aceita desculpa. Desafios mensais personalizados, análise visual de treino e coaching 24h no WhatsApp.",
  keywords: ["personal trainer ia", "coach whatsapp", "treino inteligente", "marcao ai", "desafio fitness"],
  openGraph: {
    title: "Marcão AI — IA de Elite no seu WhatsApp",
    description: "Coaching personalizado com IA. Zero papo furado. Resultados reais.",
    type: "website",
    locale: "pt_BR",
    siteName: "Marcão AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcão AI — Seu Personal Trainer no WhatsApp",
    description: "A IA que não aceita suas desculpas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-surface-black text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
