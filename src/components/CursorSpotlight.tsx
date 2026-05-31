"use client"

import { useEffect, useRef } from "react"

export default function CursorSpotlight() {
  const brightLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = brightLayerRef.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      el.style.setProperty("--mouse-x", `${e.clientX}px`)
      el.style.setProperty("--mouse-y", `${e.clientY}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Layer 1: base dots — faintly visible, colour set by --dot-faint CSS var */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage: "radial-gradient(var(--dot-faint) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Layer 2: bright dots — masked to cursor radius, colour via --dot-bright */}
      <div
        ref={brightLayerRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage: "radial-gradient(var(--dot-bright) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage:
            "radial-gradient(3in circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(3in circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), black 0%, transparent 100%)",
        }}
      />
    </>
  )
}
