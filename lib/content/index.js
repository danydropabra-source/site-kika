'use client'

// ============================================================
// LOCALE-AWARE CONTENT LAYER
//
// heritage-data.js stays the canonical Portuguese source. This layer
// overlays per-locale translations on top of it.
//
// To add a language: create ./<locale>.js exporting the same shape as
// ./en.js and register it in TRANSLATIONS inside ./resolve.js. Anything you
// leave out falls back to Portuguese, so a partial translation never breaks
// a page.
//
// The merge logic lives in ./resolve.js (React-free) so plain Node scripts
// can verify it directly.
// ============================================================

import { useMemo } from 'react'
import { useI18n } from '@/lib/i18n/I18nProvider'
import { getContent } from './resolve'

export { getContent }

/**
 * Content in the language the visitor selected.
 * Returns the same shapes as heritage-data.js plus the usual lookup helpers.
 */
export function useContent() {
  const { locale } = useI18n()

  return useMemo(() => {
    const content = getContent(locale)
    return {
      ...content,
      getStreet: (slug) => content.streets[slug] || null,
      getPersonality: (slug) => content.personalities[slug] || null,
      getPlaceBySlug: (slug) => content.featuredPlaces.find((p) => p.slug === slug) || null,
    }
  }, [locale])
}
