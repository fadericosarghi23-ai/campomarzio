# -*- coding: utf-8 -*-
"""Genera il report PDF (4 pagine) del sito Campomarzio.
Uso:  py -3 scripts/report-pdf.py
Output: docs/Campomarzio-Report.pdf
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
                                PageBreak, HRFlowable, ListFlowable, ListItem)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT

BLACK = colors.HexColor('#000000')
INK = colors.HexColor('#1a1a1a')
GREY = colors.HexColor('#6b6b6b')
LINE = colors.HexColor('#d9d9d9')
SAND = colors.HexColor('#f5f5f5')

ss = getSampleStyleSheet()
H1 = ParagraphStyle('H1', parent=ss['Title'], fontName='Times-Bold', fontSize=30, leading=34, textColor=BLACK, spaceAfter=4, alignment=TA_LEFT)
SUB = ParagraphStyle('SUB', parent=ss['Normal'], fontName='Helvetica', fontSize=11, leading=16, textColor=GREY, spaceAfter=2)
EY = ParagraphStyle('EY', parent=ss['Normal'], fontName='Helvetica-Bold', fontSize=8.5, leading=12, textColor=GREY, spaceAfter=10)
H2 = ParagraphStyle('H2', parent=ss['Heading2'], fontName='Times-Bold', fontSize=16, leading=20, textColor=INK, spaceBefore=14, spaceAfter=6)
BODY = ParagraphStyle('BODY', parent=ss['Normal'], fontName='Helvetica', fontSize=10, leading=15, textColor=INK, spaceAfter=6)
SMALL = ParagraphStyle('SMALL', parent=ss['Normal'], fontName='Helvetica', fontSize=8.5, leading=12, textColor=GREY)
LI = ParagraphStyle('LI', parent=BODY, spaceAfter=3)

def rule():
    return HRFlowable(width='100%', thickness=1, color=LINE, spaceBefore=6, spaceAfter=10)

def bullets(items):
    return ListFlowable([ListItem(Paragraph(t, LI), leftIndent=10, value='•') for t in items],
                        bulletType='bullet', start='•', leftIndent=8)

def kv_table(rows):
    t = Table(rows, colWidths=[42*mm, 120*mm])
    t.setStyle(TableStyle([
        ('FONTNAME',(0,0),(0,-1),'Helvetica-Bold'),
        ('FONTNAME',(1,0),(1,-1),'Helvetica'),
        ('FONTSIZE',(0,0),(-1,-1),9.5),
        ('TEXTCOLOR',(0,0),(0,-1),GREY),
        ('TEXTCOLOR',(1,0),(1,-1),INK),
        ('VALIGN',(0,0),(-1,-1),'TOP'),
        ('TOPPADDING',(0,0),(-1,-1),4),('BOTTOMPADDING',(0,0),(-1,-1),4),
        ('LINEBELOW',(0,0),(-1,-2),0.5,LINE),
    ]))
    return t

story = []

# ---------- PAGINA 1 — copertina ----------
story += [Spacer(1, 40*mm)]
story += [Paragraph('REPORT DI PROGETTO', EY)]
story += [Paragraph('Campomarzio', H1)]
story += [Paragraph('Sito web dello studio — architettura, urbanistica, analisi e comunicazione visiva', SUB)]
story += [Spacer(1, 6)]
story += [rule()]
story += [Paragraph('Collettivo transdisciplinare di Trento e Bolzano, fondato nel 2012. '
                    'Nuovo sito statico ricostruito e riempito con i contenuti del sito ufficiale '
                    '<b>www.campomarzio.name</b>, in italiano, con identità visiva monocromatica.', BODY)]
story += [Spacer(1, 10*mm)]
story += [kv_table([
    ['Cliente', 'Campomarzio — collettivo di architettura e urbanistica'],
    ['Sedi', 'Trento (Piazza Silvio Pellico 5) · Bolzano (Via Galilei 2/E)'],
    ['Tecnologia', 'Astro 5 · sito statico · HTML/CSS/JS'],
    ['Lingua', 'Italiano'],
    ['Pagine', '38 pagine generate'],
    ['Deploy', 'Netlify (build statica da repository GitHub)'],
])]
story += [Spacer(1, 20*mm)]
story += [Paragraph('Documento di sintesi in 4 pagine: design, contenuti, immagini e punti aperti.', SMALL)]
story += [PageBreak()]

# ---------- PAGINA 2 — design & palette ----------
story += [Paragraph('01 — DESIGN E PALETTE', EY)]
story += [Paragraph('Identità visiva e sistema', H2)]
story += [Paragraph('La grafica, la tipografia, le griglie e tutte le animazioni provengono dal '
                    'template di base e sono rimaste invariate: al cliente è stata applicata solo la '
                    'palette e il logo. Il sito è pensato per essere leggero, veloce e leggibile.', BODY)]
story += [Paragraph('Palette (brand monocromatico)', H2)]
sw = [
    ['', 'Nero', '#000000', 'Testo, bottoni, titoli, fascia contatti'],
    ['', 'Inchiostro', '#1a1a1a', 'Titoli secondari, footer'],
    ['', 'Testo', '#222222', 'Corpo del testo'],
    ['', 'Sabbia', '#f5f5f5', 'Fondi delle sezioni alternate'],
    ['', 'Accento su scuro', '#c9c9c9', 'Grigio neutro (decisione accento ancora aperta)'],
    ['', 'Bianco', '#ffffff', 'Sfondo'],
]
tb = Table([[ '', Paragraph('<b>'+r[1]+'</b>', SMALL), Paragraph(r[2], SMALL), Paragraph(r[3], SMALL)] for r in sw],
           colWidths=[12*mm, 30*mm, 24*mm, 96*mm])
tstyle = [('VALIGN',(0,0),(-1,-1),'MIDDLE'),('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),5),
          ('LINEBELOW',(0,0),(-1,-2),0.5,LINE)]
hexes = ['#000000','#1a1a1a','#222222','#f5f5f5','#c9c9c9','#ffffff']
for i,hx in enumerate(hexes):
    tstyle.append(('BACKGROUND',(0,i),(0,i),colors.HexColor(hx)))
    tstyle.append(('BOX',(0,i),(0,i),0.5,LINE))
tb.setStyle(TableStyle(tstyle))
story += [tb]
story += [Paragraph('Tipografia e layout', H2)]
story += [bullets([
    '<b>Titoli</b> con carattere serif (Newsreader), <b>testo</b> con carattere sans-serif (Inter).',
    'Griglie responsive: desktop, tablet e mobile. La sezione “Discipline” è a 4 colonne.',
    'Animazioni invariate: carosello della home, comparse allo scroll, header trasparente, lightbox, mappa.',
])]
story += [Paragraph('Logo e icone', H2)]
story += [Paragraph('È stato usato il logotipo ufficiale “campomarzio” (versione scura su chiaro e chiara '
                    'su scuro). Favicon e icone dell’app sono generate dallo stesso logotipo. '
                    'Il logo è disponibile solo in PNG: una versione vettoriale (SVG) sarebbe preferibile.', BODY)]
story += [PageBreak()]

# ---------- PAGINA 3 — contenuti & immagini ----------
story += [Paragraph('02 — CONTENUTI E IMMAGINI', EY)]
story += [Paragraph('Cosa è stato inserito', H2)]
story += [bullets([
    '<b>Manifesto dello studio</b> (testo ufficiale) e sezione “Chi siamo”.',
    '<b>6 soci fondatori + 1 collaboratrice</b>, con ruolo, biografia ed email.',
    '<b>24 progetti</b> reali con luogo, committente, partner, anno e importo, divisi in 3 categorie '
    '(Architettura e restauro · Spazi pubblici e urbanistica · Edilizia sociale e ricerca).',
    '<b>4 Discipline</b>: architettura, urbanistica, analisi e ricerca, comunicazione visiva.',
    '<b>Premi e pubblicazioni</b>: Euregio Baukulturpreis 2025, Giovane Talento 2023, primi premi in '
    'concorso, due partecipazioni alla Biennale di Venezia.',
    '<b>Contatti e dati legali</b>: due sedi, telefono, email, P.IVA 02993490214, REA BZ-222823, social.',
    'Pagine legali (privacy e cookie), mappa del sito, modulo di contatto.',
])]
story += [Paragraph('Immagini', H2)]
story += [kv_table([
    ['Foto progetti', '138 immagini in alta risoluzione dalle schede del sito (fino a 1920px)'],
    ['Disegni tecnici', 'Piante, sezioni e prospetti mostrati senza ritaglio'],
    ['Ritratti soci', '6 ritratti ufficiali (il settimo, Beatrice Pedrotti, non è pubblicato)'],
    ['Foto studio', 'Ritratto di gruppo (ph. Nicola Cagol)'],
    ['Ottimizzazione', 'Tutte le immagini ricompresse per il web (circa 33 MB complessivi)'],
])]
story += [Paragraph('Tutti i contenuti provengono dal sito ufficiale del cliente. I brevi testi di '
                    'raccordo dei progetti sono composti a partire dai soli dati delle schede e andrebbero '
                    'validati dallo studio.', SMALL)]
story += [PageBreak()]

# ---------- PAGINA 4 — punti aperti & deploy ----------
story += [Paragraph('03 — PUNTI APERTI E PUBBLICAZIONE', EY)]
story += [Paragraph('Da chiudere con il cliente', H2)]
story += [bullets([
    '<b>Logo in formato vettoriale (SVG)</b> — oggi disponibile solo in PNG.',
    '<b>Ritratto di Beatrice Pedrotti</b> (collaboratrice) — attualmente un segnaposto.',
    '<b>Forma societaria esatta</b> (ragione sociale completa) — sul sito compaiono solo P.IVA e REA.',
    '<b>PEC</b> e <b>orari</b> di ricevimento.',
    '<b>Collegamento del modulo di contatto</b>: ora apre il programma di posta; da collegare a un '
    'servizio (es. Netlify Forms).',
    'Conferma delle <b>coordinate della mappa</b> di Trento e <b>decisione sull’accento</b> di brand.',
    'Validazione dei testi dei progetti da parte dello studio.',
])]
story += [Paragraph('Pubblicazione', H2)]
story += [kv_table([
    ['Hosting', 'Netlify — build automatica dal repository'],
    ['Repository', 'github.com/fadericosarghi23-ai/campomarzio'],
    ['Comando di build', 'npm run build  →  cartella dist/'],
    ['Node', 'versione 20'],
    ['Verifiche', 'build pulita, 0 link rotti, 0 immagini mancanti, 0 dati del template residui'],
])]
story += [Paragraph('Dominio', H2)]
story += [Paragraph('Dominio canonico impostato su <b>www.campomarzio.name</b>. Alla messa online '
                    'vanno fatti puntare i record DNS del dominio verso Netlify; sono già previsti i '
                    'reindirizzamenti dai vecchi indirizzi del sito WordPress.', BODY)]
story += [Spacer(1, 10*mm)]
story += [rule()]
story += [Paragraph('Report generato automaticamente · Campomarzio · sito statico Astro', SMALL)]

os.makedirs('docs', exist_ok=True)
out = 'docs/Campomarzio-Report.pdf'
SimpleDocTemplate(out, pagesize=A4, leftMargin=22*mm, rightMargin=22*mm,
                  topMargin=20*mm, bottomMargin=18*mm, title='Campomarzio — Report di progetto',
                  author='Campomarzio').build(story)
print('PDF scritto:', out)
