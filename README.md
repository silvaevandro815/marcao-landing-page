# MARCÃO AI — Landing Page

Vitrine de vendas do SaaS Marcão AI. Next.js 15 + Tailwind CSS + Framer Motion.

## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Styling**: Tailwind CSS + CSS custom (aurora, shimmer, glass)
- **Animações**: Framer Motion 11
- **Tipografia**: Space Grotesk + Barlow Condensed (Google Fonts)
- **Linguagem**: TypeScript

## Instalação

> **Pré-requisito**: Node.js 18+ instalado

```bash
# Entre na pasta
cd MARCAO_LANDING_PAGE

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse: `http://localhost:3000`

## Estrutura

```
MARCAO_LANDING_PAGE/
├── app/
│   ├── layout.tsx          # Layout raiz com SEO
│   ├── page.tsx            # Página principal (monta todas seções)
│   └── globals.css         # Estilos globais + aurora + shimmer
├── components/
│   ├── Navbar.tsx          # Nav com blur no scroll + mobile menu
│   ├── HeroSection.tsx     # Hero + WhatsApp mockup animado + stats
│   ├── SocialProofBar.tsx  # Stats + marquee de tecnologias
│   ├── FeaturesSection.tsx # 8 cards de funcionalidades
│   ├── HowItWorksSection.tsx # 5 passos com linha de progresso
│   ├── TestimonialsSection.tsx # Hall da Fama (marquee infinito)
│   ├── PricingSection.tsx  # 3 planos de preço
│   └── Footer.tsx          # Mega CTA + links
├── public/
│   └── images/
│       └── frames/         # ← Coloque aqui os frames WebP da animação hero
│           └── README.md
├── tailwind.config.ts      # Paleta: verde-lima #39FF14, laranja #FF6B00
├── package.json
└── tsconfig.json
```

## Paleta de Cores (da Logo)

| Nome | Hex | Uso |
|------|-----|-----|
| Verde-Lima | `#39FF14` | CTA primário, destaques |
| Laranja Neon | `#FF6B00` | Acento secundário |
| Azul Marinho | `#0A1628` | Fundo profundo |
| Ciano Circuito | `#00E5FF` | Detalhe tech |
| Preto Profundo | `#000000` | Background principal |

## WhatsApp do Marcão

Número: `5532984138133` (já integrado em todos os CTAs)

## Frames de Scroll (futura implementação)

Coloque os frames WebP em `public/images/frames/` nomeados como `frame_001.webp`, `frame_002.webp`, etc.
