"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK =
  "https://wa.me/5532984138183?text=Oi%20Marc%C3%A3o!%20Quero%20conhecer%20o%20coaching%20com%20IA.";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-mobile-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-[#050d17] to-transparent pointer-events-none"
        >
          <a
            id="sticky-mobile-cta-android"
            href="https://api.marcaopersonal.com/app"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-gradient-to-r from-brand-lime to-[#2ecc71] text-black font-black text-base shadow-[0_0_30px_rgba(57,255,20,0.5)] active:scale-95 transition-transform duration-150"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414C17.523 15.3414 16.2797 12.8797 15.023 10.429L14.7336 9.84531L13.8436 8.04944C13.5682 7.49348 12.8193 7.42171 12.4497 7.9157L11.5303 9.14441L10.4682 10.5638L9.00627 12.5186L7.54432 14.4735H17.523C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM21.9961 14.8082C21.9961 14.8082 20.8926 12.597 19.8222 10.4526L18.7397 8.28312C18.4231 7.64866 17.2023 7.50294 16.7022 8.04944L14.4988 10.4578C13.8824 11.1314 12.1643 13.0097 12.1643 13.0097C12.1643 13.0097 12.894 11.5173 13.6268 10.015L14.3644 8.50215C14.7176 7.77884 14.4646 6.88371 13.7853 6.45233C13.106 6.02095 12.1906 6.22384 11.7582 6.9142L10.3541 9.15582L8.98801 11.336L7.13506 14.293L13.4357 14.293C13.4357 14.293 21.0569 14.8082 21.9961 14.8082ZM5.97657 15.3414C5.97657 15.3414 7.21989 12.8797 8.47657 10.429L8.76597 9.84531L9.65597 8.04944C9.93144 7.49348 10.6803 7.42171 11.0499 7.9157L11.9693 9.14441L13.0314 10.5638L14.4933 12.5186L15.9553 14.4735H5.97657C5.97657 15.3414 5.97657 15.3414 5.97657 15.3414ZM1.50346 14.8082C1.50346 14.8082 2.60699 12.597 3.67735 10.4526L4.75988 8.28312C5.07644 7.64866 6.29729 7.50294 6.79737 8.04944L9.00078 10.4578C9.61719 11.1314 11.3353 13.0097 11.3353 13.0097C11.3353 13.0097 10.6056 11.5173 9.87278 10.015L9.13524 8.50215C8.78201 7.77884 9.03498 6.88371 9.71424 6.45233C10.3935 6.02095 11.309 6.22384 11.7414 6.9142L13.1455 9.15582L14.5116 11.336L16.3645 14.293L10.0639 14.293C10.0639 14.293 2.4427 14.8082 1.50346 14.8082Z"/>
            </svg>
            📱 Baixar para Android
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
