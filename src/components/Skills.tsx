"use client"

import React from "react"
import AnimateIn from "@/components/AnimateIn"
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiCss,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGraphql,
  SiDocker,
  SiGit,
  SiExpress,
  SiPrisma,
  SiDrizzle,
  SiFigma,
} from "react-icons/si"
import { FaShieldAlt, FaNetworkWired } from "react-icons/fa"
import type { IconType } from "react-icons"

type Tech = { icon: IconType; name: string; color: string }

const FRONTEND_TECHS: Tech[] = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiHtml5, name: "HTML", color: "#E34C26" },
  { icon: SiCss, name: "CSS", color: "#1572B6" },
  { icon: SiSass, name: "SCSS", color: "#CC6699" },
  { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiShadcnui, name: "Shadcn UI", color: "#ffffff" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
  { icon: FaNetworkWired, name: "TanStack Query", color: "#FF4154" },
]

const BACKEND_TECHS: Tech[] = [
  { icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { icon: SiExpress, name: "Express.js", color: "#ffffff" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiPrisma, name: "Prisma", color: "#5A67D8" },
  { icon: SiDrizzle, name: "Drizzle", color: "#C5F74F" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
]

const TOOLS: Tech[] = [
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: FaShieldAlt, name: "NextAuth", color: "#2D3748" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
]

function TechCard({ icon: Icon, name, color }: Tech) {
  const isWhite = color === "#ffffff"
  return (
    <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-3 whitespace-nowrap">
      <Icon
        size={20}
        color={isWhite ? undefined : color}
        className={`md:hidden shrink-0 ${isWhite ? "text-zinc-600 dark:text-white" : ""}`}
      />
      <Icon
        size={28}
        color={isWhite ? undefined : color}
        className={`hidden md:block shrink-0 ${isWhite ? "text-zinc-600 dark:text-white" : ""}`}
      />
      <span className="font-grotesk text-[0.88rem] text-zinc-700 dark:text-white/85 md:text-[1.05rem] tracking-[0.01em]">
        {name}
      </span>
    </div>
  )
}

interface TechTapeProps {
  items: Tech[]
  dir: "ltr" | "rtl"
  onHover?: (hovering: boolean) => void
}

function TechTape({ items, dir }: TechTapeProps) {
  const [isHovering, setIsHovering] = React.useState(false)
  const fade =
    "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)"

  return (
    <div
      className="relative flex items-center bg-black/[0.04] dark:bg-white/4 backdrop-blur-[20px] py-4 border-black/[0.05] dark:border-white/5 border-y overflow-hidden"
      style={{ maskImage: fade, WebkitMaskImage: fade }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`flex w-max will-change-transform ${
          dir === "ltr" ? "animate-scroll-ltr" : "animate-scroll-rtl"
        }`}
        style={{ animationPlayState: isHovering ? "paused" : "running" }}
      >
        {[...items, ...items].map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  )
}

function ToolsGrid({ items }: { items: Tech[] }) {
  return (
    <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-2 md:gap-3 bg-black/[0.04] dark:bg-white/4 hover:bg-black/[0.06] dark:hover:bg-white/6 backdrop-blur-[20px] p-3.5 md:p-5 border border-black/[0.08] dark:border-white/8 hover:border-emerald-600/30 dark:hover:border-emerald-400/30 rounded-[12px] transition-colors"
        >
          <tech.icon size={28} color={tech.color} className="md:hidden" />
          <tech.icon size={40} color={tech.color} className="hidden md:block" />
          <span className="font-grotesk text-[0.8rem] text-zinc-700 dark:text-white/80 md:text-[0.95rem] text-center">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto px-4 md:px-8 py-16 md:py-28 w-full max-w-243.75 scroll-mt-24"
    >
      {/* Heading */}
      <AnimateIn>
      <div className="mb-8 md:mb-12 text-center">
        <p className="mb-2 font-grotesk text-[0.75rem] text-zinc-500 dark:text-white/40 uppercase tracking-[0.18em]">
          TECH STACK
        </p>
        <h2 className="font-extrabold text-[2rem] md:text-[3.2rem] leading-[1.1] tracking-[-0.02em]">
          <span className="text-zinc-900 dark:text-white">My </span>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-700 via-emerald-500 to-emerald-400 dark:from-white dark:via-emerald-300 dark:to-emerald-500">
            Skills
          </span>
        </h2>
      </div>
      </AnimateIn>

      {/* Frontend Tape */}
      <AnimateIn delay={100}>
      <div className="mb-6">
        <p className="mb-3 font-grotesk text-[0.7rem] text-zinc-500 dark:text-white/45 uppercase tracking-[0.14em]">
          Frontend Technologies
        </p>
        <TechTape items={FRONTEND_TECHS} dir="rtl" />
      </div>
      </AnimateIn>

      {/* Backend Tape */}
      <AnimateIn delay={200}>
      <div className="mb-8 md:mb-12">
        <p className="mb-3 font-grotesk text-[0.7rem] text-zinc-500 dark:text-white/45 uppercase tracking-[0.14em]">
          Backend Technologies
        </p>
        <TechTape items={BACKEND_TECHS} dir="ltr" />
      </div>
      </AnimateIn>

      {/* Tools Section */}
      <AnimateIn delay={300}>
      <div>
        <p className="mb-4 font-grotesk text-[0.7rem] text-zinc-500 dark:text-white/45 uppercase tracking-[0.14em]">
          Tools &amp; Databases
        </p>
        <ToolsGrid items={TOOLS} />
      </div>
      </AnimateIn>
    </section>
  )
}
