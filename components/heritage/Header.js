'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useI18n, useT } from '@/lib/i18n/I18nProvider'
import { getNavItems } from '@/lib/nav'

const LANG_LABELS = { pt: 'PT', en: 'EN', es: 'ES' }

export default function Header() {
  const t = useT()
  const { locale, setLocale, locales } = useI18n()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const NAV = getNavItems(t)

  return (
    <header className="sticky top-0 z-40 bg-heritage-beige/85 backdrop-blur-md border-b border-heritage-gold/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex flex-col leading-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold rounded" aria-label="Histórias que Ficam — início">
          <span className="font-serif text-lg md:text-xl text-heritage-green tracking-tight">Histórias que Ficam</span>
          <span className="hidden sm:block text-[10px] tracking-[0.22em] uppercase text-heritage-gold mt-0.5">Património · Cultura · Experiência</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-heritage-ink/80 hover:text-heritage-green transition-colors relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold rounded">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-heritage-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-heritage-green border border-heritage-gold/40 rounded-full px-3 py-1.5 hover:bg-heritage-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t('common.selectLanguage')}
            >
              <Globe className="w-3.5 h-3.5" />
              {LANG_LABELS[locale] || locale.toUpperCase()}
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <ul role="listbox" className="absolute right-0 mt-2 bg-heritage-warm rounded-lg shadow-heritage-lg border border-heritage-gold/20 overflow-hidden min-w-[80px]">
                {locales.map((l) => (
                  <li key={l}>
                    <button
                      role="option"
                      aria-selected={locale === l}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => { setLocale(l); setLangOpen(false) }}
                      className={`block w-full text-left px-4 py-2 text-xs font-bold tracking-widest hover:bg-heritage-beige ${locale===l ? 'text-heritage-gold bg-heritage-gold/5' : 'text-heritage-green'}`}
                    >
                      {LANG_LABELS[l] || l.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-heritage-green focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold rounded" aria-label={t('common.menu')} aria-expanded={open}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-heritage-gold/20 bg-heritage-warm" id="mobile-menu">
          <nav className="container py-6 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-3 px-2 text-heritage-green font-medium border-b border-heritage-gold/10 last:border-0">
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4" role="group" aria-label={t('common.selectLanguage')}>
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  aria-pressed={locale === l}
                  className={`flex-1 py-2 text-xs font-bold tracking-widest rounded-full border ${locale===l ? 'bg-heritage-green text-white border-heritage-green' : 'text-heritage-green border-heritage-gold/40'}`}
                >
                  {LANG_LABELS[l] || l.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
