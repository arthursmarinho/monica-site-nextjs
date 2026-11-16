// ID do Google Analytics. Sem a variável no ambiente, o script não carrega.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type EventParams = Record<string, string>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Envia o evento para o Google Analytics, se carregado.
export function trackEvent(name: string, params: EventParams = {}) {
  window.gtag?.("event", name, params);
}
