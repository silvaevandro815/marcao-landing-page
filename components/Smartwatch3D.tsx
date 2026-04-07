"use client";

import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Float,
  Environment,
  RoundedBox,
  Html,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";

function WatchModel() {
  const { scene } = useGLTF('/models/apple_watch_ultra_2.glb') as any;

  return (
    <group>
      {/* 3D Model of Apple Watch */}
      <primitive object={scene} scale={26} position={[0.0, -0.5, -0.2]} rotation={[0.0, -0.1, 0.0]} />

      {/* Digital UI Display projetada 3D */}
      <Html transform position={[0, -0.1, 0.2]} rotation={[0, -0.1, 0]} distanceFactor={1.3}>
        <div 
          className="flex flex-col justify-between p-3 font-sans overflow-hidden pointer-events-none select-none relative" 
          style={{ 
            width: '135px', 
            height: '290px', 
            background: '#030508', 
            borderRadius: '45px',
            boxShadow: 'inset 0 0 20px rgba(57,255,20,0.05)',
            border: '2px solid rgba(255,255,255,0.03)'
          }}
        >
           {/* Top bar */}
           <div className="flex justify-between items-center text-white/60 text-[10px] px-2 font-mono tracking-wider mt-1">
              <span>10:42</span>
              <div className="flex items-center gap-1.5">
                <span>100%</span>
                <div className="w-3.5 h-1.5 bg-brand-lime rounded-sm shadow-[0_0_8px_rgba(57,255,20,0.5)]" />
              </div>
           </div>
           
           {/* Center Stats */}
           <div className="flex flex-col items-center gap-2 mt-2 mb-auto z-10">
              <div className="px-2.5 py-0.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                <span className="text-[8px] text-brand-lime font-bold tracking-widest uppercase">Marcão Sync</span>
              </div>
              
              <div className="flex items-baseline gap-1 font-black mt-3">
                 <span className="text-[#FF3B30] text-3xl animate-pulse drop-shadow-[0_0_10px_rgba(255,59,48,0.5)]">♥</span>
                 <span className="text-white text-5xl tabular-nums tracking-tighter">126</span>
              </div>
              <span className="text-[#FF3B30] text-[9px] font-mono uppercase tracking-widest -mt-2 opacity-90">BPM Atual</span>
              
              <div className="h-px w-14 bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />
              
              <div className="flex justify-between items-center w-full px-2 mt-1">
                 <div className="flex flex-col items-center bg-white/5 p-2 rounded-xl flex-1 mx-1 border border-white/5">
                    <span className="text-brand-orange text-lg drop-shadow-[0_0_5px_rgba(255,149,0,0.5)]">🔥</span>
                    <span className="text-white font-mono text-sm leading-none mt-1">450</span>
                    <span className="text-white/40 text-[7px] uppercase mt-0.5">Kcal</span>
                 </div>
                 <div className="flex flex-col items-center bg-white/5 p-2 rounded-xl flex-1 mx-1 border border-white/5">
                    <span className="text-brand-cyan text-lg drop-shadow-[0_0_5px_rgba(4,217,255,0.5)]">👟</span>
                    <span className="text-white font-mono text-sm leading-none mt-1">8.4k</span>
                    <span className="text-white/40 text-[7px] uppercase mt-0.5">Passos</span>
                 </div>
              </div>
           </div>

           {/* Bottom Pill */}
           <div className="w-full py-2.5 mb-1 text-center bg-[#FF3B30]/15 rounded-full border border-[#FF3B30]/40 shadow-[0_0_15px_rgba(255,59,48,0.25)] relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
             <span className="text-[9px] uppercase font-black text-[#FF3B30] tracking-wider relative z-10">Zona de Choque</span>
           </div>
        </div>
      </Html>

      {/* Sensor cardíaco na parte traseira (Pulse Sensor Glow) */}
      <mesh position={[0, 0, -0.65]}>
        <capsuleGeometry args={[0.2, 0.4, 16, 16]} />
        <meshBasicMaterial color="#39FF14" transparent opacity={0.8} />
      </mesh>

      {/* Decorative Glow completely behind the watch so it pops from dark bg */}
      <mesh position={[0, 0, -1.2]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#39FF14" transparent opacity={0.03} />
      </mesh>

      {/* Tooltip 1: Treino Fofo (Top Right) */}
      <Html position={[1.4, 1.6, 0.2]} center className="pointer-events-none">
        <div className="w-[180px] md:w-56 glass-card border border-[#FF3B30]/30 bg-[#0A1628]/90 p-2.5 md:p-3 rounded-xl shadow-[0_0_20px_rgba(255,59,48,0.15)] backdrop-blur-md text-left transition-transform hover:scale-105 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="shrink-0 w-2 h-2 rounded-full bg-[#FF3B30] animate-[pulse_1s_ease-in-out_infinite]" />
            <h4 className="text-[10px] md:text-[11px] font-mono text-[#FF3B30] uppercase tracking-widest font-bold">Anti-Treino Fofo</h4>
          </div>
          <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed mt-2 opacity-90">Avalia sua <strong className="text-white">Zona de Esforço (126 BPM)</strong>. Descanso excessivo resulta em cobranças implacáveis no Zap.</p>
        </div>
      </Html>

      {/* Tooltip 2: Análise Metabólica (Top Left) */}
      <Html position={[-1.4, 1.2, 0.2]} center className="pointer-events-none">
        <div className="w-[180px] md:w-56 glass-card border border-brand-orange/30 bg-[#0A1628]/90 p-2.5 md:p-3 rounded-xl shadow-[0_0_20px_rgba(255,149,0,0.15)] backdrop-blur-md text-left transition-transform hover:scale-105 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="shrink-0 w-2 h-2 rounded-full bg-brand-orange animate-[pulse_1s_ease-in-out_infinite]" />
            <h4 className="text-[10px] md:text-[11px] font-mono text-brand-orange uppercase tracking-widest font-bold">Análise Metabólica</h4>
          </div>
          <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed mt-2 opacity-90">Lê seu gasto calórico real. Matemática pura e simples sem desculpas de "metabolismo lento".</p>
        </div>
      </Html>

      {/* Tooltip 3: Vigilância de Sono (Bottom Right) */}
      <Html position={[1.4, -1.2, 0.2]} center className="pointer-events-none">
        <div className="w-[180px] md:w-56 glass-card border border-purple-500/30 bg-[#0A1628]/90 p-2.5 md:p-3 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md text-left transition-transform hover:scale-105 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="shrink-0 w-2 h-2 rounded-full bg-purple-500 animate-[pulse_1s_ease-in-out_infinite]" />
            <h4 className="text-[10px] md:text-[11px] font-mono text-purple-400 uppercase tracking-widest font-bold whitespace-nowrap">Vigilância de Sono</h4>
          </div>
          <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed mt-2 opacity-90">Monitora recuperação. Dormir mal ajusta a carga do seu treino para evitar lesões idiotas no dia seguinte.</p>
        </div>
      </Html>

      {/* Tooltip 4: Sync (Bottom Left) */}
      <Html position={[-1.4, -1.4, 0.2]} center className="pointer-events-none">
        <div className="w-[180px] md:w-56 glass-card border border-[#007AFF]/30 bg-[#0A1628]/90 p-2.5 md:p-3 rounded-xl shadow-[0_0_20px_rgba(0,122,255,0.15)] backdrop-blur-md text-left transition-transform hover:scale-105 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="shrink-0 w-2 h-2 rounded-full bg-[#007AFF] animate-[pulse_1s_ease-in-out_infinite]" />
            <h4 className="text-[10px] md:text-[11px] font-mono text-[#007AFF] uppercase tracking-widest font-bold whitespace-nowrap">Extração Oculta</h4>
          </div>
          <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed mt-2 opacity-90">Sincronização 100% passiva. Dados fluem para a IA em tempo real — você não precisa mandar nada.</p>
        </div>
      </Html>
    </group>
  );
}

export default function Smartwatch3D() {
  return (
    <div className="w-full h-[550px] lg:h-[750px] relative rounded-[2.5rem] overflow-hidden bg-[#050A11] border border-surface-border group cursor-grab active:cursor-grabbing shadow-[0_0_40px_rgba(57,255,20,0.03)]">
      {/* Background glow for the 3D scene */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-cyan/5 to-transparent opacity-50 pointer-events-none" />
      
      {/* Instruction Badge */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-500 opacity-100 group-hover:opacity-0">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark/70 border border-surface-border backdrop-blur-md shadow-2xl">
          <svg className="w-4 h-4 text-white animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          <span className="text-[10px] sm:text-xs font-mono text-white uppercase tracking-widest">Rotacione 360° em tempo real</span>
        </div>
      </div>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.5], fov: 42 }} style={{ touchAction: 'pan-y', width: '100%', height: '100%' }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <directionalLight position={[-10, 0, -10]} intensity={1} />
        
        <Suspense fallback={<Html center><div className="text-brand-lime font-mono text-xs uppercase animate-pulse">Iniciando Computação 3D...</div></Html>}>
          <Environment preset="city" />

          <PresentationControls
            global
            snap={true}
            rotation={[0.15, -0.4, 0]} /* Start slightly rotated for 3D depth showcase */
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI, Math.PI]}
          >
            <Float rotationIntensity={1} floatIntensity={1} speed={1.5}>
              <WatchModel />
            </Float>
          </PresentationControls>

          <ContactShadows position={[0, -3.8, 0]} opacity={0.8} scale={25} blur={2.5} far={4} color="#000" />
        </Suspense>
      </Canvas>
    </div>
  );
}
