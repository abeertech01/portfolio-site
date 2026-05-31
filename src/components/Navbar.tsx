"use client"

import { Moon, Sun, FileText } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const navItems = ["Home", "About", "Projects", "Skills", "Other"]

export default function Navbar() {
  const [active, setActive] = useState("Home")
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch — only render icon after mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = theme === "dark"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">

        {/* Left — theme toggle */}
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="w-11 h-11 flex items-center justify-center rounded-full
                     bg-black/5 dark:bg-white/5
                     border border-black/10 dark:border-white/10
                     backdrop-blur-2xl
                     text-black/50 dark:text-white/60
                     hover:text-black dark:hover:text-white
                     transition-colors duration-200"
        >
          {mounted && (isDark ? <Moon size={17} /> : <Sun size={17} />)}
        </button>

        {/* Center — pill nav */}
        <div
          className="flex items-center gap-0.5 rounded-full
                     bg-black/5 dark:bg-white/5
                     border border-black/10 dark:border-white/10
                     backdrop-blur-2xl
                     px-1.5 py-1.5"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium
                          transition-all duration-200 cursor-pointer
                          ${
                            active === item
                              ? "bg-black/10 dark:bg-white/10 text-black dark:text-white"
                              : "text-black/40 dark:text-white/50 hover:text-black/70 dark:hover:text-white/80"
                          }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right — Get Resume */}
        <button
          className="flex items-center gap-2 px-5 py-2.5 rounded-full
                     bg-black/5 dark:bg-white/5
                     border border-black/10 dark:border-white/10
                     backdrop-blur-2xl
                     text-black/50 dark:text-white/70
                     hover:text-black dark:hover:text-white
                     text-sm font-medium
                     transition-colors duration-200 cursor-pointer"
        >
          <FileText size={16} />
          Get Resume
        </button>

      </div>
    </nav>
  )
}
