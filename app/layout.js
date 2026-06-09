import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'

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

export const metadata = {
  title: 'Histórias que Ficam · Património · Cultura · Experiência',
  description: 'Descubra as histórias que vivem nas nossas ruas. Património, cultura e identidade ao seu alcance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen paper-texture">
        {children}
      </body>
    </html>
  )
}
