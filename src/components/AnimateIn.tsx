"use client"

import { useEffect, useRef, useState } from "react"

type From = "up" | "down" | "left" | "right" | "fade"

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  from?: From
  duration?: number
  threshold?: number
}

const offsets: Record<From, string> = {
  up: "translateY(30px)",
  down: "translateY(-30px)",
  left: "translateX(-30px)",
  right: "translateX(30px)",
  fade: "translateY(0)",
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  from = "up",
  duration = 620,
  threshold = 0.1,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : offsets[from],
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
