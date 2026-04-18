"use client";

import { motion } from "framer-motion";
import LogoSVG from "@/components/LogoSVG";
import { useUTM } from "@/hooks/useUTM";

const APP_LINK = "https://api.marcaopersonal.com/app";

const FOOTER_LINKS = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#compatibilidade", label: "Smartwatch" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#planos", label: "Planos" },
];

export default function Footer() {
  const { getWhatsAppCTA } = useUTM();

  return (
    <footer className="relative border-t border-surface-border overflow-hidden">
      {/* Aurora glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-lime/6 blur-3xl rounded-full pointer-events-none" />

      {/* CTA Section */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-brand-lime/20 bg-brand-lime/5">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span className="text-xs font-mono text-brand-lime uppercase tracking-widest">Marcão Online Agora</span>
          </div>

          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6">
            A DESCULPA<br />
            <span className="gradient-text-lime text-glow-lime">ACABOU.</span>
          </h2>

          <p className="text-text-secondary text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            O Marcão está esperando você no WhatsApp. Sem app, sem cadastro, sem mensalidade escondida.
            Só você, a meta e um coach que não aceita meio-termo.
          </p>

          <a
            href={APP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-lime text-black font-black text-lg hover:shadow-lime-glow transition-all duration-300 hover:scale-105 active:scale-95 animate-glow-pulse"
          >
            <svg className="w-6 h-6 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414C17.523 15.3414 16.2797 12.8797 15.023 10.429L14.7336 9.84531L13.8436 8.04944C13.5682 7.49348 12.8193 7.42171 12.4497 7.9157L11.5303 9.14441L10.4682 10.5638L9.00627 12.5186L7.54432 14.4735H17.523C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM21.9961 14.8082C21.9961 14.8082 20.8926 12.597 19.8222 10.4526L18.7397 8.28312C18.4231 7.64866 17.2023 7.50294 16.7022 8.04944L14.4988 10.4578C13.8824 11.1314 12.1643 13.0097 12.1643 13.0097C12.1643 13.0097 12.894 11.5173 13.6268 10.015L14.3644 8.50215C14.7176 7.77884 14.4646 6.88371 13.7853 6.45233C13.106 6.02095 12.1906 6.22384 11.7582 6.9142L10.3541 9.15582L8.98801 11.336L7.13506 14.293L13.4357 14.293C13.4357 14.293 21.0569 14.8082 21.9961 14.8082ZM5.97657 15.3414C5.97657 15.3414 7.21989 12.8797 8.47657 10.429L8.76597 9.84531L9.65597 8.04944C9.93144 7.49348 10.6803 7.42171 11.0499 7.9157L11.9693 9.14441L13.0314 10.5638L14.4933 12.5186L15.9553 14.4735H5.97657C5.97657 15.3414 5.97657 15.3414 5.97657 15.3414ZM1.50346 14.8082C1.50346 14.8082 2.60699 12.597 3.67735 10.4526L4.75988 8.28312C5.07644 7.64866 6.29729 7.50294 6.79737 8.04944L9.00078 10.4578C9.61719 11.1314 11.3353 13.0097 11.3353 13.0097C11.3353 13.0097 10.6056 11.5173 9.87278 10.015L9.13524 8.50215C8.78201 7.77884 9.03498 6.88371 9.71424 6.45233C10.3935 6.02095 11.309 6.22384 11.7414 6.9142L13.1455 9.15582L14.5116 11.336L16.3645 14.293L10.0639 14.293C10.0639 14.293 2.4427 14.8082 1.50346 14.8082Z"/>
            </svg>
            Baixar Marcão para Android
          </a>

          <p className="mt-4 text-xs text-text-muted font-mono uppercase tracking-widest">
            Disponível exclusivamente para Android
          </p>
        </motion.div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img src="/images/logosite.jpeg" alt="Marcão AI" className="h-8 w-auto rounded-md group-hover:scale-105 transition-transform duration-300 object-contain" />
            </a>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center items-center gap-4 text-xs text-text-muted">
              {FOOTER_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <a href="/politicas" className="hover:text-white transition-colors">Privacidade</a>
              <a href="/politicas#termos" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="/politicas#lgpd" className="hover:text-white transition-colors">LGPD</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-surface-border/50 text-center">
            <p className="text-xs text-text-muted font-mono">
              © {new Date().getFullYear()} Marcão AI. Todos os direitos reservados.
              Desenvolvido com IA para transformar vidas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
