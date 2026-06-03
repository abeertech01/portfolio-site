"use client"

import { useRef } from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function TiltCard({
  children,
  className,
  style,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5 // –0.5 → +0.5
    const y = (e.clientY - top) / height - 0.5
    el.style.transition = "transform 0.08s ease-out"
    el.style.transform = `perspective(900px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = "transform 0.55s ease"
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  }

  return (
    <div
      ref={ref}
      className={`${className ?? ""} transform-3d will-change-transform`}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}
