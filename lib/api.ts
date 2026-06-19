// ============================================================
// Client-side data accessors. Today they read from the static mock
// data in /lib/data; later they can be swapped to `fetch('/api/...')`
// while keeping the same shape — components don't need to change.
// ============================================================

import type { Route, Place } from './types'
import { routes } from './data/routes'
import { featuredPlaces, getStreet, getPersonality, getPlaceBySlug } from './heritage-data'

export function getRoutes(): Route[] {
  return routes
}

export function getRouteBySlug(slug: string): Route | null {
  return routes.find((r) => r.slug === slug) || null
}

export function getPlaces(): Place[] {
  return featuredPlaces as unknown as Place[]
}

// Re-export the existing helpers so all data access can live behind one module.
export { getStreet, getPersonality, getPlaceBySlug }
