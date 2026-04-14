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
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={getWhatsAppCTA("Oi Marcão! Quero conhecer o coaching com IA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-brand-lime to-[#2ecc71] text-black font-extrabold text-base shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(57,255,20,0.6)]"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar com o Marcão no WhatsApp
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-surface-border text-text-secondary hover:border-brand-lime/40 hover:text-white font-semibold text-base transition-all duration-300"
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
          <StatBadge value="24/7" label="Disponível no WhatsApp" color="text-brand-lime" />
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
