import Link from 'next/link'
import { ArrowRight, Compass, Heart, ShieldCheck, Globe, BookOpen, Headphones, Users, Building2, Map, QrCode, Sparkles } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'

const VALUES = [
  { icon: ShieldCheck, title: 'Rigor', text: 'Cada texto, data e fonte é verificado antes de publicar. A confiança é a base da história.' },
  { icon: Heart, title: 'Proximidade', text: 'Trabalhamos com morçadores, autarquias e investigadores locais. O lugar fala por si.' },
  { icon: Globe, title: 'Acessibilidade', text: 'Vários idiomas, audio-guias, leitura fácil. Património para todos os públicos.' },
  { icon: Sparkles, title: 'Cuidado estético', text: 'Tipografia, fotografia e som tratados ao detalhe. Porque a forma também é memória.' },
]

const STEPS = [
  { n: '01', title: 'Identificação', text: 'Selecionamos com a autarquia ruas, edifícios e personalidades a documentar.' },
  { n: '02', title: 'Investigação', text: 'Recolha em arquivos, jornais, memórias orais. Cruzamento de fontes.' },
  { n: '03', title: 'Produção editorial', text: 'Textos, audio-guias, fotografia e traduções. Tudo curado.' },
  { n: '04', title: 'Colocação no terreno', text: 'Placas discretas com QR code, ligadas à página digital de cada lugar.' },
  { n: '05', title: 'Comunidade', text: 'Acolhemos memórias dos moradores. O arquivo cresce com o tempo.' },
]

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* Hero */}
      <section className="container pt-12 md:pt-20 max-w-4xl text-center">
        <p className="eyebrow">Sobre o Projecto</p>
        <h1 className="font-serif text-4xl md:text-6xl text-heritage-green mt-3 leading-[1.05] tracking-tight">
          Porque acreditamos que a história deve ser vivida.
        </h1>
        <div className="gold-divider my-6 max-w-[160px] mx-auto" />
        <p className="text-lg md:text-xl text-heritage-gray font-serif italic max-w-3xl mx-auto leading-relaxed">
          “Histórias que Ficam” nasce do desejo de devolver às ruas, aos edifícios e às
          pessoas o que muitas vezes ficou esquecido: a sua história, contada com cuidado,
          ao alcance de quem ali passa.
        </p>
      </section>

      {/* Mission */}
      <section id="missao" className="container mt-20 max-w-4xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-start">
          <div>
            <Compass className="w-8 h-8 text-heritage-gold" strokeWidth={1.4} />
            <p className="eyebrow mt-3">Missão</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-heritage-green leading-tight">
              Tornar o património cultural visível, audible e partilhado.
            </h2>
            <div className="gold-divider my-5 max-w-[80px]" />
            <div className="space-y-4 text-[17px] leading-[1.85] text-heritage-ink/90">
              <p>
                Investigamos, produzimos e instalamos no terreno conteúdo cultural rigoroso
                sobre ruas, edifícios e personalidades — acessível por QR code, em vários
                idiomas e em audio-guia.
              </p>
              <p>
                Apoiamos Câmaras Municipais, Juntas de Freguesia e associações culturais a
                contar o que as torna únicas, com uma identidade visual e editorial coerente,
                sem ruído e sem improvisação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="valores" className="container mt-20 md:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-3">Valores</p>
          <h2 className="section-title">Os princípios que guiam cada história.</h2>
          <div className="gold-divider mt-5 max-w-[120px] mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="heritage-card border border-heritage-gold/15 p-6 hover:shadow-heritage-lg transition">
              <div className="w-12 h-12 rounded-full border border-heritage-gold/40 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-heritage-green" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-heritage-green">{title}</h3>
              <div className="h-px w-10 bg-heritage-gold/50 my-3" />
              <p className="text-sm text-heritage-gray leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="container mt-20 md:mt-28">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">Como Funciona</p>
          <h2 className="section-title">Da pesquisa à placa na rua.</h2>
          <div className="gold-divider mt-5 max-w-[120px]" />
          <p className="text-heritage-gray mt-5 leading-relaxed">
            Um processo simples, rigoroso e respeitoso. Trabalhamos por etapas e em
            diálogo contínuo com a comunidade local.
          </p>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((s) => (
            <li key={s.n} className="heritage-card border border-heritage-gold/15 p-5 relative">
              <span className="font-serif text-3xl text-heritage-gold/70 font-bold">{s.n}</span>
              <h3 className="font-serif text-lg text-heritage-green mt-2 leading-tight">{s.title}</h3>
              <div className="h-px w-8 bg-heritage-gold/40 my-3" />
              <p className="text-sm text-heritage-gray leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Para municípios */}
      <section id="municipios" className="container mt-20 md:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-heritage-green text-heritage-warm">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-heritage-green/80" />
          </div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-14">
            <div>
              <p className="text-heritage-gold-light uppercase tracking-[0.22em] text-xs mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Para Municipios
              </p>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">Uma ferramenta cultural ao serviço do seu território.</h2>
              <p className="mt-5 text-heritage-warm/85 max-w-md leading-relaxed">
                Trabalhamos com autarquias para criar percursos patrimoniais com identidade
                própria. Da investigação à instalação, num modelo chave-na-mão.
              </p>
              <Link href="/contactos" className="btn-gold mt-7 inline-flex">
                Falar com a Equipa <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="flex md:justify-end gap-4 flex-wrap">
              {[
                { icon: Map, label: 'Mapa interactivo' },
                { icon: Headphones, label: 'Audio-guias' },
                { icon: BookOpen, label: 'Editorial rigoroso' },
                { icon: Users, label: 'Memórias da comunidade' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-full border border-heritage-gold/40 text-xs uppercase tracking-[0.16em] text-heritage-warm/90">
                  <Icon className="w-3.5 h-3.5 text-heritage-gold-light" /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contactos mini cta */}
      <section id="contactos" className="container mt-20 md:mt-24 max-w-3xl text-center">
        <p className="eyebrow mb-3">Contactos</p>
        <h2 className="font-serif text-3xl md:text-4xl text-heritage-green leading-tight">
          Quer trazer este projecto à sua vila?
        </h2>
        <div className="gold-divider my-5 max-w-[120px] mx-auto" />
        <p className="text-heritage-gray leading-relaxed max-w-xl mx-auto">
          Conheça o nosso modelo de parceria com Câmaras Municipais, Juntas de Freguesia
          e associações culturais.
        </p>
        <Link href="/contactos" className="btn-green mt-7 inline-flex">
          Ir para Contactos <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  )
}
