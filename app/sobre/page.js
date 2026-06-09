'use client'

import Link from 'next/link'
import { ArrowRight, Compass, Heart, ShieldCheck, Globe, BookOpen, Headphones, Users, Building2, Map, Sparkles } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import { useT } from '@/lib/i18n/I18nProvider'

export default function SobrePage() {
  const t = useT()

  const VALUES = [
    { icon: ShieldCheck, title: t('sobre.value1Title'), text: t('sobre.value1Body') },
    { icon: Heart, title: t('sobre.value2Title'), text: t('sobre.value2Body') },
    { icon: Globe, title: t('sobre.value3Title'), text: t('sobre.value3Body') },
    { icon: Sparkles, title: t('sobre.value4Title'), text: t('sobre.value4Body') },
  ]

  const STEPS = [
    { n: '01', title: 'Identificação', text: 'Selecionamos com a autarquia ruas, edifícios e personalidades a documentar.' },
    { n: '02', title: 'Investigação', text: 'Recolha em arquivos, jornais, memórias orais. Cruzamento de fontes.' },
    { n: '03', title: 'Produção editorial', text: 'Textos, audio-guias, fotografia e traduções. Tudo curado.' },
    { n: '04', title: 'Colocação no terreno', text: 'Placas discretas com QR code, ligadas à página digital de cada lugar.' },
    { n: '05', title: 'Comunidade', text: 'Acolhemos memórias dos moradores. O arquivo cresce com o tempo.' },
  ]

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      <section className="container pt-12 md:pt-20 max-w-4xl text-center">
        <p className="eyebrow">{t('sobre.eyebrow')}</p>
        <h1 className="font-serif text-4xl md:text-6xl text-heritage-green mt-3 leading-[1.05] tracking-tight">
          {t('sobre.title')}
        </h1>
        <div className="gold-divider my-6 max-w-[160px] mx-auto" />
        <p className="text-lg md:text-xl text-heritage-gray font-serif italic max-w-3xl mx-auto leading-relaxed">
          {t('sobre.intro')}
        </p>
      </section>

      <section id="missao" className="container mt-20 max-w-4xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 items-start">
          <div>
            <Compass className="w-8 h-8 text-heritage-gold" strokeWidth={1.4} aria-hidden="true" />
            <p className="eyebrow mt-3">{t('sobre.missionEyebrow')}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-heritage-green leading-tight">
              {t('sobre.missionTitle')}
            </h2>
            <div className="gold-divider my-5 max-w-[80px]" />
            <div className="space-y-4 text-[17px] leading-[1.85] text-heritage-ink/90">
              <p>{t('sobre.missionBody1')}</p>
              <p>{t('sobre.missionBody2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="valores" className="container mt-20 md:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-3">{t('sobre.valuesEyebrow')}</p>
          <h2 className="section-title">{t('sobre.valuesTitle')}</h2>
          <div className="gold-divider mt-5 max-w-[120px] mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="heritage-card border border-heritage-gold/15 p-6 hover:shadow-heritage-lg transition">
              <div className="w-12 h-12 rounded-full border border-heritage-gold/40 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-heritage-green" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl text-heritage-green">{title}</h3>
              <div className="h-px w-10 bg-heritage-gold/50 my-3" />
              <p className="text-sm text-heritage-gray leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="container mt-20 md:mt-28">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">{t('sobre.howEyebrow')}</p>
          <h2 className="section-title">{t('sobre.howTitle')}</h2>
          <div className="gold-divider mt-5 max-w-[120px]" />
          <p className="text-heritage-gray mt-5 leading-relaxed">{t('sobre.howBody')}</p>
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

      <section id="municipios" className="container mt-20 md:mt-28">
        <div className="relative overflow-hidden rounded-3xl bg-heritage-green text-heritage-warm">
          <div className="absolute inset-0 opacity-25">
            <img src="https://images.unsplash.com/photo-1606215767711-263080a6b4b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-heritage-green/80" />
          </div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-14">
            <div>
              <p className="text-heritage-gold-light uppercase tracking-[0.22em] text-xs mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4" aria-hidden="true" /> {t('sobre.municipalitiesEyebrow')}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">{t('sobre.municipalitiesTitle')}</h2>
              <p className="mt-5 text-heritage-warm/85 max-w-md leading-relaxed">{t('sobre.municipalitiesBody')}</p>
              <Link href="/contactos" className="btn-gold mt-7 inline-flex">
                {t('common.talkToTeam')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="flex md:justify-end gap-4 flex-wrap">
              {[
                { icon: Map, label: t('home.exploreMap') },
                { icon: Headphones, label: t('common.audioGuide') },
                { icon: BookOpen, label: t('sobre.value1Title') },
                { icon: Users, label: t('memories.eyebrow') },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-full border border-heritage-gold/40 text-xs uppercase tracking-[0.16em] text-heritage-warm/90">
                  <Icon className="w-3.5 h-3.5 text-heritage-gold-light" aria-hidden="true" /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contactos" className="container mt-20 md:mt-24 max-w-3xl text-center">
        <p className="eyebrow mb-3">{t('sobre.contactsEyebrow')}</p>
        <h2 className="font-serif text-3xl md:text-4xl text-heritage-green leading-tight">
          {t('sobre.contactsTitle')}
        </h2>
        <div className="gold-divider my-5 max-w-[120px] mx-auto" />
        <p className="text-heritage-gray leading-relaxed max-w-xl mx-auto">{t('sobre.contactsBody')}</p>
        <Link href="/contactos" className="btn-green mt-7 inline-flex">
          {t('sobre.contactsCta')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  )
}
