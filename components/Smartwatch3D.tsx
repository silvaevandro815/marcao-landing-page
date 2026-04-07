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

function WatchModel() {
  return (
    <group>
      {/* Pulseira (Wristband/Trap) - Eixo corrigido para dar a volta no pulso (X axis) e não na tela */}
      <mesh position={[0, 0, -0.9]} rotation={[0, 0, Math.PI / 2]} scale={[1, 1.5, 0.6]}>
        <cylinderGeometry args={[1.5, 1.5, 1.25, 64, 1, true, 0, Math.PI * 2]} />
        <meshPhysicalMaterial 
          color="#151515" 
          roughness={0.9} 
          metalness={0.0} 
          clearcoat={0.0}
          side={THREE.DoubleSide} 
        />
      </mesh>

      {/* Caixa do Relógio exterior (Housing de borracha da Mi Band) */}
      <mesh position={[0, 0, -0.12]} scale={[1, 1, 0.6]}>
        <capsuleGeometry args={[0.78, 1.95, 20, 32]} />
        <meshPhysicalMaterial
          color="#151515"
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>

      {/* Miolo Metálico / Base preta da tela (Core) */}
      <mesh position={[0, 0, -0.05]} scale={[1, 1, 0.6]}>
        <capsuleGeometry args={[0.72, 1.85, 20, 32]} />
        <meshPhysicalMaterial
          color="#1a1a1c"
          metalness={0.8}
          roughness={0.4}
          envMapIntensity={2}
          clearcoat={0.3}
        />
      </mesh>

      {/* Tela de Vidro (Screen Glass) - Pill shape slightly smaller */}
      <mesh position={[0, 0, 0.0]} scale={[1, 1, 0.6]}>
        <capsuleGeometry args={[0.68, 1.8, 20, 32]} />
        <meshPhysicalMaterial
          color="#000"
          metalness={0.3}
          roughness={0.1}
          transmission={0}
          envMapIntensity={1}
        />
      </mesh>

      {/* Digital UI Display projetada 3D */}
      <Html transform position={[0, 0, 0.44]} rotation={[0, 0, 0]} distanceFactor={3.0}>
        <div 
          className="flex flex-col justify-between p-3 font-sans overflow-hidden pointer-events-none select-none" 
          style={{ 
            width: '130px', 
            height: '280px', 
            background: '#000', 
            borderRadius: '40px',
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.05)'
          }}
        >
           {/* Top bar */}
           <div className="flex justify-between items-center text-white/50 text-[9px] px-1 font-mono tracking-wider">
              <span>10:42</span>
              <div className="flex items-center gap-1">
                <span>100%</span>
                <div className="w-3 h-1.5 bg-brand-lime rounded-sm" />
              </div>
           </div>
           
           {/* Center Stats */}
           <div className="flex flex-col items-center gap-2 mt-4 mb-auto">
              <div className="px-2 py-0.5 rounded-full bg-brand-lime/10 border border-brand-lime/20">
                <span className="text-[7px] text-brand-lime font-bold tracking-widest uppercase">Marcão Sync</span>
              </div>
              
              <div className="flex items-baseline gap-1 font-black mt-2">
                 <span className="text-[#FF3B30] text-3xl animate-pulse">♥</span>
                 <span className="text-white text-4xl tabular-nums tracking-tighter">126</span>
              </div>
              <span className="text-[#FF3B30] text-[8px] font-mono uppercase tracking-widest -mt-2">BPM Atual</span>
              
              <div className="h-px w-12 bg-white/10 my-1" />
              
              <div className="flex justify-between items-center w-full px-2 mt-1">
                 <div className="flex flex-col items-center">
                    <span className="text-brand-orange text-sm">🔥</span>
                    <span className="text-white font-mono text-xs leading-none mt-1">450</span>
                    <span className="text-white/40 text-[7px] uppercase">Kcal</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <span className="text-brand-cyan text-sm">👟</span>
                    <span className="text-white font-mono text-xs leading-none mt-1">8.4k</span>
                    <span className="text-white/40 text-[7px] uppercase">Passos</span>
                 </div>
              </div>
           </div>

           {/* Bottom Pill */}
           <div className="w-full py-2 text-center bg-[#FF3B30]/10 rounded-full border border-[#FF3B30]/30 shadow-[0_0_15px_rgba(255,59,48,0.2)]">
             <span className="text-[8px] uppercase font-black text-[#FF3B30] tracking-wider animate-pulse">Zona Alvo</span>
           </div>
        </div>
      </Html>

      {/* Sensor cardíaco na parte traseira (Pulse Sensor Glow) */}
      <mesh position={[0, 0, -0.58]}>
        <capsuleGeometry args={[0.2, 0.4, 16, 16]} />
        <meshBasicMaterial color="#39FF14" transparent opacity={0.6} />
      </mesh>

      {/* Tooltip 1: Treino Fofo (Top Right) */}
      <Html position={[1.2, 1.4, 0]} center className="pointer-events-none">
        <div className="w-auto max-w-[140px] md:max-w-none md:w-56 glass-card border border-[#FF3B30]/30 bg-[#0A1628]/80 p-2 md:p-3 rounded-full md:rounded-xl shadow-[0_0_20px_rgba(255,59,48,0.15)] backdrop-blur-md text-left transition-transform hover:scale-105 pointer-events-auto">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF3B30] animate-pulse" />
            <h4 className="text-[8px] md:text-[10px] font-mono text-[#FF3B30] uppercase tracking-widest truncate md:whitespace-normal">Anti-Treino Fofo</h4>
          </div>
          <p className="hidden md:block text-[11px] text-text-secondary leading-relaxed mt-1.5">Avalia sua <strong>Zona de Esforço (126 BPM)</strong>. O descanso excessivo resulta em cobranças duras na hora.</p>
        </div>
      </Html>

      {/* Tooltip 2: Análise Metabólica (Top Left) */}
      <Html position={[-1.2, 1.2, 0]} center className="pointer-events-none">
        <div className="w-auto max-w-[140px] md:max-w-none md:w-56 glass-card border border-brand-orange/30 bg-[#0A1628]/80 p-2 md:p-3 rounded-full md:rounded-xl shadow-[0_0_20px_rgba(255,149,0,0.15)] backdrop-blur-md text-left transition-transform hover:scale-105 pointer-events-auto">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-orange animate-pulse" />
            <h4 className="text-[8px] md:text-[10px] font-mono text-brand-orange uppercase tracking-widest truncate md:whitespace-normal">Análise Metabólica</h4>
          </div>
          <p className="hidden md:block text-[11px] text-text-secondary leading-relaxed mt-1.5">Lê seu gasto calórico real. Matemática exata sem desculpa de "metabolismo lento".</p>
        </div>
      </Html>

      {/* Tooltip 3: Vigilância de Sono (Bottom Right) */}
      <Html position={[1.2, -1.0, 0]} center className="pointer-events-none">
        <div className="w-auto max-w-[140px] md:max-w-none md:w-56 glass-card border border-purple-500/30 bg-[#0A1628]/80 p-2 md:p-3 rounded-full md:rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md text-left transition-transform hover:scale-105 pointer-events-auto">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 animate-pulse" />
            <h4 className="text-[8px] md:text-[10px] font-mono text-purple-400 uppercase tracking-widest truncate md:whitespace-normal">Vigilância de Sono</h4>
          </div>
          <p className="hidden md:block text-[11px] text-text-secondary leading-relaxed mt-1.5">Pressiona por recuperação. Dormir mal ajusta a carga do seu treino para evitar lesões idiotas.</p>
        </div>
      </Html>

      {/* Tooltip 4: Sync (Bottom Left) */}
      <Html position={[-1.2, -1.2, 0]} center className="pointer-events-none">
        <div className="w-auto max-w-[140px] md:max-w-none md:w-56 glass-card border border-[#007AFF]/30 bg-[#0A1628]/80 p-2 md:p-3 rounded-full md:rounded-xl shadow-[0_0_20px_rgba(0,122,255,0.15)] backdrop-blur-md text-left transition-transform hover:scale-105 pointer-events-auto">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#007AFF] animate-pulse" />
            <h4 className="text-[8px] md:text-[10px] font-mono text-[#007AFF] uppercase tracking-widest truncate md:whitespace-normal">Extração Oculta</h4>
          </div>
          <p className="hidden md:block text-[11px] text-text-secondary leading-relaxed mt-1.5">Sincronização passiva. Os dados vão para a IA em tempo real, sem você precisar preencher nada.</p>
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
