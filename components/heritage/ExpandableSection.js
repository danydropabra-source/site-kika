'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function ExpandableSection({ title = 'Saber Mais', children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-y border-heritage-gold/30 py-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 group"
        aria-expanded={open}
      >
        <span className="font-serif text-xl text-heritage-green text-left">{title}</span>
        <span className="w-9 h-9 rounded-full border border-heritage-gold/50 flex items-center justify-center text-heritage-gold group-hover:bg-heritage-gold group-hover:text-white transition-all">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {open && (
        <div className="pb-6 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}
