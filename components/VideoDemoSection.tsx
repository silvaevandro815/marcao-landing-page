"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function VideoDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section id="demo" className="relative py-24 bg-surface-black overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[400px] bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span className="text-xs font-mono font-semibold text-brand-lime uppercase tracking-widest">
              Ação na Prática
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
            Veja a <span className="gradient-text-lime">Inteligência Artificial</span> em Ação.
          </h2>
          <p className="text-text-secondary text-lg">
            Marcão não é um robô de respostas prontas. É uma IA capaz de analisar fotos do seu físico, 
            entender seu contexto, adaptar treinos à sua rotina e te cobrar nos momentos mais difíceis.
          </p>
        </motion.div>

        {/* Silicon Valley Style Mobile Mockup */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-lime via-brand-cyan to-brand-orange rounded-[44px] blur-lg opacity-30 animate-pulse" />
          
          <div className="relative border-[6px] border-[#1f2937] bg-black rounded-[40px] shadow-2xl p-1 overflow-hidden sm:w-[320px] w-[280px]">
            {/* Dynamic Island / Camera Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-between px-2 shadow-inner">
               <div className="w-2 h-2 bg-[#1a1a1a] rounded-full" />
               <div className="w-3 h-3 bg-[#0f0f0f] rounded-full border border-[#2a2a2a] relative">
                 <div className="absolute inset-0 m-auto w-1 h-1 bg-blue-900/40 rounded-full" />
               </div>
            </div>

            {/* Video Container */}
            <div className="relative rounded-[32px] overflow-hidden bg-[#0b1419] h-[580px]">
              <video
                ref={videoRef}
                src="/videos/videoSite.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            
            {/* Phone buttons Mock */}
             <div className="absolute top-24 -right-1.5 w-1 h-12 bg-[#2a2a2a] rounded-l-md" />
             <div className="absolute top-24 -left-1.5 w-1 h-8 bg-[#2a2a2a] rounded-r-md" />
             <div className="absolute top-36 -left-1.5 w-1 h-12 bg-[#2a2a2a] rounded-r-md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
