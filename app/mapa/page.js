'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin as MapPinIcon, Compass } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import MapPin from '@/components/heritage/MapPin'
import MapPreviewCard from '@/components/heritage/MapPreviewCard'
import { featuredPlaces } from '@/lib/heritage-data'
import { useT } from '@/lib/i18n/I18nProvider'

const HeritageMap = dynamic(() => import('@/components/heritage/HeritageMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-heritage-beige-dark/40">
      <div className="flex flex-col items-center gap-3 text-heritage-green">
        <Compass className="w-8 h-8 animate-spin" strokeWidth={1.5} aria-hidden="true" />
        <p className="text-xs uppercase tracking-[0.22em] text-heritage-gold">A carregar mapa…</p>
      </div>
    </div>
  ),
})

export default function MapPage() {
  const t = useT()
  const [selected, setSelected] = useState(null)
  const pilot = featuredPlaces.find((p) => p.pilot)

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      <section className="container pt-10 md:pt-14 pb-6">
        <p className="eyebrow">{t('map.eyebrow')}</p>
        <h1 className="font-serif text-4xl md:text-5xl text-heritage-green mt-2 leading-tight tracking-tight">
          {t('map.title')}
        </h1>
        <p className="mt-3 text-heritage-gray text-lg max-w-2xl font-serif italic">{t('map.subtitle')}</p>
        <div className="gold-divider mt-6 max-w-[140px]" />
      </section>

      <section className="container pb-12">
        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          <div className="relative h-[60vh] min-h-[420px] lg:h-[640px] rounded-2xl overflow-hidden border border-heritage-gold/25 shadow-heritage">
            <HeritageMap places={featuredPlaces} selected={selected} onSelect={setSelected} />

            <div className="absolute top-3 right-3 z-[500] bg-heritage-warm/95 backdrop-blur border border-heritage-gold/25 rounded-xl px-4 py-3 shadow-heritage hidden sm:block" aria-label={t('map.legend')}>
              <p className="text-[10px] uppercase tracking-[0.22em] text-heritage-gold font-bold mb-2">{t('map.legend')}</p>
              <div className="flex flex-col gap-1.5">
                <MapPin pilot label={t('map.pilotPoint')} />
                <MapPin label={t('map.placeWithStory')} />
              </div>
            </div>

            {selected && (
              <div className="lg:hidden absolute bottom-3 left-3 right-3 z-[500] animate-fade-in">
                <MapPreviewCard place={selected} onClose={() => setSelected(null)} floating />
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-3" aria-label={t('map.placesOnMap')}>
            <div className="hidden lg:block">
              {selected ? (
                <MapPreviewCard place={selected} onClose={() => setSelected(null)} />
              ) : (
                <div className="heritage-card border border-heritage-gold/25 p-6">
                  <Compass className="w-6 h-6 text-heritage-gold mb-3" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-serif text-xl text-heritage-green">{t('map.startExploring')}</h3>
                  <div className="h-px w-10 bg-heritage-gold/60 my-3" />
                  <p className="text-sm text-heritage-gray leading-relaxed">
                    {t('map.startBody')} <strong className="text-heritage-green font-bold">{pilot?.name || 'Rua da Cale'}</strong>{t('map.startBodyAfter')}
                  </p>
                </div>
              )}
            </div>

            <div className="heritage-card border border-heritage-gold/20">
              <div className="px-5 py-4 border-b border-heritage-gold/15">
                <p className="eyebrow">{t('map.placesOnMap')}</p>
                <p className="text-xs text-heritage-gray mt-1">{featuredPlaces.length} {t('map.pointsCount')} · Fundão</p>
              </div>
              <ul className="divide-y divide-heritage-gold/10 max-h-[420px] overflow-y-auto">
                {featuredPlaces.map((p) => {
                  const active = selected?.slug === p.slug
                  return (
                    <li key={p.slug}>
                      <button
                        onClick={() => setSelected(p)}
                        aria-pressed={active}
                        className={`w-full text-left px-5 py-3 flex items-center gap-3 transition min-h-[56px] focus:outline-none focus-visible:bg-heritage-gold/15 ${active ? 'bg-heritage-gold/10' : 'hover:bg-heritage-beige/60'}`}
                      >
                        <span className="flex-shrink-0">
                          <MapPin pilot={p.pilot} />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-serif text-[15px] text-heritage-green truncate leading-tight">{p.name}</span>
                          <span className="block text-[11px] text-heritage-gray-light truncate">{p.description}</span>
                        </span>
                        <MapPinIcon className={`w-4 h-4 flex-shrink-0 ${active ? 'text-heritage-gold' : 'text-heritage-gold/40'}`} aria-hidden="true" />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
      <MobileBottomNav active="mapa" />
    </div>
  )
}
