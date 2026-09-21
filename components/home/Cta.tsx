import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section id="contato" className="py-24 md:py-32 scroll-mt-24">
      <div className="container-site px-4 text-center md:px-6">
        <h2 className="display-heading mx-auto max-w-[18ch] text-4xl md:text-5xl lg:text-[3.5rem]">
          Vamos conversar sobre o seu{" "}
          <em className="font-serif-italic">plano ideal?</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[38ch] text-lg font-light">
          Fale comigo e receba orientação personalizada para encontrar a
          melhor opção para você, sua família ou sua empresa.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#cotacao">Quero minha cotação</Button>
          <Button href="#faq" variant="outline">
            Ver perguntas frequentes
          </Button>
        </div>
      </div>
    </section>
  );
}
