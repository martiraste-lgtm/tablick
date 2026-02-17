import { Button } from "@/components/ui/button";

const DEMO_URL = "#cta";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
          Tablick è un canale di vendita digitale per libri universitari
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Pubblichi i tuoi titoli in digitale e vendi sia il libro intero che i singoli capitoli. Tu mandi il file, al resto pensiamo noi.
        </p>
        <Button asChild size="lg" className="rounded-full px-10 text-base mb-8">
          <a href={DEMO_URL}>Prenota una demo</a>
        </Button>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            Revenue share 60-70%
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            Nessun costo fisso
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            Zero vincoli
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
