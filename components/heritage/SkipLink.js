'use client'

import { useT } from '@/lib/i18n/I18nProvider'

/**
 * Accessibility skip link — the first focusable element on the page.
 * Lives in its own client component so it can be translated: the root
 * layout is a server component and cannot read the selected locale.
 */
export default function SkipLink() {
  const t = useT()
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-heritage-green focus:text-heritage-warm focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:shadow-heritage-lg"
    >
      {t('common.skipToContent')}
    </a>
  )
}
