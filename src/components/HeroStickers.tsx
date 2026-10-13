"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

type Sticker = {
  label: string
  /** seed position (% of the stage) + resting rotation (deg) */
  seed: [number, number, number]
  className: string
}

const STICKERS: Sticker[] = [
  {
    label: "Next.js",
    seed: [6, 14, -9],
    className:
      "bg-d-fg text-d-bg font-bebas text-[22px] min-[720px]:text-[clamp(26px,3vw,40px)] px-3.5 py-[9px] min-[720px]:px-5 min-[720px]:py-3 rounded-full",
  },
  {
    label: "{ TypeScript }",
    seed: [24, 58, 6],
    className:
      "bg-d-card text-d-fg font-jbmono text-xs min-[720px]:text-[15px] px-[11px] py-[9px] min-[720px]:px-4 min-[720px]:py-[13px] rounded-xl",
  },
  {
    label: "AI + automation",
    seed: [40, 10, -4],
    className:
      "bg-d-acc text-d-on-acc font-bebas text-[22px] min-[720px]:text-[clamp(26px,3vw,40px)] px-3.5 py-[9px] min-[720px]:px-5 min-[720px]:py-3 rounded-2xl",
  },
  {
    label: "Postgres ⟷ Prisma",
    seed: [57, 52, 8],
    className:
      "bg-d-card text-d-fg font-jbmono text-xs min-[720px]:text-[15px] px-[11px] py-[9px] min-[720px]:px-4 min-[720px]:py-[13px] rounded-full",
  },
  {
    label: "☕︎ coffee-driven",
    seed: [72, 16, -7],
    className:
      "bg-transparent text-d-fg font-grotesk text-sm min-[720px]:text-[17px] px-[13px] py-2 min-[720px]:px-[18px] min-[720px]:py-3 rounded-full !border-[rgb(var(--d-ink)/0.35)]",
  },
  {
    label: "Dhaka → Worldwide",
    seed: [84, 60, 5],
    className:
      "bg-d-fg text-d-bg font-bebas text-xl min-[720px]:text-[clamp(24px,2.6vw,34px)] px-[13px] py-2 min-[720px]:px-[18px] min-[720px]:py-[11px] rounded-[10px]",
  },
]

/** px kept free at the bottom of the stage for the hint line */
const HINT_CLEARANCE = 26

type Pos = [x: number, y: number]

export default function HeroStickers() {
  const stageRef = useRef<HTMLDivElement>(null)
  const elRefs = useRef<(HTMLDivElement | null)[]>([])
  const drag = useRef<{
    i: number
    dx: number
    dy: number
    box: DOMRect
    w: number
    h: number
  } | null>(null)
  const zTop = useRef(1)

  const [pos, setPos] = useState<Pos[]>(STICKERS.map((s) => [s.seed[0], s.seed[1]]))
  const [z, setZ] = useState<number[]>(STICKERS.map(() => 1))
  const [placed, setPlaced] = useState(false)
  const [settled, setSettled] = useState(false)
  const [moved, setMoved] = useState(false)
  const [dragging, setDragging] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const movedRef = useRef(false)

  /**
   * Nudge each seed position so no two stickers overlap and none spills out of
   * the stage. Re-runs on resize / font load until the visitor drags one.
   */
  const place = useCallback(() => {
    const stage = stageRef.current
    if (!stage || movedRef.current) return
    const box = stage.getBoundingClientRect()
    if (!box.width) return
    const els = elRefs.current
    if (els.some((e) => !e)) return

    const W = box.width
    const H = box.height
    const gap = W < 720 ? 10 : 12
    const taken: { x: number; y: number; w: number; h: number }[] = []
    const hit = (r: { x: number; y: number; w: number; h: number }) =>
      taken.some(
        (p) =>
          r.x < p.x + p.w + gap &&
          r.x + r.w + gap > p.x &&
          r.y < p.y + p.h + gap &&
          r.y + r.h + gap > p.y,
      )

    const next: Pos[] = els.map((el, i) => {
      const w = el!.offsetWidth + 6
      const h = el!.offsetHeight + 6
      const mx = Math.max(0, W - w - 8)
      // keep clear of the "PSST — drag these" hint in the bottom-right corner
      const my = Math.max(0, H - h - 8 - HINT_CLEARANCE)
      let r = {
        x: Math.max(4, Math.min((STICKERS[i].seed[0] / 100) * W, mx)),
        y: Math.min((STICKERS[i].seed[1] / 100) * H, my),
        w,
        h,
      }
      if (hit(r)) {
        let best: typeof r | null = null
        for (let yy = 4; yy <= my && !best; yy += 8) {
          for (let xx = 4; xx <= mx; xx += 8) {
            const c = { x: xx, y: yy, w, h }
            if (!hit(c)) {
              best = c
              break
            }
          }
        }
        if (best) r = best
      }
      taken.push(r)
      return [(r.x / W) * 100, (r.y / H) * 100] as Pos
    })

    setPos(next)
    setPlaced(true)
  }, [])

  useLayoutEffect(() => {
    place()
  }, [place])

  useEffect(() => {
    document.fonts?.ready.then(place)
    const ro = new ResizeObserver(place)
    if (stageRef.current) ro.observe(stageRef.current)
    return () => ro.disconnect()
  }, [place])

  // once the staggered entrance is over, drop the per-sticker delay so hover
  // and drag transitions respond instantly
  useEffect(() => {
    if (!placed) return
    const t = setTimeout(() => setSettled(true), 1100)
    return () => clearTimeout(t)
  }, [placed])

  function onDown(e: React.PointerEvent<HTMLDivElement>, i: number) {
    const stage = stageRef.current
    if (!stage) return
    const el = e.currentTarget.getBoundingClientRect()
    drag.current = {
      i,
      dx: e.clientX - el.left,
      dy: e.clientY - el.top,
      box: stage.getBoundingClientRect(),
      w: el.width,
      h: el.height,
    }
    e.currentTarget.setPointerCapture(e.pointerId)
    zTop.current += 1
    const top = zTop.current
    setZ((prev) => prev.map((v, k) => (k === i ? top : v)))
    setDragging(i)
  }

  function onMove(e: React.PointerEvent<HTMLDivElement>, i: number) {
    const g = drag.current
    if (!g || g.i !== i) return
    const nx =
      (Math.min(Math.max(e.clientX - g.dx - g.box.left, 0), g.box.width - g.w) /
        g.box.width) *
      100
    const ny =
      (Math.min(Math.max(e.clientY - g.dy - g.box.top, 0), g.box.height - g.h) /
        g.box.height) *
      100
    setPos((prev) => prev.map((p, k) => (k === i ? [nx, ny] : p)))
    if (!movedRef.current) {
      movedRef.current = true
      setMoved(true)
    }
  }

  function onUp() {
    drag.current = null
    setDragging(null)
  }

  return (
    <div
      ref={stageRef}
      className="relative flex-auto -mx-[clamp(16px,3vw,32px)] mb-[clamp(12px,2vw,24px)] min-h-75 min-[720px]:min-h-55 overflow-hidden"
    >
      {STICKERS.map((s, i) => {
        const isDragging = dragging === i
        const delay = settled ? 0 : 150 + i * 80
        return (
          <div
            key={s.label}
            ref={(el) => {
              elRefs.current[i] = el
            }}
            onPointerDown={(e) => onDown(e, i)}
            onPointerMove={(e) => onMove(e, i)}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            className={`absolute border border-[rgb(var(--d-ink)/0.1)] leading-none whitespace-nowrap cursor-grab active:cursor-grabbing touch-none select-none ${s.className}`}
            style={{
              left: `${pos[i][0]}%`,
              top: `${pos[i][1]}%`,
              zIndex: isDragging ? 50 : z[i],
              opacity: placed ? 1 : 0,
              transform: isDragging
                ? "rotate(0deg) scale(1.08)"
                : hovered === i && settled
                  ? "rotate(0deg) scale(1.06)"
                  : `rotate(${s.seed[2]}deg) scale(${placed ? 1 : 0.85})`,
              boxShadow: isDragging
                ? "0 24px 50px rgba(0,0,0,.28)"
                : "0 8px 24px rgba(0,0,0,.12)",
              // left/top are intentionally NOT transitioned: dragging stays 1:1
              transition: `opacity .6s ease ${delay}ms, transform .5s cubic-bezier(.2,.8,.2,1) ${delay}ms, box-shadow .35s`,
            }}
            onPointerEnter={() => setHovered(i)}
            onPointerLeave={() => setHovered((h) => (h === i ? null : h))}
          >
            {s.label}
          </div>
        )
      })}

      <span className="right-[clamp(16px,3vw,32px)] bottom-1.5 absolute font-jbmono text-[11px] text-d-mut2 tracking-[0.06em] pointer-events-none">
        {moved ? (
          "NICE. KEEP GOING ↗"
        ) : (
          <>
            <span className="min-[720px]:hidden">PSST — DRAG THESE</span>
            <span className="max-[719px]:hidden">PSST — THESE ARE DRAGGABLE</span>
          </>
        )}
      </span>
    </div>
  )
}
