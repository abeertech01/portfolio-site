"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { flushSync } from "react-dom"
import Link from "next/link"
import { useTheme } from "next-themes"
import { usePathname, useRouter } from "next/navigation"

const RESUME = "/abeer_resume.pdf"

/** target = element id on the home page ("top" scrolls to the very top) */
const DESKTOP_LINKS = [
  { label: "About", target: "about" },
  { label: "Work", target: "projects" },
  { label: "Terminal", target: "terminal" },
  { label: "Contact", target: "contact" },
]

const MENU_LINKS = [
  { label: "About", target: "about" },
  { label: "Work", target: "projects" },
  { label: "Terminal", target: "terminal" },
  { label: "Writing", target: "writing" },
  { label: "Contact", target: "contact" },
]

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/abeertech01" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abeertech01" },
  { label: "X", href: "https://x.com/abeertech01" },
  { label: "Email", href: "mailto:abeer.technology@gmail.com" },
]

const glass =
  "bg-d-bg/70 backdrop-blur-xl border border-[rgb(var(--d-ink)/0.08)]"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const isLight = mounted && resolvedTheme === "light"

  // lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  function go(target: string) {
    setMenuOpen(false)
    if (pathname !== "/") {
      router.push(target === "top" ? "/" : `/#${target}`)
      return
    }
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function onNavClick(e: React.MouseEvent, target: string) {
    e.preventDefault()
    go(target)
  }

  function toggleTheme(e: React.MouseEvent<HTMLButtonElement>) {
    const next = isLight ? "dark" : "light"
    const apply = () => flushSync(() => setTheme(next))
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!document.startViewTransition || reduce) return apply()

    // circular reveal growing out of the toggle button
    const r = e.currentTarget.getBoundingClientRect()
    const x = r.left + r.width / 2
    const y = r.top + r.height / 2
    const radius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    document.startViewTransition(apply).ready.then(() =>
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "cubic-bezier(.7,0,.2,1)",
          pseudoElement: "::view-transition-new(root)",
        },
      ),
    )
  }

  return (
    <>
      <header className="top-0 right-0 left-0 z-40 fixed flex justify-between items-center gap-4 px-[clamp(16px,3vw,32px)] py-4 font-grotesk leading-[normal] text-d-fg pointer-events-none">
        <Link
          href="/"
          onClick={(e) => onNavClick(e, "top")}
          aria-label="Back to top"
          className={`${glass} pointer-events-auto px-3.5 py-2.5 rounded-xl font-bebas text-[28px] leading-none tracking-[0.02em] text-d-fg hover:text-d-fg`}
        >
          AB<span className="text-d-acc">/</span>
        </Link>

        <nav
          className={`${glass} pointer-events-auto max-[719px]:hidden flex gap-1 p-1.25 rounded-full text-sm leading-[normal]`}
        >
          {DESKTOP_LINKS.map((l) => (
            <a
              key={l.label}
              href={`/#${l.target}`}
              onClick={(e) => onNavClick(e, l.target)}
              className={`px-3.5 py-2 rounded-full transition-colors duration-200 ${
                // on a project page the "Work" link marks where you are
                l.target === "projects" && pathname !== "/"
                  ? "bg-[rgb(61_220_159/0.12)] text-d-acc"
                  : "hover:bg-[rgb(var(--d-ink)/0.08)] text-d-fg2 hover:text-d-fg"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className={`${glass} flex justify-center items-center rounded-full w-10.5 h-10.5 text-[17px] text-d-fg hover:text-d-acc hover:border-d-acc hover:-rotate-20 transition-[transform,color,border-color] duration-400 ease-[cubic-bezier(.2,.8,.2,1)] cursor-pointer`}
          >
            {mounted ? (isLight ? "☀︎" : "☾︎") : ""}
          </button>
          <a
            href={RESUME}
            download="Abeer_Abdul-Ahad_Resume.pdf"
            className="max-[719px]:hidden bg-d-acc hover:bg-d-fg px-4.5 py-2.75 rounded-full font-semibold text-d-on-acc hover:text-d-on-acc text-sm leading-[normal] transition-colors duration-300"
          >
            Résumé ↓
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="min-[720px]:hidden flex items-center gap-2 bg-d-fg px-4 rounded-full h-10.5 font-jbmono text-xs text-d-bg tracking-[0.08em] cursor-pointer"
          >
            MENU
            <span className="flex flex-col gap-0.75">
              <span className="bg-d-bg w-3.5 h-[1.5px]" />
              <span className="bg-d-bg w-2.25 h-[1.5px]" />
            </span>
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`min-[720px]:hidden fixed inset-0 z-50 flex flex-col px-4 pt-4 pb-7 bg-d-bg font-grotesk leading-[normal] text-d-fg overflow-y-auto transition-[opacity,transform] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="py-2.5 font-bebas text-[28px] leading-none">
            AB<span className="text-d-acc">/</span>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="px-4 border border-[rgb(var(--d-ink)/0.16)] rounded-full h-10.5 font-jbmono text-xs tracking-[0.08em] cursor-pointer"
          >
            CLOSE ✕
          </button>
        </div>

        <nav className="flex flex-col flex-1 justify-center gap-0.5 py-8">
          {MENU_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={`/#${l.target}`}
              onClick={(e) => onNavClick(e, l.target)}
              className="flex items-baseline gap-3.5 py-1.5 border-[rgb(var(--d-ink)/0.08)] border-b font-bebas text-[clamp(56px,17vw,88px)] text-d-fg hover:text-d-acc leading-none transition-colors duration-200"
            >
              <span className="font-jbmono text-xs text-d-acc">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3.5">
          <a
            href={RESUME}
            download="Abeer_Abdul-Ahad_Resume.pdf"
            className="flex justify-center bg-d-acc p-4 rounded-full font-semibold text-base leading-[normal] text-d-on-acc"
          >
            Download résumé ↓
          </a>
          <div className="flex flex-wrap justify-between gap-2.5 font-jbmono text-xs">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="text-d-mut hover:text-d-acc transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
