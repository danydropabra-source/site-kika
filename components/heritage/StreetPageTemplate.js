'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Map as MapIcon,
  Heart,
  Headphones,
  BookOpen,
  Sparkles,
  Hammer,
  Landmark,
  User,
  MessageCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowRight,
  Type,
} from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import Logo from '@/components/heritage/Logo'
import AudioPlayer from '@/components/heritage/AudioPlayer'
import ShareRow from '@/components/heritage/ShareRow'
import MemoryCard from '@/components/heritage/MemoryCard'
import MemoryForm from '@/components/heritage/MemoryForm'
import GalleryLightbox from '@/components/heritage/GalleryLightbox'
import { useT } from '@/lib/i18n/I18nProvider'
import { useFavorite } from '@/lib/useFavorites'

// ------------------------------------------------------------
// Reusable pieces (kept in-file to keep the template self-contained,
// but data-driven: nothing here mentions "Rua da Cale").
// ------------------------------------------------------------

function CardShell({ icon: Icon, eyebrow, title, tone = 'warm', children, className = '' }) {
  const bg =
    tone === 'muted'
      ? 'bg-heritage-beige-dark/40 border-heritage-gold/25'
      : tone === 'accent'
      ? 'bg-heritage-warm border-heritage-gold/40'
      : 'bg-heritage-warm border-heritage-gold/20'
  return (
    <article className={`heritage-card border ${bg} shadow-heritage ${className}`}>
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          {Icon && (
            <span className="w-9 h-9 rounded-full bg-heritage-gold/15 border border-heritage-gold/40 text-heritage-gold flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4" strokeWidth={1.6} aria-hidden="true" />
            </span>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        </div>
        {title && <h3 className="font-serif text-2xl md:text-[28px] text-heritage-green leading-tight">{title}</h3>}
        {title && <div className="h-px w-10 bg-heritage-gold/60 my-4" />}
        <div className="text-[15px] leading-[1.8] text-heritage-ink/90">{children}</div>
      </div>
    </article>
  )
}

// ============================================================
// StreetPageTemplate
// The ONLY layout used by every street. Reads exclusively from
// the `street` prop; every section is conditional but the markup,
// order, columns, spacing and card styles are identical for all
// streets. No per-street branches anywhere in this file.
// ============================================================
export default function StreetPageTemplate({ street }) {
  const t = useT()
  const { isFav, ready: favReady, toggle: toggleFav } = useFavorite(street?.slug || '')
  const [pulse, setPulse] = useState(false)
  const [baIndex, setBaIndex] = useState(0)
  // Index of the photo open in the full-screen viewer; null = closed.
  const [lightbox, setLightbox] = useState(null)
  const [brokenImages, setBrokenImages] = useState(() => new Set())

  if (!street) return null

  // ----- Derived / conditional data (all optional, all from street) -----
  const hero = {
    image: street.heroImage,
    // Which part of the photo stays visible once `object-cover` crops it.
    // '50% 50%' is the middle; a bigger second number shows more of the bottom.
    // Set per street via `heroFocus` in heritage-data.js.
    focus: street.heroFocus || '50% 50%',
    category: street.category,
    title: street.title,
    subtitle: street.subtitle,
    intro: street.intro_paragraph || street.subtitle,
  }
  const mainHistoryText = street.paragraphs?.join(' ') || ''
  const themedSections = street.themed_sections || []
  const heritage = street.heritage_highlight
  const personality = street.personality
  const memories = street.communityMemories || []
  const featuredMemory = memories[0]
  const beforeAfter = street.before_after_images || []
  const currentBA = beforeAfter[baIndex]

  // Safety net for photos deleted from storage without updating the list in
  // heritage-data.js: a URL that fails to load is dropped instead of leaving
  // an empty tile. Card and lightbox share this filtered array, so the index
  // a visitor clicks always matches the photo that opens.
  const gallery = (street.gallery || []).filter((g) => !brokenImages.has(g))
  const markBroken = (src) => setBrokenImages((prev) => new Set(prev).add(src))
  const curiosities = street.curiosities || []
  const landmarks = street.landmarks || []

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* ============================= HERO ============================= */}
      <section className="relative">
        <div className="relative h-[86vh] min-h-[560px] max-h-[820px] overflow-hidden">
          <Image
            src={hero.image}
            alt={t('street.heroImageAlt').replace('{street}', hero.title).replace('{place}', hero.category)}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            // Inline style, not a Tailwind class: the value comes from the data
            // and Tailwind can only generate classes it can see in the source.
            style={{ objectPosition: hero.focus }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-heritage-green-dark/45 via-heritage-green/35 to-heritage-green-dark/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-green-dark/40 to-transparent" />

          {/* Top bar: logo left, actions right */}
          <div className="relative container pt-5 md:pt-7 flex items-start justify-between gap-3">
            <Link href="/" aria-label={t('common.homeAriaLabel')} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold rounded">
              <span className="hidden sm:inline-flex">
                <Logo variant="full" size={44} tone="warm" showTagline />
              </span>
              <span className="inline-flex sm:hidden">
                <Logo variant="full" size={36} tone="warm" showTagline={false} />
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/mapa"
                className="inline-flex items-center gap-2 bg-heritage-warm/95 hover:bg-heritage-gold hover:text-white text-heritage-green text-[11px] tracking-[0.16em] font-bold uppercase px-4 py-2.5 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold shadow-heritage"
              >
                <MapIcon className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Ver no mapa</span>
              </Link>
              <button
                type="button"
                onClick={async () => { await toggleFav(); setPulse(true); setTimeout(() => setPulse(false), 350) }}
                aria-label={isFav ? t('favorites.remove') : t('favorites.add')}
                aria-pressed={isFav}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold shadow-heritage ${pulse ? 'scale-125' : 'scale-100'} ${favReady && isFav ? 'bg-heritage-gold border-heritage-gold text-white' : 'bg-heritage-warm/95 border-heritage-warm/80 text-heritage-green hover:bg-heritage-gold hover:text-white hover:border-heritage-gold'}`}
              >
                <Heart className={`w-4 h-4 transition-transform ${pulse ? 'scale-110' : ''}`} fill={favReady && isFav ? 'currentColor' : 'none'} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Title block */}
          <div className="relative container h-[calc(100%-72px)] flex flex-col justify-end pb-14 md:pb-20">
            <div className="max-w-3xl animate-fade-in">
              <p className="text-heritage-gold-light uppercase tracking-[0.32em] text-[11px] md:text-xs mb-4">{hero.category}</p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-heritage-warm leading-[1.02] tracking-tight">
                {hero.title}
              </h1>
              <div className="h-px w-24 bg-heritage-gold mt-6" />
              <p className="mt-6 text-lg md:text-xl text-heritage-warm/90 max-w-2xl leading-relaxed font-serif italic">
                {hero.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= AUDIO BLOCK ============================= */}
      {street.audio?.src && (
        <section className="container -mt-8 md:-mt-14 relative z-10">
          {/* Full-width audio-guide card */}
          <div className="heritage-card border border-heritage-gold/25 shadow-heritage-lg p-5 md:p-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-full bg-heritage-gold/15 border border-heritage-gold/40 text-heritage-gold flex items-center justify-center flex-shrink-0">
                <Headphones className="w-4 h-4" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow">{t('common.audioGuide')}</p>
                <h2 className="font-serif text-lg md:text-xl text-heritage-green leading-tight">
                  {t('street.audioCardTitle').replace('{street}', hero.title)}
                </h2>
              </div>
            </div>
            <p className="text-sm text-heritage-gray leading-relaxed mb-4 max-w-xl">
              {t('street.audioCardBody')}
            </p>
            <AudioPlayer title={street.audio.title} src={street.audio.src} duration={street.audio.duration} />
          </div>
        </section>
      )}

      {/* ============================= CONTENT BLOCKS =============================
          Fixed 2-column grid (single template for every street).
          Each block has a canonical column & order; removing a block
          NEVER re-flows the others between columns.

          MOBILE ORDER: below `md` the two column wrappers use `display: contents`,
          so every block becomes a direct grid item and the `order-N` class on each
          one decides the reading order. Change a block's `order-N` to move it on
          mobile — desktop is unaffected (`md:order-none` restores the columns).
          Current mobile order:
            1 história principal · 2 porquê este nome · 3 património · 4 vida na rua
            5 figura em destaque · 6 galeria · 7 memórias · 8 curiosidades
          ============================================================= */}
      <section className="container mt-14 md:mt-20">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* --------- LEFT COLUMN (canonical order) --------- */}
          <div className="contents md:block md:space-y-6">
            {/* 1. A [street] — main history */}
            {mainHistoryText && (
              <CardShell id="historia" icon={BookOpen} eyebrow={hero.category} title={t('street.mainHistoryTitle').replace('{street}', hero.title)} className="order-1 md:order-none">
                {street.main_history_image && (
                  <div className="rounded-xl overflow-hidden mb-5">
                    <Image
                      src={street.main_history_image}
                      alt={t('street.historyImageAlt').replace('{street}', hero.title)}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto object-cover sepia-[0.12]"
                    />
                  </div>
                )}
                <div className="space-y-4">
                  {(street.paragraphs || []).map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </CardShell>
            )}

            {/* 3. Themed narrative section(s) */}
            {themedSections.map((s, i) => (
              <CardShell key={`themed-${i}`} icon={Hammer} eyebrow={t('street.themedEyebrow')} title={s.title} className="order-4 md:order-none">
                {s.image && (
                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto object-cover sepia-[0.1]"
                    />
                  </div>
                )}
                <p>{s.body}</p>
              </CardShell>
            ))}

            {/* 5. Figura em Destaque */}
            {personality && (
              <CardShell icon={User} eyebrow={t('street.figureEyebrow')} title={personality.name} className="order-5 md:order-none">
                <div className="flex items-start gap-4">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-heritage-gold/30 ring-offset-2 ring-offset-heritage-warm flex-shrink-0">
                    <Image src={personality.photo} alt={personality.name} fill sizes="112px" className="object-cover sepia-[0.18]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-heritage-gold font-bold mb-2">{personality.dates}</p>
                    <p className="text-[15px] leading-[1.75] text-heritage-gray">{personality.bio}</p>
                  </div>
                </div>
                {personality.slug && (
                  <Link href={`/personalidades/${personality.slug}`} className="btn-ghost-green mt-5 inline-flex">
                    {t('street.viewFullBio')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                )}
              </CardShell>
            )}

            {/* 7. Galeria */}
            {gallery.length > 0 && (
              <CardShell icon={Sparkles} eyebrow={t('street.tabGallery')} title={t('street.galleryPhotos')} className="order-6 md:order-none">
                <div className="grid grid-cols-2 gap-2">
                  {gallery.slice(0, 4).map((g, i) => {
                    // The 4th tile doubles as the "there are more" affordance.
                    const hidden = gallery.length - 4
                    const showsMore = i === 3 && hidden > 0
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setLightbox(i)}
                        aria-label={
                          showsMore
                            ? t('street.galleryViewAll')
                            : t('street.galleryImageOf').replace('{i}', String(i + 1)).replace('{n}', String(gallery.length))
                        }
                        className="relative rounded-lg overflow-hidden aspect-[4/3] group focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"
                      >
                        <Image src={g} alt={`${t('street.galleryImageAlt')} ${i + 1}`} fill sizes="(max-width: 768px) 45vw, 22vw" onError={() => markBroken(g)} className="object-cover sepia-[0.12] group-hover:sepia-0 transition-all duration-500" />
                        {showsMore && (
                          <span className="absolute inset-0 bg-heritage-green-dark/70 flex items-center justify-center text-heritage-warm font-serif text-2xl">
                            +{hidden}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
                {gallery.length > 4 && (
                  <button
                    type="button"
                    onClick={() => setLightbox(0)}
                    className="btn-ghost-green mt-4 inline-flex text-xs"
                  >
                    {t('street.galleryViewAll')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                )}
              </CardShell>
            )}
          </div>

          {/* --------- RIGHT COLUMN (canonical order) --------- */}
          <div className="contents md:block md:space-y-6">
            {/* 2. Porque se chama…? */}
            {street.name_origin && (
              <CardShell icon={Sparkles} eyebrow={t('street.nameOriginEyebrow')} title={t('street.nameOriginTitle').replace('{street}', hero.title)} tone="muted" className="order-2 md:order-none">
                <p>{street.name_origin}</p>
              </CardShell>
            )}

            {/* 4. Património em Destaque */}
            {heritage && (
              <CardShell icon={Landmark} eyebrow={t('street.heritageEyebrow')} title={heritage.name} className="order-3 md:order-none">
                {heritage.subtitle && (
                  <p className="text-xs uppercase tracking-[0.18em] text-heritage-gold font-bold -mt-3 mb-4">
                    {heritage.subtitle}
                  </p>
                )}
                {heritage.image && (
                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image
                      src={heritage.image}
                      alt={heritage.name}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                <p>{heritage.text}</p>
              </CardShell>
            )}

            {/* 6. Memórias da Comunidade — featured (or an invitation while empty) */}
            {!featuredMemory && (
              <CardShell icon={MessageCircle} eyebrow={t('memories.eyebrow')} title={t('memories.emptyTitle')} tone="accent" className="order-7 md:order-none">
                <Quote className="w-7 h-7 text-heritage-gold/40 -mt-1 mb-3" strokeWidth={1.4} aria-hidden="true" />
                <p className="font-serif italic text-heritage-ink/90 leading-[1.75] text-[16px]">{t('memories.emptyBody')}</p>
                <a href="#memorias" className="btn-ghost-gold mt-5 inline-flex">
                  {t('memories.shareCta')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </CardShell>
            )}
            {featuredMemory && (
              <CardShell icon={MessageCircle} eyebrow={t('memories.eyebrow')} title={t('memories.sharedTitle')} tone="accent" className="order-7 md:order-none">
                <Quote className="w-7 h-7 text-heritage-gold/40 -mt-1 mb-3" strokeWidth={1.4} aria-hidden="true" />
                {featuredMemory.photo && (
                  <div className="relative rounded-xl overflow-hidden mb-4 aspect-[16/10]">
                    <Image src={featuredMemory.photo} alt={featuredMemory.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover sepia-[0.15]" />
                  </div>
                )}
                <blockquote className="font-serif italic text-heritage-ink/90 leading-[1.75] text-[16px]">
                  {featuredMemory.text}
                </blockquote>
                <div className="h-px w-12 bg-heritage-gold/60 mt-5" />
                <p className="text-xs uppercase tracking-[0.18em] text-heritage-gold font-bold mt-3">
                  {featuredMemory.name}{featuredMemory.age ? `, ${featuredMemory.age}` : ''}
                  {featuredMemory.ligacao && ` · ${featuredMemory.ligacao}`}
                </p>
                <a href="#memorias" className="btn-ghost-gold mt-5 inline-flex">
                  {t('memories.viewMore')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </CardShell>
            )}

            {/* 8. Curiosidades */}
            {curiosities.length > 0 && (
              <CardShell icon={Sparkles} eyebrow={t('street.tabCuriosities')} title={t('street.curiositiesTitle')} tone="muted" className="order-8 md:order-none">
                <ul className="space-y-4">
                  {curiosities.map((c, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span aria-hidden="true" className="flex-shrink-0 w-7 h-7 rounded-full bg-heritage-gold/15 text-heritage-gold font-serif font-bold flex items-center justify-center text-[13px]">{i+1}</span>
                      <p className="text-[15px] leading-[1.7]">{c}</p>
                    </li>
                  ))}
                </ul>
              </CardShell>
            )}
          </div>
        </div>
      </section>

      {/* ============================= ANTES E AGORA ============================= */}
      {beforeAfter.length > 0 && (
        <section className="container mt-16 md:mt-24 max-w-5xl">
          <div className="text-center mb-8">
            <p className="eyebrow mb-2">{t('street.visualMemory')}</p>
            <h2 className="section-title">{t('street.beforeAndNow')}</h2>
            <div className="gold-divider mt-4 max-w-[120px] mx-auto" />
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <figure className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-heritage">
                <Image src={currentBA.before} alt={t('street.before')} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover sepia-[0.35] saturate-[0.75]" />
                <figcaption className="absolute top-3 left-3 bg-heritage-warm/95 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] text-heritage-green font-bold">
                  {t('street.before')}{currentBA.year_before ? ` · ${currentBA.year_before}` : ''}
                </figcaption>
              </figure>
              <figure className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-heritage">
                <Image src={currentBA.after} alt={t('street.now')} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <figcaption className="absolute top-3 left-3 bg-heritage-gold text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] font-bold">
                  {t('street.now')}{currentBA.year_after ? ` · ${currentBA.year_after}` : ''}
                </figcaption>
              </figure>
            </div>
            <p className="text-center text-heritage-gray italic mt-5 max-w-2xl mx-auto leading-relaxed">
              {currentBA.caption}
            </p>
            {beforeAfter.length > 1 && (
              <div className="flex items-center justify-center gap-3 mt-6">
                <button onClick={() => setBaIndex((baIndex - 1 + beforeAfter.length) % beforeAfter.length)} aria-label={t('street.prev')} className="w-11 h-11 rounded-full border border-heritage-gold/40 text-heritage-green hover:bg-heritage-gold hover:text-white transition flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold">
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <span className="text-xs tabular-nums text-heritage-gray-light tracking-widest">
                  {baIndex + 1} / {beforeAfter.length}
                </span>
                <button onClick={() => setBaIndex((baIndex + 1) % beforeAfter.length)} aria-label={t('street.next')} className="w-11 h-11 rounded-full border border-heritage-gold/40 text-heritage-green hover:bg-heritage-gold/10 transition flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold">
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ============================= FULL MEMORIES SECTION =============================
          Always rendered: the form is how a street without memories gets its first one. */}
      <section id="memorias" className="container mt-16 md:mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="eyebrow mb-2">{t('memories.eyebrow')}</p>
          <h2 className="section-title">{t('memories.headerTitle')}</h2>
          <div className="gold-divider mt-4 max-w-[120px] mx-auto" />
          <p className="text-heritage-gray mt-5 leading-relaxed">{t('memories.headerBody')}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <MemoryForm streetSlug={street.slug} />
          <div>
            <h3 className="font-serif text-2xl text-heritage-green mb-5">{t('memories.sharedTitle')}</h3>
            {memories.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
                {memories.map((m) => <MemoryCard key={m.id} {...m} />)}
              </div>
            ) : (
              <div className="heritage-card border border-dashed border-heritage-gold/40 p-8 text-center">
                <Quote className="w-7 h-7 text-heritage-gold/40 mx-auto mb-3" strokeWidth={1.4} aria-hidden="true" />
                <p className="font-serif text-xl text-heritage-green">{t('memories.emptyTitle')}</p>
                <p className="text-sm text-heritage-gray mt-2 leading-relaxed">{t('memories.emptyBody')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================= ONDE FICA? ============================= */}
      {street.location_description && (
        <section className="mt-20 md:mt-24">
          <div className="relative bg-heritage-green text-heritage-warm overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <Image src={street.heroImage} alt="" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-heritage-green/85" />
            </div>
            <div className="relative container py-14 md:py-20 grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="max-w-2xl">
                <p className="text-heritage-gold-light uppercase tracking-[0.28em] text-[11px] md:text-xs mb-3 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> {t('street.whereIsIt')}
                </p>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight">{hero.title}</h2>
                <div className="h-px w-16 bg-heritage-gold my-4" />
                <p className="text-heritage-warm/85 leading-relaxed">{street.location_description}</p>
                <Link href="/mapa" className="btn-gold mt-6 inline-flex">
                  <MapIcon className="w-3.5 h-3.5" aria-hidden="true" /> Ver no mapa <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
              {/* Landmark markers strip — per street, from `landmarks` in heritage-data.js */}
              {landmarks.length > 0 && (
                <div className="flex md:flex-col gap-3 md:gap-4 flex-wrap md:pr-2">
                  {landmarks.map((m) => {
                    const Icon = m.icon === 'pin' ? MapPin : Landmark
                    return (
                      <div key={m.label} className="flex items-center gap-3 border border-heritage-gold/30 rounded-full px-4 py-2 bg-heritage-green-dark/40">
                        <Icon className="w-4 h-4 text-heritage-gold-light" aria-hidden="true" />
                        <div className="leading-tight">
                          <p className="text-[11px] uppercase tracking-[0.16em] text-heritage-warm/90 font-bold">{m.label}</p>
                          <p className="text-[10px] text-heritage-warm/60">{m.dist}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ============================= SHARE ============================= */}
      <section className="container mt-14 max-w-4xl">
        <div className="heritage-card border border-heritage-gold/20 p-6 md:p-8">
          <ShareRow title={`${street.title} · Histórias que Ficam`} />
        </div>
      </section>

      <Footer />
      <MobileBottomNav active="mapa" />

      <GalleryLightbox
        images={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onImageError={markBroken}
      />
    </div>
  )
}
