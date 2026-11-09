import LogoConstruction from "@repo/ui/components/logo-construction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-between bg-background font-sans">
      <main className="flex flex-1 w-full flex-col max-w-7xl items-stretch justify-between p-4">
        <div className="flex flex-col h-full gap-4 items-center justify-center">
          <LogoConstruction className="w-full" />
          <h1 className="text-2xl md:text-4xl text-accent-foreground font-secondary font-light">
            Página em construção!
          </h1>

          <p className="text-accent-foreground max-w-2xl text-center text-base font-secondary font-light">
            O foco principal do desenvolvimento desse projeto é{" "}
            <b>colocar em prática</b> todas as habilidades profissionais
            adquiridas ao longo do tempo. O desenvolvimento está sendo feito
            utilizando ferramentas e tecnologias modernas e eficientes. Também é
            uma ótima oportunidade para aprender a{" "}
            <b>gerenciar, organizar e priorizar</b> frentes de trabalho de forma
            autônoma e responsável.
          </p>
        </div>
        <div className="flex justify-end">
          <a href="/" className="hover:underline text-primary">
            Visitar site
          </a>
        </div>
      </main>
    </div>
  );
}
