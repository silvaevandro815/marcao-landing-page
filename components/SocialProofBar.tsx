"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "WhatsApp", icon: "📱" },
  { name: "OpenAI Vision", icon: "🧠" },
  { name: "Dashboard Parceiro", icon: "📊" },
  { name: "Anti-Churn IA", icon: "🔔" },
  { name: "PostgreSQL", icon: "🗃️" },
  { name: "RAG Memory", icon: "💾" },
  { name: "LGPD Compliant", icon: "📜" },
  { name: "99.9% Uptime", icon: "🟢" },
];

const STATS = [
  { value: "+247", label: "Alunos Monitorados" },
  { value: "72h", label: "Alerta de Inatividade" },
  { value: "7", label: "Modalidades Esportivas" },
  { value: "24/7", label: "Disponibilidade" },
];

export default function SocialProofBar() {
  return (
    <section className="relative border-y border-surface-border bg-surface-dark/50 py-10 overflow-hidden">
      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display font-black text-3xl sm:text-4xl gradient-text-lime">{s.value}</div>
              <div className="text-xs text-text-muted mt-1 font-mono">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logo marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-6 px-4 py-2 rounded-full border border-surface-border bg-surface-card/50 text-sm text-text-secondary flex-shrink-0"
            >
              <span className="text-base">{l.icon}</span>
              <span className="font-mono text-xs">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
