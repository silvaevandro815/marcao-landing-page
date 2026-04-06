import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
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
      </body>
    </html>
  );
}
