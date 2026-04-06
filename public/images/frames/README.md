# Frames de Animação de Scroll — Hero Section

Esta pasta armazena os frames WebP para a animação de scroll-sequence da Hero Section.

## Como usar

1. Exporte os frames do Marcão "tomando vida" no WhatsApp como imagens WebP
2. Nomeie-os sequencialmente: `frame_001.webp`, `frame_002.webp`, ..., `frame_0XX.webp`
3. O componente `HeroScrollSequence` (componente futuro) lerá esses frames com base na posição do `scrollY`

## Especificações recomendadas

- Formato: WebP (melhor compressão)
- Resolução: 800×600px ou 400×300px (depende do layout)
- Frames: 60–120 frames para animação fluida
- Total: idealmente < 10MB comprimidos

## Componente de integração (futuro)

```tsx
// components/HeroScrollSequence.tsx
// Usa useScroll() + useTransform() do Framer Motion
// + canvas element para renderizar os frames WebP
// Implementar quando os frames estiverem prontos
```
