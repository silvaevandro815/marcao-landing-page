import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroScrollSequence from "@/components/HeroScrollSequence";
import SocialProofBar from "@/components/SocialProofBar";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import YoutubeExplanationSection from "@/components/YoutubeExplanationSection";
import SmartwatchSection from "@/components/SmartwatchSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-black text-text-primary overflow-x-clip">
      {/* ── Navigation (sticky) ── */}
      <Navbar />

      {/* ── Hero: Headline + WhatsApp Mockup + Stats ── */}
      <HeroSection />

      {/* ── Hero Scroll Sequence: transformação corporal por scroll ── */}
      <HeroScrollSequence />

      {/* ── Social Proof Bar: logos + números ── */}
      <SocialProofBar />

      {/* ── Features: 8 módulos técnicos → benefícios viscerais ── */}
      <FeaturesSection />

      {/* ── Video Demo: Silicon Valley mobile frame with demo video ── */}
      <VideoDemoSection />

      {/* ── How It Works: 5 passos da jornada ── */}
      <HowItWorksSection />

      {/* ── Youtube Explain: Exposição da tecnologia via YouTube ── */}
      <YoutubeExplanationSection />

      {/* ── Smartwatch: Compatibilidade de Elite ── */}
      <SmartwatchSection />

      {/* ── Hall da Fama: depoimentos marquee infinito ── */}
      <TestimonialsSection />

      {/* ── FAQ: quebra de objeções antes do preço ── */}
      <FAQSection />

      {/* ── Pricing: Plano Único R$ 49,90/mês ── */}
      <PricingSection />

      {/* ── Footer: mega CTA + links ── */}
      <Footer />
    </main>
  );
}
