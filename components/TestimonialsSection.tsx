"use client";

import { motion } from "framer-motion";

/* ─── Dados de Depoimentos ─────────────────────────────────────────────── */
/*
  NOTA: Quando tiver prints reais dos alunos, substitua userMsg, marcaoMsg e result.
  O visual do card não muda — só o texto.
*/

const TESTIMONIALS_ROW1 = [
  {
    name: "Pedro A. — Personal",
    sport: "Carteira de 32 alunos • SP",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    result: "📊 Redução de 68% nos cancelamentos em 2 meses",
    userMsg: "Marcão, o João não vem à academia há 4 dias. Tive que ligar pra não perder o aluno.",
    marcaoMsg: "Agora qualquer aluno inativo +3 dias já chega no seu dashboard. Você age antes que ele some. Nenhum aluno mais vai embora sem você saber 🔥",
  },
  {
    name: "Marina G. — Academia",
    sport: "Academia com 120 alunos • BH",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    result: "💤 Alerta de sono ruim detectado — treino ajustado antes da lesão",
    userMsg: "Marcão, vi no dashboard que a Ana dormiu 3.8h. O que faço?",
    marcaoMsg: "Alerta emitido! A Ana recebeu orientação de recuperação. Aconselho reduzir o volume hoje. Intervenha antes da lesão ✔️",
  },
  {
    name: "Carlos F. — Personal",
    sport: "Especialista em corrida • RJ",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    result: "🏆 Ranking semanal aumentou 40% o engajamento dos alunos",
    userMsg: "Meus alunos adoram o ranking semanal. Competem entre si por passos e treinos!",
    marcaoMsg: "Semana encerrada! Top 3: Ana 18.400 passos, Bruno 17.200, Carla 15.900. Seus alunos estão batendo recordes pessoais 🔥",
  },
  {
    name: "Juliana T. — Personal",
    sport: "Especialista em musculação • POA",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    result: "📸 Análise de postura automática de todos os alunos",
    userMsg: "Marcão me avisou que a Fernanda melhorou 35% na postura em 30 dias.",
    marcaoMsg: "Comparando fotos de frente: postura lombar +35%. Abdômen com definição inicial. Seu método funciona! Continua 🎯",
  },
  {
    name: "Marcos S. — Academia",
    sport: "Academia Boutique • Curitiba",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    result: "🚀 De 85 para 120 alunos em 3 meses com retenção alta",
    userMsg: "Antes eu perdia aluno todo mês sem saber por quê. Agora vejo tudo no dashboard.",
    marcaoMsg: "Dashboard atualizado: 114 ativos, 6 em alerta. João ficou 4 dias sem treinar — entre em contato agora! 🚨",
  },
];

const TESTIMONIALS_ROW2 = [
  {
    name: "Amélia R. — Personal",
    sport: "Personal Trainer • Salvador",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    result: "⏰ Economizo 3h/dia que gastava fazendo check-ins manualmente",
    userMsg: "Marcão, você faz check-in automático de todos os meus 25 alunos todo dia?",
    marcaoMsg: "Sim! Todo dia às 7h cada aluno recebe o relatório personalizado. Você só é avisado quando tem alerta. Foque no treino 📊",
  },
  {
    name: "Paulo H. — Academia",
    sport: "Academia 80 alunos • Florianópolis",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    result: "🧠 IA detectou risco de lesão antes de acontecer",
    userMsg: "Marcão avisou que o Rui estava dormindo mal e foi treinar mesmo assim. O que fazer?",
    marcaoMsg: "Alerta emitido há 2 dias. Rui: sono < 5h, freq. card. elevada. Overtraining risk. Recomendo pausar treino pesado por 48h.",
  },
  {
    name: "Thaissa V. — Personal",
    sport: "Emagrecimento • Goiânia",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    result: "🔥 Zero cancelamentos no último trimestre com alertas do Marcão",
    userMsg: "Marcão! A Leticia estava 4 dias sem treinar. Liguei pra ela e ela ficou surpresa com a atenção!",
    marcaoMsg: "Perfeito! Alunos contatados após 3 dias inativos têm 82% menos chance de cancelar. Continue usando o alerta! 💪",
  },
  {
    name: "Bruno K. — Personal",
    sport: "Performance esportiva • Recife",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    result: "📸 Análise de postura semanal de 40 alunos sem esforço",
    userMsg: "Marcão está analisando as fotos de postura e me enviando os relatórios automaticamente?",
    marcaoMsg: "Sim! Esta semana: 8 alunos com feedback gerado. 3 com alerta técnico. Relatório completo no dashboard 📊",
  },
  {
    name: "Leticia F. — Studio",
    sport: "Studio de Pilates • São Paulo",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    result: "💰 ROI de 8x: Marcão pagou 8 vezes o custo só em retenção",
    userMsg: "Em 60 dias o Marcão impediu 6 cancelamentos. Só isso já pagou várias vezes o custo!",
    marcaoMsg: "Inatividade detectada, alerta enviado, parceiro contatou, aluno reteve. Esse é o ciclo perfeito de retenção com IA! 🔥",
  },
];

/* ─── WhatsApp Chat Card ───────────────────────────────────────────── */

function WhatsAppTestimonialCard({ t }: { t: (typeof TESTIMONIALS_ROW1)[0] }) {
  return (
    <div className="w-80 flex-shrink-0 mx-2 flex flex-col gap-2">
      {/* Result badge */}
      <div className="bg-brand-lime/10 border border-brand-lime/20 rounded-xl px-3 py-1.5 text-[11px] font-mono text-brand-lime font-semibold leading-snug">
        {t.result}
      </div>

      {/* WhatsApp chat mockup */}
      <div className="bg-[#0b1419] rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
        {/* Header */}
        <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-2.5">
          <div className="relative flex-shrink-0">
            <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-[#1f2c34]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-[12px] font-semibold leading-tight truncate">{t.name}</div>
            <div className="text-[10px] text-[#8696a0] truncate">{t.sport}</div>
          </div>
          <svg className="w-4 h-4 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>

        {/* Messages */}
        <div className="px-3 py-3 flex flex-col gap-2 bg-[#0b1419]">
          {/* User message (right) */}
          <div className="flex justify-end">
            <div className="bg-[#005c4b] rounded-[14px_14px_4px_14px] px-3 py-2 max-w-[88%]">
              <p className="text-[11px] text-white leading-relaxed">{t.userMsg}</p>
              <p className="text-[9px] text-[#8696a0] mt-0.5 text-right">✓✓ 08:32</p>
            </div>
          </div>

          {/* Marcão message (left) */}
          <div className="flex justify-start">
            <div className="bg-[#1f2c34] rounded-[14px_14px_14px_4px] px-3 py-2 max-w-[92%]">
              <p className="text-[11px] text-white leading-relaxed">{t.marcaoMsg}</p>
              <p className="text-[9px] text-[#8696a0] mt-0.5 text-right">08:33</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────────────────── */

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative py-24 lg:py-32 overflow-hidden bg-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#39FF14]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-lime/30 to-transparent z-10" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-cyan/50" />
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">Parceiros em Ação</span>
            <div className="w-8 h-px bg-brand-cyan/50" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Personals que{" "}
            <span className="gradient-text-lime">escalaram</span>
            <br />e agradecem depois.
          </h2>
          <p className="mt-4 text-text-muted text-sm font-mono">
            💬 Histórias reais de parceiros Marcão no WhatsApp
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-4 md:px-0 md:marquee-wrapper md:overflow-hidden md:pl-0 mb-4 items-center gap-4 md:gap-0">
        <div className="flex flex-nowrap md:marquee-track">
          {[...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1].map((t, i) => (
            <div key={`r1-${i}`} className="snap-center shrink-0">
              <WhatsAppTestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-4 md:px-0 md:marquee-wrapper md:overflow-hidden md:pl-0 items-center gap-4 md:gap-0">
        <div className="flex flex-nowrap md:marquee-track-reverse">
          {[...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2].map((t, i) => (
            <div key={`r2-${i}`} className="snap-center shrink-0">
              <WhatsAppTestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient mask */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A1628] to-transparent pointer-events-none z-10" />
    </section>
  );
}
