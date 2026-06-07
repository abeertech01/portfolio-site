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
      {/* Layer 0: emerald radial glow — fixed so every section shares it */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          background:
            "radial-gradient(ellipse at 50% 0%, var(--emerald-glow) 0%, transparent 65%)",
        }}
      />

      {/* Layer 1: emerald cursor glow */}
      <div
        ref={brightLayerRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -1,
          background:
            "radial-gradient(520px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(35,148,125,0.07) 0%, transparent 70%)",
        }}
      />
    </>
  )
}
