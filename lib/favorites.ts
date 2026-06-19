// ============================================================
// FAVORITES (client-only). Currently backed by localStorage.
// All access is async to match the eventual Supabase signature —
// swap the body of each exported function, keep the SAME exports,
// and components will not need to change.
// ============================================================

const STORAGE_KEY = 'hqf-favorites'

type Listener = (favorites: string[]) => void

const listeners: Set<Listener> = new Set()

function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

function readSync(): string[] {
  if (!isBrowser()) return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === 'string') : []
  } catch {
    return []
  }
}

function writeSync(list: string[]): void {
  if (!isBrowser()) return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  } catch {
    /* ignore quota / private-mode errors */
  }
  listeners.forEach((fn) => {
    try { fn(list) } catch { /* ignore subscriber errors */ }
  })
}

// Cross-tab sync: when localStorage changes in another tab, notify listeners.
if (typeof window !== 'undefined') {
  // Use a guarded module-level flag so this only attaches once.
  // @ts-ignore — attaching to window
  if (!window.__hqfFavoritesBound) {
    window.addEventListener('storage', (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const list = readSync()
        listeners.forEach((fn) => fn(list))
      }
    })
    // @ts-ignore
    window.__hqfFavoritesBound = true
  }
}

// -------- Public API --------

export async function getFavorites(): Promise<string[]> {
  return readSync()
}

export async function isFavorite(streetId: string): Promise<boolean> {
  return readSync().includes(streetId)
}

/** Toggles a favorite. Returns the NEW state (true = is now a favorite). */
export async function toggleFavorite(streetId: string): Promise<boolean> {
  if (!streetId) return false
  const list = readSync()
  const idx = list.indexOf(streetId)
  let next: string[]
  let nowFav: boolean
  if (idx === -1) {
    next = [...list, streetId]
    nowFav = true
  } else {
    next = list.filter((s) => s !== streetId)
    nowFav = false
  }
  writeSync(next)
  return nowFav
}

export async function removeFavorite(streetId: string): Promise<void> {
  const list = readSync().filter((s) => s !== streetId)
  writeSync(list)
}

export async function clearFavorites(): Promise<void> {
  writeSync([])
}

/** Subscribe to favorites changes. Returns an unsubscribe function. */
export function onFavoritesChange(cb: Listener): () => void {
  listeners.add(cb)
  return () => {
    listeners.delete(cb)
  }
}
