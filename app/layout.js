import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'
import { I18nProvider } from '@/lib/i18n/I18nProvider'
import SkipLink from '@/components/heritage/SkipLink'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://historiasqueficam.pt'
const OG_IMAGE = 'https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Histórias que Ficam · Património · Cultura · Experiência',
    template: '%s · Histórias que Ficam',
  },
  description:
    'Descubra as histórias que vivem nas nossas ruas. Um projecto cultural de divulgação do património português — em PT, EN e ES.',
  keywords: ['património', 'cultura', 'Fundão', 'história local', 'audio-guia', 'heritage', 'Portugal'],
  authors: [{ name: 'Histórias que Ficam' }],
  openGraph: {
    title: 'Histórias que Ficam',
    description: 'Descubra as histórias que vivem nas nossas ruas.',
    url: SITE_URL,
    siteName: 'Histórias que Ficam',
    images: [{ url: OG_IMAGE, width: 1600, height: 900, alt: 'Rua histórica portuguesa ao entardecer' }],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Histórias que Ficam',
    description: 'Descubra as histórias que vivem nas nossas ruas.',
    images: [OG_IMAGE],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen paper-texture">
        <I18nProvider initialLocale="pt">
          <SkipLink />
          <div id="main">{children}</div>
        </I18nProvider>
      </body>
    </html>
  )
}
