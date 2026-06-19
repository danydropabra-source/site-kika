'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { ArrowRight, Heart, Map as MapIcon, Trash2 } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import PlaceCard from '@/components/heritage/PlaceCard'
import { useFavorites } from '@/lib/useFavorites'
import { getPlaceBySlug, getStreet } from '@/lib/api'
import { useT } from '@/lib/i18n/I18nProvider'

export default function FavoritosPage() {
  const t = useT()
  const { favorites, ready, count, remove } = useFavorites()

  const items = useMemo(() => {
    return favorites
      .map((slug) => {
        const place = getPlaceBySlug(slug)
        if (place) return { ...place, _hasPage: !!getStreet(slug) }
        // Unknown slug — still show a minimal card so user can remove it.
        return {
          id: slug,
          slug,
          name: slug,
          location: '',
          description: t('favorites.unknown'),
          image: 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=900',
          _hasPage: false,
        }
      })
  }, [favorites, t])

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* Hero */}
      <section className="container pt-12 md:pt-16 max-w-4xl">
        <p className="eyebrow flex items-center gap-2">
          <Heart className="w-3.5 h-3.5 text-heritage-gold" fill="currentColor" aria-hidden="true" />
          {t('favorites.eyebrow')}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-heritage-green mt-3 leading-[1.05] tracking-tight">
          {t('favorites.title')}
        </h1>
        <p className="mt-3 text-lg md:text-xl text-heritage-gray font-serif italic max-w-2xl leading-relaxed">
          {t('favorites.subtitle')}
        </p>
        <div className="gold-divider mt-6 max-w-[120px]" />
        {ready && count > 0 && (
          <p className="text-xs uppercase tracking-[0.18em] text-heritage-gold font-bold mt-5">
            {count} {count === 1 ? t('favorites.count_singular') : t('favorites.count_plural')}
          </p>
        )}
      </section>

      {/* Body */}
      <section className="container mt-10 md:mt-14">
        {!ready ? (
          /* Loading skeleton */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="heritage-card border border-heritage-gold/15 overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-heritage-beige-dark/50" />
                <div className="p-5 space-y-3">
                  <div className="h-5 w-2/3 rounded bg-heritage-beige-dark/50" />
                  <div className="h-px w-10 bg-heritage-gold/30" />
                  <div className="h-3 w-full rounded bg-heritage-beige-dark/40" />
                  <div className="h-3 w-4/5 rounded bg-heritage-beige-dark/40" />
                </div>
              </div>
            ))}
          </div>
        ) : count === 0 ? (
          /* Empty state */
          <div className="heritage-card border border-heritage-gold/20 p-10 md:p-14 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full border border-heritage-gold/40 flex items-center justify-center mb-5 text-heritage-gold">
              <Heart className="w-7 h-7" strokeWidth={1.6} aria-hidden="true" />
            </div>
            <p className="eyebrow mb-2">{t('favorites.eyebrow')}</p>
            <h2 className="font-serif text-2xl md:text-3xl text-heritage-green leading-tight">
              {t('favorites.empty_title')}
            </h2>
            <div className="gold-divider my-5 max-w-[80px] mx-auto" />
            <p className="text-heritage-gray leading-relaxed max-w-md mx-auto">
              {t('favorites.empty_body')}
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/mapa" className="btn-gold">
                <MapIcon className="w-3.5 h-3.5" aria-hidden="true" /> {t('home.exploreMap')}
              </Link>
              <Link href="/historias/rua-da-cale-fundao" className="btn-ghost-green">
                {t('home.seeExample')}
              </Link>
            </div>
          </div>
        ) : (
          /* Grid */
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((p) => (
                <div key={p.slug} className="relative group">
                  <PlaceCard {...p} showFavorite={true} />
                  <button
                    type="button"
                    onClick={() => remove(p.slug)}
                    aria-label={t('favorites.remove')}
                    className="absolute -top-2 -right-2 z-[2] w-9 h-9 rounded-full bg-heritage-warm border border-heritage-gold/40 text-heritage-green flex items-center justify-center shadow-heritage opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold hover:bg-heritage-green hover:text-heritage-warm transition"
                  >
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>

            {/* CTA: keep exploring */}
            <div className="mt-12 md:mt-16 text-center">
              <p className="text-heritage-gray italic mb-3">{t('favorites.cta_body')}</p>
              <Link href="/mapa" className="btn-ghost-gold inline-flex">
                <MapIcon className="w-3.5 h-3.5" aria-hidden="true" /> {t('home.exploreMap')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </section>

      <Footer />
      <MobileBottomNav active="favoritos" />
    </div>
  )
}
