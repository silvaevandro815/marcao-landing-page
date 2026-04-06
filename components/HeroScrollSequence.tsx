"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

/* ─────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────── */
const TOTAL_FRAMES = 160;
const BG_COLOR = "#0A1628"; // matches site background

function frameSrc(i: number): string {
  // frames are named frame-001.jpg … frame-160.jpg
  return `/images/frames/frame-${String(i).padStart(3, "0")}.jpg`;
}

/* ─────────────────────────────────────────────
   COPY DATA  — shown at three scroll stages
───────────────────────────────────────────── */
const STAGES = [
  {
    range: [0, 0.33] as [number, number],
    badge: "Início da Jornada",
    headline: (
      <>
        De onde você <span className="gradient-text-lime">está…</span>
      </>
    ),
    sub: "O Marcão parte da sua realidade atual, sem julgamento, sem papo motivacional vazio.",
  },
  {
    range: [0.33, 0.66] as [number, number],
    badge: "Em Transformação",
    headline: (
      <>
        Para onde você <span className="text-brand-orange">vai…</span>
      </>
    ),
    sub: "Cada treino, desafio e check-in te empurra mais perto de quem você quer ser.",
  },
  {
    range: [0.66, 1] as [number, number],
    badge: "Nível Elite ⚡",
    headline: (
      <>
        Com quem você{" "}
        <span className="gradient-text-lime">vai se tornar.</span>
      </>
    ),
    sub: "Corpo definido, mente forte. Sem app extra, direto no WhatsApp, 24h por dia.",
  },
];

function getStage(progress: number) {
  const s = STAGES.find(
    (s) => progress >= s.range[0] && progress <= s.range[1]
  );
  return s ?? STAGES[STAGES.length - 1];
}

/* ─────────────────────────────────────────────
   PRELOADER HOOK
───────────────────────────────────────────── */
function useFramePreloader(): {
  images: HTMLImageElement[];
  loadedCount: number;
  ready: boolean;
} {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.onload = () => {
        count++;
        setLoadedCount(count);
      };
      img.onerror = () => {
        count++;
        setLoadedCount(count);
      };
      img.src = frameSrc(i);
      imgs.push(img);
    }

    setImages(imgs);
  }, []);

  return {
    images,
    loadedCount,
    ready: loadedCount >= TOTAL_FRAMES,
  };
}

/* ─────────────────────────────────────────────
   CANVAS RENDERER
───────────────────────────────────────────── */
function FrameCanvas({
  images,
  frameIndex,
}: {
  images: HTMLImageElement[];
  frameIndex: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Draw frame on canvas
  const drawFrame = useCallback(
    (idx: number) => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const img = images[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Resize canvas to match container
      const { width, height } = container.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      // Fill background
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw image centered with object-fit: contain logic
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = canvas.width / canvas.height;

      let drawW: number, drawH: number, drawX: number, drawY: number;

      if (imgAspect > canvasAspect) {
        // Image is wider — fit width
        drawW = canvas.width;
        drawH = drawW / imgAspect;
        drawX = 0;
        drawY = (canvas.height - drawH) / 2;
      } else {
        // Image is taller — fit height
        drawH = canvas.height;
        drawW = drawH * imgAspect;
        drawX = (canvas.width - drawW) / 2;
        drawY = 0;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    },
    [images]
  );

  // React to frameIndex changes
  useEffect(() => {
    drawFrame(frameIndex);
  }, [frameIndex, drawFrame]);

  // Handle resize
  useEffect(() => {
    const observer = new ResizeObserver(() => drawFrame(frameIndex));
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [frameIndex, drawFrame]);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden rounded-2xl">
      <canvas
        ref={canvasRef}
        className="w-full h-full scale-[1.12] sm:scale-[1.15]"
        style={{ display: "block", transformOrigin: "center" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function HeroScrollSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { images, loadedCount, ready } = useFramePreloader();
  const [frameIndex, setFrameIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Snappier spring — keeps animation fluid but doesn't lag noticeably
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  // Map progress → frame index
  // Finish the animation at 85% of the scroll section so the user can see the final form.
  const frameMotionValue = useTransform(
    smoothProgress,
    [0, 0.85],
    [0, TOTAL_FRAMES - 1]
  );

  useMotionValueEvent(frameMotionValue, "change", (latest) => {
    setFrameIndex(Math.round(Math.max(0, Math.min(latest, TOTAL_FRAMES - 1))));
  });

  useMotionValueEvent(smoothProgress, "change", (v) => {
    setScrollProgress(v);
  });

  const stage = getStage(scrollProgress);
  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  // Scroll progress bar width
  const progressBarWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "400vh" }} // Increased height to give the animation more scroll distance
    >
      {/* ── STICKY VIEWPORT ── */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ background: BG_COLOR }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />

        {/* Ambient glow — intensity grows with progress */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200"
          style={{ opacity: scrollProgress * 0.5 }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              width: "60vw",
              height: "60vw",
              background: "radial-gradient(circle, #39FF1412 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ── LOADING BAR (shown until images ready) ── */}
        {!ready && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <div className="w-48 h-0.5 bg-surface-border rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-lime rounded-full transition-all duration-300"
                style={{ width: `${loadPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono text-text-muted">
              Carregando animação… {loadPercent}%
            </span>
          </div>
        )}

        {/* ── MAIN LAYOUT ── */}
        <div className="relative z-10 h-full w-full grid grid-cols-1 lg:grid-cols-[1fr_480px_1fr] xl:grid-cols-[1fr_560px_1fr] items-center">

          {/* LEFT — scroll copy */}
          <motion.div
            className="hidden lg:flex flex-col justify-center items-end pr-12 h-full"
            // Fade out only at the very end when unpinning (0.95 -> 1.0)
            style={{ opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]) }}
          >
            <div className="max-w-xs text-right">
              <motion.div
                key={stage.badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-brand-lime/30 bg-brand-lime/5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                <span className="text-xs font-mono text-brand-lime uppercase tracking-widest">
                  {stage.badge}
                </span>
              </motion.div>

              <motion.h2
                key={`h-${stage.badge}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="font-display font-black text-3xl xl:text-4xl text-white leading-tight mb-3"
              >
                {stage.headline}
              </motion.h2>

              <motion.p
                key={`p-${stage.badge}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-sm text-text-secondary leading-relaxed"
              >
                {stage.sub}
              </motion.p>
            </div>
          </motion.div>

          {/* CENTER — Canvas */}
          <div className="relative h-full flex items-center justify-center px-4 lg:px-0">
            {/* Vertical edge fades */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: `linear-gradient(to bottom, ${BG_COLOR} 0%, transparent 12%, transparent 88%, ${BG_COLOR} 100%)`,
              }}
            />

            <div
              className="w-full"
              style={{
                // Canvas height: on mobile fill viewport height minus some padding
                height: "min(90vh, 700px)",
              }}
            >
              {ready ? (
                <FrameCanvas images={images} frameIndex={frameIndex} />
              ) : (
                // Placeholder while loading
                <div
                  className="w-full h-full rounded-2xl"
                  style={{ background: BG_COLOR }}
                />
              )}
            </div>
          </div>

          {/* RIGHT — mobile copy  (+ desktop right side stats) */}
          <motion.div
            className="hidden lg:flex flex-col justify-center items-start pl-12 h-full"
            style={{ opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]) }}
          >
            <div className="max-w-xs flex flex-col gap-6">
              {/* Frame counter */}
              <div className="glass-card border border-surface-border rounded-2xl px-5 py-4">
                <p className="text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">Frame</p>
                <div className="font-display font-black text-4xl text-white tabular-nums">
                  {String(frameIndex + 1).padStart(3, "0")}
                  <span className="text-sm text-text-muted font-normal"> / {TOTAL_FRAMES}</span>
                </div>
                {/* Mini progress bar */}
                <div className="mt-3 h-0.5 w-full bg-surface-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-lime rounded-full transition-all duration-100"
                    style={{ width: `${(frameIndex / (TOTAL_FRAMES - 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Transformation stats */}
              {[
                { label: "Gordura corporal", from: "28%", to: "12%", pct: scrollProgress },
                { label: "Massa muscular", from: "Fraco", to: "Definido", pct: scrollProgress },
                { label: "Consistência", from: "0 dias", to: "247 dias", pct: scrollProgress },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-muted">{stat.label}</span>
                    <span className="text-brand-lime font-mono font-bold">
                      {stat.pct > 0.5 ? stat.to : stat.from}
                    </span>
                  </div>
                  <div className="h-0.5 w-full bg-surface-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-lime rounded-full transition-all duration-300"
                      style={{ width: `${stat.pct * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE COPY (bottom overlay) ── */}
          <motion.div
            className="lg:hidden absolute bottom-0 left-0 right-0 z-20 px-4 pb-6 pt-12"
            style={{
              background: `linear-gradient(to top, ${BG_COLOR} 60%, transparent)`,
              opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
            }}
          >
          <motion.div
            key={`mob-${stage.badge}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-2"
          >
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-brand-lime/30 bg-brand-lime/5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
              <span className="text-[10px] font-mono text-brand-lime uppercase tracking-widest">
                {stage.badge}
              </span>
            </div>
            <h3 className="font-display font-black text-xl text-white leading-tight">
              {stage.headline}
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              {stage.sub}
            </p>
          </motion.div>
        </motion.div>

        {/* ── SCROLL PROGRESS BAR (bottom) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-surface-border z-30">
          <motion.div
            className="h-full bg-brand-lime"
            style={{ width: progressBarWidth }}
          />
        </div>

        {/* ── SCROLL HINT (fades out after first scroll) ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30"
          style={{
            opacity: useTransform(smoothProgress, [0, 0.06], [1, 0]),
          }}
        >
          <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest">
            Role para ver
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-4 h-7 rounded-full border border-text-muted/40 flex items-start justify-center pt-1"
          >
            <div className="w-0.5 h-1.5 bg-brand-lime rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
