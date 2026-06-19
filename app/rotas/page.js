'use client'

import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import RouteCard from '@/components/heritage/RouteCard'
import { getRoutes } from '@/lib/api'
import { useT } from '@/lib/i18n/I18nProvider'

export default function RotasPage() {
  const t = useT()
  const routes = getRoutes()

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* Hero */}
      <section className="container pt-12 md:pt-20 max-w-4xl">
        <p className="eyebrow">{t('routes.eyebrow')}</p>
        <h1 className="font-serif text-4xl md:text-6xl text-heritage-green mt-3 leading-[1.05] tracking-tight">
          {t('routes.title')}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-heritage-gray font-serif italic max-w-2xl leading-relaxed">
          {t('routes.subtitle')}
        </p>
        <div className="gold-divider mt-6 max-w-[140px]" />
      </section>

      {/* Grid */}
      <section className="container mt-12 md:mt-16">
        {routes.length === 0 ? (
          <p className="text-heritage-gray italic">{t('routes.empty')}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((r) => (
              <RouteCard key={r.id} route={r} />
            ))}
          </div>
        )}
      </section>

      {/* Footer banner */}
      <section className="container mt-16 md:mt-24">
        <div className="heritage-card border border-heritage-gold/20 p-6 md:p-10 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-2">{t('routes.cta_eyebrow')}</p>
          <h2 className="font-serif text-2xl md:text-3xl text-heritage-green leading-tight">{t('routes.cta_title')}</h2>
          <div className="gold-divider my-4 max-w-[100px] mx-auto" />
          <p className="text-heritage-gray leading-relaxed max-w-xl mx-auto">{t('routes.cta_body')}</p>
        </div>
      </section>

      <Footer />
      <MobileBottomNav active="rotas" />
    </div>
  )
}
