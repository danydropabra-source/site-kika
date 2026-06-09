'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Map, Route, Heart, MoreHorizontal } from 'lucide-react'

const ITEMS = [
  { id: 'inicio', label: 'Início', icon: Home, href: '/' },
  { id: 'mapa', label: 'Mapa', icon: Map, href: '/mapa' },
  { id: 'rotas', label: 'Rotas', icon: Route, href: '/rotas' },
  { id: 'favoritos', label: 'Favoritos', icon: Heart, href: '/favoritos' },
  { id: 'menu', label: 'Menu', icon: MoreHorizontal, href: '/menu' },
]

export default function MobileBottomNav({ active }) {
  const pathname = usePathname()
  const resolveActive = (item) => {
    if (active) return active === item.id
    if (item.href === '/') return pathname === '/'
    return pathname?.startsWith(item.href)
  }

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-heritage-green text-heritage-warm border-t border-heritage-gold/20 safe-area">
      <div className="grid grid-cols-5 max-w-xl mx-auto">
        {ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = resolveActive(item)
          return (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center justify-center py-2.5 gap-1 relative"
            >
              {isActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-heritage-gold rounded-full" />}
              <Icon className={`w-5 h-5 ${isActive ? 'text-heritage-gold' : 'text-heritage-warm/80'}`} strokeWidth={1.5} />
              <span className={`text-[10px] tracking-wider ${isActive ? 'text-heritage-gold' : 'text-heritage-warm/70'}`}>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
