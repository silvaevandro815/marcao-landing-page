"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, ScanEye, Target, Sunrise, HeartPulse, Trophy, CalendarDays, MapPin } from "lucide-react";

const FEATURES = [
  {
    icon: <Brain className="w-6 h-6" />,
    color: "lime",
    badge: "Dashboard do Parceiro",
    title: "Você Vê Tudo. Sem Nenhum Aluno Escapar.",
    description:
      "Dashboard exclusivo para o parceiro com visão completa de cada aluno: sono, passos, treinos, alertas de saúde e engajamento. Nunca mais perca um aluno sem perceber que ele estava some.",
    bullets: ["Painel de alunos ativos e inativos", "Alertas de sono ruim e inatividade +3 dias", "Ranking semanal por performance"],
  },
  {
    icon: <ScanEye className="w-6 h-6" />,
    color: "orange",
    badge: "Vision AI",
    title: "Análise de Foto do Aluno. Você Avalia. A IA Documenta.",
    description:
      "O Marcão solicita foto de frente e costas de cada aluno a cada 15 dias. Compara, avalia postura e evolução — e entrega o feedback técnico direto no WhatsApp do aluno, liberando seu tempo.",
    bullets: ["Foto de frente + costas a cada 15 dias por aluno", "Feedback técnico de postura e evolução automático", "Comparação visual entre períodos documentada"],
  },
  {
    icon: <Target className="w-6 h-6" />,
    color: "cyan",
    badge: "Calibração Científica",
    title: "Cada Aluno Tem Sua Meta Personalizada. Automática.",
    description:
      "O Marcão gera metas mensais calibradas para cada aluno com base no histórico real — sem trabalho seu. Do sedentário ao atleta, em 7 modalidades. Você cuida da estratégia, a IA executa.",
    bullets: ["7 esportes × 5 níveis = 35 calibrações por aluno", "Metas em km, sessões, passos ou PRs", "Evolui conforme o progresso do aluno"],
  },
  {
    icon: <Sunrise className="w-6 h-6" />,
    color: "lime",
    badge: "Check-in Diário 07h",
    title: "Todo Dia às 7h o Marcão Acorda Cada Aluno Seu.",
    description:
      "Check-in diário automático no WhatsApp de cada aluno — sem você precisar fazer nada. Ele sabe o que cada um fez ontem, cobra como treinador e mantém o engajamento alto entre suas sessões.",
    bullets: ["Relatório diário personalizado por aluno", "Cobrança automática entre suas sessões presenciais", "Você é avisado quando o aluno não responde"],
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    color: "orange",
    badge: "Modo Recuperação",
    title: "Aluno Doente? A IA Já Sabe e Gerencia Sozinha.",
    description:
      "Gripe, lesão ou ciclo menstrual? O Marcão pausa a cobrança, entra em modo recuperação e te alerta sobre o aluno. Você é notificado e aparece na hora certa para mostrar que se importa.",
    bullets: ["Reconhece doença, lesão e ciclo menstrual", "Alerta o parceiro sobre o aluno em recuperação", "Retoma treino no ritmo certo quando o aluno melhora"],
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    color: "cyan",
    badge: "Retenção Anti-Churn",
    title: "Aluno Inativo 3 Dias? Você Recebe o Alerta. Agora.",
    description:
      "O maior motivo de cancelamento de academia é o sumiço do aluno sem ninguém perceber. O Marcão detecta inatividade em 72h e te avisa para você intervir antes que seja tarde demais.",
    bullets: ["Alerta automático após 3 dias sem treino", "Relatório de risco de cancelamento por aluno", "Ação proativa: o parceiro recebe contexto completo"],
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    color: "lime",
    badge: "Programação Inteligente",
    title: "Escalabilidade Real: Uma IA Atendendo Todos Seus Alunos.",
    description:
      "O Marcão opera como uma extensão sua. Cada aluno tem sua agenda, nível e objetivos respeitados automaticamente. Você pode crescer sua carteira sem perder qualidade no acompanhamento.",
    bullets: ["Programação A/B/C configurável por aluno", "Dias de descanso respeitados automaticamente", "Acompanha dezenas de alunos sem perder personalização"],
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    color: "orange",
    badge: "Radar de Eventos",
    title: "Eventos Esportivos Regionais Para Motivar Seus Alunos.",
    description:
      "Toda semana o Marcão pesquisa eventos locais — corridas, crossfit, artes marciais — e avisa seus alunos no WhatsApp. Mais engajamento, mais motivação, mais retenção na sua academia.",
    bullets: ["Busca inteligente por cidade e modalidade do aluno", "Aviso toda semana com link de inscrição", "Aumenta o engajamento e senso de comunidade"],
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
            <span className="gradient-text-lime">mede</span>,<br />
            Parceiro que{" "}
            <span className="gradient-text-orange">scala.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Oito módulos de IA trabalhando juntos para monitorar, motivar e reter seus alunos.
            Automaticamente. Sem você precisar fazer nada entre as sessões.
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
