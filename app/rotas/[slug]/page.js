'use client'

import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { ArrowLeft, ArrowRight, MapPin, Clock, Footprints, ChevronRight } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import { getRouteBySlug, getPlaceBySlug, getStreet } from '@/lib/api'
import { useT } from '@/lib/i18n/I18nProvider'

export default function RouteDetailPage() {
  const params = useParams()
  const t = useT()
  const route = getRouteBySlug(params?.slug)
  if (!route) return notFound()

  // Build the stops list from street_ids (or `stops` if present).
  const baseStops = route.stops?.length
    ? route.stops.map((s) => ({ street_id: s.street_id, title: s.title, note: s.note }))
    : route.street_ids.map((sid) => ({ street_id: sid }))

  const stops = baseStops.map((s, i) => {
    const place = getPlaceBySlug(s.street_id)
    const hasPage = !!getStreet(s.street_id)
    return {
      index: i + 1,
      street_id: s.street_id,
      title: s.title || place?.name || s.street_id,
      description: place?.description || '',
      image: place?.image,
      location: place?.location,
      hasPage,
      note: s.note,
    }
  })

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* Sub-bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-heritage-beige/85 backdrop-blur border-b border-heritage-gold/15">
        <div className="container flex items-center justify-between py-3">
          <Link href="/rotas" className="inline-flex items-center gap-2 text-heritage-green text-sm font-medium hover:text-heritage-gold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold rounded px-1">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{t('routes.all_routes')}</span>
          </Link>
          <span className="text-xs uppercase tracking-[0.18em] text-heritage-gold font-bold">
            {route.theme}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="container pt-8 md:pt-12">
        <p className="eyebrow">{t('routes.eyebrow')}</p>
        <h1 className="font-serif text-4xl md:text-6xl text-heritage-green mt-3 leading-[1.05] tracking-tight">
          {route.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-heritage-gray font-serif italic max-w-3xl leading-relaxed">
          {route.short_description}
        </p>
        <div className="gold-divider mt-6 max-w-[120px]" />

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-2 bg-heritage-warm border border-heritage-gold/25 rounded-full px-4 py-2">
            <MapPin className="w-4 h-4 text-heritage-gold" aria-hidden="true" />
            <span className="text-heritage-green font-medium">{route.stop_count} {t('routes.stops')}</span>
          </span>
          {route.duration_min && (
            <span className="inline-flex items-center gap-2 bg-heritage-warm border border-heritage-gold/25 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-heritage-gold" aria-hidden="true" />
              <span className="text-heritage-green font-medium">~ {route.duration_min} min</span>
            </span>
          )}
          {route.distance_km && (
            <span className="inline-flex items-center gap-2 bg-heritage-warm border border-heritage-gold/25 rounded-full px-4 py-2">
              <Footprints className="w-4 h-4 text-heritage-gold" aria-hidden="true" />
              <span className="text-heritage-green font-medium">{route.distance_km} km</span>
            </span>
          )}
        </div>
      </section>

      {/* Cover image */}
      <section className="container mt-8 md:mt-10">
        <div className="relative rounded-3xl overflow-hidden shadow-heritage-lg aspect-[16/9] md:aspect-[21/8]">
          <img src={route.image} alt={route.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* Long description */}
      {route.long_description && (
        <article className="container mt-10 max-w-3xl">
          <p className="text-[17px] leading-[1.85] text-heritage-ink/90 first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-heritage-green first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]">
            {route.long_description}
          </p>
        </article>
      )}

      {/* Stops timeline */}
      <section className="container mt-14 md:mt-20 max-w-4xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eyebrow mb-2">{t('routes.stops_eyebrow')}</p>
            <h2 className="section-title">{t('routes.stops_title')}</h2>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-heritage-gold hidden sm:inline">
            {stops.length} {t('routes.stops')}
          </span>
        </div>

        <ol className="relative space-y-5 border-l-2 border-heritage-gold/25 ml-5 pl-8 sm:ml-0 sm:pl-0 sm:border-0 sm:space-y-6">
          {stops.map((s) => {
            const Wrapper = s.hasPage ? Link : 'div'
            const wrapperProps = s.hasPage ? { href: `/historias/${s.street_id}` } : {}
            return (
              <li key={s.street_id + s.index} className="relative">
                {/* Step bullet on the timeline (mobile) */}
                <span
                  aria-hidden="true"
                  className="sm:hidden absolute -left-[2.4rem] top-5 w-9 h-9 rounded-full bg-heritage-warm border-2 border-heritage-gold text-heritage-gold flex items-center justify-center font-serif font-bold text-sm shadow-heritage"
                >
                  {s.index}
                </span>
                <Wrapper
                  {...wrapperProps}
                  className={`heritage-card border border-heritage-gold/20 overflow-hidden group flex flex-col sm:flex-row transition ${
                    s.hasPage ? 'hover:shadow-heritage-lg hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold' : 'opacity-90'
                  }`}
                  aria-disabled={!s.hasPage ? 'true' : undefined}
                >
                  {/* Image */}
                  {s.image && (
                    <div className="relative w-full sm:w-56 sm:flex-shrink-0 aspect-[16/10] sm:aspect-auto sm:min-h-[180px] overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-heritage-green/30 to-transparent" />
                      <span
                        aria-hidden="true"
                        className="hidden sm:flex absolute top-3 left-3 w-9 h-9 rounded-full bg-heritage-warm border-2 border-heritage-gold text-heritage-gold items-center justify-center font-serif font-bold text-sm shadow-heritage"
                      >
                        {s.index}
                      </span>
                    </div>
                  )}
                  {/* Content */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-heritage-gold font-bold">
                        {t('routes.stop')} {s.index}
                      </span>
                      {s.location && (
                        <span className="text-[10px] uppercase tracking-[0.18em] text-heritage-gray-light">· {s.location}</span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-heritage-green leading-tight mt-1">{s.title}</h3>
                    <div className="h-px w-10 bg-heritage-gold/50 my-3" />
                    {s.description && (
                      <p className="text-sm text-heritage-gray leading-relaxed flex-1">{s.description}</p>
                    )}
                    {s.note && (
                      <p className="mt-3 text-[13px] italic text-heritage-gold border-l-2 border-heritage-gold/40 pl-3">{s.note}</p>
                    )}
                    <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]">
                      {s.hasPage ? (
                        <span className="text-heritage-gold inline-flex items-center gap-2">
                          {t('common.verHistoria')}
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      ) : (
                        <span className="text-heritage-gray-light">{t('routes.coming_soon')}</span>
                      )}
                    </div>
                  </div>
                </Wrapper>
              </li>
            )
          })}
        </ol>
      </section>

      {/* Bottom cta */}
      <section className="container mt-16 md:mt-20">
        <div className="relative overflow-hidden rounded-3xl bg-heritage-green text-heritage-warm">
          <div className="absolute inset-0 opacity-25">
            <img src={route.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-heritage-green/75" />
          </div>
          <div className="relative px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
            <div className="max-w-xl mx-auto md:mx-0">
              <p className="text-heritage-gold-light uppercase tracking-[0.22em] text-xs mb-3">{t('routes.cta_eyebrow')}</p>
              <p className="font-serif text-2xl md:text-3xl leading-tight">{t('routes.detail_cta_title')}</p>
              <p className="text-heritage-warm/80 text-sm mt-3 leading-relaxed">{t('routes.detail_cta_body')}</p>
            </div>
            <Link href="/mapa" className="btn-gold flex-shrink-0 mx-auto md:mx-0">
              {t('routes.open_map')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav active="rotas" />
    </div>
  )
}
