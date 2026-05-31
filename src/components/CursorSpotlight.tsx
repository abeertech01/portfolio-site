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
      {/* Layer 1: base dots — always faintly visible across the whole page */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/*
        Layer 2: bright dots — same grid, but masked by a large radial gradient
        that follows the cursor. Only dots inside the cursor radius are revealed.
        The gradient goes black (fully visible) at center → transparent at the
        edge, so dots naturally dim the further they are from the cursor.
      */}
      <div
        ref={brightLayerRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.75) 1px, transparent 1px)",
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
