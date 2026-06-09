'use client'

import { useState } from 'react'
import { Loader2, Send, Check } from 'lucide-react'

async function defaultSubmit(payload) {
  await new Promise((r) => setTimeout(r, 1300))
  console.log('Contact form submitted (mock):', payload)
  return { ok: true }
}

const SUBJECTS = [
  { value: '', label: 'Selecionar (opcional)' },
  { value: 'municipio', label: 'Sou de uma Câmara Municipal' },
  { value: 'junta', label: 'Sou de uma Junta de Freguesia' },
  { value: 'parceiro', label: 'Proposta de parceria' },
  { value: 'imprensa', label: 'Imprensa / comunicação social' },
  { value: 'outro', label: 'Outro assunto' },
]

export default function ContactForm({ onSubmit = defaultSubmit, compact = false }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [organizacao, setOrganizacao] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const canSubmit = consent && nome.trim() && email.trim() && mensagem.trim().length >= 10 && !submitting

  const reset = () => {
    setNome(''); setEmail(''); setOrganizacao(''); setAssunto(''); setMensagem(''); setConsent(false); setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    setError('')
    try {
      const res = await onSubmit({ nome, email, organizacao, assunto, mensagem })
      if (res?.ok) {
        setSuccess(true)
        reset()
      } else {
        setError('Não foi possível enviar. Tente novamente.')
      }
    } catch (err) {
      setError('Ocorreu um erro inesperado.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="heritage-card border border-heritage-gold/30 p-8 md:p-10 text-center animate-fade-in">
        <div className="w-16 h-16 mx-auto rounded-full bg-heritage-green text-heritage-warm flex items-center justify-center mb-5 shadow-heritage">
          <Check className="w-7 h-7" strokeWidth={2.2} />
        </div>
        <p className="eyebrow mb-2">Obrigado</p>
        <h3 className="font-serif text-2xl md:text-3xl text-heritage-green leading-tight">
          A sua mensagem foi recebida.
        </h3>
        <div className="gold-divider my-5 max-w-[100px] mx-auto" />
        <p className="text-heritage-gray leading-relaxed max-w-md mx-auto">
          A nossa equipa responderá nos próximos dias úteis.
          Obrigado pelo seu interesse em "Histórias que Ficam".
        </p>
        <button type="button" onClick={() => setSuccess(false)} className="btn-ghost-green mt-7 inline-flex">
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`heritage-card border border-heritage-gold/25 ${compact ? 'p-6' : 'p-6 md:p-8'}`}>
      <div className="mb-6">
        <p className="eyebrow mb-2">Fale Connosco</p>
        <h3 className="font-serif text-2xl md:text-3xl text-heritage-green leading-tight">
          Vamos conversar.
        </h3>
        <p className="text-sm text-heritage-gray mt-2 leading-relaxed">
          Preçament-nos a sua proposta. Respondemos em 48 horas úteis.
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
              Nome <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="O seu nome"
              className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemplo.pt"
              className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            Organização <span className="text-heritage-gray-light font-normal normal-case tracking-normal">(opcional)</span>
          </label>
          <input
            type="text"
            value={organizacao}
            onChange={(e) => setOrganizacao(e.target.value)}
            placeholder="Câmara Municipal do Fundão, p. ex."
            className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            Assunto <span className="text-heritage-gray-light font-normal normal-case tracking-normal">(opcional)</span>
          </label>
          <div className="relative">
            <select
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              className="w-full appearance-none bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 pr-10 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
            >
              {SUBJECTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-heritage-gold pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path d="M5 8l5 5 5-5H5z"/></svg>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            Mensagem <span className="text-destructive">*</span>
          </label>
          <textarea
            required
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Conte-nos sobre o seu projecto ou interesse…"
            rows={5}
            className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition resize-y leading-relaxed"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer select-none group">
          <span className="relative flex-shrink-0 mt-0.5">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="peer sr-only" />
            <span className="w-5 h-5 rounded border border-heritage-gold/60 bg-heritage-warm flex items-center justify-center transition peer-checked:bg-heritage-green peer-checked:border-heritage-green group-hover:border-heritage-green">
              {consent && <Check className="w-3.5 h-3.5 text-heritage-warm" strokeWidth={3} />}
            </span>
          </span>
          <span className="text-[13px] text-heritage-gray leading-relaxed">
            Autorizo o tratamento dos meus dados para resposta a este contacto.{' '}
            <a href="#" className="text-heritage-gold underline-offset-2 hover:underline whitespace-nowrap">Política de privacidade</a>
          </span>
        </label>

        {error && (
          <div className="text-sm text-destructive bg-destructive/5 border border-destructive/30 rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        <button type="submit" disabled={!canSubmit} className="btn-green w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
          {submitting ? (
            <><Loader2 className="w-3.5 h-3.5 animate-spin" /> A enviar…</>
          ) : (
            <>Enviar Mensagem <Send className="w-3.5 h-3.5" /></>
          )}
        </button>
      </div>
    </form>
  )
}
