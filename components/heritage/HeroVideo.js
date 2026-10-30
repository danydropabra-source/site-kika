'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * Looping background video for the homepage hero.
 *
 * A base layer renders first and stays underneath, so the page is never blank
 * while the ~20 MB video streams in. The video mounts only on the client and
 * fades in once it can actually play.
 *
 * `poster` is optional. With one, that photograph is the base layer. Without,
 * the base is the site's dark green — the text above it stays readable either
 * way. Adding a still frame from the video is the better end state: it removes
 * the empty moment before playback AND gives the visitors below something to
 * look at.
 *
 * Two visitor settings are honoured — neither is about phone vs desktop:
 *   - "Reduce motion" (system accessibility setting): moving backgrounds can
 *     trigger nausea in people with vestibular disorders.
 *   - "Data saver": downloading 20 MB against someone's explicit wish not to.
 * In both cases they simply keep the poster image.
 */
export default function HeroVideo({ src, poster, alt, posterFocus = '50% 50%' }) {
  const [allowed, setAllowed] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = navigator.connection?.saveData === true
    if (!reducedMotion && !saveData) setAllowed(true)
  }, [])

  return (
    <>
      {poster ? (
        <Image
          src={poster}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: posterFocus }}
        />
      ) : (
        <div className="absolute inset-0 bg-heritage-green-dark" role="img" aria-label={alt} />
      )}

      {allowed && (
        <video
          src={src}
          // All four are required for a background video to autoplay:
          // browsers block sound, and iOS opens fullscreen without playsInline.
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </>
  )
}
