'use client'

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, translate } from './dictionaries'

const STORAGE_KEY = 'hqf-locale'

const I18nContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (k) => k,
  locales: SUPPORTED_LOCALES,
})

export function I18nProvider({ children, initialLocale = DEFAULT_LOCALE }) {
  const [locale, setLocaleState] = useState(initialLocale)

  // Hydrate from localStorage / <html lang>.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved && SUPPORTED_LOCALES.includes(saved) && saved !== locale) {
        setLocaleState(saved)
      }
    } catch (e) { /* ignore */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep <html lang="..."> in sync for a11y / SEO.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', locale)
    }
  }, [locale])

  const setLocale = useCallback((next) => {
    if (!SUPPORTED_LOCALES.includes(next)) return
    setLocaleState(next)
    try { window.localStorage.setItem(STORAGE_KEY, next) } catch (e) { /* ignore */ }
  }, [])

  const t = useCallback((key) => translate(locale, key), [locale])

  const value = useMemo(() => ({
    locale,
    setLocale,
    t,
    locales: SUPPORTED_LOCALES,
  }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}

export function useT() {
  return useContext(I18nContext).t
}
