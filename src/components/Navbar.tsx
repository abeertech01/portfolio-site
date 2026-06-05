"use client"

import { Moon, Sun, FileText } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useSyncExternalStore } from "react"

// `target` is the id of the section to scroll to. "top" means top of page.
// Items without a target just light up as active for now.
const navItems: { label: string; target: string }[] = [
  { label: "Home", target: "top" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Contact", target: "contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("Home")
  const { theme, setTheme } = useTheme()

  function handleNavClick(item: (typeof navItems)[number]) {
    setActive(item.label)
    if (item.target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    document
      .getElementById(item.target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // useSyncExternalStore returns false on the server and true on the client —
  // no setState-in-effect cascade, no hydration mismatch.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  const isDark = theme === "dark"

  return (
    <nav className="top-0 right-0 left-0 z-50 fixed py-4">
      <div className="items-center grid grid-cols-3 mx-auto px-8 max-w-6xl">
        {/* Left — theme toggle */}
        <button
          aria-label="Toggle theme"
          disabled
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex justify-center items-center bg-black/5 dark:bg-white/5 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-full w-11 h-11 text-black/50 hover:text-black dark:hover:text-white dark:text-white/60 transition-colors duration-200"
        >
          {mounted && (isDark ? <Moon size={17} /> : <Sun size={17} />)}
        </button>

        {/* Center — pill nav */}
        <div className="flex justify-self-center items-center gap-0.5 bg-black/5 dark:bg-white/5 backdrop-blur-2xl px-1.5 py-1.5 border border-black/10 dark:border-white/10 rounded-full">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium
                          transition-all duration-200 cursor-pointer
                          ${
                            active === item.label
                              ? "bg-black/10 dark:bg-white/10 text-black dark:text-white"
                              : "text-black/40 dark:text-white/50 hover:text-black/70 dark:hover:text-white/80"
                          }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right — Get Resume */}
        <button className="flex justify-self-end items-center gap-2 bg-black/5 dark:bg-white/5 backdrop-blur-2xl px-5 py-2.5 border border-black/10 dark:border-white/10 rounded-full font-medium text-black/50 hover:text-black dark:hover:text-white dark:text-white/70 text-sm transition-colors duration-200 cursor-pointer">
          <FileText size={16} />
          Get Resume
        </button>
      </div>
    </nav>
  )
}
