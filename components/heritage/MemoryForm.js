'use client'

import { useState, useRef } from 'react'
import { Upload, X, Check, Loader2, ImagePlus, Send } from 'lucide-react'
import { useT } from '@/lib/i18n/I18nProvider'

// Labels come from the dictionary at render time; only the stored value is fixed.
const LIGACAO_OPTIONS = [
  { value: '', key: 'memories.linkSelect' },
  { value: 'moradora', key: 'memories.linkOpt1' },
  { value: 'antigo', key: 'memories.linkOpt2' },
  { value: 'familia', key: 'memories.linkOpt3' },
  { value: 'visitante', key: 'memories.linkOpt4' },
  { value: 'outra', key: 'memories.linkOpt5' },
]

const MAX_CHARS = 1000
const MAX_FILE_MB = 10
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

/**
 * Mock async submit handler.
 * Replace with a real API call later — same signature.
 */
async function defaultSubmit(payload) {
  await new Promise((r) => setTimeout(r, 1400))
  // Throw here to simulate an error if needed.
  console.log('Memory submitted (mock):', payload)
  return { ok: true }
}

export default function MemoryForm({ onSubmit = defaultSubmit, streetSlug }) {
  const t = useT()
  const [nome, setNome] = useState('')
  const [ligacao, setLigacao] = useState('')
  const [memoria, setMemoria] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [fileError, setFileError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const charsLeft = MAX_CHARS - memoria.length
  const canSubmit = consent && memoria.trim().length >= 10 && !submitting

  const handleFile = (f) => {
    setFileError('')
    if (!f) return
    if (!ALLOWED_TYPES.includes(f.type)) {
      setFileError(t('memories.errInvalidFormat'))
      return
    }
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(t('memories.errTooLarge').replace('{mb}', MAX_FILE_MB))
      return
    }
    setFile(f)
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target.result)
    reader.readAsDataURL(f)
  }

  const removeFile = () => {
    setFile(null)
    setPreview(null)
    setFileError('')
    if (inputRef.current) inputRef.current.value = ''
  }

  const onDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }

  const reset = () => {
    setNome('')
    setLigacao('')
    setMemoria('')
    setEmail('')
    setConsent(false)
    setFile(null)
    setPreview(null)
    setFileError('')
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    setError('')
    try {
      const payload = {
        streetSlug,
        nome: nome.trim() || null,
        ligacao: ligacao || null,
        memoria: memoria.trim(),
        email: email.trim() || null,
        hasPhoto: !!file,
        fileName: file?.name || null,
      }
      const res = await onSubmit(payload)
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
          {t('memories.successTitle')}
        </h3>
        <div className="gold-divider my-5 max-w-[100px] mx-auto" />
        <p className="text-heritage-gray leading-relaxed max-w-md mx-auto">
          {t('memories.successBody')}
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="btn-ghost-green mt-7 inline-flex"
        >
          {t('memories.successCta')}
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="heritage-card border border-heritage-gold/25 p-6 md:p-8"
    >
      <div className="mb-6">
        <p className="eyebrow mb-2">{t('memories.archiveEyebrow')}</p>
        <h3 className="font-serif text-2xl md:text-3xl text-heritage-green leading-tight">
          {t('memories.shareTitle')}
        </h3>
        <p className="text-sm text-heritage-gray mt-2 leading-relaxed">
          {t('memories.shareIntro')}
        </p>
      </div>

      <div className="space-y-5">
        {/* Nome */}
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            {t('memories.nameLabel')} <span className="text-heritage-gray-light font-normal normal-case tracking-normal">({t('common.optional')})</span>
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder={t('memories.namePlaceholder')}
            className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] text-heritage-ink placeholder:text-heritage-gray-light focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
          />
        </div>

        {/* Ligação */}
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            {t('memories.linkLabel')} <span className="text-heritage-gray-light font-normal normal-case tracking-normal">({t('common.optional')})</span>
          </label>
          <div className="relative">
            <select
              value={ligacao}
              onChange={(e) => setLigacao(e.target.value)}
              className="w-full appearance-none bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 pr-10 text-[15px] text-heritage-ink focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
            >
              {LIGACAO_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{t(o.key)}</option>
              ))}
            </select>
            <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-heritage-gold pointer-events-none" viewBox="0 0 20 20" fill="currentColor"><path d="M5 8l5 5 5-5H5z"/></svg>
          </div>
        </div>

        {/* Memória */}
        <div>
          <label className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            <span>{t('memories.memoryLabel')} <span className="text-destructive">*</span></span>
            <span className={`font-mono tabular-nums normal-case tracking-normal ${charsLeft < 50 ? 'text-destructive' : 'text-heritage-gray-light'}`}>
              {memoria.length}/{MAX_CHARS}
            </span>
          </label>
          <textarea
            value={memoria}
            onChange={(e) => setMemoria(e.target.value.slice(0, MAX_CHARS))}
            placeholder={t('memories.memoryPlaceholder')}
            rows={6}
            required
            className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] text-heritage-ink placeholder:text-heritage-gray-light focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition resize-y leading-relaxed"
          />
        </div>

        {/* Upload */}
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            {t('memories.photoLabel')} <span className="text-heritage-gray-light font-normal normal-case tracking-normal">({t('common.optional')})</span>
          </label>

          {preview ? (
            <div className="relative rounded-xl overflow-hidden border border-heritage-gold/30 bg-heritage-warm">
              <img src={preview} alt={t('memories.photoPreview')} className="w-full max-h-72 object-cover" />
              <button
                type="button"
                onClick={removeFile}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-heritage-green text-white flex items-center justify-center shadow-heritage hover:bg-heritage-green-dark transition"
                aria-label={t('memories.photoRemove')}
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-heritage-warm/95 backdrop-blur px-3 py-1.5 rounded-full text-[11px] text-heritage-gray truncate max-w-[70%]">
                {file?.name}
              </div>
            </div>
          ) : (
            <label
              onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl px-4 py-8 cursor-pointer transition text-center ${
                dragging ? 'border-heritage-gold bg-heritage-gold/10' : 'border-heritage-gold/40 bg-heritage-beige/40 hover:bg-heritage-warm hover:border-heritage-gold/70'
              }`}
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => handleFile(e.target.files?.[0])}
                className="hidden"
              />
              <ImagePlus className="w-7 h-7 text-heritage-gold" strokeWidth={1.4} />
              <p className="text-sm text-heritage-ink/90">
                <span className="font-bold text-heritage-green">{t('memories.photoCta')}</span>
                <span className="text-heritage-gray"> {t('memories.photoDrop')}</span>
              </p>
              <p className="text-[11px] text-heritage-gray-light">{t('memories.photoFormats')}</p>
            </label>
          )}
          {fileError && (
            <p className="text-xs text-destructive mt-2">{fileError}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-heritage-green font-bold mb-2">
            {t('memories.emailLabel')} <span className="text-heritage-gray-light font-normal normal-case tracking-normal">({t('common.optional')})</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('common.emailPlaceholder')}
            className="w-full bg-heritage-beige/40 border border-heritage-gold/25 rounded-xl px-4 py-3 text-[15px] text-heritage-ink placeholder:text-heritage-gray-light focus:outline-none focus:border-heritage-green focus:bg-heritage-warm transition"
          />
          <p className="text-[11px] text-heritage-gray-light mt-1.5">
            {t('memories.emailNotice')}
          </p>
        </div>

        {/* Consent */}
        <label className="flex items-start gap-3 cursor-pointer select-none group">
          <span className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="peer sr-only"
            />
            <span className="w-5 h-5 rounded border border-heritage-gold/60 bg-heritage-warm flex items-center justify-center transition peer-checked:bg-heritage-green peer-checked:border-heritage-green group-hover:border-heritage-green">
              {consent && <Check className="w-3.5 h-3.5 text-heritage-warm" strokeWidth={3} />}
            </span>
          </span>
          <span className="text-[13px] text-heritage-gray leading-relaxed">
            {t('memories.consent')}{' '}
            <a href="#" className="text-heritage-gold underline-offset-2 hover:underline whitespace-nowrap">
              {t('common.learnMore')}
            </a>
          </span>
        </label>

        {error && (
          <div className="text-sm text-destructive bg-destructive/5 border border-destructive/30 rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSubmit}
          className="btn-green w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> {t('common.sending')}
            </>
          ) : (
            <>
              {t('memories.submit')} <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <p className="text-[12px] text-heritage-gray-light leading-relaxed italic border-l-2 border-heritage-gold/40 pl-3">
          {t('memories.reviewNote')}
        </p>
      </div>
    </form>
  )
}
