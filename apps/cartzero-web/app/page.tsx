import LogoConstruction from "@repo/ui/components/logo-construction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans p-0 md:p-8">
      <main className="flex flex-1 w-full max-w-7xl flex-col bg-card justify-between p-4">
        <div className="flex flex-col h-full items-center justify-center">
          <LogoConstruction className="w-full" />
          <h1 className="text-2xl md:text-4xl font-secondary font-light">
            Página em construção!
          </h1>
        </div>
        <div className="flex items-center justify-end">
          <a href="/admin" className="hover:underline text-primary">
            Admin
          </a>
        </div>
      </main>
    </div>
  );
}
