'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Heart, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import AudioPlayer from '@/components/heritage/AudioPlayer'
import ExpandableSection from '@/components/heritage/ExpandableSection'
import PersonalityCard from '@/components/heritage/PersonalityCard'
import PlaceCard from '@/components/heritage/PlaceCard'
import ShareRow from '@/components/heritage/ShareRow'
import MemoryCard from '@/components/heritage/MemoryCard'
import MemoryForm from '@/components/heritage/MemoryForm'
import { getStreet } from '@/lib/heritage-data'

export default function StreetPage() {
  const street = getStreet('rua-da-cale')
  const [saved, setSaved] = useState(false)
  const [activeTab, setActiveTab] = useState('historia')
  const [galleryIdx, setGalleryIdx] = useState(0)

  if (!street) return <div className="p-10">Rua não encontrada.</div>

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* Sub-bar: back + favorite */}
      <div className="sticky top-16 md:top-20 z-30 bg-heritage-beige/85 backdrop-blur border-b border-heritage-gold/15">
        <div className="container flex items-center justify-between py-3">
          <Link href="/" className="inline-flex items-center gap-2 text-heritage-green text-sm font-medium hover:text-heritage-gold transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao mapa</span>
          </Link>
          <button
            onClick={() => setSaved(!saved)}
            aria-label="Guardar"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${saved ? 'bg-heritage-gold border-heritage-gold text-white' : 'border-heritage-gold/40 text-heritage-green hover:bg-heritage-gold/10'}`}
          >
            <Heart className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Location block */}
      <section className="container pt-8 md:pt-12">
        <p className="eyebrow">{street.category}</p>
        <h1 className="font-serif text-4xl md:text-6xl text-heritage-green mt-3 leading-[1.05] tracking-tight">{street.title}</h1>
        <p className="mt-3 text-lg md:text-xl text-heritage-gray font-serif italic max-w-2xl">{street.subtitle}</p>
        <div className="gold-divider mt-6 max-w-[120px]" />
      </section>

      {/* Hero image */}
      <section className="container mt-8 md:mt-10">
        <div className="relative rounded-3xl overflow-hidden shadow-heritage-lg aspect-[16/10] md:aspect-[16/8]">
          <img src={street.heroImage} alt={street.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/30 via-transparent to-transparent" />
        </div>
      </section>

      {/* Audio Player */}
      <section className="container mt-8 md:mt-10 max-w-3xl">
        <AudioPlayer title={street.audio.title} src={street.audio.src} duration={street.audio.duration} />
      </section>

      {/* Body text */}
      <article className="container mt-12 md:mt-16 max-w-3xl">
        <div className="space-y-5 text-[17px] leading-[1.85] text-heritage-ink/90">
          {street.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-heritage-green first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]' : ''}>
              {p}
            </p>
          ))}
        </div>

        {/* Expandable */}
        <div className="mt-10">
          <ExpandableSection title={street.expandable.title}>
            <div className="space-y-4 text-[16px] leading-[1.8] text-heritage-gray">
              {street.expandable.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </ExpandableSection>
        </div>
      </article>

      {/* Tabs */}
      <section className="container mt-14 max-w-4xl">
        <div className="flex gap-1 border-b border-heritage-gold/25 overflow-x-auto no-scrollbar">
          {street.tabs.map((t) => {
            const active = activeTab === t.id
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`relative px-5 py-3 text-sm whitespace-nowrap font-medium transition ${active ? 'text-heritage-green' : 'text-heritage-gray-light hover:text-heritage-green'}`}
              >
                {t.label}
                {active && <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-heritage-gold" />}
              </button>
            )
          })}
        </div>

        <div className="py-8 min-h-[200px] animate-fade-in">
          {activeTab === 'historia' && (
            <div className="space-y-4 text-[16px] leading-[1.85] text-heritage-gray max-w-3xl">
              <p>{street.paragraphs[0]}</p>
              <p className="text-heritage-ink/90">{street.paragraphs[1]}</p>
            </div>
          )}

          {activeTab === 'galeria' && (
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-heritage">
                <img src={street.gallery[galleryIdx]} alt="" className="w-full h-full object-cover" />
                <button onClick={() => setGalleryIdx((galleryIdx - 1 + street.gallery.length) % street.gallery.length)} className="absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 rounded-full bg-heritage-warm/90 flex items-center justify-center text-heritage-green hover:bg-heritage-gold hover:text-white transition">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setGalleryIdx((galleryIdx + 1) % street.gallery.length)} className="absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 rounded-full bg-heritage-warm/90 flex items-center justify-center text-heritage-green hover:bg-heritage-gold hover:text-white transition">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {street.gallery.map((g, i) => (
                  <button key={i} onClick={() => setGalleryIdx(i)} className={`aspect-square rounded-lg overflow-hidden border-2 transition ${galleryIdx===i ? 'border-heritage-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <img src={g} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'curiosidades' && (
            <ul className="space-y-5">
              {street.curiosities.map((c, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-heritage-gold/15 text-heritage-gold font-serif font-bold flex items-center justify-center text-sm">{i+1}</span>
                  <p className="text-heritage-ink/90 leading-relaxed pt-1">{c}</p>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'memorias' && (
            <div className="space-y-12">
              {/* Intro */}
              <div className="text-center max-w-2xl mx-auto">
                <p className="eyebrow mb-3">Memórias da Comunidade</p>
                <h3 className="font-serif text-3xl md:text-4xl text-heritage-green leading-tight">
                  As vozes que mantêm esta rua viva.
                </h3>
                <div className="gold-divider mt-5 max-w-[120px] mx-auto" />
                <p className="text-heritage-gray mt-5 leading-relaxed">
                  Este é um arquivo comunitário aberto. Cada testemunho — uma recordação,
                  uma fotografia antiga, uma história de família — torna-se parte do
                  património imaterial deste lugar.
                </p>
              </div>

              {/* Form + Grid (2 cols on desktop) */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                <div className="lg:sticky lg:top-44">
                  <MemoryForm streetSlug={street.slug} />
                </div>

                <div>
                  <div className="flex items-baseline justify-between gap-3 mb-5">
                    <h4 className="font-serif text-2xl text-heritage-green">Memórias Partilhadas</h4>
                    <span className="text-xs uppercase tracking-[0.18em] text-heritage-gold">
                      {street.communityMemories?.length || 0} testemunhos
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
                    {(street.communityMemories || []).map((m) => (
                      <MemoryCard key={m.id} {...m} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom banner */}
              <div className="relative overflow-hidden rounded-3xl bg-heritage-green text-heritage-warm">
                <div className="absolute inset-0 opacity-25">
                  <img
                    src="https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-heritage-green/75" />
                </div>
                <div className="relative px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
                  <div className="max-w-xl mx-auto md:mx-0">
                    <Quote className="w-7 h-7 text-heritage-gold/70 mb-3 mx-auto md:mx-0" strokeWidth={1.4} />
                    <p className="font-serif text-2xl md:text-3xl leading-tight">
                      Cada memória é um pedaço da nossa história.
                    </p>
                    <p className="text-heritage-warm/75 text-sm mt-3 leading-relaxed">
                      Construímos, juntos, um arquivo vivo que ninguém quer perder.
                    </p>
                  </div>
                  <a href="#" className="btn-gold flex-shrink-0 mx-auto md:mx-0">
                    Ver todas as memórias <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Personality */}
      <section className="container mt-10 max-w-4xl">
        <PersonalityCard
          name={street.personality.name}
          dates={street.personality.dates}
          photo={street.personality.photo}
          bio={street.personality.bio}
        />
      </section>

      {/* Explora Mais */}
      <section className="mt-16 md:mt-20">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Explora Mais</p>
              <h2 className="section-title">Histórias próximas para descobrir</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex gap-5 overflow-x-auto no-scrollbar -mx-5 px-5 pb-2 snap-x snap-mandatory">
            {street.related.map((r) => (
              <div key={r.slug} className="flex-shrink-0 w-[78%] sm:w-[45%] lg:w-[31%] snap-start">
                <PlaceCard name={r.name} description={r.description} image={r.image} slug={r.slug} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="container mt-14 max-w-4xl">
        <div className="heritage-card border border-heritage-gold/20 p-6 md:p-8">
          <ShareRow title={`${street.title} · Histórias que Ficam`} />
        </div>
      </section>

      <Footer />
      <MobileBottomNav active="mapa" />
    </div>
  )
}
