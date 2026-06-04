"use client"

import React from "react"
import { twMerge } from "tailwind-merge"
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
  SiTanstackquery,
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
import { FaShield } from "react-icons/fa"
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
  { icon: SiTanstackquery, name: "TanStack Query", color: "#FF4154" },
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
  { icon: FaShield, name: "NextAuth", color: "#2D3748" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
]

function TechCard({ icon: Icon, name, color }: Tech) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-3 whitespace-nowrap">
      <Icon size={28} color={color} className="shrink-0" />
      <span className="font-grotesk text-[1.05rem] text-white/85 tracking-[0.01em]">
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
      className="relative flex items-center bg-white/4 backdrop-blur-[20px] py-4 border-white/5 border-y overflow-hidden"
      style={{ maskImage: fade, WebkitMaskImage: fade }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`flex w-max will-change-transform ${
          isHovering
            ? ""
            : dir === "ltr"
              ? "animate-scroll-ltr"
              : "animate-scroll-rtl"
        }`}
        style={isHovering ? { animationPlayState: "paused" } : {}}
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
          className="flex flex-col items-center gap-3 bg-white/4 hover:bg-white/6 backdrop-blur-[20px] p-5 border border-white/8 hover:border-emerald-400/30 rounded-[12px] transition-colors"
        >
          <tech.icon size={40} color={tech.color} />
          <span className="font-grotesk text-[0.95rem] text-white/80 text-center">
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
      className="mx-auto px-8 py-28 w-full max-w-243.75 scroll-mt-24"
    >
      {/* Heading */}
      <div className="mb-12">
        <p className="mb-2 font-grotesk text-[0.75rem] text-white/40 uppercase tracking-[0.18em]">
          TECH STACK
        </p>
        <h2 className="font-extrabold text-[3.2rem] leading-[1.1] tracking-[-0.02em]">
          <span className="text-white">My </span>
          <span
            className="bg-clip-text bg-gradient-to-r from-white via-emerald-300 to-emerald-500 text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffffff 0%, #6ee7b7 50%, #10b981 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills
          </span>
        </h2>
      </div>

      {/* Frontend Tape */}
      <div className="mb-6">
        <p className="mb-3 font-grotesk text-[0.7rem] text-white/45 uppercase tracking-[0.14em]">
          Frontend Technologies
        </p>
        <TechTape items={FRONTEND_TECHS} dir="rtl" />
      </div>

      {/* Backend Tape */}
      <div className="mb-12">
        <p className="mb-3 font-grotesk text-[0.7rem] text-white/45 uppercase tracking-[0.14em]">
          Backend Technologies
        </p>
        <TechTape items={BACKEND_TECHS} dir="ltr" />
      </div>

      {/* Tools Section */}
      <div>
        <p className="mb-4 font-grotesk text-[0.7rem] text-white/45 uppercase tracking-[0.14em]">
          Tools &amp; Databases
        </p>
        <ToolsGrid items={TOOLS} />
      </div>
    </section>
  )
}
