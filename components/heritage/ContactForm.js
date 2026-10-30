'use client'

import { useState } from 'react'
import { Loader2, Send, Check } from 'lucide-react'
import { useT } from '@/lib/i18n/I18nProvider'

async function defaultSubmit(payload) {
  await new Promise((r) => setTimeout(r, 1300))
  console.log('Contact form submitted (mock):', payload)
  return { ok: true }
}

// Labels come from the dictionary at render time; only the stored value is fixed.
const SUBJECTS = [
  { value: '', key: 'contactos.subjSelect' },
  { value: 'municipio', key: 'contactos.subj1' },
  { value: 'junta', key: 'contactos.subj2' },
  { value: 'parceiro', key: 'contactos.subj3' },
  { value: 'imprensa', key: 'contactos.subj4' },
  { value: 'outro', key: 'contactos.subj5' },
]

export default function ContactForm({ onSubmit = defaultSubmit, compact = false }) {
  const t = useT()
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
        setError(t('common.errSendFailed'))
      }
    } catch (err) {
      setError(t('common.errUnexpected'))
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
        <p className="eyebrow mb-2">{t('common.thanks')}</p>
        <h3 className="font-serif text-2xl md:text-3xl text-heritage-green leading-tight">
          {t('contactos.successTitle')}
        </h3>
        <div className="gold-divider my-5 max-w-[100px] mx-auto" />
        <p className="text-heritage-gray leading-relaxed max-w-md mx-auto">
          {t('contactos.successBody')}
        </p>
        <button type="button" onClick={() => setSuccess(false)} className="btn-ghost-green mt-7 inline-flex">
          {t('contactos.successCta')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`heritage-card border border-heritage-gold/25 ${compact ? 'p-6' : 'p-6 md:p-8'}`}>
      <div className="mb-6">
        <p className="eyebrow mb-2">{t('contactos.formEyebrow')}</p>
        <h3 className="font-serif text-2xl md:text-3xl text-heritage-green leading-tight">
          {t('contactos.formTitle')}
        </h3>
        <p className="text-sm text-heritage-gray mt-2 leading-relaxed">
          {t('contactos.formBody')}
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
              {t('contactos.fName')} <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder={t('contactos.fNamePlaceholder')}
              className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
              {t('contactos.fEmail')} <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('common.emailPlaceholder')}
              className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            {t('contactos.fOrg')} <span className="text-heritage-gray-light font-normal normal-case tracking-normal">({t('common.optional')})</span>
          </label>
          <input
            type="text"
            value={organizacao}
            onChange={(e) => setOrganizacao(e.target.value)}
            placeholder={t('contactos.fOrgPlaceholder')}
            className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            {t('contactos.fSubject')} <span className="text-heritage-gray-light font-normal normal-case tracking-normal">({t('common.optional')})</span>
          </label>
          <div className="relative">
            <select
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              className="w-full appearance-none bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 pr-10 text-[15px] focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
            >
              {SUBJECTS.map((s) => (
                <option key={s.value} value={s.value}>{t(s.key)}</option>
              ))}
            </select>
            <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-heritage-gold pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path d="M5 8l5 5 5-5H5z"/></svg>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            {t('contactos.fMessage')} <span className="text-destructive">*</span>
          </label>
          <textarea
            required
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder={t('contactos.fMessagePlaceholder')}
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
            {t('contactos.fConsent')}{' '}
            <a href="#" className="text-heritage-gold underline-offset-2 hover:underline whitespace-nowrap">{t('contactos.fPolicy')}</a>
          </span>
        </label>

        {error && (
          <div className="text-sm text-destructive bg-destructive/5 border border-destructive/30 rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        <button type="submit" disabled={!canSubmit} className="btn-green w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
          {submitting ? (
            <><Loader2 className="w-3.5 h-3.5 animate-spin" /> {t('common.sending')}</>
          ) : (
            <>{t('contactos.fSubmit')} <Send className="w-3.5 h-3.5" /></>
          )}
        </button>
      </div>
    </form>
  )
}
