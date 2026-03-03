

# Alternare sfondi sezioni e riempire elementi con #E6E6E6

## Cosa cambia

### 1. Colore CSS custom
Aggiornare `--secondary` in `src/index.css` da `0 0% 96%` a `0 0% 90%` (equivalente di #E6E6E6) per uniformare il colore grigio usato come sfondo sezioni e riempimento elementi.

### 2. Sezioni alternate (già in parte così)
- **Hero** → sfondo bianco ✓
- **HowItWorks** → sfondo #E6E6E6 ✓ (usa `bg-secondary`)
- **Features** → sfondo bianco ✓
- **ComparisonTable** → sfondo #E6E6E6 ✓ (usa `bg-secondary`)
- **FinalCTA** → sfondo bianco ✓
- **Footer** → sfondo #E6E6E6 ✓ (usa `bg-secondary`)

Le sezioni alternate sono già corrette. Basta aggiornare il valore di `--secondary`.

### 3. Elementi nelle sezioni bianche (Features, FinalCTA, Hero)

**Features.tsx** (sezione bianca):
- Le icone (quadrati con bordo) → sfondo `bg-secondary` (#E6E6E6), bordo rimosso, rounded più grande (come nell'immagine reference)
- I box benefit in basso → già usano `bg-secondary`, ok

**HowItWorks.tsx** (sezione #E6E6E6):
- Le icone hanno sfondo `bg-background` (bianco) → corretto, risaltano sullo sfondo grigio

### 4. Dettagli tecnici
- `src/index.css`: cambiare `--secondary: 0 0% 96%` → `0 0% 90%` (#E6E6E6)
- `src/components/Features.tsx`: icone da `bg-secondary border` a `bg-secondary` senza bordo, con rounded più ampio come da reference

