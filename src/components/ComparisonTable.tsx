import { Check, X } from "lucide-react";

const rows = [
{ label: "Vendita per singoli capitoli", tablick: true, amazon: false, uni: false, nulla: false },
{ label: "Protezione file (streaming)", tablick: true, amazon: false, uni: false, nulla: false },
{ label: "Nessun lavoro per l'editore", tablick: true, amazon: false, uni: false, nulla: true },
{ label: "Revenue share 60-70%", tablick: true, amazon: false, uni: false, nulla: false },
{ label: "Visibilità verso studenti (SEO)", tablick: true, amazon: false, uni: true, nulla: false },
{ label: "Zero costi fissi / vincoli", tablick: true, amazon: true, uni: false, nulla: true }];


const columns = ["Tablick", "Amazon", "Piattaforme universitarie", "Non fare nulla"];

const CellIcon = ({ value }: {value: boolean;}) =>
value ?
<Check className="w-5 h-5 text-success mx-auto" strokeWidth={2.5} /> :

<X className="w-5 h-5 text-destructive mx-auto" strokeWidth={2.5} />;


const ComparisonTable = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Perché tablick

        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 font-medium text-muted-foreground" />
                {columns.map((col, i) =>
                <th
                  key={col}
                  className={`py-4 px-4 text-center font-semibold text-foreground ${i === 0 ? "bg-primary/5 rounded-t-xl" : ""}`}>
                  
                    {col}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) =>
              <tr key={i} className="border-t border-border">
                  <td className="py-4 px-4 text-foreground font-medium">{row.label}</td>
                  <td className={`py-4 px-4 bg-primary/5`}>
                    <CellIcon value={row.tablick} />
                  </td>
                  <td className="py-4 px-4">
                    <CellIcon value={row.amazon} />
                  </td>
                  <td className="py-4 px-4">
                    <CellIcon value={row.uni} />
                  </td>
                  <td className="py-4 px-4">
                    <CellIcon value={row.nulla} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>);

};

export default ComparisonTable;