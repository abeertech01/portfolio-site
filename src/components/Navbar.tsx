"use client"

import { Moon, Sun, FileText, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useSyncExternalStore } from "react"

const navItems: { label: string; target: string }[] = [
  { label: "Home", target: "top" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Contact", target: "contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("Home")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  function handleNavClick(item: (typeof navItems)[number]) {
    setActive(item.label)
    setDrawerOpen(false)
    if (item.target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    document
      .getElementById(item.target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  const isDark = theme === "dark"

  return (
    <>
      <nav className="top-0 right-0 left-0 z-50 fixed py-4">
        <div className="flex justify-between items-center md:grid md:grid-cols-3 mx-auto px-8 max-w-6xl">
          {/* Left — theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex justify-center justify-self-start items-center bg-white/70 dark:bg-black/50 backdrop-blur-2xl border border-black/15 dark:border-white/10 rounded-full w-11 h-11 text-black/70 hover:text-black dark:hover:text-white dark:text-white/70 transition-colors duration-200"
          >
            {mounted && (isDark ? <Moon size={17} /> : <Sun size={17} />)}
          </button>

          {/* Center — pill nav (desktop only) */}
          <div className="hidden md:flex justify-self-center items-center gap-0.5 bg-white/70 dark:bg-black/50 backdrop-blur-2xl px-1.5 py-1.5 border border-black/15 dark:border-white/10 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium
                            transition-all duration-200 cursor-pointer
                            ${
                              active === item.label
                                ? "bg-black/10 dark:bg-white/10 text-black dark:text-white"
                                : "text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white/90"
                            }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right — Get Resume (desktop) + Hamburger (mobile) */}
          <div className="flex justify-self-end items-center gap-3">
            <a
              href="/abeer_resume.pdf"
              download="Abeer_Abdul-Ahad_Resume.pdf"
              className="hidden md:flex items-center gap-2 bg-white/70 dark:bg-black/50 backdrop-blur-2xl px-5 py-2.5 border border-black/15 dark:border-white/10 rounded-full font-medium text-black/70 hover:text-black dark:hover:text-white dark:text-white/70 text-sm transition-colors duration-200 cursor-pointer"
            >
              <FileText size={16} />
              Get Resume
            </a>

            <button
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="md:hidden flex justify-center items-center bg-white/70 dark:bg-black/50 backdrop-blur-2xl border border-black/15 dark:border-white/10 rounded-full w-11 h-11 text-black/70 hover:text-black dark:hover:text-white dark:text-white/70 transition-colors duration-200"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#f0f4f3] dark:bg-[#0e1a18] border-l border-black/8 dark:border-white/8 flex flex-col transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex justify-between items-center px-6 py-5 border-black/8 dark:border-white/8 border-b">
          <span className="font-grotesk font-semibold text-zinc-800 dark:text-white/80 text-sm tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex justify-center items-center bg-black/6 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/8 dark:border-white/10 rounded-full w-9 h-9 text-zinc-500 hover:text-zinc-900 dark:hover:text-white dark:text-white/50 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex flex-col flex-1 gap-1 px-4 py-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`px-4 py-3.5 rounded-xl text-left font-medium text-[0.95rem] transition-all duration-200 cursor-pointer
                ${
                  active === item.label
                    ? "bg-emerald-600/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-600/20 dark:border-emerald-500/20"
                    : "text-zinc-500 dark:text-white/50 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Get Resume at bottom */}
        <div className="px-4 pb-8">
          <a
            href="/abeer_resume.pdf"
            download="Abeer_Abdul-Ahad_Resume.pdf"
            onClick={() => setDrawerOpen(false)}
            className="flex justify-center items-center gap-2 bg-emerald-700 hover:bg-emerald-600 px-5 py-3.5 rounded-xl w-full font-grotesk font-semibold text-white text-sm transition-colors cursor-pointer"
          >
            <FileText size={15} />
            Get Resume
          </a>
        </div>
      </div>
    </>
  )
}
