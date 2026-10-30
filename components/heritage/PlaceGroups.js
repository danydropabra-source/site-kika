'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import PlaceCard from '@/components/heritage/PlaceCard'
import { useT } from '@/lib/i18n/I18nProvider'

// Hash used to remember the open group, e.g. /#locais-covilha. Coming back
// from a street page (browser "back") lands on the same group, open.
const HASH_PREFIX = '#locais-'

/**
 * "Locais" on the homepage: one card per big place (Fundão, Covilhã…).
 * Clicking a card reveals that place's streets; clicking it again hides them.
 * Groups and the `group` of each street come from lib/heritage-data.js.
 */
export default function PlaceGroups({ groups, places }) {
  const t = useT()
  const [openId, setOpenId] = useState(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith(HASH_PREFIX)) {
      const id = hash.slice(HASH_PREFIX.length)
      if (groups.some((g) => g.id === id)) setOpenId(id)
    }
  }, [groups])

  const toggle = (id) => {
    const next = openId === id ? null : id
    setOpenId(next)
    // replaceState, not a navigation: no scroll jump and no extra history entry.
    window.history.replaceState(null, '', next ? `${HASH_PREFIX}${next}` : '#locais')
  }

  const openGroup = groups.find((g) => g.id === openId)
  const openPlaces = places.filter((p) => p.group === openId)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {groups.map((g) => {
          const count = places.filter((p) => p.group === g.id).length
          const isOpen = g.id === openId
          return (
            <button
              key={g.id}
              id={`locais-${g.id}`}
              type="button"
              onClick={() => toggle(g.id)}
              aria-expanded={isOpen}
              aria-controls="locais-ruas"
              className={`group relative h-56 md:h-72 rounded-2xl overflow-hidden text-left shadow-heritage transition-all duration-300 hover:shadow-heritage-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold focus-visible:ring-offset-2 ${isOpen ? 'ring-2 ring-heritage-gold ring-offset-2 ring-offset-heritage-beige' : ''}`}
            >
              <Image
                src={g.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: g.imageFocus || '50% 50%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-green-dark/90 via-heritage-green/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-heritage-gold-light uppercase tracking-[0.28em] text-[11px] mb-2">
                    {t('home.placesCount').replace('{n}', String(count))}
                  </p>
                  <h3 className="font-serif text-4xl md:text-5xl text-heritage-warm leading-none">{g.name}</h3>
                </div>
                <span className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border transition ${isOpen ? 'bg-heritage-gold border-heritage-gold text-white' : 'bg-heritage-warm/15 border-heritage-warm/50 text-heritage-warm group-hover:bg-heritage-gold group-hover:border-heritage-gold'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </span>
              </div>
            </button>
          )
        })}
      </div>

      <div id="locais-ruas" aria-live="polite">
        {openGroup ? (
          <div key={openGroup.id} className="mt-10 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-serif text-2xl md:text-3xl text-heritage-green">{openGroup.name}</h3>
              <div className="h-px flex-1 bg-heritage-gold/30" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {openPlaces.map((p) => (
                <PlaceCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-6 text-center text-sm text-heritage-gray italic font-serif">{t('home.chooseGroup')}</p>
        )}
      </div>
    </>
  )
}
