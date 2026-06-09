import Link from 'next/link'
import { ArrowRight, X, MapPin } from 'lucide-react'

export default function MapPreviewCard({ place, onClose, floating = false }) {
  if (!place) return null
  return (
    <div
      className={`heritage-card border border-heritage-gold/30 overflow-hidden animate-fade-in ${
        floating ? 'shadow-heritage-lg' : ''
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-green/40 via-transparent to-transparent" />
        {place.pilot && (
          <span className="absolute top-3 left-3 bg-heritage-gold text-white text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full font-bold">
            Ponto piloto
          </span>
        )}
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-heritage-warm/95 backdrop-blur flex items-center justify-center text-heritage-green hover:bg-heritage-green hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {place.location && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-heritage-warm/95 backdrop-blur text-[10px] tracking-[0.18em] uppercase text-heritage-green px-2.5 py-1 rounded-full">
            <MapPin className="w-3 h-3" /> {place.location}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-heritage-green leading-tight">{place.name}</h3>
        <div className="h-px w-10 bg-heritage-gold/60 my-2.5" />
        <p className="text-sm text-heritage-gray leading-relaxed">{place.description}</p>
        <Link
          href={`/historias/${place.slug}`}
          className="btn-gold mt-4 w-full sm:w-auto"
        >
          Ver História <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
