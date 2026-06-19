'use client'

import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import { useT } from '@/lib/i18n/I18nProvider'

export default function Footer() {
  const t = useT()
  return (
    <footer className="bg-heritage-green text-heritage-warm mt-20" role="contentinfo">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl">Histórias<br/>que Ficam</h3>
          <div className="h-px w-12 bg-heritage-gold my-4" />
          <p className="text-sm text-heritage-warm/70 leading-relaxed">{t('footer.tagline')}</p>
        </div>

        <div>
          <h4 className="uppercase tracking-[0.18em] text-xs text-heritage-gold mb-4">{t('footer.explore')}</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a className="text-heritage-warm/80 hover:text-heritage-gold focus:outline-none focus-visible:underline focus-visible:text-heritage-gold" href="/mapa">{t('footer.mapOfPlaces')}</a></li>
            <li><a className="text-heritage-warm/80 hover:text-heritage-gold focus:outline-none focus-visible:underline focus-visible:text-heritage-gold" href="/rotas">{t('footer.themedRoutes')}</a></li>
            <li><a className="text-heritage-warm/80 hover:text-heritage-gold focus:outline-none focus-visible:underline focus-visible:text-heritage-gold" href="/#hoje">{t('footer.todayInHistory')}</a></li>
            <li><a className="text-heritage-warm/80 hover:text-heritage-gold focus:outline-none focus-visible:underline focus-visible:text-heritage-gold" href="/personalidades/jose-alves-monteiro">{t('footer.personalities')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-[0.18em] text-xs text-heritage-gold mb-4">{t('footer.contacts')}</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2 text-heritage-warm/80"><MapPin className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0" aria-hidden="true"/>Fundão, Portugal</li>
            <li className="flex items-start gap-2 text-heritage-warm/80"><Mail className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0" aria-hidden="true"/>geral@historiasqueficam.pt</li>
            <li className="flex items-start gap-2 text-heritage-warm/80"><Phone className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0" aria-hidden="true"/>+351 275 000 000</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-[0.18em] text-xs text-heritage-gold mb-4">{t('footer.follow')}</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"><Instagram className="w-4 h-4" aria-hidden="true"/></a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"><Facebook className="w-4 h-4" aria-hidden="true"/></a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"><Youtube className="w-4 h-4" aria-hidden="true"/></a>
          </div>
          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-heritage-gold mb-2">{t('footer.partners')}</p>
            <p className="text-xs text-heritage-warm/60 leading-relaxed">Câmara Municipal do Fundão · Turismo Centro · Direção-Geral do Património Cultural</p>
          </div>
        </div>
      </div>

      <div className="border-t border-heritage-gold/20">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-heritage-warm/60">
          <span>© {new Date().getFullYear()} Histórias que Ficam. {t('footer.rights')}</span>
          <span>{t('footer.motto')}</span>
        </div>
      </div>
    </footer>
  )
}
