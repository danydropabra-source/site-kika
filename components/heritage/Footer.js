import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-heritage-green text-heritage-warm mt-20">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl">Histórias<br/>que Ficam</h3>
          <div className="h-px w-12 bg-heritage-gold my-4" />
          <p className="text-sm text-heritage-warm/70 leading-relaxed">
            Património, cultura e identidade ao seu alcance. Um projecto de divulgação do património português.
          </p>
        </div>

        <div>
          <h4 className="uppercase tracking-[0.18em] text-xs text-heritage-gold mb-4">Explorar</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a className="text-heritage-warm/80 hover:text-heritage-gold" href="#">Mapa de Locais</a></li>
            <li><a className="text-heritage-warm/80 hover:text-heritage-gold" href="#">Rotas Temáticas</a></li>
            <li><a className="text-heritage-warm/80 hover:text-heritage-gold" href="#">Hoje na História</a></li>
            <li><a className="text-heritage-warm/80 hover:text-heritage-gold" href="#">Personalidades</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-[0.18em] text-xs text-heritage-gold mb-4">Contactos</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2 text-heritage-warm/80"><MapPin className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0"/>Fundão, Portugal</li>
            <li className="flex items-start gap-2 text-heritage-warm/80"><Mail className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0"/>geral@historiasqueficam.pt</li>
            <li className="flex items-start gap-2 text-heritage-warm/80"><Phone className="w-4 h-4 mt-0.5 text-heritage-gold flex-shrink-0"/>+351 275 000 000</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-[0.18em] text-xs text-heritage-gold mb-4">Seguir</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition"><Instagram className="w-4 h-4"/></a>
            <a href="#" className="w-10 h-10 rounded-full border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition"><Facebook className="w-4 h-4"/></a>
            <a href="#" className="w-10 h-10 rounded-full border border-heritage-gold/40 flex items-center justify-center hover:bg-heritage-gold hover:border-heritage-gold transition"><Youtube className="w-4 h-4"/></a>
          </div>
          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-heritage-gold mb-2">Parceiros</p>
            <p className="text-xs text-heritage-warm/60 leading-relaxed">Câmara Municipal do Fundão · Turismo Centro · Direção-Geral do Património Cultural</p>
          </div>
        </div>
      </div>

      <div className="border-t border-heritage-gold/20">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-heritage-warm/60">
          <span>© {new Date().getFullYear()} Histórias que Ficam. Todos os direitos reservados.</span>
          <span>Feito com cuidado, para durar.</span>
        </div>
      </div>
    </footer>
  )
}
