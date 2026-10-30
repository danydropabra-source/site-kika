// ============================================================
// CONTENT RESOLUTION — pure logic, no React.
//
// Kept free of React and of the `@/` alias on purpose: plain Node scripts
// (the translation-coverage checks) import this exact file, so the tests
// exercise the same code the site runs instead of a copy that can drift.
// ============================================================

import {
  todayInHistory as ptToday,
  placeGroups,
  featuredPlaces as ptPlaces,
  streets as ptStreets,
  personalities as ptPersonalities,
} from '../heritage-data.js'
import en from './en.js'
import es from './es.js'
import fr from './fr.js'

export const TRANSLATIONS = { en, es, fr }

const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)

/**
 * Overlay `override` on top of `base`.
 * - objects merge key by key
 * - arrays merge position by position (so a translated caption keeps its image)
 * - anything else: the override wins when it exists
 */
export function merge(base, override) {
  if (override === undefined || override === null) return base
  if (Array.isArray(base) && Array.isArray(override)) {
    const length = Math.max(base.length, override.length)
    return Array.from({ length }, (_, i) => (i < base.length ? merge(base[i], override[i]) : override[i]))
  }
  if (isPlainObject(base) && isPlainObject(override)) {
    const out = { ...base }
    for (const key of Object.keys(override)) out[key] = merge(base[key], override[key])
    return out
  }
  return override
}

/**
 * Placeholder streets are generated from templates in heritage-data.js, so
 * their copy has no fixed strings to override. Rebuild it from the locale's
 * own templates instead, filling in {title} and {category}.
 */
export function translatePlaceholder(street, templates) {
  if (!street?.is_placeholder || !templates) return street
  const fill = (s) =>
    String(s).replace(/\{title\}/g, street.title ?? '').replace(/\{category\}/g, street.category ?? '')

  const out = { ...street }
  // Generic intro used when a placeholder has no description of its own.
  // A street-specific `intro_paragraph` override still wins, because the
  // per-street merge runs after this.
  if (templates.introFallback) out.intro_paragraph = fill(templates.introFallback)
  if (templates.subtitle) out.subtitle = fill(templates.subtitle)
  if (templates.paragraphs) out.paragraphs = templates.paragraphs.map(fill)
  if (templates.curiosities) out.curiosities = templates.curiosities.map(fill)
  if (templates.locationDescription) out.location_description = fill(templates.locationDescription)
  if (templates.nameOrigin) out.name_origin = fill(templates.nameOrigin)
  if (templates.themed && street.themed_sections?.length) {
    out.themed_sections = street.themed_sections.map((s) => ({
      ...s,
      title: fill(templates.themed.title),
      body: fill(templates.themed.body),
    }))
  }
  if (templates.heritage && street.heritage_highlight) {
    out.heritage_highlight = {
      ...street.heritage_highlight,
      name: fill(templates.heritage.name),
      subtitle: fill(templates.heritage.subtitle),
      text: fill(templates.heritage.text),
    }
  }
  if (templates.personality && street.personality) {
    out.personality = {
      ...street.personality,
      name: fill(templates.personality.name),
      dates: fill(templates.personality.dates),
      bio: fill(templates.personality.bio),
    }
  }
  if (templates.beforeAfter && street.before_after_images?.length) {
    out.before_after_images = street.before_after_images.map((b) => ({
      ...b,
      caption: fill(templates.beforeAfter.caption),
      year_after: fill(templates.beforeAfter.yearAfter),
    }))
  }
  return out
}

/** Build the whole content tree for one locale. */
export function getContent(locale) {
  const t = TRANSLATIONS[locale]
  if (!t) {
    return {
      todayInHistory: ptToday,
      // Group names are place names — never translated, so no overlay.
      placeGroups,
      featuredPlaces: ptPlaces,
      streets: ptStreets,
      personalities: ptPersonalities,
    }
  }

  // featuredPlaces is an array in the source; translations key it by slug so
  // reordering the array can never misalign a description.
  const featuredPlaces = ptPlaces.map((place) => merge(place, t.featuredPlaces?.[place.slug]))

  const streets = {}
  for (const [slug, street] of Object.entries(ptStreets)) {
    streets[slug] = merge(translatePlaceholder(street, t.placeholder), t.streets?.[slug])
  }

  const personalities = {}
  for (const [slug, person] of Object.entries(ptPersonalities)) {
    personalities[slug] = merge(person, t.personalities?.[slug])
  }

  return {
    todayInHistory: merge(ptToday, t.todayInHistory),
    placeGroups,
    featuredPlaces,
    streets,
    personalities,
  }
}
