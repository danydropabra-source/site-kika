// ============================================================
// Single source of truth for the main site navigation.
// Consumed by both the desktop Header and the mobile MenuSheet,
// so labels and routes stay in sync.
// ============================================================

import { Map, Route, Landmark, CalendarDays, Info, MessageCircle } from 'lucide-react'

/**
 * @param {(key: string) => string} t  i18n translator
 * @returns {Array<{ id: string, label: string, href: string, icon: any }>}
 */
export function getNavItems(t) {
  return [
    { id: 'explorar', label: t('nav.explore'), href: '/mapa', icon: Map },
    { id: 'rotas', label: t('nav.routes'), href: '/rotas', icon: Route },
    { id: 'locais', label: t('nav.places'), href: '/#locais', icon: Landmark },
    { id: 'hoje', label: t('nav.today'), href: '/#hoje', icon: CalendarDays },
    { id: 'sobre', label: t('nav.about'), href: '/sobre', icon: Info },
    { id: 'contactos', label: t('nav.contact'), href: '/contactos', icon: MessageCircle },
  ]
}
