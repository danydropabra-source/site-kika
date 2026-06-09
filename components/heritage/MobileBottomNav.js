'use client'

import { Home, Map, Route, Heart, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

const ITEMS = [
  { id: 'inicio', label: 'Início', icon: Home },
  { id: 'mapa', label: 'Mapa', icon: Map },
  { id: 'rotas', label: 'Rotas', icon: Route },
  { id: 'favoritos', label: 'Favoritos', icon: Heart },
  { id: 'menu', label: 'Menu', icon: MoreHorizontal },
]

export default function MobileBottomNav({ active = 'inicio' }) {
  const [current, setCurrent] = useState(active)
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-heritage-green text-heritage-warm border-t border-heritage-gold/20 safe-area">
      <div className="grid grid-cols-5 max-w-xl mx-auto">
        {ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = current === id
          return (
            <button
              key={id}
              onClick={() => setCurrent(id)}
              className="flex flex-col items-center justify-center py-2.5 gap-1 relative"
            >
              {isActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-heritage-gold rounded-full" />}
              <Icon className={`w-5 h-5 ${isActive ? 'text-heritage-gold' : 'text-heritage-warm/80'}`} strokeWidth={1.5} />
              <span className={`text-[10px] tracking-wider ${isActive ? 'text-heritage-gold' : 'text-heritage-warm/70'}`}>{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
