/**
 * PORTFOLIO. 3 categorie e i 24 progetti di Campomarzio (indice /projects del sito live,
 * stesso ordine). Ogni progetto genera /progetti/<slug>/, entra nella pagina della sua
 * categoria e nella mappa del sito.
 *
 * Dati (titolo IT/EN, luogo, committente, partner, tipo, anno, budget, credito foto) dall'indice
 * del sito live. Le schede di dettaglio e le gallery complete non sono qui: ogni progetto ha
 * la sola immagine di copertina del sito (bassa risoluzione).
 * [[DA VALIDARE: i paragrafi dei progetti sono composti da noi con i soli dati delle schede]]
 * [[DA COMPILARE: gallery complete e foto in alta risoluzione — da chiedere al cliente]]
 */
import type { Img } from '../lib/media';
import media from './media.json';

type Foto = { src: string; width: number; height: number; drawing: boolean };
const gallerie = media as Record<string, Foto[]>;

export type CategoriaId = 'cat-1' | 'cat-2' | 'cat-3';

export type Categoria = {
  id: CategoriaId;
  slug: string;
  nome: string;
  etichetta: string;
  intro: string;
  title: string;
  description: string;
};

export const categorie: Categoria[] = [
  {
    id: 'cat-1',
    slug: 'architettura-restauro',
    nome: 'Architettura e restauro',
    etichetta: 'Restauro',
    intro: 'Case, appartamenti e recuperi nei centri storici del Trentino: interventi privati seguiti dal progetto all’opera costruita.',
    title: 'Architettura e restauro | Campomarzio',
    description: 'Progetti di architettura e restauro di Campomarzio: case e appartamenti recuperati a Trento, Caldonazzo, Bedollo e in Trentino.',
  },
  {
    id: 'cat-2',
    slug: 'spazi-pubblici',
    nome: 'Spazi pubblici e urbanistica',
    etichetta: 'Spazio pubblico',
    intro: 'Scuole, piazze, centri sportivi e nuovi nuclei urbani per committenti pubblici in Trentino e Alto Adige, spesso vinti per concorso.',
    title: 'Spazi pubblici e urbanistica | Campomarzio',
    description: 'Architetture pubbliche e urbanistica di Campomarzio: scuole, piazze, centri sportivi e nuclei urbani in Trentino-Alto Adige, con diversi primi premi.',
  },
  {
    id: 'cat-3',
    slug: 'edilizia-sociale',
    nome: 'Edilizia sociale e ricerca',
    etichetta: 'Edilizia sociale',
    intro: 'Riqualificazione di complessi di edilizia sociale e ricerca sull’abitare, dalle Torri di Madonna Bianca ai nuovi alloggi IPES.',
    title: 'Edilizia sociale e ricerca | Campomarzio',
    description: 'Edilizia sociale e ricerca di Campomarzio: la riqualificazione delle Torri di Madonna Bianca a Trento e gli alloggi IPES in Alto Adige.',
  },
];

export const categoria = (id: CategoriaId) => categorie.find((c) => c.id === id)!;

export type Progetto = {
  slug: string;
  titolo: string;
  luogo: string;
  categoria: CategoriaId;
  categorie: CategoriaId[];
  intervento: string;
  progettisti?: string[];
  importo?: string;
  temi: string[];
  referente: string;
  paragrafi: string[];
  immagini: Img[];
};

const imgs = (slug: string, titolo: string, luogo: string): Img[] => {
  const lista = gallerie[slug] ?? [];
  return lista.map((f, k) => ({
    src: f.src,
    width: f.width,
    height: f.height,
    drawing: f.drawing || undefined,
    alt: `${titolo}, ${luogo} — ${f.drawing ? 'disegno' : 'foto'} ${k + 1}`,
  }));
};

type Riga = [
  slug: string,
  cat: CategoriaId,
  titolo: string,
  luogo: string,
  anno: string,
  tipo: string,
  paragrafo: string,
  con?: string[],
  importo?: string,
];

const R: Riga[] = [
  ['negrelli', 'cat-2', 'Scuola Luigi Negrelli', 'Fiera di Primiero (TN)', '2025', 'Concorso',
    'Progetto di concorso per la nuova scuola secondaria di primo grado Luigi Negrelli a Fiera di Primiero, per il Comune di Primiero.', ['Mimeus']],
  ['cimec', 'cat-2', 'CIMeC — Mente e Cervello', 'Rovereto (TN)', '2025', 'Incarico',
    'Laboratori universitari per il Centro Interdipartimentale Mente e Cervello dell’Università di Trento, a Rovereto.', ['arch. Michela Favero']],
  ['torri-madonna-bianca', 'cat-3', 'Torri di Madonna Bianca', 'Trento', '2024', 'Restauro e ricerca',
    'Riqualificazione di un complesso di edilizia sociale degli anni ’70 a Trento. Finalista all’European Collective Housing Award 2024 e premiato con l’Euregio Baukulturpreis 2025.', ['Studio Bombasaro']],
  ['piazza-della-mostra', 'cat-2', 'Piazza della Mostra', 'Trento', '2016–2022', 'Concorso e incarico',
    'Primo premio al concorso (2016/2018) e riqualificazione della piazza storica nel centro di Trento, costruita tra il 2021 e il 2022 per il Comune di Trento. Foto: Davide Perbellini.', undefined, '€ 1.511.641'],
  ['house-ca', 'cat-1', 'Casa CA', 'Bedollo (TN)', '2021–2023', 'Incarico',
    'Recupero interno di una casa di montagna a Piazze di Bedollo. Foto: Davide Perbellini.'],
  ['house-tv', 'cat-1', 'Casa TV', 'Caldonazzo (TN)', '2021–2023', 'Restauro',
    'Intervento su un edificio nel centro storico di Caldonazzo. Foto: Davide Perbellini.'],
  ['sportzentrum-st-martin', 'cat-2', 'Centro sportivo S. Martino', 'San Martino in Passiria (BZ)', '2023', 'Incarico',
    'Centro sportivo a San Martino in Passiria. Premiato come Giovane Talento dell’Architettura Italiana 2023 e con il Best Architect Award 2024.', ['Michele Moresco']],
  ['house-bg', 'cat-1', 'Casa BG', 'Trento', '2020–2022', 'Restauro',
    'Intervento nel centro storico di Meano, a Trento. Foto: Davide Perbellini.'],
  ['cassa-rurale-vallagarina', 'cat-2', 'Cassa Rurale Vallagarina', 'Ala (TN)', '2022–2023', 'Concorso · 1° premio',
    'Primo premio al concorso per la sede della Cassa Rurale Vallagarina ad Ala.', undefined, '€ 6.200.000'],
  ['sportzone-plans', 'cat-2', 'Sportzone Plans', 'La Valle / Wengen (BZ)', '2021', 'Concorso · 1° premio',
    'Primo premio al concorso per la zona sportiva di La Valle / Wengen.', ['Michele Moresco'], '€ 3.354.386'],
  ['kita-tesimo', 'cat-2', 'Scuola e mensa di Tesimo', 'Tisens / Tesimo (BZ)', '2020', 'Concorso · 4° premio',
    'Scuola dell’infanzia, Kita e mensa a Tisens / Tesimo, quarto premio al concorso per il Comune di Tesimo.', undefined, '€ 3.200.000'],
  ['ipes-san-lorenzo', 'cat-3', 'Edilizia sociale IPES, S. Lorenzo', 'S. Lorenzo di Sebato (BZ)', '2021', 'Concorso',
    'Edilizia sociale IPES a St. Lorenzen / S. Lorenzo di Sebato.'],
  ['nucleo-laives', 'cat-2', 'Nuovo nucleo centrale di Laives', 'Laives (BZ)', '2019', 'Concorso · 3° premio',
    'Terzo premio al concorso per il nuovo nucleo centrale di Leifers / Laives, per il Comune di Laives.', undefined, '€ 8.776.517'],
  ['house-cp', 'cat-1', 'Casa CP', 'Trento', '2019–2020', 'Restauro',
    'Ristrutturazione completa di un appartamento in un edificio degli anni ’20 a Trento. Foto: Davide Perbellini.'],
  ['house-tr', 'cat-1', 'Casa TR', 'Trento', '2019–2020', 'Restauro',
    'Intervento nel quartiere costruito nel 1920 dalla cooperativa “Cesare Battisti” a Trento. Foto: Davide Perbellini.'],
  ['sporthaus-nova-levante', 'cat-2', 'Casa dello sport di Nova Levante', 'Nova Levante (BZ)', '2019', 'Concorso · selezionato',
    'Casa dello sport a Welschnofen / Nova Levante, selezionata al concorso per il Comune di Nova Levante.', undefined, '€ 3.040.722'],
  ['kindergarten-egna', 'cat-2', 'Scuola dell’infanzia di Egna', 'Egna (BZ)', '2019', 'Concorso · 4° premio',
    'Ampliamento della scuola dell’infanzia di Neumarkt / Egna, quarto premio al concorso per il Comune di Egna.', undefined, '€ 3.500.000'],
  ['house-fa', 'cat-1', 'Casa FA', 'Trento', '2018–2019', 'Restauro',
    'Recupero completo di un’abitazione a Trento. Foto: Davide Perbellini.'],
  ['agriturismo-barberina', 'cat-1', 'Agriturismo La Barberina', 'Calceranica al Lago (TN)', '2017–2019', 'Restauro',
    'Il nuovo agriturismo La Barberina nasce dal recupero di un edificio esistente a Calceranica al Lago. Foto: Davide Perbellini.'],
  ['ipes-laces', 'cat-3', 'Edilizia sociale IPES, Laces', 'Laces (BZ)', '2019', 'Concorso · 1° premio',
    'Primo premio al concorso per l’edilizia sociale IPES a Latsch / Laces.', undefined, '€ 1.440.000'],
  ['kindergarten-lattecaldo', 'cat-2', 'Scuola dell’infanzia di Lattecaldo', 'Breggia (CH)', '2018', 'Concorso',
    'Scuola dell’infanzia del centro scolastico di Lattecaldo, a Breggia, in Svizzera.', undefined, 'CHF 5.000.000'],
  ['scuola-primiero', 'cat-2', 'Nuova scuola secondaria di Primiero', 'Fiera di Primiero (TN)', '2018', 'Concorso · 1° premio',
    'Primo premio al concorso per la nuova scuola secondaria di primo grado di Primiero, per il Comune di Primiero.', ['Mimeus'], '€ 3.257.896'],
  ['torri-2020', 'cat-3', 'Torri 2020', 'Trento', '2020', 'Restauro e urbanistica',
    'Restyling di tre torri di edilizia sociale a Trento: ricerca e progetto per la riqualificazione del quartiere.'],
  ['house-pb', 'cat-1', 'Casa PB', 'Caldonazzo (TN)', '2016–2018', 'Restauro',
    'Intervento su un vecchio edificio del centro storico di Caldonazzo. Foto: Davide Perbellini.'],
];

export const progetti: Progetto[] = R.map(([slug, cat, titolo, luogo, anno, tipo, paragrafo, con, importo]) => ({
  slug,
  titolo,
  luogo,
  categoria: cat,
  categorie: [cat],
  intervento: `${tipo} · ${categoria(cat).etichetta}`,
  progettisti: con,
  importo,
  temi: [anno, categoria(cat).etichetta],
  referente: '',
  paragrafi: [paragrafo],
  immagini: imgs(slug, titolo, luogo),
}));

export const progetto = (slug: string) => progetti.find((p) => p.slug === slug)!;
export const copertina = (p: Progetto) => p.immagini[0];
export const inCategoria = (id: CategoriaId) => progetti.filter((p) => p.categorie.includes(id));
