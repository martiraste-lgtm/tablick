# Tablick — Product Page Editori

## Cos'è questa pagina

Questa è una **product page specifica per il segmento Editori**, non una homepage generica del prodotto.

UVP, USP, elementi differenzianti e posizionamento sono stati costruiti intorno ai problemi e alle necessità specifiche degli Editori. L'obiettivo della pagina è unico: portare l'utente a prenotare una call (CTA → Calendly).

**Non è una pagina da mostrare ad altri segmenti** (Università, Studenti, Professori) — il messaggio è calibrato esclusivamente su questo target.

---

## Note per la software house

Questo codice è stato generato con [Lovable](https://lovable.dev) e usa uno stack React/Vite/Tailwind, **incompatibile con l'ambiente Odoo del sito di destinazione**.

**Non è richiesta la migrazione del codice React.**

Usare questo repository come **riferimento visivo e funzionale** per ricostruire la pagina nativamente nell'ambiente del sito (Odoo, Bootstrap 4, jQuery).

### Cosa ricostruire

- Layout e struttura della pagina (vedere `src/pages/` e `src/components/`)
- Contenuti testuali: headline, body copy, CTA label
- Stile visivo: colori, spaziature, tipografia
- Comportamento del CTA: click → apertura Calendly in nuova tab

### CTA / Calendly

Il link Calendly nella pagina è un **placeholder**. Va sostituito con il link reale fornito dal cliente.

Cercare nel codice: `calendly.com` o la prop/variabile associata al bottone CTA.

---

## Stack tecnico (solo per riferimento)

| Tecnologia | Versione |
|------------|----------|
| React | 18+ |
| TypeScript | 5+ |
| Vite | 5+ |
| Tailwind CSS | 3+ |
| shadcn/ui | latest |

---

## Avviare in locale (opzionale, solo per ispezionare)

```bash
git clone https://github.com/martiraste-lgtm/tablick.git
cd tablick
npm install
npm run dev
```

Apre un server locale su `http://localhost:8080` (o porta indicata dal terminale).

---

## Contatto

Per domande sul contenuto o sul design della pagina, contattare il committente direttamente.
