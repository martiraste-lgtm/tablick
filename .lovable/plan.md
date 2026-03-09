

# Aggiornare link "Prenota una demo" con Calendly

Sostituire `DEMO_URL` da `"#cta"` a `"https://calendly.com/mario-scagnetti-tabedizioni/30min"` in tre file:

1. **`src/components/Navbar.tsx`** — riga `const DEMO_URL`
2. **`src/components/HeroSection.tsx`** — riga `const DEMO_URL`
3. **`src/components/FinalCTA.tsx`** — riga `const DEMO_URL`

Aggiungere anche `target="_blank" rel="noopener noreferrer"` ai link `<a>` per aprire Calendly in una nuova tab.

