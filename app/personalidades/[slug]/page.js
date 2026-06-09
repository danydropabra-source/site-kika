'use client'

import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { ArrowLeft, ArrowRight, MapPin, Calendar, BookOpen, FileText, Image as ImageIcon } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import PlaceCard from '@/components/heritage/PlaceCard'
import { getPersonality, getPlaceBySlug } from '@/lib/heritage-data'
import { useT } from '@/lib/i18n/I18nProvider'

export default function PersonalityPage() {
  const params = useParams()
  const t = useT()
  const person = getPersonality(params?.slug)
  if (!person) return notFound()

  const related = (person.relatedPlaces || [])
    .map((slug) => getPlaceBySlug(slug))
    .filter(Boolean)

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* Sub-bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-heritage-beige/85 backdrop-blur border-b border-heritage-gold/15">
        <div className="container flex items-center justify-between py-3">
          <Link href="/" className="inline-flex items-center gap-2 text-heritage-green text-sm font-medium hover:text-heritage-gold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold rounded px-1">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{t('common.back')}</span>
          </Link>
          {person.relatedStreet && (
            <Link
              href={`/historias/${person.relatedStreet.slug}`}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-heritage-gold font-bold hover:text-heritage-green transition focus:outline-none focus-visible:underline"
            >
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> {person.relatedStreet.name}
            </Link>
          )}
        </div>
      </div>

      {/* Hero / identity block */}
      <section className="container pt-10 md:pt-14">
        <div className="grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start">
          {/* Portrait */}
          <div className="order-1 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-heritage-gold/30 shadow-heritage-lg max-w-[320px] mx-auto lg:mx-0">
              <img
                src={person.portrait}
                alt={person.fullName}
                className="w-full h-full object-cover sepia-[0.22] saturate-[0.9]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-heritage-warm/15" />
              <div className="absolute bottom-3 left-3 bg-heritage-warm/95 backdrop-blur text-[10px] tracking-[0.18em] uppercase text-heritage-green px-3 py-1.5 rounded-full">
                {t('personality.archivePortrait')}
              </div>
            </div>
          </div>

          {/* Identity */}
          <div className="order-2 lg:order-2">
            <p className="eyebrow">{person.eyebrow}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-heritage-green mt-3 leading-[1.05] tracking-tight">
              {person.fullName}
            </h1>

            <div className="gold-divider mt-5 max-w-[120px]" />

            <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-heritage-gold font-bold mb-1">{t('personality.dates')}</dt>
                <dd className="flex items-center gap-2 text-heritage-ink/90 font-serif text-base">
                  <Calendar className="w-4 h-4 text-heritage-gold" aria-hidden="true" /> {person.dates}
                </dd>
              </div>
              {person.birthPlace && (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-heritage-gold font-bold mb-1">{t('personality.birthplace')}</dt>
                  <dd className="flex items-center gap-2 text-heritage-ink/90 font-serif text-base">
                    <MapPin className="w-4 h-4 text-heritage-gold" aria-hidden="true" /> {person.birthPlace}
                  </dd>
                </div>
              )}
              {person.role && (
                <div className="sm:col-span-2">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-heritage-gold font-bold mb-1">{t('personality.role')}</dt>
                  <dd className="text-heritage-ink/90 font-serif text-base">{person.role}</dd>
                </div>
              )}
            </dl>

            {person.relatedStreet && (
              <Link
                href={`/historias/${person.relatedStreet.slug}`}
                className="btn-ghost-green mt-7 inline-flex"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> {t('personality.viewStreet')} {person.relatedStreet.name}
              </Link>
            )}

            <p className="mt-8 text-[17px] text-heritage-ink/90 leading-[1.85] font-serif italic">
              {person.shortBio}
            </p>
          </div>
        </div>
      </section>

      {/* Full Biography */}
      <section className="container mt-16 md:mt-20 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-5 h-5 text-heritage-gold" strokeWidth={1.6} aria-hidden="true" />
          <p className="eyebrow">{t('personality.bioEyebrow')}</p>
        </div>
        <div className="space-y-5 text-[17px] leading-[1.85] text-heritage-ink/90">
          {person.fullBio.map((p, i) => (
            <p key={i} className={i === 0 ? 'first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-heritage-green first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]' : ''}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {person.gallery?.length > 0 && (
        <section className="container mt-16 md:mt-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">{t('personality.galleryEyebrow')}</p>
              <h2 className="section-title">{t('personality.galleryTitle')}</h2>
            </div>
            <span className="text-xs uppercase tracking-[0.18em] text-heritage-gold hidden sm:inline">
              {person.gallery.length} {t('personality.galleryPieces')}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {person.gallery.map((g, i) => (
              <figure key={i} className="heritage-card border border-heritage-gold/15 overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={g.src} alt={g.caption} className="w-full h-full object-cover sepia-[0.18] saturate-[0.9] transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-heritage-warm/95 backdrop-blur text-[10px] tracking-[0.18em] uppercase text-heritage-green px-2.5 py-1 rounded-full">
                    {g.type === 'document' ? <FileText className="w-3 h-3" aria-hidden="true" /> : <ImageIcon className="w-3 h-3" aria-hidden="true" />}
                    {g.type === 'document' ? t('personality.document') : t('personality.photograph')}
                  </span>
                </div>
                <figcaption className="px-5 py-4 text-sm text-heritage-gray leading-relaxed">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Related places */}
      {related.length > 0 && (
        <section className="container mt-16 md:mt-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">{t('personality.relatedEyebrow')}</p>
              <h2 className="section-title">{t('personality.relatedTitle')}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => <PlaceCard key={p.slug} {...p} />)}
          </div>
        </section>
      )}

      {/* Sources */}
      {person.sources?.length > 0 && (
        <section className="container mt-16 md:mt-20 max-w-3xl">
          <div className="heritage-card border border-heritage-gold/20 p-6 md:p-8">
            <p className="eyebrow mb-2">{t('personality.sourcesEyebrow')}</p>
            <h3 className="font-serif text-2xl text-heritage-green leading-tight">{t('personality.sourcesTitle')}</h3>
            <div className="gold-divider my-5 max-w-[100px]" />
            <ul className="divide-y divide-heritage-gold/15">
              {person.sources.map((s, i) => (
                <li key={i} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-heritage-ink/90 font-serif">{s.title}</span>
                  <span className="text-xs uppercase tracking-[0.14em] text-heritage-gold whitespace-nowrap">
                    {s.type}{s.year ? ` · ${s.year}` : ''}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-heritage-gray-light italic mt-5 leading-relaxed border-l-2 border-heritage-gold/40 pl-3">
              {t('personality.sourcesNote')}
            </p>
          </div>
        </section>
      )}

      <Footer />
      <MobileBottomNav />
    </div>
  )
}
