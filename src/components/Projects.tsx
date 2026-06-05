"use client"

import { useState } from "react"
import Image from "next/image"
import { SiGithub } from "react-icons/si"
import { MdOpenInNew } from "react-icons/md"
import { ChevronRight } from "lucide-react"
import aiResumeImage from "@/assets/project-images/ai-resume-builder.jpg"
import redbookImage from "@/assets/project-images/redbook.png"
import leetcodeImage from "@/assets/project-images/leetcode-clone.png"
import messengerImage from "@/assets/project-images/messenger-clone.png"
import vueDishesImage from "@/assets/project-images/vue-dishes.png"
import animatedLandingPageImage from "@/assets/project-images/melting-pot.png"

interface Project {
  number: string
  type: string
  name: string
  description: string
  image: typeof aiResumeImage
  technologies: string[]
  githubLink: string
  liveLink?: string
}

const projects: Project[] = [
  {
    number: "01",
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
    type: "SOCIAL MEDIA APP",
    name: "Redbook",
    description:
      "A social media project where I tried to stuff some of the coolest social media features.",
    image: redbookImage,
    technologies: ["React", "TypeScript", "Node.js"],
    githubLink: "https://github.com/abeertech01/redbook",
  },
  {
    number: "03",
    type: "CODING PLATFORM",
    name: "LeetCode Clone",
    description:
      "Leetcode clone with solid understanding of reusable components, utilizing Firebase as a database.",
    image: leetcodeImage,
    technologies: ["Next.js", "TypeScript", "Firebase"],
    githubLink: "https://github.com/abeertech01/leetcode-clone",
    liveLink: "https://leetcode-clone-ebon.vercel.app/",
  },
  {
    number: "04",
    type: "Messaging App",
    name: "Messenger Clone",
    description:
      "Messenger clone built with NextJS 13 and associated technologies of JavaScript, for realtime chatting, implemented Pusher.js",
    image: messengerImage,
    technologies: ["Next.js", "Prisma", "Pusher.js"],
    githubLink: "https://github.com/abeertech01/messenger-clone",
    liveLink: "https://messenger-clone-teal.vercel.app/",
  },
  {
    number: "05",
    type: "Web App",
    name: "Vue Dishes",
    description:
      "Searching, bookmarking dishes and measuring ingredients according to the number of guests. This API is created by Jonas Schmadtmann.",
    image: vueDishesImage,
    technologies: ["Vue", "Vuex", "REST API"],
    githubLink: "https://github.com/abeertech01/vue-dishes",
    liveLink: "https://vue-dishes.web.app/",
  },
  {
    number: "06",
    type: "Landing Page",
    name: "Animated Landing Page",
    description:
      "Melting Pot, a restaurant landing page with smooth animations and transitions, built with React, GSAP and framer-motion.",
    image: animatedLandingPageImage,
    technologies: ["React", "GSAP", "framer-motion"],
    githubLink: "https://github.com/abeertech01/melting-pot-restaurant",
    liveLink: "https://melting-pot-restaurant.vercel.app/",
  },
]

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3)
  const displayedProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  const handleViewMore = () => {
    setVisibleCount(projects.length)
  }

  return (
    <section
      id="projects"
      className="mx-auto px-4 md:px-8 pb-16 md:pb-28 w-full max-w-6xl scroll-mt-24"
    >
      {/* Portfolio label */}
      <div className="mb-8 text-center">
        <p className="font-grotesk text-[0.75rem] text-white/40 uppercase tracking-[0.2em]">
          Portfolio
        </p>
      </div>

      {/* Heading with emerald accent */}
      <div className="mb-6 text-center">
        <h2 className="font-bold text-[2rem] md:text-[3rem] leading-[1.1] tracking-[-0.02em]">
          <span className="text-white">Featured </span>
          <span className="bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-300 text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* Subtitle */}
      <p className="mx-auto mb-10 md:mb-20 max-w-2xl text-white/60 md:text-[1.1rem] text-base text-center leading-[1.6]">
        The projects I developed, that made me confident in building software.
      </p>

      {/* Projects Grid */}
      <div className="gap-16 grid grid-cols-1 md:grid-cols-2">
        {displayedProjects.map((project) => (
          <div key={project.number}>
            {/* Project Card */}
            <div className="flex flex-col bg-white/3 backdrop-blur-[20px] border-2 border-white/10 hover:border-emerald-400/40 rounded-3xl overflow-hidden transition-all duration-300">
              {/* Project Header */}
              <div className="p-6 pb-4">
                <p className="mb-2 font-grotesk text-white/40 text-xs uppercase tracking-[0.15em]">
                  {project.number}. {project.type.toLowerCase()}
                </p>
                <h3 className="mb-3 font-bold text-white text-2xl">
                  {project.name}
                </h3>
                <p className="mb-4 text-white/65 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4 text-sm">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1.5 border-emerald-400 hover:border-emerald-300 border-b font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <MdOpenInNew size={16} />
                      Live Link
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 border-emerald-400 hover:border-emerald-300 border-b font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <SiGithub size={16} />
                    Github Link
                  </a>
                </div>
              </div>

              {/* Project Image with macOS Window Frame */}
              <div className="relative flex-1 px-6">
                {/* macOS Window Header */}
                <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 border-white/10 border-t border-r border-l rounded-t-lg">
                  <div className="bg-[#ff5f57] rounded-full w-2.5 h-2.5" />
                  <div className="bg-[#febc2e] rounded-full w-2.5 h-2.5" />
                  <div className="bg-[#28c940] rounded-full w-2.5 h-2.5" />
                </div>
                {/* Image Container */}
                <div className="relative border-white/10 border-r border-l aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Tech Stack Badges - Outside Card */}
            <div className="flex flex-wrap gap-3 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center bg-white/5 hover:bg-white/10 backdrop-blur-[20px] px-4 border border-white/10 hover:border-emerald-400/40 rounded-full h-7.5 font-medium text-white/70 text-xs transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* View More Card */}
        {hasMore && (
          <div className="relative h-full">
            <button
              onClick={handleViewMore}
              className="group flex flex-col justify-center items-center bg-white/3 backdrop-blur-[20px] border-2 border-white/10 hover:border-emerald-400/40 rounded-3xl w-full md:h-[calc(100%-2.875rem)] min-h-50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex justify-center items-center bg-emerald-400/10 group-hover:bg-emerald-400/20 rounded-full w-16 h-16 transition-colors">
                  <ChevronRight
                    size={32}
                    className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  />
                </div>
                <p className="font-bold text-white text-lg">More Projects</p>
              </div>
            </button>
            <div className="opacity-0 md:h-11.5"></div>
          </div>
        )}
      </div>
    </section>
  )
}
