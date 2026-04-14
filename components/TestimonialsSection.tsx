"use client";

import { motion } from "framer-motion";

/* ─── Dados de Depoimentos ─────────────────────────────────────────────── */
/*
  NOTA: Quando tiver prints reais dos alunos, substitua userMsg, marcaoMsg e result.
  O visual do card não muda — só o texto.
*/

const TESTIMONIALS_ROW1 = [
  {
    name: "Rodrigo S.",
    sport: "Corrida • Intermediário",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    result: "📊 +230km em 3 meses — de 80km para 380km/mês",
    userMsg: "Marcão, bati 380km de ciclismo esse mês. Nem nos dias de chuva parei.",
    marcaoMsg: "380km — bate seu recorde dos últimos 12 meses. Isso é evolução de atleta. Mês que vem: 420km. ACEITA? 🔥",
  },
  {
    name: "Carla M.",
    sport: "Musculação • Avançada",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    result: "💜 Modo Recuperação no ciclo — nenhuma pressão",
    userMsg: "Marcão, tô no ciclo hoje. Não consigo treinar pesado...",
    marcaoMsg: "Entendido. Modo Recuperação ativado 💜 Sem cobrança hoje. Protocolo: descanso + dieta anti-inflamatória. Retomamos quando estiver bem.",
  },
  {
    name: "Felipe A.",
    sport: "CrossFit • Atleta",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    result: "🏆 287 WODs em 1 mês — melhor performance em 2 anos",
    userMsg: "Bati 287 WODs. Parecia impossível esse desafio de 300.",
    marcaoMsg: "287 de 300. 95,6% de execução. Você superou seu histórico de 2 anos. Isso não é acaso — é trabalho. PARABÉNS. 💪",
  },
  {
    name: "Juliana T.",
    sport: "Yoga • Iniciante",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    result: "📸 Melhora de postura visível em 15 dias de análise",
    userMsg: "Mandando minha foto de frente e costas conforme combinado.",
    marcaoMsg: "Comparando com 15 dias atrás: postura lombar +40%. Abdômen com definição inicial. Continue. Próxima análise em 15 dias. 🎯",
  },
  {
    name: "Marcos L.",
    sport: "Ciclismo • Avançado",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    result: "🚴 De 150km/mês para 380km em apenas 3 meses",
    userMsg: "Nem nos dias de chuva eu deixei de pedalar. Tinha vergonha do Marcão.",
    marcaoMsg: "Isso que é comprometimento. 380km esse mês — recorde pessoal dos últimos 12 meses. Próximo mês: 400km. Aceita? 🔥",
  },
];

const TESTIMONIALS_ROW2 = [
  {
    name: "Amanda R.",
    sport: "Natação • Intermediária",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    result: "🏊 Primeiro campeonato — encontrado pelo Marcão",
    userMsg: "Marcão, você me mandou um evento de natação aqui na minha cidade!",
    marcaoMsg: "Campeonato amador, domingo às 9h, a 8km de você. Seu tempo de 1500m melhorou 18% esse mês. Vai lá! 🎽",
  },
  {
    name: "Paulo H.",
    sport: "Artes Marciais • Iniciante",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    result: "🤒 Recuperação de gripe em 4 dias com protocolo do Marcão",
    userMsg: "Tô gripado hoje. Não tem como treinar.",
    marcaoMsg: "Entendido. Treino pausado. Protocolo: gengibre + vitamina C + 9h de sono. Quando estiver bem me avisa. Cuide-se 🙏",
  },
  {
    name: "Thais V.",
    sport: "Corrida • Sedentária → Iniciante",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    result: "🏃‍♀️ De 0 para 12km — começou do zero e superou a meta",
    userMsg: "Marcão! Fiz 12km esse mês! A meta era 10km e eu era sedentária há 2 anos!",
    marcaoMsg: "12km! Superou em 20%. Você era sedentária e bateu isso no mês 1. No mês 2: 18km. Você consegue. 🔥",
  },
  {
    name: "Bruno K.",
    sport: "Musculação • Elite",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    result: "💪 4 PRs no mesmo mês com análise de postura por foto",
    userMsg: "Mandando foto do supino. Quero feedback de postura.",
    marcaoMsg: "Cotovelos 3cm fora do alinhamento. Grip mais fechado. Com esse ajuste você ganha +5kg no PR. Testa amanhã. 📸",
  },
  {
    name: "Leticia F.",
    sport: "CrossFit • Intermediária",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    result: "🔥 Zero faltas em 30 dias — cobrada na hora certa",
    userMsg: "Tá bom Marcão, vou treinar agora.",
    marcaoMsg: "ISSO! O mês tá passando. Você aceitou o desafio. Agora vai — sem desculpa. Te espero com o check-in amanhã às 7h. 💪",
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
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">Hall da Fama</span>
            <div className="w-8 h-px bg-brand-cyan/50" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Quem já foi{" "}
            <span className="gradient-text-lime">cobrado</span>
            <br />e agradeceu depois.
          </h2>
          <p className="mt-4 text-text-muted text-sm font-mono">
            💬 Conversas reais com alunos reais no WhatsApp
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
