import Link from 'next/link'
import { Play, ArrowRight, BookOpen, Headphones, Users, Languages, Calendar, MapPin } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import PlaceCard from '@/components/heritage/PlaceCard'
import { todayInHistory, featuredPlaces } from '@/lib/heritage-data'

const BENEFITS = [
  { icon: BookOpen, title: 'Conteúdos rigorosos', text: 'Investigação cuidada, fontes verificadas.' },
  { icon: Headphones, title: 'Experiência imersiva', text: 'Audio-guias, fotografia e memórias.' },
  { icon: Users, title: 'Acessível a todos', text: 'Pensado para todas as idades e públicos.' },
  { icon: Languages, title: 'Vários idiomas', text: 'Português, inglês e espanhol.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[520px] max-h-[760px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000"
            alt="Rua histórica portuguesa ao entardecer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-heritage-green/40 via-heritage-green/20 to-heritage-green/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-green-dark/40 to-transparent" />

          <div className="relative container h-full flex flex-col justify-end pb-16 md:pb-24">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-heritage-gold-light uppercase tracking-[0.28em] text-[11px] md:text-xs mb-4">Património · Cultura · Experiência</p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-heritage-warm leading-[1.05] tracking-tight">
                Descubra as histórias que vivem nas nossas ruas.
              </h1>
              <p className="mt-6 text-lg text-heritage-warm/90 max-w-xl leading-relaxed">
                Património, cultura e identidade ao seu alcance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#locais" className="btn-gold">
                  Explorar Mapa <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link href="/historias/rua-da-cale" className="text-heritage-warm text-sm underline-offset-4 hover:underline tracking-wide">
                  Ver exemplo de história →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOJE NA HISTÓRIA */}
      <section id="hoje" className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="heritage-card border border-heritage-gold/25 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-4 h-4 text-heritage-gold" />
              <span className="eyebrow">Hoje na História</span>
            </div>
            <p className="font-serif text-heritage-gold text-base">{todayInHistory.date}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-heritage-green mt-2 leading-tight">{todayInHistory.title}</h2>
            <div className="gold-divider my-5 max-w-[120px]" />
            <p className="text-heritage-gray leading-relaxed max-w-2xl">{todayInHistory.excerpt}</p>
            <a href="#" className="btn-ghost-gold mt-6 inline-flex">
              Ver Mais <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* LOCAIS EM DESTAQUE */}
      <section id="locais" className="py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-3">Locais em Destaque</p>
              <h2 className="section-title max-w-xl">Ruas e lugares que contam quem somos.</h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-heritage-green text-sm font-medium hover:text-heritage-gold transition">
              Ver todos os locais <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlaces.map((p) => (
              <PlaceCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* OUVE A HISTÓRIA */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-heritage-green text-heritage-warm">
            <div className="absolute inset-0 opacity-30">
              <img src="https://images.unsplash.com/photo-1501927023255-9063be98970c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-heritage-green/70" />
            </div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-14">
              <div>
                <p className="text-heritage-gold-light uppercase tracking-[0.22em] text-xs mb-4">Audio-guia</p>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight">Ouve a história enquanto caminhas.</h2>
                <p className="mt-5 text-heritage-warm/80 max-w-md leading-relaxed">
                  Narrativas curtas, vozes próximas, memórias autênticas. Coloca os auriculares e deixa-te guiar.
                </p>
                <a href="#" className="mt-7 inline-flex btn-gold">
                  <Play className="w-3.5 h-3.5" fill="currentColor" /> Começar a ouvir
                </a>
              </div>
              <div className="flex md:justify-end">
                <button aria-label="Reproduzir" className="group w-32 h-32 md:w-44 md:h-44 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold/30 transition">
                  <span className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-heritage-gold flex items-center justify-center shadow-heritage-lg group-hover:scale-105 transition">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="sobre" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Porquê Histórias que Ficam</p>
            <h2 className="section-title">Uma experiência cultural pensada ao detalhe.</h2>
            <div className="gold-divider mt-6 max-w-[160px] mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-full border border-heritage-gold/40 flex items-center justify-center mb-4 group-hover:bg-heritage-green group-hover:border-heritage-green transition">
                  <Icon className="w-6 h-6 text-heritage-green group-hover:text-heritage-gold transition" strokeWidth={1.4} />
                </div>
                <h3 className="font-serif text-lg text-heritage-green">{title}</h3>
                <p className="text-sm text-heritage-gray mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav active="inicio" />
    </div>
  )
}
