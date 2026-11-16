"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, trackEvent } from "@/lib/analytics";

// Mede cliques em links de WhatsApp e telefone em qualquer parte da página,
// registrando a seção de origem (id da <section> mais próxima).
function useContactClicks() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const location =
        link.closest("section[id]")?.id ??
        (link.closest("header") ? "header" : link.closest("footer") ? "footer" : "pagina");
      if (link.href.startsWith("https://wa.me/")) {
        trackEvent("whatsapp_click", { location });
      } else if (link.href.startsWith("tel:")) {
        trackEvent("phone_click", { location });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export function Analytics() {
  useContactClicks();

  return (
    <>
      {GA_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script id="ga-init">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
