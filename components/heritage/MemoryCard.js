import { Quote } from 'lucide-react'

export default function MemoryCard({ photo, text, name, age, ligacao, date }) {
  return (
    <article className="heritage-card border border-heritage-gold/20 overflow-hidden flex flex-col h-full">
      {photo && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={photo}
            alt={name || 'Memória da comunidade'}
            className="w-full h-full object-cover sepia-[0.18] saturate-[0.92] transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/15 to-transparent" />
        </div>
      )}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <Quote className="w-6 h-6 text-heritage-gold/50 mb-3 flex-shrink-0" strokeWidth={1.4} />
        <blockquote className="font-serif italic text-heritage-ink/90 leading-[1.75] text-[15px] flex-1">
          {text}
        </blockquote>
        <div className="gold-divider mt-5 max-w-[60px]" />
        <div className="mt-3 flex items-end justify-between gap-2 flex-wrap">
          <div className="min-w-0">
            <p className="font-serif text-heritage-green text-base leading-tight truncate">
              {name || 'Anónimo'}{age ? `, ${age} anos` : ''}
            </p>
            {ligacao && (
              <p className="text-[10px] uppercase tracking-[0.18em] text-heritage-gold mt-1.5">
                {ligacao}
              </p>
            )}
          </div>
          {date && (
            <p className="text-[11px] text-heritage-gray-light tabular-nums whitespace-nowrap">
              {date}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
