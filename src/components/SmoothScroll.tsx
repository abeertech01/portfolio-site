"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    const ro = new ResizeObserver(() => lenis.resize())
    ro.observe(document.body)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Next.js moves window.scrollY on route change without going through
  // Lenis, so its internally tracked position goes stale and the next
  // scroll feels stuck/jammed until it "catches up". Resync on every
  // route change to whatever the browser actually landed on.
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return
    lenis.resize()
    lenis.scrollTo(window.scrollY, { immediate: true })
  }, [pathname])

  return null
}
