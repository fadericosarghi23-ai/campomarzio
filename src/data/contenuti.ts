/**
 * Contenuti ripetuti o in lista (home, studio, metodo). I testi singoli delle pagine
 * sono scritti direttamente nei file .astro.
 *
 * Campomarzio: la sezione "metodo" della base ospita PREMI e PUBBLICAZIONI (il cliente non ha
 * un metodo a step). Le card sono i premi principali, le voci sono premi + riconoscimenti + editoria.
 */
import { progetto } from './progetti';

/** Carosello hero della home: 5 slide, ognuna punta a un progetto (titolo · luogo nella didascalia).
 *  [[DA COMPILARE: immagini d'apertura in alta risoluzione — le copertine attuali sono a bassa risoluzione]] */
export const heroSlides = [
  { progetto: 'piazza-della-mostra', foto: 0 },
  { progetto: 'torri-madonna-bianca', foto: 0 },
  { progetto: 'sportzentrum-st-martin', foto: 0 },
  { progetto: 'cassa-rurale-vallagarina', foto: 0 },
  { progetto: 'negrelli', foto: 0 },
].map(({ progetto: slug, foto }) => {
  const p = progetto(slug);
  return { href: `/progetti/${p.slug}/`, titolo: p.titolo, luogo: p.luogo, img: p.immagini[foto] };
});

/** Progetti nella griglia della home (6) */
export const progettiHome = ['piazza-della-mostra', 'torri-madonna-bianca', 'sportzentrum-st-martin', 'cassa-rurale-vallagarina', 'negrelli', 'house-ca'];

/** Numeri (home: 4 card sotto il manifesto) */
export const numeriHome = [
  { n: '2012', label: 'Dal' },
  { n: '6', label: 'Soci fondatori' },
  { n: '24', label: 'Progetti' },
  { n: '2', label: 'Sedi' },
];

/** Numeri (pagina studio) */
export const numeriStudio = [
  { n: '2012', label: 'Anno di fondazione' },
  { n: '7', label: 'Persone' },
  { n: '2', label: 'Biennali di Venezia' },
  { n: '6+', label: 'Premi e selezioni' },
];

/** Premi principali (card scure con foto: home + /metodo/) */
export const tappe = [
  {
    titolo: 'Euregio Baukulturpreis 2025',
    testo: 'Premio Euregio per la Cultura del Costruito per la riqualificazione delle Torri di Madonna Bianca a Trento, con Studio Bombasaro.',
    img: progetto('torri-madonna-bianca').immagini[0],
  },
  {
    titolo: 'Giovane Talento dell’Architettura Italiana 2023',
    testo: 'Riconoscimento del CNAPPC per il Centro sportivo di San Martino in Passiria, progettato con Michele Moresco.',
    img: progetto('sportzentrum-st-martin').immagini[0],
  },
  {
    titolo: 'Cassa Rurale Vallagarina · 1° premio',
    testo: 'Primo premio al concorso per la nuova sede della Cassa Rurale Vallagarina ad Ala (2022–2023).',
    img: progetto('cassa-rurale-vallagarina').immagini[0],
  },
  {
    titolo: 'Piazza della Mostra · 1° premio',
    testo: 'Primo premio al concorso e riqualificazione della piazza storica nel centro di Trento, costruita nel 2021–2022.',
    img: progetto('piazza-della-mostra').immagini[0],
  },
];

/** Riconoscimenti e pubblicazioni nel dettaglio (/metodo/) */
export const fasi = [
  { titolo: 'Euregio Baukulturpreis 2025', testo: 'Torri di Madonna Bianca, Trento. Europaregion-Euregio Tirol, Südtirol, Trentino, Innsbruck 2025.' },
  { titolo: 'European Collective Housing Award 2024 · finalista', testo: 'Torri di Madonna Bianca, con Studio Bombasaro. Basque Country Architecture Institute + Arc en Rêve, San Sebastián 2024.' },
  { titolo: 'Best Architect Award 2024', testo: 'Centro sportivo di San Martino in Passiria, con Michele Moresco.' },
  { titolo: 'Giovane Talento dell’Architettura Italiana 2023', testo: 'CNAPPC, per il Centro sportivo di San Martino in Passiria. Roma 2023.' },
  { titolo: 'Future 4 Cities 2023', testo: 'Premio Rigenerazione Urbana per Supertrento. FROM, BASE Milano e Rappresentanza Italiana della Commissione Europea.' },
  { titolo: '6° Premio Costruire il Trentino 2024', testo: 'Menzione d’onore alla buona pratica. CITRAC, Rovereto.' },
  { titolo: 'Biennale di Architettura di Venezia', testo: 'Partecipazione alla 14ª (Monditalia, 2014) e alla 16ª edizione.' },
  { titolo: 'Primi premi in concorso', testo: 'Piazza della Mostra, Cassa Rurale Vallagarina, Sportzone Plans, edilizia sociale IPES a Laces e scuola di Primiero.' },
  { titolo: 'Pubblicazioni', testo: 'Saggi, ricerche e progetti per Quodlibet e Lettera22 e sulle riviste San Rocco e Domus.' },
];

/** Dove lavora lo studio (home, fondo scuro): box contati sui luoghi dei 24 progetti */
export const aree = [
  { conteggio: '7 progetti', nome: 'Trento città', comuni: 'Piazza della Mostra, Torri di Madonna Bianca, Torri 2020, case nel centro storico' },
  { conteggio: '7 progetti', nome: 'Alto Adige / Südtirol', comuni: 'San Martino in Passiria, Egna, Laces, S. Lorenzo, Laives, Nova Levante, Tesimo' },
  { conteggio: '4 progetti', nome: 'Valsugana e laghi', comuni: 'Caldonazzo, Calceranica al Lago, Bedollo' },
  { conteggio: '2 progetti', nome: 'Primiero', comuni: 'Scuola Luigi Negrelli, nuova scuola secondaria' },
  { conteggio: '2 progetti', nome: 'Vallagarina', comuni: 'Rovereto (CIMeC), Ala (Cassa Rurale)' },
  { conteggio: '2 progetti', nome: 'Oltre confine', comuni: 'Breggia (CH), La Valle / Wengen' },
];

/** Approccio: 3 punti (pagina studio)
 *  [[DA VALIDARE: punti scritti da noi sul manifesto dello studio]] */
export const approccio = [
  {
    titolo: 'Transdisciplinarità',
    testo: 'Nato nel 2012 per superare i confini disciplinari, Campomarzio unisce architettura, urbanistica, ricerca e comunicazione visiva in un unico collettivo.',
  },
  {
    titolo: 'Concorsi',
    testo: 'I concorsi sono il banco di prova delle idee: numerosi primi premi in Italia e all’estero, da Piazza della Mostra alla Cassa Rurale Vallagarina.',
  },
  {
    titolo: 'Ricerca e didattica',
    testo: 'Collaborazioni con l’Università di Trento, lo IUAV di Venezia e il MIT di Boston, con saggi e ricerche pubblicati su riviste ed editori di settore.',
  },
];

/** Elenco competenze nella sezione "Studio" */
export const competenzeStudio = [
  'Architettura',
  'Urbanistica e spazi pubblici',
  'Rigenerazione urbana',
  'Restauro e recupero',
  'Edilizia sociale',
  'Ricerca sull’abitare',
  'Comunicazione visiva',
];

/** FAQ: il cliente non ne ha. */
export const faq: { d: string; r: string }[] = [];
export const FAQ_COL1 = 5;

/** CTA in fondo alle pagine (testo dalla pagina Contatti del sito) */
export const cta = {
  eyebrow: 'Contatti',
  titolo: 'Raccontaci il tuo progetto',
  testo: 'Scrivici per parlare del tuo progetto o per qualsiasi domanda: saremo felici di risponderti.',
};
