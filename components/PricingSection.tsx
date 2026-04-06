"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useUTM } from "@/hooks/useUTM";

const WA_LINK = "https://wa.me/5532984138183?text=Oi%20Marc%C3%A3o!%20Quero%20conhecer%20o%20coaching%20com%20IA.";

const INCLUDES = [
  "✅ Onboarding completo (21 passos, 7 modalidades)",
  "✅ Desafio mensal personalizado com tom épico",
  "✅ Check-in diário às 07h — sem falta",
  "✅ Análise de foto quinzenal (Vision AI)",
  "✅ Feedback de postura em exercícios",
  "✅ Modo recuperação (lesão/doença/ciclo)",
  "✅ Eventos esportivos regionais toda semana",
  "✅ Dashboard web personalizado",
  "✅ Compatível com Apple Watch, Garmin e Galaxy Watch",
  "✅ Anti-Alucinação — dados reais, sempre",
  "✅ RAG Memory — te conhece de verdade",
  "✅ LGPD Compliant — seus dados protegidos",
];

const FAQS = [
  { q: "Preciso baixar algum app?", a: "Não. 100% no WhatsApp. Sem instalação, sem cadastro em plataforma." },
  { q: "Posso cancelar quando quiser?", a: "Sim, sem fidelidade e sem burocracia. É só mandar mensagem." },
  { q: "Funciona para iniciantes?", a: "Sim. O onboarding identifica seu nível atual e o Marcão calibra tudo para você." },
];

export default function PricingSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });
  const { getWhatsAppCTA } = useUTM();

  return (
    <section id="planos" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-dark pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-lime/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-brand-lime/50" />
            <span className="text-xs font-mono text-brand-lime uppercase tracking-widest">Plano</span>
            <div className="w-8 h-px bg-brand-lime/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white"
          >
            Um preço.{" "}
            <span className="gradient-text-lime">Tudo incluso.</span>
            <br />Zero desculpa.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-4 text-text-secondary text-lg"
          >
            Sem tiers, sem planos confusos. O Marcão completo para todo mundo.
          </motion.p>
        </div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-card rounded-3xl border border-brand-lime/40 ring-1 ring-brand-lime/20 p-8 sm:p-10 overflow-hidden"
        >
          {/* Glow top-right */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-lime/8 rounded-full blur-3xl pointer-events-none" />



          <div className="grid md:grid-cols-2 gap-10 items-start pt-4">
            {/* Left: Price + CTA */}
            <div className="flex flex-col gap-6">
              {/* Price */}
              <div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-sm text-text-muted font-mono">R$</span>
                  <span className="font-display font-black text-7xl sm:text-8xl text-white leading-none tracking-tighter">
                    49
                    <span className="text-5xl">,90</span>
                  </span>
                  <span className="text-text-muted text-base mb-2">/mês</span>
                </div>
                <p className="text-xs text-text-muted font-mono">
                  ≈ R$ 1,66/dia · Menos que um café
                </p>
              </div>

              {/* Comparison anchor */}
              <div className="glass-card rounded-2xl border border-surface-border p-4">
                <p className="text-xs text-text-secondary mb-2 font-mono uppercase tracking-wide">Comparativo de custo</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { label: "Personal trainer presencial", price: "R$ 800+/mês", cross: true },
                    { label: "Academia + suplemento básico", price: "R$ 250+/mês", cross: true },
                    { label: "🔥 Marcão AI — completo", price: "R$ 49,90/mês", cross: false },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center text-xs">
                      <span className={row.cross ? "text-text-muted line-through" : "text-brand-lime font-bold"}>
                        {row.label}
                      </span>
                      <span className={row.cross ? "text-text-muted line-through" : "text-brand-lime font-bold"}>
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={getWhatsAppCTA("Oi Marcão! Quero assinar o plano e aceitar meu desafio. Onde pago os 49,90?")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer group flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-brand-lime text-black font-black text-base hover:shadow-lime-glow transition-all duration-300 hover:scale-105 active:scale-95 animate-glow-pulse"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Assinar Agora — R$ 49,90/mês
              </a>

              <p className="text-center text-xs text-text-muted">
                🔒 Pagamento seguro · ↩️ Cancel quando quiser · 📱 100% no WhatsApp
              </p>
            </div>

            {/* Right: Features list */}
            <div>
              <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">O que está incluso</p>
              <ul className="flex flex-col gap-2.5">
                {INCLUDES.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-sm text-text-secondary leading-relaxed"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <p className="text-center text-xs font-mono text-text-muted uppercase tracking-widest mb-6">
            Perguntas Frequentes
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl border border-surface-border p-5">
                <p className="text-sm font-bold text-white mb-2">{faq.q}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
