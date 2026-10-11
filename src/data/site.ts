/**
 * IDENTITÀ DEL CLIENTE — unico punto da cui header, footer, contatti, JSON-LD,
 * meta, privacy, cookie, robots e llms.txt leggono i dati dello studio.
 *
 * Campomarzio: dati dal sito live www.campomarzio.name (pagine Office e Contact).
 * Collettivo transdisciplinare di Trento/Bolzano, bilingue; qui reso in italiano.
 * Due sedi: Trento (operativa, con la mappa) e Bolzano (sede legale, P.IVA/REA).
 */

export const site = {
  /** Nome breve usato ovunque (title, header, footer, JSON-LD) */
  nome: 'Campomarzio',
  /** Denominazione completa/ragione sociale (JSON-LD legalName, privacy). Vuota = non resa.
   *  [[DA COMPILARE: forma societaria esatta — sul sito compare solo "Campomarzio" con P.IVA e REA]] */
  ragioneSociale: 'Campomarzio',
  /** Numero REA (registro imprese) */
  rea: 'BZ-222823',
  /** Varianti del nome (JSON-LD alternateName) */
  nomiAlternativi: ['campomarzio', 'Campomarzio collettivo'],
  /** Alt del logo: nome + discipline */
  logoAlt: 'Campomarzio — architettura, urbanistica, analisi e comunicazione visiva',
  /** Tipo di attività in 2-4 parole, usato in eyebrow e meta */
  attivita: 'Collettivo transdisciplinare',
  /** Slogan breve (JSON-LD slogan, footer) */
  slogan: 'Collettivo transdisciplinare dal 2012',
  /** Descrizione dello studio in 1 frase (meta description di default, JSON-LD, llms.txt) */
  descrizione:
    'Campomarzio è un collettivo transdisciplinare di Trento che unisce esperienze pratiche e teoriche nei campi dell’architettura, dell’urbanistica, della ricerca e della comunicazione visiva.',
  /** Frase del footer sotto il logo */
  footerClaim: 'Campomarzio, studio di architettura, urbanistica, analisi e comunicazione visiva.',

  // ── Dominio e tecnici ───────────────────────────────────────────────
  /** Dominio canonico SENZA slash finale. Tenere allineato con SITE_URL in astro.config.mjs */
  dominio: 'https://www.campomarzio.name',
  /** Colore della barra del browser: deve coincidere con --accent in global.css */
  themeColor: '#000000',
  /** Codice ISO regione/provincia per meta geo.region */
  geoRegion: 'IT-TN',

  // ── Contatti ────────────────────────────────────────────────────────
  email: 'info@campomarzio.name',
  /** Telefono come si legge a schermo. Vuoto = le righe col telefono non vengono rese. */
  telefono: '+39 0461 091363',
  /** Telefono per i link tel: in formato E.164 senza spazi */
  telefonoE164: '+390461091363',
  /** PEC e P.IVA: vuote = non rese. [[DA COMPILARE: PEC — non indicata sul sito]] */
  pec: '',
  piva: '02993490214',

  /** Sede operativa (Trento), con la mappa */
  indirizzo: {
    via: 'Piazza Silvio Pellico 5',
    cap: '38122',
    citta: 'Trento',
    provincia: 'TN',
    paese: 'IT',
  },
  /** Seconda sede: sede legale a Bolzano (resa in footer, contatti, home e studio) */
  sede2: {
    via: 'Via G. Galilei / Galilei-Straße 2/E',
    cap: '39100',
    citta: 'Bolzano',
    paese: 'IT',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via%20Galileo%20Galilei%202%2C%2039100%20Bolzano',
  },
  /** Zona/quartiere in cui si trova lo studio (testo libero per "Dove siamo") */
  zona: 'Centro storico di Trento',
  /** Coordinate per la mappa OpenStreetMap (Piazza Silvio Pellico, Trento).
   *  [[DA VALIDARE: coordinate indicative del centro di Trento — verificare il civico esatto]] */
  geo: { lat: 46.0684, lng: 11.1261 } as null | { lat: number; lng: number },
  /** Link "Apri in Google Maps / Indicazioni stradali" */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Piazza%20Silvio%20Pellico%205%2C%2038122%20Trento',
  /** Modalità di ricevimento (pagina contatti)
   *  [[DA COMPILARE: orari o modalità di ricevimento — non indicati sul sito]] */
  ricevimento: '[[DA COMPILARE: orari o modalità di ricevimento — non indicati sul sito]]',

  /** Social: lasciare l'array vuoto per nascondere il blocco. icona: 'facebook' | 'instagram' | 'linkedin' */
  social: [
    { nome: 'Instagram', url: 'https://www.instagram.com/campomarzio.name', icona: 'instagram' },
    { nome: 'Facebook', url: 'https://www.facebook.com/campomarzio-291179997664755/', icona: 'facebook' },
  ] as { nome: string; url: string; icona: 'facebook' | 'instagram' | 'linkedin' }[],

  /** Aree servite (JSON-LD areaServed, llms.txt) — dai luoghi dei progetti */
  areeServite: [
    { tipo: 'City', nome: 'Trento' },
    { tipo: 'City', nome: 'Bolzano' },
    { tipo: 'State', nome: 'Trentino-Alto Adige' },
    { tipo: 'Country', nome: 'Italy' },
  ],
  /** Competenze (JSON-LD knowsAbout) */
  competenze: [
    'Architettura',
    'Urbanistica',
    'Rigenerazione urbana',
    'Restauro e recupero',
    'Edilizia sociale',
    'Ricerca e comunicazione visiva',
  ],

  /** Form contatti. endpoint vuoto + mailto: il form apre il programma di posta verso l'email.
   *  [[DA COMPILARE: collegamento del form (Netlify Forms o endpoint) da concordare col cliente]] */
  form: {
    netlify: false,
    endpoint: '',
    mailto: 'info@campomarzio.name',
  },

  /** Analytics/pixel: nessuno */
  analytics: null as null | string,

  /** Anno per il copyright */
  anno: new Date().getFullYear(),
};

export const indirizzoRiga = `${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta}`;
export const sede2Riga = `${site.sede2.via}, ${site.sede2.cap} ${site.sede2.citta}`;
export const abs = (p: string) => site.dominio + p;
