"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, ScanEye, Target, Sunrise, HeartPulse, Trophy, CalendarDays, MapPin } from "lucide-react";

const FEATURES = [
  {
    icon: <Brain className="w-6 h-6" />,
    color: "lime",
    badge: "Anti-Alucinação",
    title: "Treino Blindado Contra Falhas",
    description:
      "Marcão nunca inventa progresso. Toda mensagem é baseada nos seus dados reais — km rodados, sessões completadas, check-ins feitos. Zero papo de bot genérico.",
    bullets: ["Dados verificados antes de cada mensagem", "Nunca elogia quando você não treinou", "Histórico completo vira contexto real"],
  },
  {
    icon: <ScanEye className="w-6 h-6" />,
    color: "orange",
    badge: "Vision AI",
    title: "Análise Visual do Seu Progresso",
    description:
      "Manda a foto do espelho, do treino ou do prato — Marcão analisa com IA de visão computacional. Feedback técnico real sobre postura, composição e evolução.",
    bullets: ["Análise quinzenal de fotos frente/costas", "Feedback de postura em exercícios", "Comparação evolutiva visual"],
  },
  {
    icon: <Target className="w-6 h-6" />,
    color: "cyan",
    badge: "35 Calibrações",
    title: "Desafios que Fazem Sentido pra Você",
    description:
      "Corredor? 50km/mês. Musculação? 16 sessões + 2 PRs. Sedentário? Começamos por 10km. A meta é científica, baseada no SEU nível — nem fácil demais, nem impossível.",
    bullets: ["7 esportes × 5 níveis = 35 combinações", "Metas em km, sessões, passos ou PRs", "Evolui conforme seu streak cresce"],
  },
  {
    icon: <Sunrise className="w-6 h-6" />,
    color: "lime",
    badge: "Morning Check",
    title: "Coaching às 7h — Todo Dia. Sem Falta.",
    description:
      "Todo dia de manhã o Marcão aparece no WhatsApp com seu relatório: meta do mês, o que você fez ontem, dias de treino restantes e qual é o próximo passo.",
    bullets: ["Relatório diário com dados do mês", "Cobra como treinador, não como bot", "Sabe quando é dia de descanso programado"],
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    color: "orange",
    badge: "Saúde Contextual",
    title: "Ele Sabe Quando Você Está Mal",
    description:
      "Gripe? Lesão? Ciclo menstrual? Marcão entende e pausa a cobrança. Vira modo recuperação: dicas de descanso, hidratação, dieta anti-inflamatória. Volta quando você estiver bem.",
    bullets: ["Estados: doente, lesionado, ciclo menstrual", "Previsão de recuperação automática", "Retoma o desafio com você quando melhorar"],
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    color: "cyan",
    badge: "Desafio Mensal",
    title: "Meta do Mês que Disperta Adrenalina",
    description:
      "No dia 1 de cada mês chega o desafio personalizado com tom épico. Você aceita ou recusa. Se aceitar, o Marcão monitora e cobra com a cadência certa até o último dia.",
    bullets: ["LLM gera o desafio com texto motivacional", "Aceitar/Recusar via WhatsApp", "Nudges de progresso durante o mês"],
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    color: "lime",
    badge: "Programação Inteligente",
    title: "Agenda de Treino Que Não Te Abandona",
    description:
      "Você monta sua programação semanal no onboarding. Marcão acompanha, sabe seus dias de treino e seus dias de descanso. Sem cobrar errado, sem ignorar falta.",
    bullets: ["Programação A/B/C configurável", "Dias de descanso respeitados", "Sugestão de ajuste de volume mensal"],
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    color: "orange",
    badge: "Eventos & Comunidade",
    title: "Encontra Eventos do Seu Esporte na Sua Cidade",
    description:
      "Toda semana o Marcão pesquisa eventos esportivos locais — corridas, competições de crossfit, aulas abertas de artes marciais — e te avisa no WhatsApp.",
    bullets: ["Busca inteligente por cidade e esporte", "Enviado todo domingo", "Link de inscrição já incluso"],
  },
];

const colorMap: Record<string, { border: string; badge: string; icon: string; glow: string }> = {
  lime: {
    border: "border-brand-lime/20 hover:border-brand-lime/50",
    badge: "text-brand-lime bg-brand-lime/10 border-brand-lime/20",
    icon: "bg-brand-lime/10 text-brand-lime",
    glow: "hover:shadow-lime-glow",
  },
  orange: {
    border: "border-brand-orange/20 hover:border-brand-orange/50",
    badge: "text-brand-orange bg-brand-orange/10 border-brand-orange/20",
    icon: "bg-brand-orange/10 text-brand-orange",
    glow: "hover:shadow-orange-glow",
  },
  cyan: {
    border: "border-brand-cyan/20 hover:border-brand-cyan/50",
    badge: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
    icon: "bg-brand-cyan/10 text-brand-cyan",
    glow: "hover:shadow-cyan-glow",
  },
};

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const c = colorMap[feature.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 cursor-default hover:bg-white/10 ${c.border} ${c.glow} ${
        index === 0 || index === 5 || index === 7 ? "md:col-span-2" : "col-span-1"
      }`}
    >
      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl`}>
          {feature.icon}
        </div>
        <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${c.badge} uppercase tracking-wider`}>
          {feature.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-black text-xl lg:text-2xl text-white leading-tight">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>

      {/* Bullets */}
      <ul className="flex flex-col gap-2 mt-1">
        {feature.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className={`mt-0.5 w-4 h-4 rounded-full ${c.icon} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[8px]">✓</span>
            </span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="funcionalidades" className="relative py-24 lg:py-36 overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-brand-lime/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-brand-lime/50" />
            <span className="text-xs font-mono text-brand-lime uppercase tracking-widest">Funcionalidades</span>
            <div className="w-8 h-px bg-brand-lime/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            Tecnologia que{" "}
            <span className="gradient-text-lime">sente</span>,<br />
            Coach que{" "}
            <span className="gradient-text-orange">cobra</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Oito módulos de IA trabalhando juntos para analisar, motivar e cobrar.
            Sem filtros. Sem desculpas. Só resultado.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
