"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  [key: string]: string | undefined;
}

export function useUTM() {
  const searchParams = useSearchParams();
  const [utms, setUtms] = useState<UTMParams>({});

  useEffect(() => {
    // Tenta carregar do localStorage primeiro
    const storedUTMs = localStorage.getItem("marcao_utms");
    let currentUTMs: UTMParams = storedUTMs ? JSON.parse(storedUTMs) : {};

    // Verifica se há novos UTMs na URL
    const params = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    let hasNewUTMs = false;

    params.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        currentUTMs[param] = value;
        hasNewUTMs = true;
      }
    });

    // Se encontrou novos, atualiza o storage
    if (hasNewUTMs) {
      localStorage.setItem("marcao_utms", JSON.stringify(currentUTMs));
    }

    setUtms(currentUTMs);
  }, [searchParams]);

  /**
   * Constrói a URL do WhatsApp adicionando os UTMs coletados
   * embutidos no final da mensagem. Isso garante que no fluxo do WhatsApp
   * nós recebamos a origem completa de forma elegante e segura.
   */
  const getWhatsAppCTA = (baseMessage: string): string => {
    const telefone = "5532984138183";
    let finalMessage = baseMessage;

    // Constrói uma string de tracking compacta e invisível aos olhos destreinados,
    // mas perfeita para seu webhook parsear depois
    const trackingString = Object.entries(utms)
      .map(([k, v]) => `[${k.replace('utm_', '')}:${v}]`)
      .join(" ");

    if (trackingString) {
      // Adicionamos no final da mensagem um bloco invisível ou muito discreto de tracking
      finalMessage = `${baseMessage}\n\n--\n${trackingString}`;
    }

    const encodeMsg = encodeURIComponent(finalMessage);
    return `https://wa.me/${telefone}?text=${encodeMsg}`;
  };

  return { utms, getWhatsAppCTA };
}
