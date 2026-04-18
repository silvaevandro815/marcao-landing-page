"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useUTM } from "@/hooks/useUTM";

const WA_LINK = "https://wa.me/5532984138183?text=Oi%20Marc%C3%A3o!%20Quero%20conhecer%20o%20coaching%20com%20IA.";

/* ── Placeholder WhatsApp Chat (hero visual) ── */
const CHAT_MESSAGES = [
  { from: "marcao", text: "🔥 Fala, Campeão! É dia 1. Seu desafio de ABRIL chegou.", delay: 0 },
  { from: "marcao", text: "💪 Meta personalizada: 50KM de corrida este mês. Com base no seu histórico de intermediário. Aceita?", delay: 0.4 },
  { from: "user", text: "ACEITO 🔥", delay: 0.9 },
  { from: "marcao", text: "✅ Registrado! Bom lembrar: são ~12km por semana. VOCÊ CONSEGUE.", delay: 1.3 },
];

function StatBadge({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
      className="glass-card rounded-2xl px-4 py-3 flex flex-col gap-0.5"
    >
      <span className={`font-display font-black text-2xl lg:text-3xl tracking-tight ${color}`}>{value}</span>
      <span className="text-xs text-text-secondary font-medium">{label}</span>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chatIndex, setChatIndex] = useState(0);
  const { getWhatsAppCTA } = useUTM();

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Removemos o opacity transform no hero slider, mantendo tudo 100% visível enquanto o usuário rola
  const ySpring = useSpring(y, { stiffness: 80, damping: 20 });

  // Animate chat messages
  useEffect(() => {
    if (chatIndex >= CHAT_MESSAGES.length) return;
    const timer = setTimeout(() => {
      setChatIndex((i) => i + 1);
    }, CHAT_MESSAGES[chatIndex]?.delay * 1000 + 600);
    return () => clearTimeout(timer);
  }, [chatIndex]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden aurora-bg bg-grid"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#39FF14]/15 rounded-full blur-[120px] animate-aurora pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/15 rounded-full blur-[120px] animate-aurora pointer-events-none" style={{ animationDelay: "4s" }} />

      {/* Circuit lines decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M0 450 L200 450 L250 400 L400 400" stroke="url(#lime-line)" strokeWidth="1" />
          <path d="M1440 300 L1200 300 L1150 350 L1000 350" stroke="url(#orange-line)" strokeWidth="1" />
          <circle cx="250" cy="400" r="4" fill="#39FF14" opacity="0.6"/>
          <circle cx="1150" cy="350" r="4" fill="#FF6B00" opacity="0.6"/>
          <path d="M0 650 L150 650 L200 600 L300 600 L350 650 L500 650" stroke="url(#lime-line)" strokeWidth="0.5" />
          <defs>
            <linearGradient id="lime-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#39FF14" stopOpacity="0" />
              <stop offset="50%" stopColor="#39FF14" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#39FF14" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orange-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        style={{ y: ySpring }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/5">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
                  IA de Elite · WhatsApp
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight"
            >
              <span className="text-white">O PERSONAL</span>
              <br />
              <span className="gradient-text-lime text-glow-lime">QUE NÃO</span>
              <br />
              <span className="text-white">ACEITA</span>
              <br />
              <span className="gradient-text-orange">DESCULPA.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-text-secondary text-lg lg:text-xl max-w-lg leading-relaxed"
            >
              Marcão é uma IA de coaching com agressividade tática e ciência real.
              Desafios personalizados, análise de treino por foto e{" "}
              <span className="text-white font-semibold">cobrança honesta</span> — direto no seu WhatsApp, 24 horas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 items-start"
            >
              <div className="flex flex-col gap-2">
                <a
                  href="https://api.marcaopersonal.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-lime to-[#2ecc71] text-black font-extrabold text-base shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(57,255,20,0.6)]"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414C17.523 15.3414 16.2797 12.8797 15.023 10.429L14.7336 9.84531L13.8436 8.04944C13.5682 7.49348 12.8193 7.42171 12.4497 7.9157L11.5303 9.14441L10.4682 10.5638L9.00627 12.5186L7.54432 14.4735H17.523C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM21.9961 14.8082C21.9961 14.8082 20.8926 12.597 19.8222 10.4526L18.7397 8.28312C18.4231 7.64866 17.2023 7.50294 16.7022 8.04944L14.4988 10.4578C13.8824 11.1314 12.1643 13.0097 12.1643 13.0097C12.1643 13.0097 12.894 11.5173 13.6268 10.015L14.3644 8.50215C14.7176 7.77884 14.4646 6.88371 13.7853 6.45233C13.106 6.02095 12.1906 6.22384 11.7582 6.9142L10.3541 9.15582L8.98801 11.336L7.13506 14.293L13.4357 14.293C13.4357 14.293 21.0569 14.8082 21.9961 14.8082ZM5.97657 15.3414C5.97657 15.3414 7.21989 12.8797 8.47657 10.429L8.76597 9.84531L9.65597 8.04944C9.93144 7.49348 10.6803 7.42171 11.0499 7.9157L11.9693 9.14441L13.0314 10.5638L14.4933 12.5186L15.9553 14.4735H5.97657C5.97657 15.3414 5.97657 15.3414 5.97657 15.3414ZM1.50346 14.8082C1.50346 14.8082 2.60699 12.597 3.67735 10.4526L4.75988 8.28312C5.07644 7.64866 6.29729 7.50294 6.79737 8.04944L9.00078 10.4578C9.61719 11.1314 11.3353 13.0097 11.3353 13.0097C11.3353 13.0097 10.6056 11.5173 9.87278 10.015L9.13524 8.50215C8.78201 7.77884 9.03498 6.88371 9.71424 6.45233C10.3935 6.02095 11.309 6.22384 11.7414 6.9142L13.1455 9.15582L14.5116 11.336L16.3645 14.293L10.0639 14.293C10.0639 14.293 2.4427 14.8082 1.50346 14.8082Z"/>
                  </svg>
                  Baixar para Android
                </a>
                <span className="text-xs text-text-muted text-center w-full max-w-[280px]">
                  Aplicativo disponível exclusivamente para smartphones Android.
                </span>
              </div>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-surface-border text-text-secondary hover:border-brand-lime/40 hover:text-white font-semibold text-base transition-all duration-300 h-14"
              >
                Como Funciona
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>

            {/* Credibility micro-copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-1.5 text-xs text-text-muted font-mono"
            >
              <svg className="w-3.5 h-3.5 text-brand-lime flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Sem fidelidade · Cancele quando quiser · Sem mensalidade escondida
            </motion.p>

            {/* Social Proof Mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex -space-x-2">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/46.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                  "https://randomuser.me/api/portraits/men/62.jpg",
                ].map((avatar, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-surface-black flex items-center justify-center bg-surface-dark overflow-hidden">
                    <img src={avatar} alt="User avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">+247 alunos ativos</div>
                <div className="text-xs text-text-secondary">sendo cobrados agora mesmo 🔥</div>
              </div>
            </motion.div>
          </div>

          {/* Right: WhatsApp Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 80 }}
            className="relative flex justify-center animate-float"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-brand-lime/10 blur-3xl rounded-full scale-75" />

            {/* Phone Frame */}
            <div className="relative w-72 sm:w-80">
              {/* Phone shell */}
              <div className="relative bg-[#111] rounded-[42px] p-3 shadow-2xl border border-white/10">
                {/* Screen */}
                <div className="bg-[#0b1419] rounded-[34px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-[#0b1419] px-5 pt-3 pb-1 flex justify-between items-center">
                    <span className="text-[10px] text-white font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-white rounded-sm" />
                      <div className="w-3 h-1.5 bg-white/50 rounded-sm" />
                    </div>
                  </div>

                  {/* WhatsApp Header */}
                  <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                    <div className="relative">
                      <img src="/images/fotoperfil.jpeg" alt="Marcão" className="w-9 h-9 rounded-full object-cover" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#1f2c34]" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Marcão AI 🤖</div>
                      <div className="text-xs text-[#8696a0]">online agora</div>
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="bg-[#0b1419] px-3 py-4 flex flex-col gap-2.5 min-h-[320px]">
                    {/* Date chip */}
                    <div className="flex justify-center">
                      <span className="text-[10px] text-[#8696a0] bg-[#182229] px-3 py-1 rounded-full">Hoje · 07:00</span>
                    </div>

                    {CHAT_MESSAGES.slice(0, chatIndex).map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex flex-col gap-0.5 ${msg.from === "user" ? "items-end" : "items-start"}`}
                      >
                        <div className={msg.from === "marcao" ? "whatsapp-bubble-in" : "whatsapp-bubble-out"}>
                          <p className="text-[11px] text-white leading-relaxed">{msg.text}</p>
                          <p className="text-[9px] text-[#8696a0] mt-1 text-right">
                            {msg.from === "user" ? "✓✓" : ""} {9 + i}:0{i}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    {chatIndex < CHAT_MESSAGES.length && chatIndex > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="whatsapp-bubble-in flex gap-1 items-center px-3 py-2"
                      >
                        {[0,1,2].map(i => (
                          <motion.span key={i} className="w-1.5 h-1.5 bg-[#8696a0] rounded-full"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Input bar */}
                  <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-2">
                    <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2">
                      <span className="text-[11px] text-[#8696a0]">Mensagem...</span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-surface-border pt-10"
        >
          <StatBadge value="100%" label="Exclusivo Android" color="text-brand-lime" />
          <StatBadge value="35+" label="Modalidades & Níveis Calibrados" color="text-brand-orange" />
          <StatBadge value="100%" label="Personalizado ao seu histórico" color="text-brand-cyan" />
          <StatBadge value="Zero" label="Desculpas aceitas" color="text-white" />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-text-muted flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-brand-lime rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
