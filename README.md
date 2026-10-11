# Campomarzio — sito

Sito di **Campomarzio**, collettivo transdisciplinare di architettura, urbanistica, analisi e
comunicazione visiva con sedi a **Trento** (operativa, Piazza Silvio Pellico 5) e **Bolzano**
(sede legale, Via Galilei 2/E). Fondato nel 2012 da sei soci.

Costruito su una base Astro interna riempita con i contenuti del sito live
**www.campomarzio.name** (WordPress). Sito **in italiano**, monocromatico nero/bianco.

## Sviluppo

```bash
npm install
npm run dev        # http://localhost:4760
npm run build      # genera dist/
npm run preview    # anteprima build su 4761
npm run check-residui  # verifica che non restino dati del template di partenza
```

Node 20+. Il `package-lock.json` è gitignorato di proposito (su Windows i binding nativi rolldown
fanno saltare la build Linux: su Netlify si installa fresco con `--no-package-lock`).

## Struttura

- `src/data/` — contenuti data-driven: `site.ts` (identità, sedi, contatti, dati legali),
  `nav.ts`, `progetti.ts` (24 progetti + 3 categorie), `servizi.ts` (4 discipline),
  `team.ts` (6 soci + 1 collaboratrice), `contenuti.ts` (hero, numeri, premi, aree, approccio, cta),
  `icone.ts`.
- `src/pages/` — home, studio, servizi (discipline), metodo (premi), progetti (indice, categorie,
  schede), contatti, privacy/cookie, 404, grazie, mappa del sito, endpoint (robots, sitemap, llms, manifest).
- `src/components/` — Header, Footer, Picture, Portfolio, ProjectCard, PageHero, PageHead, Cta,
  ProcessCards, Lightbox, MapEmbed, Breadcrumb, Icon.
- `public/img/` — `logo/` (PNG nero + bianco), `studio/office.jpg`, `team/` (ritratti soci),
  `progetti/` (copertine), `og/`.

## Palette

Brand monocromatico: nero `#000` su bianco `#fff`, grigi `#f5f5f5` / `#b5b5b5`. Tutto nei token di
`src/styles/global.css`. **Nessun accento di marca**: `--accent-on-dark` è un grigio chiaro neutro
(decisione accent aperta col cliente).

## Immagini

Le foto sono le copertine del sito live (bassa risoluzione, ~432×281) + ritratti e foto studio.
Ogni immagine è un oggetto `Img` con width/height; i segnaposto SVG delle stesse misure sono generati
in build da `src/pages/img/placeholder/[id].svg.ts`. `scripts/placeholders.mjs` e `scripts/slots.mjs`
aiutano a elencare segnaposto e slot.

## Da chiudere col cliente

- Foto progetti e **gallery complete in alta risoluzione** (ora solo 1 copertina per progetto, bassa risoluzione).
- Immagine **hero** e foto studio in alta risoluzione.
- **Ritratti soci aggiornati** (gli attuali sono i file "-web" del 2015) e **ritratto di Beatrice Pedrotti** (manca).
- **Forma societaria esatta** (ragione sociale) — sul sito compaiono solo nome, P.IVA 02993490214 e REA BZ-222823.
- **PEC** e **orari** di ricevimento.
- **Collegamento del form** (Netlify Forms o endpoint): finora il submit apre il client di posta verso info@campomarzio.name.
- Conferma **coordinate mappa** di Trento e **decisione accent** di brand.
