'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Globe, ChevronRight } from 'lucide-react'
import { useI18n, useT } from '@/lib/i18n/I18nProvider'
import { getNavItems } from '@/lib/nav'

const LANG_LABELS = { pt: 'PT', en: 'EN', es: 'ES' }

export default function MenuSheet({ open, onClose }) {
  const t = useT()
  const { locale, setLocale, locales } = useI18n()
  const pathname = usePathname()
  const containerRef = useRef(null)
  const previouslyFocused = useRef(null)

  // Two-phase mount so we can play enter AND exit animations.
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)

  // Enter / exit lifecycle.
  useEffect(() => {
    if (open) {
      setRendered(true)
      // Two RAFs so the initial closed styles paint before the open ones.
      const id1 = requestAnimationFrame(() => {
        const id2 = requestAnimationFrame(() => setVisible(true))
        return () => cancelAnimationFrame(id2)
      })
      return () => cancelAnimationFrame(id1)
    } else if (rendered) {
      setVisible(false)
      const t = setTimeout(() => setRendered(false), 320)
      return () => clearTimeout(t)
    }
  }, [open, rendered])

  // Lock body scroll, focus trap, ESC handling.
  useEffect(() => {
    if (!rendered) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    previouslyFocused.current = document.activeElement

    const getFocusables = () => {
      const root = containerRef.current
      if (!root) return []
      return Array.from(
        root.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )
    }

    // Initial focus on the close button (or first focusable).
    const focusables = getFocusables()
    if (focusables.length) focusables[0].focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const items = getFocusables()
        if (items.length === 0) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      const prev = previouslyFocused.current
      if (prev && typeof prev.focus === 'function') {
        try { prev.focus() } catch (e) { /* ignore */ }
      }
    }
  }, [rendered, onClose])

  // Auto-close when route changes (link clicks).
  useEffect(() => {
    if (open) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  if (!rendered) return null

  const items = getNavItems(t)

  const isItemActive = (href) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/'
    return pathname?.startsWith(href.split('#')[0])
  }

  return (
    <div
      className="lg:hidden fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-sheet-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label={t('common.close')}
        onClick={onClose}
        className={`absolute inset-0 bg-heritage-green-dark/60 backdrop-blur-sm transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        tabIndex={-1}
      />

      {/* Sheet */}
      <div
        ref={containerRef}
        className={`absolute bottom-0 left-0 right-0 bg-heritage-warm rounded-t-3xl shadow-heritage-lg border-t border-heritage-gold/30 max-h-[92vh] flex flex-col transform transition-transform duration-300 ease-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Grab handle */}
        <div className="pt-3 pb-1 flex justify-center" aria-hidden="true">
          <span className="w-10 h-1 rounded-full bg-heritage-gold/40" />
        </div>

        {/* Header */}
        <div className="px-6 pt-3 pb-4 flex items-start justify-between gap-4 border-b border-heritage-gold/15">
          <div>
            <p className="eyebrow">{t('common.menu')}</p>
            <h2 id="menu-sheet-title" className="font-serif text-2xl text-heritage-green leading-tight mt-1">
              Histórias que Ficam
            </h2>
            <p className="text-[10px] tracking-[0.22em] uppercase text-heritage-gold mt-1">
              Património · Cultura · Experiência
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('common.close')}
            className="w-11 h-11 -mt-1 -mr-1 rounded-full border border-heritage-gold/30 text-heritage-green flex items-center justify-center hover:bg-heritage-gold/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-4 py-2" aria-label={t('common.menu')}>
          <ul className="divide-y divide-heritage-gold/10">
            {items.map((item) => {
              const Icon = item.icon
              const active = isItemActive(item.href)
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center gap-4 px-3 py-4 min-h-[60px] rounded-xl transition focus:outline-none focus-visible:bg-heritage-gold/10 ${active ? 'text-heritage-gold' : 'text-heritage-green hover:bg-heritage-beige/60'}`}
                  >
                    <span className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 border ${active ? 'bg-heritage-gold/15 border-heritage-gold/40 text-heritage-gold' : 'border-heritage-gold/30 text-heritage-green'}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="flex-1 font-serif text-lg leading-tight">{item.label}</span>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${active ? 'text-heritage-gold translate-x-0.5' : 'text-heritage-gold/50'}`} aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Language selector */}
        <div className="border-t border-heritage-gold/15 px-6 py-5 bg-heritage-beige/40">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-3.5 h-3.5 text-heritage-gold" aria-hidden="true" />
            <p className="text-[10px] uppercase tracking-[0.22em] text-heritage-gold font-bold">
              {t('common.selectLanguage')}
            </p>
          </div>
          <div className="flex gap-2" role="group" aria-label={t('common.selectLanguage')}>
            {locales.map((l) => {
              const isCurrent = locale === l
              return (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  aria-pressed={isCurrent}
                  className={`flex-1 py-3 min-h-[44px] rounded-full text-xs font-bold tracking-[0.18em] border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold ${isCurrent ? 'bg-heritage-green text-white border-heritage-green shadow-heritage' : 'text-heritage-green border-heritage-gold/40 hover:bg-heritage-gold/10'}`}
                >
                  {LANG_LABELS[l] || l.toUpperCase()}
                </button>
              )
            })}
          </div>
        </div>

        {/* Safe area spacer for devices with notch */}
        <div className="pb-[env(safe-area-inset-bottom,0px)]" />
      </div>
    </div>
  )
}
