"use client"

import { useEffect, useRef, useState } from "react"
import AnimateIn from "@/components/AnimateIn"
import { posts } from "@/lib/posts"

type Line = { text: string; color: string }

const COLORS = {
  out: "#c9d4d0",
  echo: "#3ddc9f",
  dim: "#7d8f88",
  err: "#ff8f87",
}

const QUICK = ["whoami", "stack", "projects", "coffee", "sudo hire abeer"]

const INTRO: Line[] = [
  {
    text: 'abeer-os v2026 — type "help" to see what I can do.',
    color: COLORS.dim,
  },
]

function respond(raw: string): { lines: Line[]; clear?: boolean } {
  const c = raw.trim().toLowerCase()
  const out = (text: string, color = COLORS.out): Line => ({ text, color })

  if (c === "clear") return { lines: [], clear: true }
  if (c === "help")
    return {
      lines: [
        out(
          "whoami · stack · projects · writing · contact · resume · coffee · clear",
        ),
      ],
    }
  if (c === "whoami")
    return {
      lines: [
        out(
          "Abdul Ahad Abeer. Full-stack developer in Dhaka (GMT+6).\nI build scalable web apps, plus AI & automation where the business needs it.",
        ),
      ],
    }
  if (c === "stack")
    return {
      lines: [
        out(
          "frontend  React · Next.js · TypeScript · Redux · TanStack Query · Tailwind\nbackend   Node · Express · GraphQL · PostgreSQL · MongoDB · Prisma · Drizzle\ntools     Git · Docker · NextAuth · Figma",
        ),
      ],
    }
  if (c === "projects")
    return {
      lines: [
        out(
          "01  AI Resume Builder   Next.js · Prisma\n02  TripleA LMS         Next.js · Drizzle · Stripe\n03  Redbook             React · Express · Socket.io",
        ),
        out("→ scrolling to #projects", COLORS.echo),
      ],
    }
  if (c === "writing") return { lines: posts.map((p) => out("• " + p.title)) }
  if (c === "contact")
    return {
      lines: [
        out("abeer.technology@gmail.com · github/linkedin/x: @abeertech01"),
      ],
    }
  if (c === "resume")
    return { lines: [out("opening abeer_resume.pdf…", COLORS.echo)] }
  if (c === "coffee")
    return {
      lines: [
        out('☕ Always one on the table. Happy to talk over one. Type "contact".'),
      ],
    }
  if (c.startsWith("sudo hire"))
    return {
      lines: [
        out("[sudo] permission granted. Opening your mail client…", COLORS.echo),
      ],
    }
  if (c === "ls")
    return {
      lines: [out("about/  projects/  writing/  resume.pdf  contact.txt")],
    }
  return {
    lines: [out(`command not found: ${c}. Try "help".`, COLORS.err)],
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(INTRO)
  const [cmd, setCmd] = useState("")
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // keep the newest output in view — scrolls the terminal itself, never the page
  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [lines])

  function run(raw: string) {
    const c = raw.trim().toLowerCase()
    if (!c) return
    const res = respond(raw)
    setCmd("")
    if (res.clear) {
      setLines([])
      return
    }
    setLines((prev) => [
      ...prev,
      { text: "~ $ " + raw.trim(), color: COLORS.echo },
      ...res.lines,
    ])

    if (c === "projects") {
      setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 700)
    } else if (c === "resume") {
      window.open("/abeer_resume.pdf", "_blank", "noopener")
    } else if (c.startsWith("sudo hire")) {
      window.location.assign(
        "mailto:abeer.technology@gmail.com?subject=Let%27s%20work%20together",
      )
    }
  }

  return (
    <section
      id="terminal"
      className="box-border items-center gap-[clamp(28px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] mx-auto w-full max-w-[calc(1280px_+_2_*_clamp(16px,3vw,32px))] px-[clamp(16px,3vw,32px)] pb-[clamp(72px,10vw,140px)] font-grotesk leading-[normal] text-d-fg scroll-mt-20"
    >
      <AnimateIn threshold={0.1} duration={900}>
        <div className="flex flex-col gap-4.5">
          <span className="font-jbmono text-d-acc text-xs tracking-[0.08em]">
            03 / INTERACTIVE
          </span>
          <h2 className="m-0 font-bebas font-normal text-[clamp(56px,7vw,104px)] leading-[0.88]">
            Skip the scroll. Ask my terminal.
          </h2>
          <p className="m-0 max-w-115 text-[17px] text-d-mut leading-[1.6]">
            Type a command or tap one below. Try{" "}
            <span className="font-jbmono text-d-fg">sudo hire abeer</span>.
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => run(q)}
                className="bg-d-card px-3.5 py-2.25 border border-[rgb(var(--d-ink)/0.12)] hover:border-d-acc rounded-[10px] font-jbmono text-[13px] text-d-fg hover:text-d-acc transition-colors duration-200 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </AnimateIn>

      <AnimateIn threshold={0.1} duration={900} delay={140}>
        <div
          onClick={() => inputRef.current?.focus({ preventScroll: true })}
          className="bg-[#0a0d0c] border border-[rgb(61_220_159/0.25)] rounded-[20px] overflow-hidden font-jbmono text-sm text-[#ecf2ef] cursor-text shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center gap-1.5 bg-[#141917] px-3.5 py-3 border-white/6 border-b">
            <span className="bg-[#ff5f57] rounded-full w-2.5 h-2.5" />
            <span className="bg-[#febc2e] rounded-full w-2.5 h-2.5" />
            <span className="bg-[#28c840] rounded-full w-2.5 h-2.5" />
            <span className="ml-2.5 text-xs text-[#7d8f88]">abeer@dhaka: ~</span>
          </div>
          <div
            ref={bodyRef}
            className="flex flex-col gap-1.5 p-4.5 h-94 overflow-y-auto leading-[1.6]"
          >
            {lines.map((l, i) => (
              <div
                key={i}
                className="line-in whitespace-pre-wrap"
                style={{ color: l.color }}
              >
                {l.text}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-[#3ddc9f]">~ $</span>
              <input
                ref={inputRef}
                value={cmd}
                onChange={(e) => setCmd(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") run(cmd)
                }}
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal command"
                className="flex-1 bg-transparent border-none outline-none min-w-0 font-jbmono text-sm text-[#ecf2ef] caret-[#3ddc9f]"
              />
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  )
}
