"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function YoutubeExplanationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="youtube-explanation" className="relative py-24 bg-surface-black overflow-hidden flex flex-col items-center border-t border-surface-border">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[400px] bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="mb-12 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
              Conhecendo o Marcão
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
            Como Funciona o Seu <span className="gradient-text-lime">Novo Treinador</span>.
          </h2>
          <p className="text-text-secondary text-lg">
            Assista ao vídeo e veja na prática por que essa IA é diferente de qualquer aplicativo fitness genérico que você já usou na vida.
          </p>
        </motion.div>

        {/* Video Iframe Container */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 40 }}
           animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
           className="relative w-full aspect-video rounded-3xl sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] group bg-[#0b1419]"
        >
          {/* Subtle glow behind the frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-lime/30 via-transparent to-brand-cyan/30 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <iframe 
             className="absolute top-0 left-0 w-full h-full rounded-2xl sm:rounded-[2.8rem]"
             src="https://www.youtube.com/embed/Ja1ihaQQ5Ic" 
             title="O que o Marcão AI pode fazer por você" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
