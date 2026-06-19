import { notFound } from 'next/navigation'
import { getRouteBySlug } from '@/lib/api'

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://historiasqueficam.pt'

export async function generateMetadata({ params }) {
  const route = getRouteBySlug(params.slug)
  if (!route) return { title: 'Rota não encontrada' }
  const url = `${SITE_URL}/rotas/${route.slug}`
  return {
    title: route.title,
    description: route.short_description,
    alternates: { canonical: url },
    openGraph: {
      title: `${route.title} · Histórias que Ficam`,
      description: route.short_description,
      url,
      type: 'article',
      images: route.image ? [{ url: route.image, width: 1600, height: 900, alt: route.title }] : [],
    },
  }
}

export default function RouteLayout({ children, params }) {
  if (!getRouteBySlug(params.slug)) return notFound()
  return children
}
