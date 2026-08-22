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
  // scroll feels stuck/jammed until it "catches up". Rather than reading
  // window.scrollY (which races Next's own scroll handling and can catch
  // a stale pre-navigation value), decide the landing position ourselves:
  // the hash target if the URL has one, top of page otherwise.
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return
    lenis.resize()

    const hash = window.location.hash.slice(1)
    const target = hash ? document.getElementById(hash) : null
    lenis.scrollTo(target ?? 0, { immediate: true })
  }, [pathname])

  return null
}
