import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { media } from "@/lib/media";

const stories = [
  {
    quote:
      "Tivemos um apoio emocional incrível e economizamos cerca de R$ 180 mil que iríamos gastar com FIV. A única diferença foi a Maven. Não fizemos mais nada, e agora estamos grávidos.",
    name: "Han",
    role: "Membro Maven, Northstar Labs",
    image: media.storyHan,
  },
  {
    quote:
      "Esse é, de longe, o acesso mais fácil a serviços e especialistas que eu tive nos sete anos da minha jornada para constituir família. É muito seguro saber que posso falar com alguém quando preciso.",
    name: "Sarah",
    role: "Membro Maven, Harbor & Co.",
    image: media.storySarah,
  },
  {
    quote:
      "De uma segunda opinião no tratamento de fertilidade à orientação nutricional durante a FIV, e agora educação para o parto e cuidados com o recém-nascido, a Maven foi a companhia constante e confiável em um momento turbulento.",
    name: "Mairead",
    role: "Head de Talentos, Lumen Field",
    image: media.storyMairead,
  },
];

export function Stories() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,#4ee29d80,#028c74_40%,#035748)]" />
      <div className="container-site relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-heading text-4xl md:text-5xl lg:text-[3.5rem]">
            Histórias <em className="font-serif-italic">reais</em> de membros
            Maven
          </h2>
          <p className="mt-5 text-lg font-light text-white/85">
            Descubra como nossa plataforma de cuidado personalizado transformou
            a vida de mulheres e famílias no mundo todo.
          </p>
          <Button href="/member-journey" variant="white" className="mt-8">
            Conheça nossos membros
          </Button>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.name}
              className="overflow-hidden rounded-small bg-white text-deepest"
            >
              <div className="relative h-56">
                <Image
                  src={story.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-[15px] leading-relaxed">“{story.quote}”</p>
                <p className="mt-5 font-medium">{story.name}</p>
                <p className="text-sm text-muted">{story.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
