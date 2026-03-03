import { Upload, Cog, Coins, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Mandaci il file",
    desc: "Ci invii il tuo libro in formato ePub o PDF, insieme alle informazioni base: titolo, autore, copertina, abstract.",
  },
  {
    icon: Cog,
    title: "Noi facciamo il resto",
    desc: "tablick crea la scheda prodotto, compila i metadati e mette il libro online. Se il file è in ePub, lo spacchetta automaticamente in capitoli vendibili singolarmente.",
  },
  {
    icon: Coins,
    title: "Gli studenti comprano, tu guadagni",
    desc: "Il tuo libro è trovabile, acquistabile e protetto in streaming. Ogni trimestre ricevi il pagamento: 70% su ePub, 60% su PDF.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-16">
          Come funziona
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 items-start">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-background border flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{step.desc}</p>
              </div>
              {i < 2 && (
                <ArrowRight className="hidden md:block absolute -right-6 top-7 w-5 h-5 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-14">
          Nessun costo fisso · Nessun vincolo · Recesso quando vuoi
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
