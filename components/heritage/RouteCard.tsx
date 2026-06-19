'use client'

import Link from 'next/link'
import { ArrowUpRight, MapPin, Footprints, Clock } from 'lucide-react'
import type { Route } from '@/lib/types'
import { useT } from '@/lib/i18n/I18nProvider'

interface Props {
  route: Route
}

export default function RouteCard({ route }: Props) {
  const t = useT()
  return (
    <Link
      href={`/rotas/${route.slug}`}
      className="group heritage-card border border-heritage-gold/15 hover:shadow-heritage-lg transition-all duration-300 hover:-translate-y-1 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold focus-visible:ring-offset-2"
      aria-label={`${route.title} — ${route.stop_count} ${t('common.saberMais')}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={route.image}
          alt={route.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/55 via-heritage-green/10 to-transparent" />
        {route.theme && (
          <span className="absolute top-3 left-3 bg-heritage-warm/95 backdrop-blur text-[10px] tracking-[0.18em] uppercase text-heritage-green px-2.5 py-1 rounded-full">
            {route.theme}
          </span>
        )}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-heritage-gold text-white text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full font-bold">
          <MapPin className="w-3 h-3" aria-hidden="true" />
          {route.stop_count} locais
        </span>
      </div>
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl md:text-2xl text-heritage-green leading-tight">{route.title}</h3>
        <div className="h-px w-10 bg-heritage-gold/50 my-3" />
        <p className="text-sm text-heritage-gray leading-relaxed flex-1">{route.short_description}</p>

        <div className="mt-5 flex items-center gap-4 text-[11px] text-heritage-gray-light uppercase tracking-[0.14em]">
          {route.duration_min && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-heritage-gold" aria-hidden="true" /> {route.duration_min} min
            </span>
          )}
          {route.distance_km && (
            <span className="inline-flex items-center gap-1.5">
              <Footprints className="w-3 h-3 text-heritage-gold" aria-hidden="true" /> {route.distance_km} km
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-heritage-gold text-[11px] font-bold uppercase tracking-[0.16em]">
            {t('common.saberMais')}
          </span>
          <span className="w-9 h-9 rounded-full border border-heritage-gold/40 flex items-center justify-center text-heritage-gold group-hover:bg-heritage-gold group-hover:text-white transition">
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  )
}
