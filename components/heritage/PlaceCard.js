'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Heart } from 'lucide-react'
import { useState } from 'react'
import { useT } from '@/lib/i18n/I18nProvider'
import { useFavorite } from '@/lib/useFavorites'

export default function PlaceCard({
  name,
  description,
  image,
  // Which part of the photo stays visible once it is cropped to the card.
  // '50% 50%' is the middle; a bigger second number shows more of the bottom.
  // Set per place via `imageFocus` in heritage-data.js.
  imageFocus = '50% 50%',
  slug,
  location,
  compact = false,
  showFavorite = true,
}) {
  const t = useT()
  const { isFav, ready, toggle } = useFavorite(slug)
  const [pulse, setPulse] = useState(false)

  const onToggleFav = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    await toggle()
    setPulse(true)
    setTimeout(() => setPulse(false), 350)
  }

  return (
    <Link
      href={slug ? `/historias/${slug}` : '#'}
      className="group heritage-card border border-heritage-gold/15 hover:shadow-heritage-lg transition-all duration-300 hover:-translate-y-1 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold focus-visible:ring-offset-2"
      aria-label={`${name} — ${t('common.saberMais')}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${name}${location ? ' — ' + location : ''}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          // Inline style, not a Tailwind class: the value comes from the data
          // and Tailwind can only generate classes it can see in the source.
          style={{ objectPosition: imageFocus }}
        />
        {location && (
          <span className="absolute top-3 left-3 bg-heritage-warm/95 backdrop-blur text-[10px] tracking-[0.18em] uppercase text-heritage-green px-2.5 py-1 rounded-full">
            {location}
          </span>
        )}
        {showFavorite && slug && (
          <button
            type="button"
            onClick={onToggleFav}
            aria-label={isFav ? t('favorites.remove') : t('favorites.add')}
            aria-pressed={isFav}
            className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-heritage-warm/95 backdrop-blur flex items-center justify-center shadow-heritage transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold ${isFav ? 'text-heritage-gold' : 'text-heritage-green hover:text-heritage-gold'} ${pulse ? 'scale-125' : 'scale-100'}`}
          >
            <Heart
              className={`w-4 h-4 transition-transform ${pulse ? 'scale-110' : ''}`}
              fill={ready && isFav ? 'currentColor' : 'none'}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <div className={`p-5 ${compact ? 'pb-5' : 'pb-6'} flex-1 flex flex-col`}>
        <h3 className="font-serif text-xl text-heritage-green leading-tight">{name}</h3>
        <div className="h-px w-10 bg-heritage-gold/50 my-3" />
        <p className="text-sm text-heritage-gray leading-relaxed flex-1">{description}</p>
        <div className="mt-4 flex items-center gap-2 text-heritage-gold text-[11px] font-bold uppercase tracking-[0.16em]">
          {t('common.saberMais')} <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}
