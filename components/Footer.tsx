"use client";

import { motion } from "framer-motion";
import LogoSVG from "@/components/LogoSVG";
import { useUTM } from "@/hooks/useUTM";

const APP_LINK = "https://wa.me/5532984138133"; // Reverted to WA root if needed, but getWhatsAppCTA is used. Actually, let's just use the number in the text.

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
            SEUS ALUNOS.<br />
            <span className="gradient-text-lime text-glow-lime">MONITORADOS.</span><br />
            24H.
          </h2>

          <p className="text-text-secondary text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            O Marcão está pronto para ser seu copiloto de IA. Cada aluno monitorado,
            cada alerta entregue na hora certa. Você foca no resultado, a IA cuida do engajamento.
          </p>

          <a
            href={getWhatsAppCTA("Olá! Sou personal trainer e quero ser parceiro Marcão para meus alunos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-lime text-black font-black text-lg hover:shadow-lime-glow transition-all duration-300 hover:scale-105 active:scale-95 animate-glow-pulse"
          >
            <svg className="w-6 h-6 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Quero Ser Parceiro Marcão
          </a>

          <p className="mt-4 text-xs text-text-muted font-mono uppercase tracking-widest">
            WhatsApp: +55 (32) 98413-8133 · Para Personals e Academias
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
              Desenvolvido com IA para transformar academias e personals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
