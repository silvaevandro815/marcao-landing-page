"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "O Marcão substitui o personal trainer?",
    a: "Não. O Marcão é seu copiloto — ele cuida do acompanhamento entre as sessões presenciais: check-in diário, monitoramento de saúde, alertas de inatividade e motivação 24h. Você continua sendo o especialista técnico que entrega resultado.",
  },
  {
    q: "Como funciona o dashboard do parceiro?",
    a: "Você recebe acesso a um painel exclusivo com visão de todos os seus alunos: sono, passos, treinos recentes, alertas de inatividade (+3 dias), alertas de sono ruim (<6h) e ranking semanal por performance. Tudo em tempo real.",
  },
  {
    q: "E se meu aluno não usar o WhatsApp?",
    a: "O Marcão opera principalmente via WhatsApp para o chat diário. Além disso, o aluno precisará baixar nosso aplicativo oficial (disponível para Android) apenas para fazer a ponte e sincronizar os dados de saúde do relógio e do celular. Feita essa configuração rápida, a mágica acontece no WhatsApp.",
  },
  {
    q: "Como o sistema detecta que um aluno está em risco de cancelar?",
    a: "O Marcão monitora frequência de treino, resposta ao check-in diário, qualidade do sono e engajamento no chat. Qualquer aluno inativo por 3 dias ou mais dispara um alerta automático no seu dashboard para você intervir na hora certa.",
  },
  {
    q: "Meus alunos precisam ter smartwatch?",
    a: "Não. O aluno só precisa ter um celular Android e baixar nosso app de sincronização de saúde. Se ele tiver um smartwatch Android com Google Health Connect, os dados serão ainda mais ricos e precisos, mas não é obrigatório.",
  },
  {
    q: "Funciona para academia com muitos alunos?",
    a: "Sim! Não há limite de alunos. O aluno paga apenas R$ 79,90 por mês, e o personal/dono de academia ainda fica com uma comissão de R$ 29,90 por aluno recorrente! O Marcão acompanha cada um com a mesma qualidade — do primeiro ao centésimo aluno.",
  },
  {
    q: "O Marcão funciona para alunos com iPhone (iOS)?",
    a: "No momento, NÃO. O aluno precisa estar ciente de que a IA do Marcão funciona exclusivamente em sistemas Android. Isso ocorre porque dependemos do nosso aplicativo de integração com o Google Health Connect para extrair os dados vitais de saúde.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem fidelidade e sem burocracia. Você pode remover alunos do plano a qualquer momento — a cobrança pro rata para no mesmo mês. Nenhum contrato de permanência mínima.",
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-brand-lime/40 bg-white/8 shadow-[0_0_20px_rgba(57,255,20,0.08)]"
          : "border-surface-border bg-white/5 hover:border-brand-lime/20"
      } backdrop-blur-xl`}
    >
      <button
        id={`faq-btn-${index}`}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className="font-semibold text-white text-sm sm:text-base leading-snug">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
            open ? "bg-brand-lime/20 text-brand-lime" : "bg-surface-border/50 text-text-muted group-hover:text-white"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed border-t border-surface-border/50 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-brand-lime/30" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-cyan/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-brand-lime/50" />
            <span className="text-xs font-mono text-brand-lime uppercase tracking-widest">Dúvidas</span>
            <div className="w-8 h-px bg-brand-lime/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            Respondemos antes{" "}
            <br />
            <span className="gradient-text-lime">você perguntar.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-text-secondary text-lg"
          >
            As dúvidas mais comuns de personais e donos de academia — respondidas na lata.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted text-sm mb-4">Ainda tem dúvida? Fala direto com a gente pelo WhatsApp.</p>
          <a
            id="faq-cta-whatsapp"
            href="https://wa.me/5532984138133?text=Ol%C3%A1!%20Sou%20personal%20e%20quero%20entender%20melhor%20como%20funciona%20o%20Marc%C3%A3o%20para%20meus%20alunos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-brand-lime/30 text-brand-lime font-semibold text-sm hover:bg-brand-lime/10 transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Tirar dúvida pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
