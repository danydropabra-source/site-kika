'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

const NAV = [
  { label: 'Explorar', href: '/mapa' },
  { label: 'Locais', href: '/#locais' },
  { label: 'Hoje na história', href: '/#hoje' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contactos', href: '/contactos' },
]

const LANGS = ['PT', 'EN', 'ES']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('PT')
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-heritage-beige/85 backdrop-blur-md border-b border-heritage-gold/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-lg md:text-xl text-heritage-green tracking-tight">Histórias que Ficam</span>
          <span className="hidden sm:block text-[10px] tracking-[0.22em] uppercase text-heritage-gold mt-0.5">Património · Cultura · Experiência</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-heritage-ink/80 hover:text-heritage-green transition-colors relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-heritage-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-heritage-green border border-heritage-gold/40 rounded-full px-3 py-1.5 hover:bg-heritage-gold/10"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang}
              <ChevronDown className="w-3 h-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-heritage-warm rounded-lg shadow-heritage-lg border border-heritage-gold/20 overflow-hidden">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false) }}
                    className={`block w-full text-left px-4 py-2 text-xs font-bold tracking-widest hover:bg-heritage-beige ${lang===l ? 'text-heritage-gold' : 'text-heritage-green'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-heritage-green" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-heritage-gold/20 bg-heritage-warm">
          <nav className="container py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-heritage-green font-medium border-b border-heritage-gold/10 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex-1 py-2 text-xs font-bold tracking-widest rounded-full border ${lang===l ? 'bg-heritage-green text-white border-heritage-green' : 'text-heritage-green border-heritage-gold/40'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
