'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin, Building2, Landmark, ShieldCheck, Map, Headphones, BookOpen, Users, QrCode, ScanLine, ChevronRight } from 'lucide-react'
import Header from '@/components/heritage/Header'
import Footer from '@/components/heritage/Footer'
import MobileBottomNav from '@/components/heritage/MobileBottomNav'
import ContactForm from '@/components/heritage/ContactForm'
import { useT } from '@/lib/i18n/I18nProvider'

const BENEFITS = [
  { icon: ShieldCheck, title: 'Conteúdos rigorosos', text: 'Investigação documentada, fontes verificadas, revisão científica.' },
  { icon: Map, title: 'Mapa interactivo', text: 'Plataforma digital própria do município, com pins, rotas e pesquisa.' },
  { icon: Headphones, title: 'Audio-guias multilíngue', text: 'Narrações profissionais em PT, EN e ES.' },
  { icon: BookOpen, title: 'Identidade gráfica', text: 'Imagem coerente, elegância institucional, sem ruído visual.' },
  { icon: Users, title: 'Memórias da comunidade', text: 'Módulo aberto para recolher testemunhos dos habitantes.' },
  { icon: QrCode, title: 'Placas com QR', text: 'Placas discretas no terreno que ligam directamente ao conteúdo.' },
]

const STEPS = [
  { n: '01', title: 'Reunião inicial', text: 'Conhecemos o território, os objectivos e o orçamento. Sem compromisso.' },
  { n: '02', title: 'Plano de pontos', text: 'Definimos juntos os locais, personalidades e ordem de instalação.' },
  { n: '03', title: 'Investigação', text: 'A nossa equipa trabalha com o arquivo municipal e fontes locais.' },
  { n: '04', title: 'Produção', text: 'Textos, traduoções, audio, fotografia e plataforma digital.' },
  { n: '05', title: 'Instalação', text: 'Colocação das placas no terreno e lançamento público.' },
  { n: '06', title: 'Acompanhamento', text: 'Moderação de memórias e actualização de conteúdos.' },
]

function PlaqueMockup() {
  return (
    <div className="relative max-w-sm mx-auto">
      {/* Plaque */}
      <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-heritage-green to-heritage-green-dark p-6 shadow-heritage-lg overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence baseFrequency='0.9' /><feColorMatrix values='0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0.6 0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        {/* Gold inner border */}
        <div className="absolute inset-3 rounded-xl border border-heritage-gold/50" />
        <div className="absolute inset-4 rounded-lg border border-heritage-gold/20" />

        <div className="relative h-full flex flex-col items-center text-center text-heritage-warm pt-6">
          <p className="text-[9px] uppercase tracking-[0.32em] text-heritage-gold-light">
            Património · Cultura · Experiência
          </p>
          <h3 className="font-serif text-2xl mt-3 leading-tight">Histórias que Ficam</h3>
          <div className="h-px w-12 bg-heritage-gold my-4" />
          <p className="font-serif italic text-sm leading-snug px-2 text-heritage-warm/85 max-w-[18ch]">
            “Aqui nasceu José Alves Monteiro — figura ilustre do Fundão.”
          </p>

          {/* QR */}
          <div className="mt-auto bg-heritage-warm rounded-lg p-2 grid grid-cols-7 gap-[2px] w-28 h-28">
            {Array.from({ length: 49 }).map((_, i) => {
              // Make a deterministic QR-like pattern
              const corners = [0, 6, 42]
              const isCorner = corners.includes(i)
              const filled =
                isCorner ||
                (i % 3 === 0 && i % 5 !== 0) ||
                i % 7 === 0 ||
                [9, 13, 17, 22, 27, 33, 36, 40, 44].includes(i)
              return (
                <span
                  key={i}
                  className={`w-full h-full rounded-[1px] ${filled ? 'bg-heritage-green' : 'bg-transparent'}`}
                />
              )
            })}
          </div>

          <p className="text-[9px] uppercase tracking-[0.28em] text-heritage-gold-light mt-3 mb-2">
            Rua da Cale · Fundão
          </p>
        </div>
      </div>
      {/* Floating tag */}
      <div className="absolute -top-3 -right-3 bg-heritage-gold text-white text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full shadow-heritage rotate-3">
        Exemplo
      </div>
    </div>
  )
}

export default function ContactosPage() {
  const t = useT()
  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      {/* Hero */}
      <section className="container pt-12 md:pt-20">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-end">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Building2 className="w-4 h-4" aria-hidden="true" /> {t('contactos.eyebrow')}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-heritage-green mt-3 leading-[1.05] tracking-tight">
              {t('contactos.title')}
            </h1>
            <div className="gold-divider mt-5 max-w-[140px]" />
            <p className="text-lg text-heritage-gray font-serif italic max-w-2xl mt-5 leading-relaxed">
              {t('contactos.body')}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#form" className="btn-gold">{t('contactos.talkToUs')} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /></a>
              <Link href="/sobre" className="btn-ghost-green">{t('contactos.howItWorksLink')}</Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <PlaqueMockup />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mt-20 md:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-3">{t('contactos.benefitsEyebrow')}</p>
          <h2 className="section-title">{t('contactos.benefitsTitle')}</h2>
          <div className="gold-divider mt-5 max-w-[120px] mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="heritage-card border border-heritage-gold/15 p-6 flex gap-4 hover:shadow-heritage-lg transition">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-heritage-green/8 border border-heritage-gold/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-heritage-green" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg text-heritage-green leading-tight">{title}</h3>
                <p className="text-sm text-heritage-gray leading-relaxed mt-1.5">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How implementation works */}
      <section className="container mt-20 md:mt-28">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <p className="eyebrow mb-3">{t('contactos.howEyebrow')}</p>
            <h2 className="section-title">{t('contactos.howTitle')}</h2>
            <div className="gold-divider mt-5 max-w-[120px]" />
            <ol className="mt-8 space-y-4">
              {STEPS.map((s) => (
                <li key={s.n} className="heritage-card border border-heritage-gold/15 p-5 flex gap-5 items-start">
                  <span className="flex-shrink-0 font-serif text-3xl text-heritage-gold font-bold leading-none w-14">{s.n}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-heritage-green leading-tight">{s.title}</h3>
                    <p className="text-sm text-heritage-gray leading-relaxed mt-1">{s.text}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-heritage-gold/50 mt-2 hidden sm:block" />
                </li>
              ))}
            </ol>
          </div>

          {/* Example plaque (visible on lg+, mobile shows it earlier? Let's show here on small too) */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <p className="eyebrow mb-3 text-center lg:text-left">{t('contactos.plateEyebrow')}</p>
            <PlaqueMockup />
            <p className="text-xs text-heritage-gray-light text-center lg:text-left mt-4 max-w-xs mx-auto lg:mx-0 leading-relaxed italic">
              {t('contactos.plateNote')}
            </p>
          </aside>
        </div>
      </section>

      {/* Form + contacts */}
      <section id="form" className="container mt-20 md:mt-28">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-5">
            <div className="heritage-card border border-heritage-gold/20 p-6">
              <p className="eyebrow mb-2">{t('contactos.directEyebrow')}</p>
              <h3 className="font-serif text-xl text-heritage-green leading-tight">{t('contactos.directTitle')}</h3>
              <div className="gold-divider my-4 max-w-[60px]" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-heritage-ink/90">
                  <Mail className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0" aria-hidden="true" />
                  <span>parcerias@historiasqueficam.pt</span>
                </li>
                <li className="flex items-start gap-3 text-heritage-ink/90">
                  <Phone className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0" aria-hidden="true" />
                  <span>+351 275 000 000</span>
                </li>
                <li className="flex items-start gap-3 text-heritage-ink/90">
                  <MapPin className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0" aria-hidden="true" />
                  <span>Fundão, Portugal<br/><span className="text-heritage-gray-light text-xs">Visitas com marcação prévia</span></span>
                </li>
              </ul>
            </div>

            <div className="heritage-card border border-heritage-gold/20 p-6 bg-heritage-green text-heritage-warm">
              <Landmark className="w-5 h-5 text-heritage-gold-light mb-3" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-serif text-xl leading-tight">{t('contactos.alreadyTitle')}</h3>
              <div className="h-px w-12 bg-heritage-gold my-3" />
              <ul className="text-sm space-y-2 text-heritage-warm/85">
                <li>· Câmara Municipal do Fundão</li>
                <li>· Turismo Centro de Portugal</li>
                <li>· Direção-Geral do Património Cultural</li>
                <li>· Junta de Freguesia do Fundão, Vallôngo e Aldeia de Joanes</li>
              </ul>
            </div>

            <div className="heritage-card border border-heritage-gold/20 p-6">
              <ScanLine className="w-5 h-5 text-heritage-gold mb-3" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-serif text-xl text-heritage-green leading-tight">{t('contactos.plateTitle')}</h3>
              <div className="gold-divider my-3 max-w-[60px]" />
              <p className="text-sm text-heritage-gray leading-relaxed">{t('contactos.plateBody')}</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  )
}
