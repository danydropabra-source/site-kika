'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useT } from '@/lib/i18n/I18nProvider'

/**
 * Full-screen photo viewer for a street gallery.
 *
 * Built on the Radix dialog primitives rather than components/ui/dialog.jsx
 * because that one is capped at max-w-lg and ships its own small close button.
 * Radix still gives us the focus trap, the Escape key and the aria wiring.
 *
 * Controlled by the parent: `index` is the photo to show, `null` means closed.
 */
export default function GalleryLightbox({ images = [], index, onClose, onImageError }) {
  const t = useT()
  const [current, setCurrent] = useState(index ?? 0)

  const open = index !== null && index !== undefined
  const total = images.length

  // Follow the thumbnail the visitor actually clicked.
  useEffect(() => {
    if (open) setCurrent(index)
  }, [index, open])

  // A photo dropped while the viewer is open shrinks the list under us.
  useEffect(() => {
    if (total > 0 && current > total - 1) setCurrent(total - 1)
  }, [total, current])

  const go = useCallback(
    (step) => setCurrent((c) => (c + step + total) % total),
    [total]
  )

  // Radix already handles Escape; arrows are ours.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, go])

  if (!total) return null

  const caption = t('street.galleryImageOf')
    .replace('{i}', String(current + 1))
    .replace('{n}', String(total))

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-heritage-green-dark/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed inset-0 z-[100] flex flex-col focus:outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">{t('street.galleryViewAll')}</Dialog.Title>

          {/* Top bar: counter + close */}
          <div className="flex items-center justify-between px-4 py-4 md:px-8 text-heritage-warm">
            <p className="text-xs uppercase tracking-[0.22em] font-bold tabular-nums">{caption}</p>
            <Dialog.Close
              aria-label={t('common.close')}
              className="w-11 h-11 rounded-full border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-green transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"
            >
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          {/* Photo */}
          <div className="relative flex-1 min-h-0 mx-4 md:mx-8 mb-4">
            <Image
              key={images[current]}
              src={images[current]}
              alt={caption}
              fill
              sizes="100vw"
              className="object-contain"
              priority
              onError={() => onImageError?.(images[current])}
            />
          </div>

          {/* Bottom bar: prev / thumbnails / next */}
          {total > 1 && (
            <div className="flex items-center justify-center gap-4 px-4 pb-6 md:pb-8">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t('street.prev')}
                className="w-11 h-11 flex-shrink-0 rounded-full border border-heritage-gold/40 text-heritage-warm flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-green transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2 overflow-x-auto max-w-[60vw] py-1">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={t('street.galleryImageOf').replace('{i}', String(i + 1)).replace('{n}', String(total))}
                    aria-current={i === current}
                    className={`relative w-14 h-14 flex-shrink-0 rounded-md overflow-hidden transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold ${
                      i === current ? 'ring-2 ring-heritage-gold' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="64px" onError={() => onImageError?.(src)} className="object-cover" />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t('street.next')}
                className="w-11 h-11 flex-shrink-0 rounded-full border border-heritage-gold/40 text-heritage-warm flex items-center justify-center hover:bg-heritage-gold hover:text-heritage-green transition focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-gold"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
