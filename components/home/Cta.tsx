import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section id="contato" className="py-24 md:py-32 scroll-mt-24">
      <div className="container-site px-4 text-center md:px-6">
        <h2 className="display-heading mx-auto max-w-[18ch] text-4xl md:text-5xl lg:text-[3.5rem]">
          Leve seus benefícios para o{" "}
          <em className="font-serif-italic">futuro</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[38ch] text-lg font-light">
          Fale com nosso time e descubra como os benefícios de saúde da mulher e
          da família podem funcionar para você.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#contato">Para empresas</Button>
          <Button href="#contato" variant="outline">
            Para colaboradores
          </Button>
        </div>
      </div>
    </section>
  );
}
