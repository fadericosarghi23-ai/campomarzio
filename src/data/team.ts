/**
 * Team. L'id è l'ancora in /studio/#<id> e il riferimento "referente" nei progetti.
 * Campomarzio: 6 soci fondatori + 1 collaboratrice (pagina Office del sito live).
 * Ritratti reali dal sito (file "-web" 2015); quello di Beatrice Pedrotti non è pubblicato → placeholder.
 * [[DA COMPILARE: ritratti aggiornati in alta risoluzione (gli attuali sono del 2015)]]
 */
import { ph, type Img } from '../lib/media';

/** bio: biografia sintetica (formazione ed esperienze dalla pagina Office). */
export type Membro = { id: string; nome: string; ruolo: string; foto: Img; bio?: string; email?: string };

const foto = (file: string, w: number, h: number, alt: string): Img => ({ src: `/img/team/${file}`, width: w, height: h, alt });

export const team: Membro[] = [
  {
    id: 'pietro-ambrosini',
    nome: 'Pietro Vincenzo Ambrosini',
    ruolo: 'Architetto',
    foto: foto('ambrosini.jpg', 900, 1200, 'Pietro Vincenzo Ambrosini, socio fondatore di Campomarzio'),
    bio: 'Architetto (Università IUAV di Venezia e Politecnico di Milano). Dal 2008 collabora con lo Studio Tapiro di Venezia.',
    email: 'ambrosini@campomarzio.name',
  },
  {
    id: 'michele-andreatta',
    nome: 'Michele Andreatta',
    ruolo: 'Architetto',
    foto: foto('andreatta.jpg', 1125, 1500, 'Michele Andreatta, socio fondatore di Campomarzio'),
    bio: 'Architetto (Accademia di Architettura di Mendrisio). Ha lavorato da G. Vázquez Consuegra a Siviglia e in Estudio Barozzi Veiga a Barcellona.',
    email: 'andreatta@campomarzio.name',
  },
  {
    id: 'alessandro-busana',
    nome: 'Alessandro Busana',
    ruolo: 'Architetto e ingegnere',
    foto: foto('busana.jpg', 900, 1200, 'Alessandro Busana, socio fondatore di Campomarzio'),
    bio: 'Architetto e ingegnere (Università degli Studi di Trento). Dal 2010 collabora con il Dipartimento di Architettura dell’Università di Trento.',
    email: 'busana@campomarzio.name',
  },
  {
    id: 'daniele-cappelletti',
    nome: 'Daniele Cappelletti',
    ruolo: 'Architetto e ingegnere',
    foto: foto('cappelletti.jpg', 900, 1200, 'Daniele Cappelletti, socio fondatore di Campomarzio'),
    bio: 'Architetto e ingegnere (Università di Trento e NTNU di Trondheim). M.Sc. in Architecture and Urban Design al MIT di Boston, dove è stato teaching assistant in “Urban Design Theory”.',
    email: 'cappelletti@campomarzio.name',
  },
  {
    id: 'enrico-lunelli',
    nome: 'Enrico Lunelli',
    ruolo: 'Architetto',
    foto: foto('lunelli.jpg', 900, 1200, 'Enrico Lunelli, socio fondatore di Campomarzio'),
    bio: 'Architetto (Università di Trento, NTNU di Trondheim e Politecnico di Milano). Nel 2011 da Takei Nabeshima Architects, Tokyo.',
    email: 'lunelli@campomarzio.name',
  },
  {
    id: 'teresa-pedretti',
    nome: 'Teresa Pedretti',
    ruolo: 'Senior Consultant / PMP',
    foto: foto('pedretti.jpg', 900, 1200, 'Teresa Pedretti, socia fondatrice di Campomarzio'),
    bio: 'Senior Consultant / PMP (Ca’ Foscari di Venezia e Università di Trento). General manager di Irecoop Alto Adige-Südtirol a Bolzano.',
    email: 'pedretti@campomarzio.name',
  },
  {
    id: 'beatrice-pedrotti',
    nome: 'Beatrice Pedrotti',
    ruolo: 'Architetta, collaboratrice',
    foto: ph('pedrotti', 900, 1200, 'RITRATTO · Beatrice Pedrotti', { alt: 'ritratto di Beatrice Pedrotti' }),
    bio: 'Architetta (Accademia di Architettura di Mendrisio). Ha collaborato con Pezo von Ellrichshausen in Cile e con CEZ Calderan Zanovello a Bolzano.',
    email: 'pedrotti@campomarzio.name',
  },
];

export const membro = (id: string) => team.find((m) => m.id === id);
