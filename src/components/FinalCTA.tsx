import { Button } from "@/components/ui/button";

const DEMO_URL = "https://calendly.com/mario-scagnetti-tabedizioni/30min";

const FinalCTA = () => {
  return (
    <section id="cta" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Porta i tuoi libri dove gli studenti li cercano
        </h2>
        <p className="text-muted-foreground mb-10">Prenota una call con il founder e scopri come attivare il tuo catalogo su tablick.

        </p>
        <Button asChild size="lg" className="rounded-full px-12 text-base">
          <a href={DEMO_URL}>Prenota una demo</a>
        </Button>
      </div>
    </section>);

};

export default FinalCTA;