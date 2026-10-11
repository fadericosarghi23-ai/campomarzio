/** llms.txt generato dai dati: nessun testo da tenere allineato a mano. */
import type { APIRoute } from 'astro';
import { site, abs } from '../data/site';
import { servizi } from '../data/servizi';
import { team } from '../data/team';
import { categorie, inCategoria, progetti } from '../data/progetti';

export const GET: APIRoute = () => {
  const righe = [
    `# ${site.nome}`,
    '',
    `> ${site.descrizione}`,
    '',
    '## Dati principali',
    '',
    `- Nome: ${site.nome}`,
    `- Sito: ${abs('/')}`,
    `- Sedi: ${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta} (${site.indirizzo.provincia}); ${site.sede2.via}, ${site.sede2.cap} ${site.sede2.citta}`,
    ...(site.telefono ? [`- Telefono: ${site.telefono}`] : []),
    `- Email: ${site.email}`,
    ...site.social.map((s) => `- ${s.nome}: ${s.url}`),
    `- Aree: ${site.areeServite.map((a) => a.nome).join(', ')}`,
    `- Soci e collaboratori: ${team.map((m) => `${m.nome} (${m.ruolo})`).join(', ')}`,
    `- Portfolio: ${progetti.length} progetti documentati`,
    '',
    '## Pagine principali',
    '',
    `- [Home](${abs('/')}): panoramica dello studio, discipline, premi, progetti in evidenza e contatti.`,
    `- [Studio](${abs('/studio/')}): chi siamo, soci, persone e approccio.`,
    `- [Discipline](${abs('/servizi/')}): gli ambiti di lavoro dello studio.`,
    `- [Premi](${abs('/metodo/')}): premi, riconoscimenti e pubblicazioni.`,
    `- [Progetti](${abs('/progetti/')}): portfolio completo, filtrabile per categoria.`,
    `- [Contatti](${abs('/contatti/')}): email, sedi, mappa e modulo di contatto.`,
    '',
    '## Discipline',
    '',
    ...servizi.map((s) => `- [${s.nome}](${abs(`/servizi/#${s.id}`)}): ${s.breve}`),
    ...categorie.flatMap((c) => ['', `## Progetti — ${c.nome}`, '', ...inCategoria(c.id).map((p) => `- [${p.titolo}](${abs(`/progetti/${p.slug}/`)}): ${p.intervento}. ${p.luogo}.${p.importo ? ` Importo: ${p.importo}.` : ''}`)]),
    '',
  ];
  return new Response(righe.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
