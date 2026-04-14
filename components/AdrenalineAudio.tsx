"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AdrenalineAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    // Deixamos um volume mais brando (8%) para não enjoar, mas ainda manter o clima de adrenalina
    audio.volume = 0.08;
    
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.warn("Navegador bloqueou o Autoplay:", err);
        });
      }
    };

    // Navegadores modernos permitem iniciar música após qualquer pequeno gesto (toque, clique ou tecla)
    // O Scroll puro pode não funcionar em Safari, então focamos em cliques e toques.
    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (audioRef.current.muted) {
      audioRef.current.muted = false;
      setIsMuted(false);
      
      // Se não estava tocando ainda (ex: bloqueado ou pausado), tentar dar play
      if (!isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
        setHasInteracted(true);
      }
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/adrenaline.mp3"
        loop
        preload="none" /* Garante peso ZERO no Speed do Google até a hora de tocar */
      />
      
      {/* Widget flutuante de som */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Evita acionar o click global se for o primeiro toque
          toggleMute();
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full glass-card border border-surface-border/50 bg-[#0A1628]/80 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.1)] transition-transform hover:scale-105 active:scale-95 group"
        aria-label="Alternar Trilha Sonora"
      >
        {isMuted || !isPlaying ? (
          <>
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-white transition-colors" />
            <span className="text-[10px] font-mono text-text-muted group-hover:text-white transition-colors hidden sm:inline">🎵 Modo Treino</span>
          </>
        ) : (
          <div className="relative flex items-center justify-center gap-2">
            {/* Efeito de pulso para o som ativado */}
            <span className="absolute w-5 h-5 rounded-full bg-brand-lime opacity-30 animate-ping" />
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-lime relative z-10" />
            <span className="text-[10px] font-mono text-brand-lime hidden sm:inline">Pausar Música</span>
          </div>
        )}
      </button>
    </>
  );
}
