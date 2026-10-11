/**
 * DISCIPLINE (4). Usate in: home (griglia), /servizi/ (una sezione per disciplina, alternate),
 * footer, mappa del sito, select del form contatti, JSON-LD.
 * id = ancora in /servizi/#<id>.
 * foto = progetto la cui copertina illustra la disciplina.
 * correlati = 3 progetti elencati sotto, categoria = pagina portfolio collegata.
 *
 * Campomarzio non vende servizi a listino: la base "Servizi" è usata per i 4 AMBITI dello studio
 * (architettura, urbanistica, analisi, comunicazione visiva), dai campi del brand e dal manifesto.
 * [[DA VALIDARE: descrizioni delle discipline composte da noi sul manifesto dello studio]]
 */
import type { Icona } from './icone';
import type { CategoriaId } from './progetti';

export type Servizio = {
  id: string;
  nome: string;
  breve: string;
  icona: Icona;
  paragrafi: [string, string];
  punti: string[];
  foto: string;
  correlati: string[];
  categoria: CategoriaId;
};

export const servizi: Servizio[] = [
  {
    id: 'architettura',
    nome: 'Architettura',
    breve: 'Edifici pubblici e privati, nuove costruzioni e recuperi: dal concorso all’opera realizzata, con il progetto al centro.',
    icona: 'pianta',
    paragrafi: [
      'L’architettura è il cuore del lavoro di Campomarzio: scuole, centri sportivi, sedi e abitazioni, seguite dalle prime ipotesi fino al cantiere.',
      'Progetti costruiti come Piazza della Mostra a Trento e il Centro sportivo di San Martino, premiati in concorsi nazionali e internazionali.',
    ],
    punti: [
      'Edifici pubblici e sportivi',
      'Case e appartamenti nei centri storici',
      'Recuperi e restauri',
      'Progetti di concorso e incarichi',
    ],
    foto: 'sportzentrum-st-martin',
    correlati: ['sportzentrum-st-martin', 'piazza-della-mostra', 'house-ca'],
    categoria: 'cat-1',
  },
  {
    id: 'urbanistica',
    nome: 'Urbanistica',
    breve: 'Spazi pubblici, piazze e nuclei urbani: visioni per la città a partire dal rapporto tra costruito e spazio collettivo.',
    icona: 'ponte',
    paragrafi: [
      'Lo studio lavora alla scala urbana con piazze, nuovi nuclei centrali e spazi pubblici in Trentino e Alto Adige.',
      'Molte proposte nascono da concorsi, con primi premi come la Cassa Rurale Vallagarina e Sportzone Plans.',
    ],
    punti: [
      'Piazze e spazi pubblici',
      'Nuovi nuclei urbani',
      'Rigenerazione di quartieri',
      'Concorsi di progettazione urbana',
    ],
    foto: 'nucleo-laives',
    correlati: ['nucleo-laives', 'cassa-rurale-vallagarina', 'scuola-primiero'],
    categoria: 'cat-2',
  },
  {
    id: 'analisi',
    nome: 'Analisi e ricerca',
    breve: 'Ricerca sull’abitare e sullo spazio urbano contemporaneo: letture critiche che accompagnano e orientano il progetto.',
    icona: 'treppiede',
    paragrafi: [
      'Campomarzio porta avanti ricerche, consulenze e visioni su città e società, con un approccio critico allo spazio urbano contemporaneo.',
      'Dalla riqualificazione delle Torri di Madonna Bianca alle pubblicazioni con Quodlibet, Lettera22 e sulle riviste San Rocco e Domus.',
    ],
    punti: [
      'Ricerca sull’abitare e l’edilizia sociale',
      'Analisi urbana e di quartiere',
      'Consulenze e visioni per enti pubblici',
      'Pubblicazioni e saggi',
    ],
    foto: 'torri-madonna-bianca',
    correlati: ['torri-madonna-bianca', 'torri-2020', 'ipes-san-lorenzo'],
    categoria: 'cat-3',
  },
  {
    id: 'comunicazione-visiva',
    nome: 'Comunicazione visiva',
    breve: 'Racconto del progetto con disegni, immagini e testi: la comunicazione come parte integrante del lavoro dello studio.',
    icona: 'telaio',
    paragrafi: [
      'La comunicazione visiva accompagna ogni progetto: disegni, immagini e narrazione per rendere leggibili idee e processi.',
      'Un lavoro svolto in sinergia con fotografi, grafici e studiosi, dentro una metodologia basata su inclusione e collaborazione.',
    ],
    punti: [
      'Disegni e rappresentazione del progetto',
      'Immagini e narrazione',
      'Mostre e allestimenti',
      'Collaborazioni con fotografi e artisti',
    ],
    foto: 'cimec',
    correlati: ['cimec', 'negrelli', 'kita-tesimo'],
    categoria: 'cat-2',
  },
];
