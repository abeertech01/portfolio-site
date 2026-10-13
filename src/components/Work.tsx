"use client"

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import AnimateIn from "@/components/AnimateIn"
import aiResume from "@/assets/project-images/ai-resume.webp"
import tripleALms from "@/assets/project-images/triplea-lms.webp"
import redbook from "@/assets/project-images/redbook.webp"

type Project = {
  num: string
  slug: string
  kind: string
  title: string
  image: StaticImageData
  desc: string
  tags: string[]
  liveUrl: string
  gitUrl: string
}

const GH = "https://github.com/abeertech01/"

const PROJECTS: Project[] = [
  {
    num: "01",
    slug: "ai-resume-builder",
    kind: "WEB APP · AI",
    title: "AI Resume Builder",
    image: aiResume,
    desc: "Describe your experience in plain words and get a polished, structured resume back.",
    tags: ["Next.js", "Prisma", "Vercel Blob"],
    liveUrl: "https://ai-resume-builder-eight-kappa.vercel.app/",
    gitUrl: GH + "ai-resume-builder",
  },
  {
    num: "02",
    slug: "triple-a-lms",
    kind: "LMS PLATFORM",
    title: "TripleA LMS",
    image: tripleALms,
    desc: "A learning platform with geo-location based course discounts and Stripe payments.",
    tags: ["Next.js", "Tailwind CSS", "Drizzle", "Stripe"],
    liveUrl: "https://triple-a-lms.vercel.app/",
    gitUrl: GH + "lms-site/tree/main",
  },
  {
    num: "03",
    slug: "redbook",
    kind: "SOCIAL · REALTIME",
    title: "Redbook",
    image: redbook,
    desc: "Voting, comments and realtime chat. My own take on ideas from Reddit and Facebook.",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
    liveUrl: "https://redbook-client.abeer-technology.workers.dev",
    gitUrl: GH + "redbook",
  },
]

const FILTERS = [
  "Next.js",
  "React",
  "Prisma",
  "Drizzle",
  "PostgreSQL",
  "Stripe",
  "Socket.io",
  "Tailwind CSS",
]

export default function Work() {
  const [active, setActive] = useState(0)
  const [filter, setFilter] = useState<string | null>(null)

  function pick(tag: string | null) {
    const idx = tag ? PROJECTS.findIndex((p) => p.tags.includes(tag)) : active
    setFilter(tag)
    setActive(idx < 0 ? active : idx)
  }

  return (
    <section
      id="projects"
      className="box-border mx-auto w-full max-w-[calc(1280px+2*clamp(16px,3vw,32px))] px-[clamp(16px,3vw,32px)] pb-[clamp(72px,10vw,140px)] font-grotesk leading-[normal] text-d-fg scroll-mt-20"
    >
      <AnimateIn threshold={0.05} duration={900}>
        <div className="flex flex-wrap justify-between items-end gap-6 mb-7">
          <div className="flex flex-col gap-2.5">
            <span className="font-jbmono text-d-acc text-xs tracking-[0.08em]">
              02 / CROWNED PROJECTS
            </span>
            <h2 className="m-0 font-bebas font-normal text-[clamp(56px,8vw,120px)] leading-[0.88]">
              Things I shipped
            </h2>
          </div>
          <div className="flex flex-col gap-2.5 max-w-130">
            <span className="font-jbmono text-[11px] text-d-mut2 tracking-[0.06em]">
              FILTER BY STACK
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[null, ...FILTERS].map((t) => {
                const on = filter === t
                return (
                  <button
                    key={t ?? "all"}
                    type="button"
                    onClick={() => pick(t)}
                    aria-pressed={on}
                    className={`px-3.25 py-1.75 border rounded-full font-jbmono text-xs cursor-pointer transition-all duration-200 ${
                      on
                        ? "bg-d-acc border-d-acc text-d-on-acc"
                        : "bg-transparent border-[rgb(var(--d-ink)/0.14)] text-d-fg2 hover:border-d-acc hover:text-d-acc"
                    }`}
                  >
                    {t ?? "All"}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn threshold={0.05} duration={900} delay={120}>
        <div className="flex flex-col min-[860px]:flex-row gap-3 min-[860px]:h-150">
          {PROJECTS.map((p, i) => {
            const open = active === i
            const match = !filter || p.tags.includes(filter)
            return (
              <article
                key={p.slug}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`relative min-w-0 bg-d-card border rounded-[28px] overflow-hidden cursor-pointer transition-[flex,opacity,border-color] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] max-[859px]:flex-none ${
                  open
                    ? "min-[860px]:flex-[4_1_0%]"
                    : "min-[860px]:flex-[0.55_1_0%]"
                } ${
                  match && filter
                    ? "border-[rgb(61_220_159/0.6)]"
                    : "border-[rgb(var(--d-ink)/0.08)]"
                } ${match ? "opacity-100" : "opacity-30"}`}
              >
                {/* collapsed rail (desktop only) */}
                <div
                  aria-hidden={open}
                  className={`max-[859px]:hidden absolute top-6 left-5.5 flex flex-col items-center gap-4 transition-opacity duration-300 ${
                    open ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
                  }`}
                >
                  <span className="font-jbmono text-d-acc text-xs">{p.num}</span>
                  <span className="font-bebas text-[40px] leading-none whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                    {p.title}
                  </span>
                </div>

                {/* expanded body */}
                <div
                  className={`flex flex-col gap-5 p-[clamp(20px,2.4vw,30px)] h-full min-w-[min(100%,520px)] box-border transition-opacity duration-400 max-[859px]:opacity-100 max-[859px]:pointer-events-auto ${
                    open
                      ? "opacity-100 delay-250"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex justify-between items-center gap-3 font-jbmono text-xs tracking-[0.06em]">
                    <span className="text-d-mut2">
                      <span className="text-d-acc">{p.num}</span> · {p.kind}
                    </span>
                    <span className="bg-[rgb(61_220_159/0.12)] px-2.5 py-1 rounded-full text-d-acc">
                      ♛ CROWNED
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 border border-[rgb(var(--d-ink)/0.08)] rounded-[18px] min-h-45 box-content overflow-hidden">
                    <div className="flex gap-1.5 bg-[#1e2422] px-3 py-2.5">
                      <span className="bg-[#ff5f57] rounded-full w-2.25 h-2.25" />
                      <span className="bg-[#febc2e] rounded-full w-2.25 h-2.25" />
                      <span className="bg-[#28c840] rounded-full w-2.25 h-2.25" />
                    </div>
                    <div className="relative flex-1 bg-[#1a201e]">
                      <Image
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        fill
                        sizes="(max-width: 859px) 100vw, 760px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-end gap-5">
                    <div className="flex flex-col gap-2.5 max-w-110">
                      <h3 className="m-0 font-bebas font-normal text-[clamp(40px,4vw,56px)] leading-[0.9]">
                        {p.title}
                      </h3>
                      <p className="m-0 text-[15px] text-d-mut leading-[1.55] text-pretty">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 border border-[rgb(var(--d-ink)/0.12)] rounded-full font-jbmono text-[11px] text-d-fg2"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/${p.slug}`}
                        tabIndex={open ? 0 : -1}
                        className="bg-d-acc hover:bg-d-fg px-4 py-2.75 rounded-full font-semibold text-d-on-acc text-sm leading-[normal] transition-colors duration-300"
                      >
                        Case study →
                      </Link>
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        tabIndex={open ? 0 : -1}
                        className="hover:border-d-acc px-3.5 py-2.75 border border-[rgb(var(--d-ink)/0.16)] rounded-full text-d-fg hover:text-d-acc text-sm leading-[normal] transition-colors duration-300"
                      >
                        Live ↗
                      </a>
                      <a
                        href={p.gitUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        tabIndex={open ? 0 : -1}
                        className="hover:border-d-acc px-3.5 py-2.75 border border-[rgb(var(--d-ink)/0.16)] rounded-full text-d-fg hover:text-d-acc text-sm leading-[normal] transition-colors duration-300"
                      >
                        Code ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div className="flex justify-end mt-4">
          <a
            href="https://github.com/abeertech01"
            target="_blank"
            rel="noreferrer noopener"
            className="font-jbmono text-[13px] text-d-mut hover:text-d-acc transition-colors"
          >
            more projects on github ↗
          </a>
        </div>
      </AnimateIn>
    </section>
  )
}
