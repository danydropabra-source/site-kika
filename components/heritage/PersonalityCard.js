import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PersonalityCard({ name, dates, photo, bio, slug, href }) {
  const target = href || (slug ? `/personalidades/${slug}` : null)
  return (
    <div className="heritage-card border border-heritage-gold/20">
      <div className="p-5 md:p-6 flex flex-col sm:flex-row gap-5">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-heritage-gold/30 ring-offset-2 ring-offset-heritage-warm mx-auto sm:mx-0">
            <img src={photo} alt={name} className="w-full h-full object-cover sepia-[0.15]" />
          </div>
        </div>
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <p className="eyebrow mb-1">Personalidade Ilustre</p>
          <h3 className="font-serif text-2xl text-heritage-green leading-tight">{name}</h3>
          <p className="text-sm text-heritage-gray mt-1">{dates}</p>
          <div className="h-px w-12 bg-heritage-gold/60 my-3 mx-auto sm:mx-0" />
          <p className="text-sm text-heritage-gray leading-relaxed">{bio}</p>
          {target ? (
            <Link href={target} className="btn-ghost-green mt-5 inline-flex">
              Ver Biografia Completa <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
