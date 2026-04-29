"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Dna, Target, Sunrise, TrendingUp } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Fale com o Marcão e Cadastre Sua Academia",
    description:
      "Inicie pelo WhatsApp. Você se cadastra como parceiro, informa os dados da sua academia ou cartão de alunos e recebe acesso ao seu dashboard exclusivo. Processo rápido, sem burocracia.",
    color: "lime",
    detail: "Menos de 10 minutos",
  },
  {
    step: "02",
    icon: <Dna className="w-6 h-6" />,
    title: "Cada Aluno Faz Seu Onboarding pelo WhatsApp",
    description:
      "Você compartilha o link do Marcão com cada aluno. Eles fazem um onboarding guiado de 21 perguntas — nível, esporte, objetivos, agenda e histórico de saúde. Sem cadastro em plataforma extra.",
    color: "orange",
    detail: "Automático para cada aluno",
  },
  {
    step: "03",
    icon: <Target className="w-6 h-6" />,
    title: "A IA Monta o Perfil e a Meta de Cada Aluno",
    description:
      "O Marcão calibra cada aluno automaticamente: nível, modalidade, metas mensais personalizadas. No dia 1 do mês, cada aluno recebe seu desafio — tudo sem você precisar fazer nada.",
    color: "cyan",
    detail: "Personalização automática",
  },
  {
    step: "04",
    icon: <Sunrise className="w-6 h-6" />,
    title: "Marcão Acompanha 24h. Você Recebe os Alertas.",
    description:
      "Todo dia às 7h o Marcão faz check-in com cada aluno. Detecta inatividade, sono ruim e risco de cancelamento. Você recebe alertas no seu dashboard e pode intervir na hora certa.",
    color: "lime",
    detail: "Monitoramento diário",
  },
  {
    step: "05",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Retenção Alta, Alunos Engajados, Academia Crescendo.",
    description:
      "Com o Marcão, cada aluno é acompanhado entre as sessões presenciais. Resultado: mais engajamento, menos cancelamentos e uma base que cresce organicamente com os resultados reais.",
    color: "orange",
    detail: "Resultados mensuráveis",
  },
];

const colorMap: Record<string, { num: string; border: string; icon: string; line: string }> = {
  lime: {
    num: "text-brand-lime border-brand-lime/30 bg-brand-lime/5",
    border: "border-brand-lime/10",
    icon: "bg-brand-lime/10 text-brand-lime",
    line: "bg-brand-lime/20",
  },
  orange: {
    num: "text-brand-orange border-brand-orange/30 bg-brand-orange/5",
    border: "border-brand-orange/10",
    icon: "bg-brand-orange/10 text-brand-orange",
    line: "bg-brand-orange/20",
  },
  cyan: {
    num: "text-brand-cyan border-brand-cyan/30 bg-brand-cyan/5",
    border: "border-brand-cyan/10",
    icon: "bg-brand-cyan/10 text-brand-cyan",
    line: "bg-brand-cyan/20",
  },
};

export default function HowItWorksSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="como-funciona" className="relative py-24 lg:py-36 overflow-hidden bg-transparent">
      {/* background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none z-0" />

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
            Da parceria ao{" "}
            <span className="gradient-text-orange">primeiro aluno monitorado</span>
            <br />
            em menos de 10 minutos.
          </motion.h2>
        </div>

        {/* Dynamic Timeline */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Central Glowing Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-lime via-brand-orange to-brand-cyan opacity-40 shadow-[0_0_15px_rgba(57,255,20,0.5)] z-0 rounded-full" />

          <div className="flex flex-col gap-12 sm:gap-20">
            {STEPS.map((step, i) => {
              const ref = useRef<HTMLDivElement>(null);
              const inView = useInView(ref, { once: true, margin: "-100px" });
              const c = colorMap[step.color];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-center flex-col md:flex-row gap-6 md:gap-0 w-full z-10 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Connecting Node */}
                  <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-[18px] h-[18px] rounded-full bg-[#0A1628] border-2 border-brand-lime flex items-center justify-center shadow-[0_0_10px_rgba(57,255,20,0.8)]">
                      <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 pl-[80px] md:pl-0 ${isEven ? "md:pr-14" : "md:pl-14"}`}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                      
                      <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                        {/* Setup the icon */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${c.num}`}>
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-xs font-mono text-text-muted mb-1">Fase {step.step}</div>
                          <span className="text-[10px] font-mono text-text-secondary px-2 py-0.5 rounded-full border border-surface-border uppercase tracking-widest">
                            {step.detail}
                          </span>
                        </div>
                      </div>

                      <div className="mt-1">
                        <h3 className="font-display font-black text-xl lg:text-2xl text-white mb-2 leading-tight">{step.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            href="https://wa.me/5532984138133?text=Ol%C3%A1!%20Sou%20personal%20trainer%20e%20quero%20ser%20parceiro%20Marc%C3%A3o%20para%20meus%20alunos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-lime to-[#2ecc71] text-black font-extrabold text-lg shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(57,255,20,0.6)]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Quero Ser Parceiro Marcão
          </a>
          <p className="mt-3 text-sm text-text-muted">Sem contrato. Sem mensalidade mínima. Só WhatsApp.</p>
        </motion.div>
      </div>
    </section>
  );
}
