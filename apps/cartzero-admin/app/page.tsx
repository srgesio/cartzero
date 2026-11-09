import LogoConstruction from "@repo/ui/components/logo-construction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-center p-4">
        <LogoConstruction className="w-full" />
        <h1 className="text-2xl md:text-4xl font-secondary font-light">
          Página em construção!
        </h1>
      </main>
    </div>
  );
}
