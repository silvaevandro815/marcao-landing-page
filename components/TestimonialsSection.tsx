"use client";

import { motion } from "framer-motion";

const TESTIMONIALS_ROW1 = [
  {
    name: "Rodrigo S.",
    sport: "Corrida • Intermediário",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Nunca pensei que ia receber 'bronca' de um bot. Marcão me ligou na real quando fiquei 3 dias sem registrar nada. Me cobrou, eu corri. Simples assim.",
  },
  {
    name: "Carla M.",
    sport: "Musculação • Avançada",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Quando falei que estava no ciclo, ele pausou tudo. Mandou dicas de recuperação, não me cobrou. No dia 5 retomamos. É o primeiro coach que entende mesmo.",
  },
  {
    name: "Felipe A.",
    sport: "CrossFit • Atleta",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    text: "O desafio de abril era 300 WODs. Parecia loucura, mas o Marcão calibrou pra minha realidade. Bati 287. Melhor performance dos últimos 2 anos.",
  },
  {
    name: "Juliana T.",
    sport: "Yoga • Iniciante",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Mandei foto no espelho no começo do mês, ele analisou minha postura e me deu feedback técnico. No final do mês comparou as duas fotos. Chorei de emoção.",
  },
  {
    name: "Marcos L.",
    sport: "Ciclismo • Avançado",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 5,
    text: "Fui de 150km/mês pra 380km em 3 meses. O check-in das 7h me salvou. Nem nos dias chuvosos eu deixei de pedalar — tinha vergonha do Marcão.",
  },
];

const TESTIMONIALS_ROW2 = [
  {
    name: "Amanda R.",
    sport: "Natação • Intermediária",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
    text: "O Marcão encontrou um evento de natação perto da minha casa. Me inscrevi, fiz meu primeiro campeonato amador. Nunca teria coragem sem ele.",
  },
  {
    name: "Paulo H.",
    sport: "Artes Marciais • Iniciante",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "Quando estava gripado, em vez de me cobrar, mandou menu anti-inflamatório e dicas de descanso. Melhorei em 4 dias. Na semana seguinte voltei mais forte.",
  },
  {
    name: "Thais V.",
    sport: "Corrida • Sedentária → Iniciante",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    text: "Comecei zerada. Minha meta era 10km no primeiro mês. Parecia impossível. Fiz 12. O Marcão comemorou mais do que eu. E no mês seguinte me deu 18km.",
  },
  {
    name: "Bruno K.",
    sport: "Musculação • Elite",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "Bati 4 PRs no mesmo mês. A IA de visão analisou minha barra e me deu feedback de postura. Isso não existe em nenhum app fitness que eu conheço.",
  },
  {
    name: "Leticia F.",
    sport: "CrossFit • Intermediária",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    text: "O Marcão não deixou eu fugir. Quando fiquei dois dias sem registrar, ele veio: 'O mês tá passando. Você aceitou o desafio. Qual é?' Fui treinar na hora.",
  },
];

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-brand-lime" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS_ROW1[0] }) {
  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col gap-3 w-72 flex-shrink-0 mx-2 border border-surface-border hover:border-brand-lime/20 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden bg-surface-dark border border-surface-border/50">
          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-[10px] text-text-muted font-mono">{t.sport}</div>
        </div>
        <div className="ml-auto">
          <StarRating n={t.rating} />
        </div>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">&ldquo;{t.text}&rdquo;</p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-lime/30 to-transparent" />

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
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-4 md:px-0 md:marquee-wrapper md:overflow-hidden md:pl-0 mb-4 items-center gap-4 md:gap-0">
        <div className="flex flex-nowrap md:marquee-track">
          {[...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1].map((t, i) => (
            <div key={`r1-${i}`} className="snap-center shrink-0">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-4 md:px-0 md:marquee-wrapper md:overflow-hidden md:pl-0 items-center gap-4 md:gap-0">
        <div className="flex flex-nowrap md:marquee-track-reverse">
          {[...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2].map((t, i) => (
            <div key={`r2-${i}`} className="snap-center shrink-0">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient mask */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-black to-transparent pointer-events-none" />
    </section>
  );
}
