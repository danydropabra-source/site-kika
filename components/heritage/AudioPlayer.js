'use client'

import { useRef, useState, useEffect } from 'react'
import { Play, Pause, Volume2 } from 'lucide-react'
import { useT } from '@/lib/i18n/I18nProvider'

function formatTime(s) {
  if (!s && s !== 0) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

export default function AudioPlayer({ title, src, duration: fallbackDuration }) {
  const t = useT()
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(fallbackDuration || 0)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onTime = () => setTime(a.currentTime)
    const onMeta = () => setDuration(a.duration || fallbackDuration || 0)
    const onEnd = () => setPlaying(false)
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('ended', onEnd)
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('ended', onEnd)
    }
  }, [fallbackDuration])

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play(); setPlaying(true) }
  }

  const onSeek = (e) => {
    const a = audioRef.current
    if (!a || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    a.currentTime = x * duration
    setTime(a.currentTime)
  }

  const progress = duration ? (time / duration) * 100 : 0

  return (
    <div className="bg-heritage-warm border border-heritage-gold/30 rounded-2xl p-5 md:p-6 shadow-heritage">
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          aria-label={playing ? t('common.pause') : t('common.play')}
          className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-heritage-green text-heritage-warm flex items-center justify-center hover:bg-heritage-green-dark transition active:scale-95 shadow-heritage"
        >
          {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" fill="currentColor" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="min-w-0">
              <p className="eyebrow mb-0.5">{t('common.audioGuide')}</p>
              <p className="font-serif text-heritage-green text-base md:text-lg truncate">{title || t('street.audioTitle')}</p>
            </div>
            <Volume2 className="w-4 h-4 text-heritage-gray-light flex-shrink-0 ml-2" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-heritage-gray-light tabular-nums w-9">{formatTime(time)}</span>
            <div
              onClick={onSeek}
              className="flex-1 h-1.5 bg-heritage-beige-dark rounded-full overflow-hidden cursor-pointer relative group"
            >
              <div
                className="h-full bg-heritage-gold transition-all"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-heritage-gold shadow opacity-0 group-hover:opacity-100 transition"
                style={{ left: `${progress}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-heritage-gray-light tabular-nums w-9 text-right">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  )
}
