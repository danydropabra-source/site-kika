// Thin route wrapper — the ONLY responsibility of this file is to:
//   1. resolve the street from the data layer by slug
//   2. render <StreetPageTemplate street={street} />
//
// The entire street-page layout lives in ONE place:
//   /components/heritage/StreetPageTemplate.js
// Every street (canonical or placeholder) is rendered through it.
// No layout markup lives here.

'use client'

import { notFound, useParams } from 'next/navigation'
import { useContent } from '@/lib/content'
import StreetPageTemplate from '@/components/heritage/StreetPageTemplate'

export default function StreetRoute() {
  const params = useParams()
  const { getStreet } = useContent()
  const street = getStreet(params?.slug)
  if (!street) return notFound()
  return <StreetPageTemplate street={street} />
}
