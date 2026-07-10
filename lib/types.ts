// ============================================================
// Shared domain types for Histórias que Ficam.
// snake_case fields so the same shape matches a future REST/JSON API
// without renaming on the client.
// ============================================================

export type UUID = string

export interface Place {
  id: string
  slug: string
  name: string
  location: string
  lat: number
  lng: number
  pilot?: boolean
  image: string
  description: string
}

export interface RouteStop {
  /** Slug of the street/place. Links to /historias/[slug]. */
  street_id: string
  /** Optional override of the displayed title. Falls back to place.name. */
  title?: string
  /** Optional short note specific to this stop within the route. */
  note?: string
}

// -------- Street content blocks (editorial template) --------

export interface ThemedSection {
  title: string
  body: string
  image?: string
}

export interface HeritageHighlight {
  name: string
  subtitle?: string
  text: string
  image: string
}

export interface BeforeAfter {
  before: string
  after: string
  caption: string
  year_before?: string
  year_after?: string
}

export interface Route {
  id: UUID
  slug: string
  title: string
  short_description: string
  long_description?: string
  image: string
  stop_count: number
  /** Ordered list of street/place slugs that compose this route. */
  street_ids: string[]
  /** Optional richer per-stop config. When present, takes precedence over street_ids. */
  stops?: RouteStop[]
  /** Optional theme/category label shown on the card (e.g. "Histórico", "Religioso"). */
  theme?: string
  /** Estimated walking duration in minutes. */
  duration_min?: number
  /** Estimated walking distance in kilometres. */
  distance_km?: number
}
