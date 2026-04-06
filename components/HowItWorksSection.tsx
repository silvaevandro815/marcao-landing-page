"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    step: "01",
    icon: "💬",
    title: "Fala com o Marcão no WhatsApp",
    description:
      "Clique no botão e inicie uma conversa. O Marcão te guia por um onboarding de 21 perguntas que mapeiam seu nível, esporte, objetivos, agenda semanal e histórico de saúde.",
    color: "lime",
    detail: "Demora menos de 5 minutos",
  },
  {
    step: "02",
    icon: "🧬",
    title: "IA Monta Seu Perfil de Atleta",
    description:
      "Com seus dados, o Marcão resolve qual dos 35 níveis de calibração te encaixa melhor. Sedentário, iniciante, intermediário, avançado ou atleta — em 7 modalidades diferentes.",
    color: "orange",
    detail: "Personalização automática",
  },
  {
    step: "03",
    icon: "🏆",
    title: "Recebe o Desafio do Mês",
    description:
      "No dia 1, chega a meta calibrada pra você: km rodados, sessões na academia, aulas de artes marciais ou PRs de musculação. A IA gera a mensagem com o tom do Marcão — direto e motivacional.",
    color: "cyan",
    detail: "Todo dia 1 do mês",
  },
  {
    step: "04",
    icon: "🌅",
    title: "Coaching Diário às 7h da Manhã",
    description:
      "Todo dia você acorda com um relatório personalizado: seu progresso no desafio, análise do dia anterior, ritmo necessário para bater a meta e um empurrão sem firulas. Se você não correu nada, ele sabe — e não perdoa.",
    color: "lime",
    detail: "Check-in todo dia",
  },
  {
    step: "05",
    icon: "📈",
    title: "Resultados Rastreáveis, Evolução Real",
    description:
      "Ao longo do mês você manda fotos de treino, registra atividades e o Marcão compila tudo. No fim do mês, você vê sua evolução — e no mês seguinte o desafio fica mais difícil. Isso é progressão.",
    color: "orange",
    detail: "Progresso documentado",
  },
];

const colorMap: Record<string, { num: string; border: string; icon: string; line: string }> = {
  lime: {
    num: "text-brand-lime border-brand-lime/30 bg-brand-lime/5",
    border: "border-brand-lime/10",
    icon: "bg-brand-lime/10",
    line: "bg-brand-lime/20",
  },
  orange: {
    num: "text-brand-orange border-brand-orange/30 bg-brand-orange/5",
    border: "border-brand-orange/10",
    icon: "bg-brand-orange/10",
    line: "bg-brand-orange/20",
  },
  cyan: {
    num: "text-brand-cyan border-brand-cyan/30 bg-brand-cyan/5",
    border: "border-brand-cyan/10",
    icon: "bg-brand-cyan/10",
    line: "bg-brand-cyan/20",
  },
};

export default function HowItWorksSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="como-funciona" className="relative py-24 lg:py-36 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-surface-dark pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lime/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-brand-orange/50" />
            <span className="text-xs font-mono text-brand-orange uppercase tracking-widest">Como Funciona</span>
            <div className="w-8 h-px bg-brand-orange/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            De zero ao{" "}
            <span className="gradient-text-orange">desafio aceito</span>
            <br />
            em 5 minutos.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col gap-0">
          {/* Connector line */}
          <div className="absolute left-[28px] sm:left-[35px] top-12 bottom-12 w-px bg-gradient-to-b from-brand-lime/50 via-brand-orange/30 to-brand-cyan/20 hidden sm:block" />

          {STEPS.map((step, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            const c = colorMap[step.color];

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-6 pb-10 last:pb-0 relative"
              >
                {/* Step number */}
                <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl border ${c.num} flex flex-col items-center justify-center font-display font-black text-base leading-none`}>
                  <span className="text-xs font-mono opacity-60">{step.step}</span>
                  <span className="text-xl">{step.icon}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 glass-card rounded-2xl p-5 border ${c.border}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-black text-lg sm:text-xl text-white leading-tight">{step.title}</h3>
                    <span className="flex-shrink-0 text-[10px] font-mono text-text-muted px-2 py-1 rounded-full border border-surface-border">
                      {step.detail}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/5532984138183?text=Oi%20Marc%C3%A3o!%20Quero%20conhecer%20o%20coaching%20com%20IA."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-lime text-black font-black text-lg hover:shadow-lime-glow transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Começar Agora no WhatsApp
          </a>
          <p className="mt-3 text-sm text-text-muted">Sem app. Sem cadastro. Só WhatsApp.</p>
        </motion.div>
      </div>
    </section>
  );
}
