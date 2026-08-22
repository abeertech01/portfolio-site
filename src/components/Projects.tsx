"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import AnimateIn from "@/components/AnimateIn"
import { SiGithub } from "react-icons/si"
import { MdOpenInNew } from "react-icons/md"
import { ChevronRight, ArrowRight, Crown } from "lucide-react"
import aiResumeImage from "@/assets/project-images/ai-resume-builder.webp"
import tripleALmsImage from "@/assets/project-images/triple-a-lms.webp"
import redbookImage from "@/assets/project-images/redbook.webp"
import messengerImage from "@/assets/project-images/messenger-clone.webp"
import animatedLandingPageImage from "@/assets/project-images/melting-pot.webp"

interface Project {
  number: string
  slug: string
  hasDetailPage?: boolean
  underMaintenance?: boolean
  isStarProject?: boolean
  type: string
  name: string
  description: string
  image: typeof aiResumeImage
  technologies: string[]
  githubLink?: string
  liveLink?: string
}

function CardSection({
  project,
  className,
  children,
}: {
  project: Project
  className?: string
  children: React.ReactNode
}) {
  if (!project.hasDetailPage) {
    return <div className={className}>{children}</div>
  }

  return (
    <Link href={`/${project.slug}`} className={className}>
      {children}
    </Link>
  )
}

function IconLinkButton({
  href,
  label,
  children,
}: {
  href?: string
  label: string
  children: React.ReactNode
}) {
  const base =
    "flex justify-center items-center border rounded-full w-9 h-9 transition-colors"

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={`${label} unavailable`}
        className={`${base} border-black/8 dark:border-white/10 text-zinc-300 dark:text-white/15 cursor-not-allowed`}
      >
        {children}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className={`${base} border-emerald-600/30 hover:border-emerald-600 dark:border-emerald-400/30 dark:hover:border-emerald-400 text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-300 dark:text-emerald-400`}
    >
      {children}
    </a>
  )
}

const projects: Project[] = [
  {
    number: "01",
    slug: "ai-resume-builder",
    hasDetailPage: true,
    isStarProject: true,
    type: "WEB APP",
    name: "AI Resume Builder",
    description:
      "AI powered Resume Builder, users able to create resumes from merely explained text.",
    image: aiResumeImage,
    technologies: ["Next.js", "Prisma", "Vercel Blob"],
    githubLink: "https://github.com/abeertech01/ai-resume-builder",
    liveLink: "https://ai-resume-builder-eight-kappa.vercel.app/",
  },
  {
    number: "02",
    slug: "triple-a-lms",
    hasDetailPage: true,
    isStarProject: true,
    type: "LMS PLATFORM",
    name: "TripleA LMS",
    description:
      "An LMS platform with geo-location based course discounts, powered by Stripe payments.",
    image: tripleALmsImage,
    technologies: ["Next.js", "Tailwind CSS", "Drizzle", "Stripe"],
    githubLink: "https://github.com/abeertech01/lms-site/tree/main",
    liveLink: "https://triple-a-lms.vercel.app/",
  },
  {
    number: "03",
    slug: "animated-landing-page",
    type: "Landing Page",
    name: "Animated Landing Page",
    description:
      "Melting Pot, a restaurant landing page with smooth animations and transitions, built with React, GSAP and framer-motion.",
    image: animatedLandingPageImage,
    technologies: ["React", "GSAP", "framer-motion"],
    githubLink: "https://github.com/abeertech01/melting-pot-restaurant",
    liveLink: "https://melting-pot-restaurant.vercel.app/",
  },
  {
    number: "04",
    slug: "redbook",
    type: "SOCIAL MEDIA APP",
    name: "Redbook",
    description:
      "A social media project where I tried to stuff some of the coolest social media features.",
    image: redbookImage,
    technologies: ["React", "TypeScript", "Node.js"],
    githubLink: "https://github.com/abeertech01/redbook",
  },
  {
    number: "05",
    slug: "messenger-clone",
    underMaintenance: true,
    type: "Messaging App",
    name: "Messenger Clone",
    description:
      "Messenger clone built with NextJS 13 and associated technologies of JavaScript, for realtime chatting, implemented Pusher.js",
    image: messengerImage,
    technologies: ["Next.js", "Prisma", "Pusher.js"],
    githubLink: "https://github.com/abeertech01/messenger-clone",
    liveLink: "https://messenger-clone-teal.vercel.app/",
  },
]

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3)
  const displayedProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  const handleViewMore = () => {
    setVisibleCount(projects.length)
  }

  // After new project cards are painted, tell Lenis to recalculate its scroll limit
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      window.dispatchEvent(new Event("resize")),
    )
    return () => cancelAnimationFrame(id)
  }, [visibleCount])

  return (
    <section
      id="projects"
      className="mx-auto px-4 xl:px-8 pb-16 lg:pb-22 xl:pb-28 w-full max-w-6xl scroll-mt-24"
    >
      <AnimateIn>
        {/* Portfolio label */}
        <div className="mb-8 text-center">
          <p className="font-grotesk text-[0.75rem] text-zinc-500 dark:text-white/40 uppercase tracking-[0.2em]">
            Portfolio
          </p>
        </div>

        {/* Heading with emerald accent */}
        <div className="mb-6 text-center">
          <h2 className="font-bold text-[2rem] lg:text-[2.5rem] xl:text-[3rem] leading-[1.1] tracking-[-0.02em]">
            <span className="text-zinc-900 dark:text-white">Featured </span>
            <span className="bg-clip-text bg-linear-to-r from-emerald-700 dark:from-emerald-400 to-emerald-500 dark:to-emerald-300 text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-10 lg:mb-14 xl:mb-20 max-w-2xl text-zinc-500 lg:text-[1rem] xl:text-[1.1rem] dark:text-white/60 text-base text-center leading-[1.6]">
          The projects I developed, that made me confident in building software.
        </p>
      </AnimateIn>

      {/* Projects Grid */}
      <div className="gap-16 grid grid-cols-1 md:grid-cols-2">
        {displayedProjects.map((project, index) => (
          <AnimateIn key={project.number} delay={index * 100}>
            <div>
              {/* Project Card */}
              <div
                className={`flex flex-col bg-black/3 dark:bg-white/3 backdrop-blur-[20px] border-2 border-black/8 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-300 ${
                  project.underMaintenance
                    ? "hover:border-red-500/50 dark:hover:border-red-400/50"
                    : "hover:border-emerald-600/40 dark:hover:border-emerald-400/40"
                }`}
              >
                {/* Project Header */}
                <CardSection project={project} className="p-6 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-grotesk text-zinc-500 dark:text-white/40 text-xs uppercase tracking-[0.15em]">
                      {project.number}. {project.type.toLowerCase()}
                    </p>
                    {project.isStarProject && (
                      <span className="inline-flex items-center gap-1 bg-emerald-600/10 dark:bg-emerald-400/10 px-2.5 py-1 rounded-full font-semibold text-emerald-600 dark:text-emerald-400 text-[0.65rem] uppercase tracking-wide">
                        <Crown
                          size={12}
                          className="fill-emerald-600 dark:fill-emerald-400"
                        />
                        Crowned Project
                      </span>
                    )}
                  </div>
                  <h3 className="mb-3 font-bold text-zinc-900 dark:text-white text-2xl">
                    {project.name}
                  </h3>
                  <p className="text-zinc-500 dark:text-white/65 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardSection>

                {/* Links */}
                <div className="flex justify-between items-center px-6 pt-4 pb-4">
                  {project.hasDetailPage ? (
                    <p className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-white text-sm">
                      See the full case study
                      <ArrowRight
                        size={14}
                        className="text-emerald-600 dark:text-emerald-400"
                      />
                    </p>
                  ) : project.underMaintenance ? (
                    <p className="font-medium text-red-500/80 dark:text-red-400/80 text-sm">
                      Under maintenance
                    </p>
                  ) : (
                    <p className="font-medium text-zinc-400 dark:text-white/30 text-sm">
                      Case study coming soon
                    </p>
                  )}
                  <div className="flex gap-2">
                    <IconLinkButton href={project.liveLink} label="Live Link">
                      <MdOpenInNew size={16} />
                    </IconLinkButton>
                    <IconLinkButton href={project.githubLink} label="Github Link">
                      <SiGithub size={16} />
                    </IconLinkButton>
                  </div>
                </div>

                {/* Project Image with macOS Window Frame */}
                <CardSection project={project} className="relative flex-1 px-6">
                  {/* macOS Window Header */}
                  <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 border-black/8 dark:border-white/10 border-t border-r border-l rounded-t-lg">
                    <div className="bg-[#ff5f57] rounded-full w-2.5 h-2.5" />
                    <div className="bg-[#febc2e] rounded-full w-2.5 h-2.5" />
                    <div className="bg-[#28c940] rounded-full w-2.5 h-2.5" />
                  </div>
                  {/* Image Container */}
                  <div className="relative border-black/8 dark:border-white/10 border-r border-l aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      placeholder="blur"
                      priority={index < 2}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardSection>
              </div>

              {/* Tech Stack Badges - Outside Card */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center bg-black/5 hover:bg-black/8 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-[20px] px-4 border border-black/8 hover:border-emerald-600/40 dark:border-white/10 dark:hover:border-emerald-400/40 rounded-full h-7.5 font-medium text-zinc-600 dark:text-white/70 text-xs transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}

        {/* View More Card */}
        {hasMore && (
          <div className="relative h-full">
            <button
              onClick={handleViewMore}
              className="group flex flex-col justify-center items-center bg-black/3 dark:bg-white/3 backdrop-blur-[20px] border-2 border-black/8 hover:border-emerald-600/40 dark:border-white/10 dark:hover:border-emerald-400/40 rounded-3xl w-full md:h-[calc(100%-2.875rem)] min-h-50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex justify-center items-center bg-emerald-600/10 dark:bg-emerald-400/10 dark:group-hover:bg-emerald-400/20 group-hover:bg-emerald-600/20 rounded-full w-16 h-16 transition-colors">
                  <ChevronRight
                    size={32}
                    className="text-emerald-600 dark:group-hover:text-emerald-300 dark:text-emerald-400 group-hover:text-emerald-700 transition-colors"
                  />
                </div>
                <p className="font-bold text-zinc-900 dark:text-white text-lg">
                  More Projects
                </p>
              </div>
            </button>
            <div className="opacity-0 md:h-11.5"></div>
          </div>
        )}
      </div>
    </section>
  )
}
