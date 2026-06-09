import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function PlaceCard({ name, description, image, slug, location, compact = false }) {
  return (
    <Link
      href={slug ? `/historias/${slug}` : '#'}
      className="group heritage-card border border-heritage-gold/15 hover:shadow-heritage-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {location && (
          <span className="absolute top-3 left-3 bg-heritage-warm/95 backdrop-blur text-[10px] tracking-[0.18em] uppercase text-heritage-green px-2.5 py-1 rounded-full">
            {location}
          </span>
        )}
      </div>
      <div className={`p-5 ${compact ? 'pb-5' : 'pb-6'} flex-1 flex flex-col`}>
        <h3 className="font-serif text-xl text-heritage-green leading-tight">{name}</h3>
        <div className="h-px w-10 bg-heritage-gold/50 my-3" />
        <p className="text-sm text-heritage-gray leading-relaxed flex-1">{description}</p>
        <div className="mt-4 flex items-center gap-2 text-heritage-gold text-[11px] font-bold uppercase tracking-[0.16em]">
          Saber Mais <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  )
}
