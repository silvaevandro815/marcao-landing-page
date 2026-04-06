import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Core (from logo)
        brand: {
          lime: "#39FF14",       // Verde-Lima neon (CTA primário)
          orange: "#FF6B00",     // Laranja neon (acento secundário)
          navy: "#0A1628",       // Azul marinho profundo (fundo logo)
          cyan: "#00E5FF",       // Ciano circuito (detalhe tech)
        },
        // Surface
        surface: {
          black: "#000000",
          dark: "#080C14",
          card: "#0D1422",
          border: "#1A2540",
          muted: "#1E2D4A",
        },
        // Text
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          muted: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "aurora-1": "radial-gradient(ellipse 80% 50% at 20% -20%, rgba(57,255,20,0.15) 0%, transparent 70%)",
        "aurora-2": "radial-gradient(ellipse 60% 40% at 80% 110%, rgba(255,107,0,0.12) 0%, transparent 70%)",
        "aurora-3": "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 60%)",
        "grid-pattern": "linear-gradient(rgba(57,255,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.04) 1px, transparent 1px)",
        "shimmer": "linear-gradient(90deg, transparent 0%, rgba(57,255,20,0.4) 50%, transparent 100%)",
        "hero-gradient": "linear-gradient(180deg, #000000 0%, #080C14 40%, #0A1628 70%, #080C14 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(13,20,34,0.9) 0%, rgba(10,22,40,0.7) 100%)",
      },
      keyframes: {
        "shimmer-slide": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "aurora-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "8%, 12%": { opacity: "0.8" },
          "9%, 11%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px 0px rgba(57,255,20,0.3)" },
          "50%": { boxShadow: "0 0 40px 8px rgba(57,255,20,0.6)" },
        },
      },
      animation: {
        "shimmer": "shimmer-slide 3s linear infinite",
        "aurora": "aurora-pulse 8s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "flicker": "flicker 4s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      boxShadow: {
        "lime-glow": "0 0 30px 4px rgba(57,255,20,0.3)",
        "orange-glow": "0 0 30px 4px rgba(255,107,0,0.3)",
        "cyan-glow": "0 0 20px 2px rgba(0,229,255,0.2)",
        "card-inset": "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
