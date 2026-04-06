"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const CATEGORIES = [
  {
    id: "recommended",
    color: "brand-lime",
    icon: "🟢",
    title: "O Custo-Benefício Supremo",
    badge: "Recomendado",
    brands: "Amazfit, Xiaomi (Mi Band), Redmi Watch.",
    why: "Custam pouco e possuem software de elite (Zepp/Mi Fitness) que integra nativamente com Strava e Google Fit.",
    extraTitle: "A Dúvida de Ouro (iOS):",
    extraDesc: "'Tenho iPhone, posso usar Xiaomi?' SIM! O aplicativo da Xiaomi roda perfeitamente no iPhone, enviando seus treinos para o Strava e os dados de saúde para o Apple Health sem engasgos.",
  },
  {
    id: "premium",
    color: "blue-500",
    icon: "🔵",
    title: "A Elite Nativa",
    badge: "Premium",
    brands: "Apple Watch, Garmin, Samsung Galaxy Watch.",
    why: "São o padrão ouro do mercado. GPS impecável e sensores de precisão clínica. Integração direta, instantânea e sem gambiarras.",
  },
  {
    id: "avoid",
    color: "red-500",
    icon: "🔴",
    title: "O Barato que Sai Caro",
    badge: "Evite",
    brands: "Smartwatches genéricos de baixo custo, QCY, Zeblaze, Colmi.",
    why: "Eles não têm integração oficial com o Strava. Exigem a compra de aplicativos de terceiros (como o Health Sync) para forçar o envio dos dados, e o GPS costuma roubar quilometragem, o que vai fazer o Marcão cobrar você injustamente.",
  },
];

export default function SmartwatchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} id="compatibilidade" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Dark mesh background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-surface-dark" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-lime/3 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-brand-lime/50" />
            <span className="text-xs font-mono text-brand-lime uppercase tracking-widest">O Arsenal do Monstro</span>
            <div className="w-8 h-px bg-brand-lime/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Foco no Treino.{" "}
            <br className="sm:hidden" />
            <span className="gradient-text-lime">Sincronização Inteligente.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-4 text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Você pode deixar o celular em casa na hora de correr. O Marcão puxa seus dados assim que você volta. O fluxo de dados é 100% automático e invisível:
          </motion.p>

          {/* Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-10 mb-6 mx-auto w-fit"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 glass-card rounded-2xl border border-surface-border mx-auto">
              <div className="flex items-center gap-2 text-sm text-white font-medium">
                <span className="text-xl">⌚</span>
                <span className="hidden sm:inline">Relógio (Offline)</span>
              </div>
              <span className="text-surface-border text-lg rotate-90 sm:rotate-0">→</span>
              
              <div className="flex items-center gap-2 text-sm text-white font-medium">
                <span className="text-xl">📱</span>
                <span className="hidden sm:inline">App do Celular</span>
              </div>
              <span className="text-surface-border text-lg rotate-90 sm:rotate-0">→</span>
              
              <div className="flex items-center gap-2 text-sm text-white font-medium">
                <span className="text-xl">☁️</span>
                <span className="hidden md:inline">Strava / Fit</span>
              </div>
              <span className="text-brand-lime text-lg rotate-90 sm:rotate-0">→</span>
              
              <div className="flex items-center gap-2 text-sm text-brand-lime font-black uppercase tracking-wider bg-brand-lime/10 px-3 py-1.5 rounded-lg border border-brand-lime/20">
                <span className="text-xl">🤖</span> Marcão Analisa
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories Grid - Swipeable on mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Categoria 1: Verde */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="snap-center shrink-0 w-[85%] md:w-auto relative glass-card rounded-3xl p-8 flex flex-col gap-6 border border-brand-lime/40 ring-1 ring-brand-lime/20 bg-brand-lime/5 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-lime text-black text-[10px] font-black font-mono uppercase tracking-widest whitespace-nowrap shadow-lime-glow">
              Recomendado
            </div>
            
            <div className="flex items-center gap-3 border-b border-brand-lime/20 pb-4">
              <span className="text-2xl">🟢</span>
              <h3 className="font-display font-black text-xl text-white">O Custo-Benefício Supremo</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-mono text-brand-lime uppercase tracking-widest mb-1.5">Marcas</p>
                <p className="text-white font-medium text-sm">Amazfit, Xiaomi (Mi Band), Redmi Watch.</p>
              </div>

              <div>
                <p className="text-xs font-mono text-brand-lime uppercase tracking-widest mb-1.5">Por que amamos</p>
                <p className="text-text-secondary text-sm leading-relaxed">Custam pouco e possuem software de elite (Zepp/Mi Fitness) que integra nativamente com Strava e Google Fit.</p>
              </div>

              <div className="mt-2 p-4 rounded-xl bg-surface-dark/80 border border-brand-lime/10">
                <p className="text-xs font-mono text-brand-cyan uppercase tracking-widest mb-1.5 line-clamp-1">A Dúvida de Ouro (iOS):</p>
                <p className="text-text-secondary text-xs leading-relaxed"><span className="text-white font-semibold">"Tenho iPhone, posso usar Xiaomi?"</span> SIM! O aplicativo da Xiaomi roda perfeitamente no iPhone, enviando seus treinos para o Strava e os dados de saúde para o Apple Health sem engasgos.</p>
              </div>
            </div>
          </motion.div>

          {/* Categoria 2: Azul */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="snap-center shrink-0 w-[85%] md:w-auto relative glass-card rounded-3xl p-8 flex flex-col gap-6 border border-blue-500/30 hover:border-blue-500/50 bg-blue-500/5 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-400 text-[10px] font-black font-mono uppercase tracking-widest whitespace-nowrap">
              Premium
            </div>
            
            <div className="flex items-center gap-3 border-b border-blue-500/20 pb-4">
              <span className="text-2xl">🔵</span>
              <h3 className="font-display font-black text-xl text-white">A Elite Nativa</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5">Marcas</p>
                <p className="text-white font-medium text-sm">Apple Watch, Garmin, Samsung Galaxy Watch.</p>
              </div>

              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5">Por que amamos</p>
                <p className="text-text-secondary text-sm leading-relaxed">São o padrão ouro do mercado. GPS impecável e sensores de precisão clínica. Integração direta, instantânea e sem gambiarras.</p>
              </div>
            </div>
          </motion.div>

          {/* Categoria 3: Vermelho */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="snap-center shrink-0 w-[85%] md:w-auto relative glass-card rounded-3xl p-8 flex flex-col gap-6 border border-red-500/30 hover:border-red-500/50 bg-red-500/5 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-500 text-[10px] font-black font-mono uppercase tracking-widest whitespace-nowrap">
              Evite
            </div>
            
            <div className="flex items-center gap-3 border-b border-red-500/20 pb-4">
              <span className="text-2xl">🔴</span>
              <h3 className="font-display font-black text-xl text-white">O Barato que Sai Caro</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-1.5">Marcas</p>
                <p className="text-white font-medium text-sm lg:pr-4">Smartwatches genéricos de baixo custo, QCY, Zeblaze, Colmi.</p>
              </div>

              <div>
                <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-1.5">O Problema</p>
                <p className="text-text-secondary text-sm leading-relaxed">Eles não têm integração oficial com o Strava. Exigem a compra de aplicativos de terceiros (como o Health Sync) para forçar o envio dos dados, e o GPS costuma roubar quilometragem, o que vai fazer o Marcão cobrar você injustamente.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
