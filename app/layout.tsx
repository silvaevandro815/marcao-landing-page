import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import AdrenalineAudio from "@/components/AdrenalineAudio";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Marcão AI — A IA que Monitora Seus Alunos 24h. Para Personals e Academias.",
  description: "O copiloto de IA para personal trainers e donos de academia. Marcão monitora a saúde e performance de cada aluno no WhatsApp, envia alertas inteligentes e aumenta a retenção da sua base. Escale seus resultados.",
  keywords: ["ia para personal trainer", "software academia ia", "gestao de alunos ia", "marcao ai parceiro", "personal trainer whatsapp ia", "retenção de alunos academia", "coaching ia b2b", "dashboard personal trainer"],
  openGraph: {
    title: "Marcão AI — A IA que Monitora Seus Alunos 24h. Para Personals e Academias.",
    description: "Transforme sua academia ou carteira de alunos com IA. O Marcão monitora saúde, performance e engajamento de cada aluno no WhatsApp — e envia alertas direto pro seu dashboard quando alguém some ou dorme mal.",
    type: "website",
    locale: "pt_BR",
    siteName: "Marcão AI",
    url: "https://marcaopersonal.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcão AI — IA para Personal Trainers e Academias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcão AI — A IA Copiloto do Personal Trainer",
    description: "Monitore a saúde e performance dos seus alunos 24h no WhatsApp. Alertas inteligentes, dashboard de parceiro e muito mais.",
    images: ["/og-image.jpg"],
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
      <body className="bg-surface-black text-text-primary antialiased overflow-x-hidden">
        {/* Renderiza Script GTM apenas se tiver a key */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Renderiza Meta Pixel apenas se tiver a key */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        <Suspense fallback={null}>
          {children}
        </Suspense>

        <AdrenalineAudio />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
