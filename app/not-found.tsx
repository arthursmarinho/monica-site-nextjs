import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 pt-32 text-center">
      <p className="text-sm tracking-[0.16em] uppercase text-maven">404</p>
      <h1 className="display-heading mt-4 max-w-[16ch] text-4xl md:text-6xl">
        Não encontramos essa <em className="font-serif-italic">página</em>
      </h1>
      <p className="mt-4 max-w-md font-light">
        O link pode estar desatualizado. Volte para a página inicial e explore
        os programas de cuidado.
      </p>
      <Button href="/" className="mt-8">
        Voltar ao início
      </Button>
      <Link href="/get-care" className="mt-4 text-sm text-maven">
        Ou receber cuidado →
      </Link>
    </div>
  );
}
