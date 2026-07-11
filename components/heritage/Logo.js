'use client'

import Image from 'next/image'

/**
 * SINGLE brand-logo source for the whole app.
 *
 * variants:
 *   - 'mark'     → emblem only (the pin/arch)
 *   - 'wordmark' → text lockup only ("Histórias que Ficam" + tagline)
 *   - 'full'     → mark + wordmark side-by-side (the composed "full logo")
 *
 * The mark PNG lives at /public/logo-mark.png. To swap the artwork later,
 * replace that one file — every touchpoint in the site updates automatically.
 */
export default function Logo({
  variant = 'full',
  size = 40,           // height of the wordmark reference (fontSize scales from this)
  markSize,            // optional: override the mark height independently of the wordmark
  showTagline = true,  // whether to render the small "Património · Cultura · Experiência" line
  tone = 'green',      // 'green' (default) or 'warm' (for dark backgrounds like the footer)
  className = '',
}) {
  const markHeight = markSize ?? size
  // Emblem aspect ratio is ~2:3 (pin taller than wide).
  const markWidth = Math.round(markHeight * 0.72)

  const isWarm = tone === 'warm'

  const Mark = (
    <span
      className="relative inline-block flex-shrink-0"
      style={{ width: markWidth, height: markHeight }}
      aria-hidden={variant === 'full' || variant === 'wordmark' ? 'true' : undefined}
    >
      <Image
        src="/logo-mark.png"
        alt={variant === 'mark' ? 'Histórias que Ficam' : ''}
        fill
        sizes={`${markWidth}px`}
        className="object-contain"
        priority={markHeight >= 56}
      />
    </span>
  )

  const Wordmark = (
    <span className="flex flex-col leading-none">
      <span
        className={`font-serif tracking-tight ${isWarm ? 'text-heritage-warm' : 'text-heritage-green'}`}
        style={{ fontSize: Math.round(size * 0.45) }}
      >
        Histórias que Ficam
      </span>
      {showTagline && (
        <span className="text-[10px] tracking-[0.22em] uppercase text-heritage-gold mt-1">
          Património · Cultura · Experiência
        </span>
      )}
    </span>
  )

  if (variant === 'mark') return <span className={`inline-block ${className}`}>{Mark}</span>
  if (variant === 'wordmark') return <span className={`inline-flex ${className}`}>{Wordmark}</span>
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {Mark}
      {Wordmark}
    </span>
  )
}
