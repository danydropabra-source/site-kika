'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Map, Route, Heart, MoreHorizontal } from 'lucide-react'
import { useT } from '@/lib/i18n/I18nProvider'
import MenuSheet from './MenuSheet'

export default function MobileBottomNav({ active }) {
  const t = useT()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const ITEMS = [
    { id: 'inicio', label: t('bottomNav.home'), icon: Home, href: '/' },
    { id: 'mapa', label: t('bottomNav.map'), icon: Map, href: '/mapa' },
    { id: 'rotas', label: t('bottomNav.routes'), icon: Route, href: '/rotas' },
    { id: 'favoritos', label: t('bottomNav.favorites'), icon: Heart, href: '/favoritos' },
  ]

  const resolveActive = (item) => {
    if (active) return active === item.id
    if (item.href === '/') return pathname === '/'
    return pathname?.startsWith(item.href)
  }

  const menuActive = menuOpen || active === 'menu'

  return (
    <>
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-heritage-green text-heritage-warm border-t border-heritage-gold/20"
        aria-label="Mobile principal"
      >
        <div className="grid grid-cols-5 max-w-xl mx-auto">
          {ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = resolveActive(item)
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className="flex flex-col items-center justify-center py-2.5 gap-1 relative min-h-[56px] focus:outline-none focus-visible:bg-heritage-green-dark"
              >
                {isActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-heritage-gold rounded-full" />}
                <Icon className={`w-5 h-5 ${isActive ? 'text-heritage-gold' : 'text-heritage-warm/80'}`} strokeWidth={1.5} aria-hidden="true" />
                <span className={`text-[10px] tracking-wider ${isActive ? 'text-heritage-gold' : 'text-heritage-warm/70'}`}>{item.label}</span>
              </Link>
            )
          })}

          {/* Menu (opens sheet) */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            aria-controls="mobile-menu-sheet"
            className="flex flex-col items-center justify-center py-2.5 gap-1 relative min-h-[56px] focus:outline-none focus-visible:bg-heritage-green-dark"
          >
            {menuActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-heritage-gold rounded-full" />}
            <MoreHorizontal className={`w-5 h-5 ${menuActive ? 'text-heritage-gold' : 'text-heritage-warm/80'}`} strokeWidth={1.5} aria-hidden="true" />
            <span className={`text-[10px] tracking-wider ${menuActive ? 'text-heritage-gold' : 'text-heritage-warm/70'}`}>
              {t('bottomNav.menu')}
            </span>
          </button>
        </div>
      </nav>

      <MenuSheet open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
