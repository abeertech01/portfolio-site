import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { MdOpenInNew } from "react-icons/md"
import AnimateIn from "@/components/AnimateIn"
import ProjectGallery from "@/components/ProjectGallery"
import { projectDetails, projectDetailOrder } from "@/lib/project-details"

interface Props {
  params: Promise<{
    projectName: string
  }>
}

export async function generateStaticParams() {
  return projectDetailOrder.map((slug) => ({ projectName: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectName } = await params
  const project = projectDetails[projectName]
  if (!project) return {}

  return {
    title: `${project.name} | Abdul Ahad Abeer`,
    description: project.intro,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { projectName } = await params
  const project = projectDetails[projectName]

  if (!project) notFound()

  const currentIndex = projectDetailOrder.indexOf(project.slug)
  const prevSlug =
    projectDetailOrder[
      (currentIndex - 1 + projectDetailOrder.length) % projectDetailOrder.length
    ]
  const nextSlug =
    projectDetailOrder[(currentIndex + 1) % projectDetailOrder.length]
  const prevProject = projectDetails[prevSlug]
  const nextProject = projectDetails[nextSlug]

  return (
    <main className="mx-auto px-4 xl:px-8 pt-28 lg:pt-32 pb-16 lg:pb-22 xl:pb-28 w-full max-w-4xl">
      <AnimateIn>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 mb-10 font-medium text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 dark:text-white/50 text-sm transition-colors"
        >
          <ArrowLeft size={14} />
          All Projects
        </Link>

        <p className="mb-2 font-grotesk text-emerald-600 dark:text-emerald-400 text-xs uppercase tracking-[0.15em]">
          {project.type} · {project.number} / 0{projectDetailOrder.length}
        </p>
        <h1 className="mb-4 font-bold text-zinc-900 dark:text-white text-[2rem] lg:text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
          {project.name}
        </h1>
        <p className="mb-6 max-w-2xl text-zinc-500 dark:text-white/65 text-base leading-relaxed">
          {project.intro}
        </p>

        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 border-emerald-600 hover:border-emerald-700 dark:border-emerald-400 dark:hover:border-emerald-300 border-b font-medium text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-300 dark:text-emerald-400 transition-colors"
            >
              <MdOpenInNew size={16} />
              Live Link
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 border-emerald-600 hover:border-emerald-700 dark:border-emerald-400 dark:hover:border-emerald-300 border-b font-medium text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-300 dark:text-emerald-400 transition-colors"
          >
            <SiGithub size={16} />
            Github Link
          </a>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.technologies.map(({ name, Icon }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/5 backdrop-blur-[20px] px-4 border border-black/8 dark:border-white/10 rounded-full h-8 font-medium text-zinc-600 dark:text-white/70 text-xs"
            >
              <Icon size={14} />
              {name}
            </span>
          ))}
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <ProjectGallery
          video={project.video}
          screenshots={project.screenshots}
          projectName={project.name}
        />
      </AnimateIn>

      <AnimateIn delay={150}>
        <div className="flex items-center gap-3 mb-6">
          <span className="font-grotesk text-zinc-500 dark:text-white/40 text-xs uppercase tracking-[0.15em]">
            Case Study
          </span>
          <span className="flex-1 bg-black/8 dark:bg-white/10 h-px" />
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <div className="bg-black/3 dark:bg-white/3 backdrop-blur-[20px] px-6 py-5 border border-black/8 dark:border-white/10 border-l-2 border-l-emerald-600 dark:border-l-emerald-400 rounded-2xl">
            <span className="block mb-2 font-grotesk text-zinc-400 dark:text-white/40 text-xs uppercase tracking-[0.15em]">
              The Problem
            </span>
            <p className="max-w-2xl text-zinc-500 dark:text-white/65 text-sm leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>

          <div className="bg-black/3 dark:bg-white/3 backdrop-blur-[20px] px-6 py-5 border border-black/8 dark:border-white/10 border-l-2 border-l-emerald-600 dark:border-l-emerald-400 rounded-2xl">
            <span className="block mb-3 font-grotesk text-zinc-400 dark:text-white/40 text-xs uppercase tracking-[0.15em]">
              Features &amp; Decisions
            </span>
            <ul className="flex flex-col gap-3">
              {project.caseStudy.features.map((feature) => (
                <li
                  key={feature.title}
                  className="max-w-2xl text-zinc-500 dark:text-white/65 text-sm leading-relaxed"
                >
                  <strong className="font-semibold text-zinc-800 dark:text-white/90">
                    {feature.title}
                  </strong>{" "}
                  — {feature.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/3 dark:bg-white/3 backdrop-blur-[20px] px-6 py-5 border border-black/8 dark:border-white/10 border-l-2 border-l-emerald-600 dark:border-l-emerald-400 rounded-2xl">
            <span className="block mb-2 font-grotesk text-zinc-400 dark:text-white/40 text-xs uppercase tracking-[0.15em]">
              The Hard Part
            </span>
            <p className="max-w-2xl text-zinc-500 dark:text-white/65 text-sm leading-relaxed">
              {project.caseStudy.challenge}
            </p>
          </div>

          <div className="bg-black/3 dark:bg-white/3 backdrop-blur-[20px] px-6 py-5 border border-black/8 dark:border-white/10 border-l-2 border-l-emerald-600 dark:border-l-emerald-400 rounded-2xl">
            <span className="block mb-2 font-grotesk text-zinc-400 dark:text-white/40 text-xs uppercase tracking-[0.15em]">
              What&apos;s Next
            </span>
            <p className="max-w-2xl text-zinc-500 dark:text-white/65 text-sm leading-relaxed">
              {project.caseStudy.whatsNext}
            </p>
          </div>
        </div>
      </AnimateIn>

      {projectDetailOrder.length > 2 ? (
        <div className="flex justify-between items-start gap-4 mt-16 pt-8 border-black/8 dark:border-white/10 border-t">
          <Link
            href={`/${prevProject.slug}`}
            className="flex flex-col gap-1 text-left group"
          >
            <span className="font-grotesk text-zinc-400 dark:text-white/35 text-[0.7rem] uppercase tracking-widest">
              ← Previous
            </span>
            <span className="font-medium text-zinc-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 dark:text-white/60 text-sm transition-colors">
              {prevProject.name}
            </span>
          </Link>
          <Link
            href={`/${nextProject.slug}`}
            className="flex flex-col items-end gap-1 text-right group"
          >
            <span className="font-grotesk text-zinc-400 dark:text-white/35 text-[0.7rem] uppercase tracking-widest">
              Next →
            </span>
            <span className="font-medium text-zinc-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 dark:text-white/60 text-sm transition-colors">
              {nextProject.name}
            </span>
          </Link>
        </div>
      ) : (
        <div className="flex justify-end mt-16 pt-8 border-black/8 dark:border-white/10 border-t">
          <Link href={`/${nextProject.slug}`} className="flex flex-col items-end gap-1 text-right group">
            <span className="font-grotesk text-zinc-400 dark:text-white/35 text-[0.7rem] uppercase tracking-widest">
              Next Project →
            </span>
            <span className="font-medium text-zinc-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 dark:text-white/60 text-sm transition-colors">
              {nextProject.name}
            </span>
          </Link>
        </div>
      )}
    </main>
  )
}
