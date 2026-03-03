import { BookOpen, Search, Monitor, Handshake, TrendingUp } from "lucide-react";

const features = [
{
  icon: BookOpen,
  title: "Vendita per singoli capitoli",
  feature: "Spacchettamento automatico del libro in capitoli vendibili singolarmente (da file ePub/HTML).",
  capability: "Lo studente può acquistare anche un capitolo singolo, senza comprare l'intero libro.",
  benefit: "Monetizzi lo studente che oggi non avrebbe mai comprato l'intero libro, e che avrebbe fotocopiato o piratato i capitoli."
},
{
  icon: Search,
  title: "SEO su intent studentesco",
  feature: "Ogni titolo viene ottimizzato per i motori di ricerca con keyword specifiche (titolo, autore, materia, università).",
  capability: "Quando lo studente cerca il tuo libro su Google, trova la pagina tablick tra i primi risultati — invece di un sito pirata.",
  benefit: "Hai un canale che intercetta la domanda studentesca nel momento esatto in cui nasce. Senza advertising, senza e-commerce. Tablick porta lo studente al tuo libro."
},
{
  icon: Monitor,
  title: "Libri in streaming",
  feature: "Contenuti consultabili solo in streaming, nessun file scaricabile.",
  capability: "Lo studente legge il libro direttamente nel browser o nell'app. Non può salvare, esportare, stampare o condividere il file.",
  benefit: "Il tuo libro non diventa un PDF su Telegram tre ore dopo la pubblicazione. Ogni copia letta è una copia pagata."
},
{
  icon: Handshake,
  title: "Onboarding \"guanti bianchi\"",
  feature: "tablick si occupa di caricamento file, compilazione metadati, creazione scheda prodotto e spacchettamento capitoli.",
  capability: "L'editore invia il file e le informazioni base. Non deve toccare nessuna dashboard, compilare nessun form complesso, convertire nessun formato.",
  benefit: "Hai un canale digitale attivo senza aver investito un'ora di lavoro né un euro in tecnologia. Mandi il file, il libro è online."
},
{
  icon: TrendingUp,
  title: "Revenue share 60-70%",
  feature: "L'editore riceve il 70% su vendite da file ePub e il 60% su vendite da file PDF. Pagamenti trimestrali.",
  capability: "Il sistema traccia ogni vendita, calcola la quota editore e genera un report trimestrale con rendicontazione dettagliata.",
  benefit: "Guadagni di più per euro di vendita rispetto alla distribuzione fisica. Vendite incrementali, senza resi, senza magazzino, senza logistica."
}];


const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-16">Cosa puoi fare con tablick

        </h2>
        <div className="space-y-16">
          {features.map((f, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 ${isReversed ? "md:flex-row-reverse" : ""}`}>
                
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                  <f.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">{f.title}</h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Feature: </span>
                      {f.feature}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Capability: </span>
                      {f.capability}
                    </p>
                    <div className="mt-4 p-4 rounded-lg bg-secondary border">
                      <p className="text-foreground font-medium text-base">{f.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

};

export default Features;