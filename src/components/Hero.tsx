"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import portrait from "@/assets/abeer-portrait.webp"
import DhakaClock from "@/components/DhakaClock"
import HeroStickers from "@/components/HeroStickers"

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id)
  if (!el) return
  e.preventDefault()
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  // Cursor spotlight: the glow eases toward the pointer instead of snapping,
  // and the rAF loop sleeps once it has caught up.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let raf = 0
    let primed = false

    const step = () => {
      cx += (tx - cx) * 0.14
      cy += (ty - cy) * 0.14
      el.style.setProperty("--mx", `${cx.toFixed(1)}px`)
      el.style.setProperty("--my", `${cy.toFixed(1)}px`)
      if (Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4) {
        raf = requestAnimationFrame(step)
      } else {
        raf = 0
      }
    }

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      tx = e.clientX - r.left
      ty = e.clientY - r.top
      if (!primed) {
        cx = tx
        cy = ty
        primed = true
      }
      if (!raf) raf = requestAnimationFrame(step)
    }

    el.addEventListener("pointermove", onMove)
    return () => {
      el.removeEventListener("pointermove", onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative box-content flex flex-col shrink-0 justify-end font-grotesk leading-[normal] text-d-fg px-[clamp(16px,3vw,32px)] pt-30 pb-7 min-h-svh overflow-hidden"
      style={{
        background:
          "radial-gradient(600px circle at var(--mx,70%) var(--my,30%), rgb(61 220 159 / 0.16), transparent 60%), radial-gradient(1200px 700px at 50% -10%, var(--d-glow), transparent 70%), var(--d-bg)",
      }}
    >
      {/* grid revealed around the cursor */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--d-ink) / 0.035) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--d-ink) / 0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(500px circle at var(--mx,70%) var(--my,30%), #000, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(500px circle at var(--mx,70%) var(--my,30%), #000, transparent 75%)",
        }}
      />

      <HeroStickers />

      {/* status row */}
      <div
        className="relative flex flex-wrap justify-between gap-4 mb-[clamp(16px,3vw,32px)] font-jbmono text-d-mut2 text-xs tracking-[0.06em] rise-in"
        style={{ "--d": "100ms" } as React.CSSProperties}
      >
        <span className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-block bg-d-acc rounded-full w-2 h-2 dot-ping"
          />
          AVAILABLE · FULL-TIME &amp; FREELANCE
        </span>
        <span>
          DHAKA <DhakaClock format="long" placeholder="--:--:--" /> · GMT+6
        </span>
      </div>

      {/* name */}
      <h1 className="relative flex flex-col m-0 font-bebas font-normal text-[23vw] min-[720px]:text-[clamp(72px,15.5vw,250px)] leading-[0.86] tracking-[-0.005em]">
        <span
          className="flex flex-wrap items-center gap-[0.12em] rise-in"
          style={{ "--d": "200ms" } as React.CSSProperties}
        >
          <span>ABDUL</span>
          <span className="group relative inline-block bg-[#2a1d12] shadow-[0_0_0_3px_rgba(61,220,159,0.35),0_20px_60px_rgba(255,170,80,0.18)] rounded-full w-[1.55em] hover:w-[2em] h-[0.78em] overflow-hidden transition-[width] -translate-y-[0.04em] duration-600 ease-[cubic-bezier(.2,.8,.2,1)]">
            <Image
              src={portrait}
              alt="Abdul Ahad Abeer"
              fill
              priority
              sizes="(max-width: 720px) 60vw, 400px"
              className="object-cover object-[50%_34%] transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
            />
          </span>
          <span>AHAD</span>
        </span>
        <span
          className="flex flex-wrap items-end gap-[0.18em] rise-in"
          style={{ "--d": "320ms" } as React.CSSProperties}
        >
          <span className="text-d-acc">ABEER</span>
          <span className="pb-0 min-[720px]:pb-[0.9em] max-w-95 font-grotesk text-d-fg2 text-[clamp(16px,1.6vw,22px)] leading-[1.35] tracking-normal text-pretty">
            Full-stack developer building pixel-perfect, scalable web apps, with
            AI and automation where the business needs it.
          </span>
        </span>
      </h1>

      {/* actions */}
      <div
        className="relative flex flex-wrap justify-between items-center gap-4 mt-[clamp(24px,4vw,44px)] pt-5 border-[rgb(var(--d-ink)/0.1)] border-t rise-in"
        style={{ "--d": "460ms" } as React.CSSProperties}
      >
        <div className="flex flex-wrap gap-2.5 w-full min-[720px]:w-auto">
          <a
            href="#projects"
            onClick={(e) => scrollToId(e, "projects")}
            className="flex-auto bg-d-acc hover:bg-d-fg px-5.5 py-3.5 rounded-full font-semibold text-d-on-acc text-[15px] text-center transition-colors duration-300"
          >
            See the work →
          </a>
          <a
            href="#terminal"
            className="flex-auto hover:bg-transparent px-5.5 py-3.5 border border-[rgb(var(--d-ink)/0.18)] hover:border-d-acc rounded-full font-jbmono font-medium text-[15px] text-d-fg hover:text-d-acc text-center transition-colors duration-300"
          >
            &gt;_ talk to my terminal
          </a>
        </div>
        <span className="font-jbmono text-d-mut2 text-xs tracking-[0.06em]">
          23.8103° N, 90.4125° E · SCROLL ↓
        </span>
      </div>
    </section>
  )
}
