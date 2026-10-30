'use client'

import Link from 'next/link'
import { Play, ArrowRight, BookOpen, Headphones, Users, Languages } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import PlaceGroups from '@/components/heritage/PlaceGroups'
import HeroVideo from '@/components/heritage/HeroVideo'
import { homeHero } from '@/lib/heritage-data'
import { useContent } from '@/lib/content'
import { useT } from '@/lib/i18n/I18nProvider'

export default function HomePage() {
  const t = useT()
  const { placeGroups, featuredPlaces } = useContent()

  const BENEFITS = [
    { icon: BookOpen, title: t('home.benefit1Title'), text: t('home.benefit1Body') },
    { icon: Headphones, title: t('home.benefit2Title'), text: t('home.benefit2Body') },
    { icon: Users, title: t('home.benefit3Title'), text: t('home.benefit3Body') },
    { icon: Languages, title: t('home.benefit4Title'), text: t('home.benefit4Body') },
  ]

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* HERO */}
      <section className="relative" aria-labelledby="hero-heading">
        <div className="relative h-[78vh] min-h-[520px] max-h-[760px] overflow-hidden">
          <HeroVideo
            src={homeHero.video}
            poster={homeHero.poster}
            posterFocus={homeHero.posterFocus}
            alt={t('home.heroImageAlt')}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-heritage-green/40 via-heritage-green/20 to-heritage-green/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-green-dark/40 to-transparent" />

          <div className="relative container h-full flex flex-col justify-end pb-16 md:pb-24">
            <div className="max-w-2xl animate-fade-in">
              <p className="text-heritage-gold-light uppercase tracking-[0.28em] text-[11px] md:text-xs mb-4">{t('home.heroEyebrow')}</p>
              <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-heritage-warm leading-[1.05] tracking-tight">
                {t('home.heroTitle')}
              </h1>
              <p className="mt-6 text-lg text-heritage-warm/90 max-w-xl leading-relaxed">{t('home.heroSubtitle')}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/mapa" className="btn-gold">
                  {t('home.exploreMap')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link href="/historias/rua-da-cale-fundao" className="text-heritage-warm text-sm underline-offset-4 hover:underline tracking-wide focus:outline-none focus-visible:underline">
                  {t('home.seeExample')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Hoje na História" removido: exige conteúdo novo todos os dias.
          Os dados (todayInHistory) e as traduções continuam no sítio, por isso
          repor a secção é só voltar a colocá-la aqui e no menu (lib/nav.js). */}

      {/* LOCAIS EM DESTAQUE */}
      <section id="locais" className="py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-3">{t('home.featuredEyebrow')}</p>
              <h2 className="section-title max-w-xl">{t('home.featuredTitle')}</h2>
            </div>
            <Link href="/mapa" className="hidden md:inline-flex items-center gap-2 text-heritage-green text-sm font-medium hover:text-heritage-gold transition focus:outline-none focus-visible:underline">
              {t('home.viewAllPlaces')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <PlaceGroups groups={placeGroups} places={featuredPlaces} />
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
                <p className="text-heritage-gold-light uppercase tracking-[0.22em] text-xs mb-4">{t('home.listenEyebrow')}</p>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight text-heritage-cream">{t('home.listenTitle')}</h2>
                <p className="mt-5 text-heritage-warm/80 max-w-md leading-relaxed">{t('home.listenBody')}</p>
                <Link href="/historias/rua-da-cale-fundao" className="mt-7 inline-flex btn-gold">
                  <Play className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true" /> {t('home.listenCta')}
                </Link>
              </div>
              <div className="flex md:justify-end">
                <button aria-label={t('home.listenCta')} className="group w-32 h-32 md:w-44 md:h-44 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold/30 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold">
                  <span className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-heritage-gold flex items-center justify-center shadow-heritage-lg group-hover:scale-105 transition">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" aria-hidden="true" />
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
            <p className="eyebrow mb-3">{t('home.whyEyebrow')}</p>
            <h2 className="section-title">{t('home.whyTitle')}</h2>
            <div className="gold-divider mt-6 max-w-[160px] mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-full border border-heritage-gold/40 flex items-center justify-center mb-4 group-hover:bg-heritage-green group-hover:border-heritage-green transition">
                  <Icon className="w-6 h-6 text-heritage-green group-hover:text-heritage-gold transition" strokeWidth={1.4} aria-hidden="true" />
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
