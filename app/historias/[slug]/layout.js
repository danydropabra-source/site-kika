import { notFound } from 'next/navigation'
import { getStreet } from '@/lib/heritage-data'

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://historiasqueficam.pt'

export async function generateMetadata({ params }) {
  const street = getStreet(params.slug)
  if (!street) return { title: 'Rua não encontrada' }
  const desc = street.subtitle
  const url = `${SITE_URL}/historias/${street.slug}`
  return {
    title: street.title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${street.title} · Histórias que Ficam`,
      description: desc,
      url,
      type: 'article',
      images: street.heroImage ? [{ url: street.heroImage, width: 1600, height: 900, alt: street.title }] : [],
    },
    twitter: { card: 'summary_large_image', images: street.heroImage ? [street.heroImage] : [] },
  }
}

export default function StreetLayout({ children, params }) {
  if (!getStreet(params.slug)) return notFound()
  return children
}
