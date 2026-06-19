'use client'

// React hook around the favorites module. SSR-safe: reads inside useEffect.

import { useCallback, useEffect, useState } from 'react'
import {
  getFavorites,
  isFavorite as isFavApi,
  toggleFavorite as toggleApi,
  removeFavorite as removeApi,
  onFavoritesChange,
} from './favorites'

export interface UseFavoritesReturn {
  favorites: string[]
  ready: boolean
  isFavorite: (streetId: string) => boolean
  toggle: (streetId: string) => Promise<boolean>
  remove: (streetId: string) => Promise<void>
  count: number
}

export function useFavorites(): UseFavoritesReturn {
  const [favorites, setFavorites] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    getFavorites().then((list) => {
      if (cancelled) return
      setFavorites(list)
      setReady(true)
    })
    const unsub = onFavoritesChange((list) => {
      if (!cancelled) setFavorites(list)
    })
    return () => {
      cancelled = true
      unsub()
    }
  }, [])

  const isFavorite = useCallback(
    (streetId: string) => favorites.includes(streetId),
    [favorites],
  )

  const toggle = useCallback(async (streetId: string) => {
    return toggleApi(streetId)
  }, [])

  const remove = useCallback(async (streetId: string) => {
    return removeApi(streetId)
  }, [])

  return { favorites, ready, isFavorite, toggle, remove, count: favorites.length }
}

// Lightweight hook for a single-id binding (used inside cards/buttons).
export function useFavorite(streetId: string): {
  isFav: boolean
  ready: boolean
  toggle: () => Promise<boolean>
} {
  const { isFavorite, toggle, ready } = useFavorites()
  return {
    isFav: isFavorite(streetId),
    ready,
    toggle: () => toggle(streetId),
  }
}
