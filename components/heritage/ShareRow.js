'use client'

import { useState } from 'react'
import { Instagram, Facebook, Link2, Check, MessageCircle } from 'lucide-react'
import { useT } from '@/lib/i18n/I18nProvider'

export default function ShareRow({ url, title = 'Histórias que Ficam' }) {
  const t = useT()
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? (url || window.location.href) : (url || '')
  const message = encodeURIComponent(`${title} — ${shareUrl}`)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) { console.error(e) }
  }

  const items = [
    { label: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/?text=${message}` },
    { label: 'Instagram', icon: Instagram, href: `https://www.instagram.com/` },
    { label: 'Facebook', icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
  ]

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <p className="eyebrow">{t('street.shareThisStory')}</p>
      <div className="flex flex-wrap gap-2">
        {items.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-heritage-warm border border-heritage-gold/30 rounded-full text-xs font-bold uppercase tracking-widest text-heritage-green hover:bg-heritage-green hover:text-white hover:border-heritage-green transition"
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{label}</span>
          </a>
        ))}
        <button
          onClick={copy}
          className="flex items-center gap-2 px-4 py-2.5 bg-heritage-warm border border-heritage-gold/30 rounded-full text-xs font-bold uppercase tracking-widest text-heritage-green hover:bg-heritage-gold hover:text-white hover:border-heritage-gold transition"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copiado' : 'Copiar link'}</span>
        </button>
      </div>
    </div>
  )
}
