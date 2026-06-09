import { notFound } from 'next/navigation'
import { getPersonality } from '@/lib/heritage-data'

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://historiasqueficam.pt'

export async function generateMetadata({ params }) {
  const p = getPersonality(params.slug)
  if (!p) return { title: 'Personalidade não encontrada' }
  const desc = p.shortBio?.slice(0, 180) || p.role
  const url = `${SITE_URL}/personalidades/${p.slug}`
  return {
    title: p.fullName,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.fullName} · Histórias que Ficam`,
      description: desc,
      url,
      type: 'profile',
      images: p.portrait ? [{ url: p.portrait, width: 800, height: 1000, alt: p.fullName }] : [],
    },
    twitter: { card: 'summary_large_image', images: p.portrait ? [p.portrait] : [] },
  }
}

export default function PersonalityLayout({ children, params }) {
  if (!getPersonality(params.slug)) return notFound()
  return children
}
