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

{/* Elementos HTML antigos de interface flutuante foram removidos a pedido do usuário */}

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
