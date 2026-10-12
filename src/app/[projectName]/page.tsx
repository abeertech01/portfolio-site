import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
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

type Block = {
  label: string
  lead?: string
  items?: { title: string; text: string }[]
  callout?: string
}

const wordCount = (s = "") => s.split(/\s+/).filter(Boolean).length

export default async function ProjectPage({ params }: Props) {
  const { projectName } = await params
  const project = projectDetails[projectName]

  if (!project) notFound()

  const total = projectDetailOrder.length
  const index = projectDetailOrder.indexOf(project.slug)
  const prev = projectDetails[projectDetailOrder[(index - 1 + total) % total]]
  const next = projectDetails[projectDetailOrder[(index + 1) % total]]

  const { caseStudy } = project
  const blocks: Block[] = [
    { label: (caseStudy.problemLabel ?? "The Problem").toUpperCase(), lead: caseStudy.problem },
    {
      label: "FEATURES & DECISIONS",
      items: caseStudy.features.map((f) => ({
        title: f.title,
        text: f.description,
      })),
    },
    { label: "THE HARD PART", lead: caseStudy.challenge, callout: caseStudy.callout },
    { label: "WHAT'S NEXT", lead: caseStudy.whatsNext },
  ]

  const words = blocks.reduce(
    (n, b) =>
      n +
      wordCount(b.lead) +
      (b.items ?? []).reduce((m, it) => m + wordCount(it.text), 0),
    0,
  )
  const readTime = Math.max(1, Math.round(words / 200))

  const host = project.liveLink
    ? new URL(project.liveLink).host
    : project.githubLink.replace(/^https?:\/\//, "")

  const num = (p: { number: string }) => p.number

  return (
    <div className="bg-d-bg min-h-screen font-grotesk leading-[normal] text-d-fg">
      <main className="box-border mx-auto px-[clamp(16px,3vw,32px)] pt-30 w-full max-w-[calc(1280px_+_2_*_clamp(16px,3vw,32px))]">
        {/* hero */}
        <AnimateIn duration={900}>
          <section className="flex flex-col gap-[clamp(20px,3vw,32px)]">
            <div className="flex flex-wrap justify-between items-center gap-4 font-jbmono text-xs tracking-[0.06em]">
              <Link
                href="/#projects"
                className="text-d-mut hover:text-d-acc transition-colors"
              >
                ← ALL PROJECTS
              </Link>
              <span className="flex flex-wrap items-center gap-2.5">
                <span className="text-d-mut2">
                  <span className="text-d-acc">{num(project)}</span> /{" "}
                  {String(total).padStart(2, "0")} · {project.type.toUpperCase()}
                </span>
                {project.isStarProject && (
                  <span className="bg-[rgb(61_220_159/0.12)] px-2.5 py-1 rounded-full text-d-acc">
                    ♛ CROWNED
                  </span>
                )}
              </span>
            </div>

            <h1 className="m-0 font-bebas font-normal text-[clamp(80px,16vw,240px)] leading-[0.84] tracking-[-0.005em]">
              {project.name}
            </h1>

            <div className="items-end gap-[clamp(20px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] pt-5 border-[rgb(var(--d-ink)/0.1)] border-t">
              <p className="m-0 font-medium text-[clamp(20px,2.2vw,28px)] leading-[1.3] tracking-[-0.015em] text-pretty">
                {project.intro}
              </p>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t.name}
                      className="px-3 py-1.5 border border-[rgb(var(--d-ink)/0.14)] rounded-full font-jbmono text-xs text-d-fg2"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bg-d-acc hover:bg-d-fg px-5 py-3.25 rounded-full font-semibold text-[15px] text-d-on-acc hover:text-d-on-acc transition-colors duration-300"
                    >
                      Visit live site ↗
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:border-d-acc px-5 py-3.25 border border-[rgb(var(--d-ink)/0.18)] rounded-full font-jbmono text-[15px] text-d-fg hover:text-d-acc transition-colors duration-300"
                  >
                    &lt;/&gt; source
                  </a>
                </div>
                {project.liveLinkNote && (
                  <p className="m-0 max-w-120 text-xs text-d-mut2 leading-relaxed">
                    {project.liveLinkNote}
                  </p>
                )}
              </div>
            </div>
          </section>
        </AnimateIn>

        {/* gallery */}
        <AnimateIn delay={120} duration={900}>
          <ProjectGallery
            video={project.video}
            screenshots={project.screenshots}
            projectName={project.name}
            host={host}
          />
        </AnimateIn>

        {/* case study */}
        <section className="flex flex-col mt-[clamp(80px,10vw,140px)]">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-[clamp(24px,4vw,48px)]">
            <h2 className="m-0 font-bebas font-normal text-[clamp(56px,8vw,120px)] leading-[0.88]">
              Case study
            </h2>
            <span className="font-jbmono text-xs text-d-mut2 tracking-[0.06em]">
              {readTime} MIN READ
            </span>
          </div>

          {blocks.map((b, i) => (
            <AnimateIn key={b.label} threshold={0.15} duration={800}>
              <div className="gap-[clamp(16px,4vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] py-[clamp(28px,4vw,48px)] border-[rgb(var(--d-ink)/0.09)] border-t">
                <div className="min-[720px]:top-25 min-[720px]:sticky flex flex-row min-[720px]:flex-col items-end min-[720px]:items-start gap-3.5 min-[720px]:gap-1.5 self-start">
                  <span
                    className={`font-bebas text-[56px] min-[720px]:text-[clamp(64px,7vw,104px)] leading-[0.8] ${
                      b.callout ? "text-d-acc" : "text-[color:var(--d-num)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-jbmono text-xs text-d-acc tracking-[0.08em]">
                    {b.label}
                  </span>
                </div>

                <div className="flex flex-col gap-5 min-[720px]:col-span-2 max-w-190">
                  {b.lead && (
                    <p className="m-0 text-[clamp(20px,2vw,26px)] text-d-fg2 leading-[1.45] tracking-[-0.01em] text-pretty">
                      {b.lead}
                    </p>
                  )}
                  {b.items?.map((it, k) => (
                    <div
                      key={it.title}
                      className="gap-4.5 grid grid-cols-[auto_minmax(0,1fr)] bg-d-card p-5 border border-[rgb(var(--d-ink)/0.06)] hover:border-[rgb(61_220_159/0.35)] rounded-[18px] transition-colors duration-300"
                    >
                      <span className="flex justify-center items-center bg-[rgb(61_220_159/0.12)] rounded-[10px] w-8.5 h-8.5 font-jbmono text-xs text-d-acc">
                        {String(k + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <span className="font-semibold text-lg leading-[normal]">{it.title}</span>
                        <span className="text-base text-d-mut leading-[1.6] text-pretty">
                          {it.text}
                        </span>
                      </div>
                    </div>
                  ))}
                  {b.callout && (
                    <div className="flex flex-col gap-3 bg-d-acc p-[clamp(20px,3vw,32px)] rounded-[22px] text-d-on-acc">
                      <span className="font-jbmono text-xs tracking-[0.08em]">
                        THE RULE
                      </span>
                      <span className="font-bebas text-[clamp(34px,3.6vw,52px)] leading-[0.95]">
                        {b.callout}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </section>

        {/* prev / next */}
        <nav
          aria-label="More projects"
          className="gap-3 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] mt-[clamp(40px,6vw,80px)] pb-10"
        >
          <Link
            href={`/${prev.slug}`}
            className="flex flex-col gap-3.5 bg-d-card p-[clamp(22px,3vw,34px)] border border-[rgb(var(--d-ink)/0.08)] hover:border-d-acc rounded-[28px] text-d-fg hover:text-d-fg transition-colors duration-300"
          >
            <span className="font-jbmono text-xs text-d-mut2 tracking-[0.06em]">
              ← PREVIOUS · {num(prev)}
            </span>
            <span className="font-bebas text-[clamp(44px,5vw,72px)] leading-[0.9]">
              {prev.name}
            </span>
          </Link>
          <Link
            href={`/${next.slug}`}
            className="flex flex-col gap-3.5 bg-d-acc hover:bg-d-fg p-[clamp(22px,3vw,34px)] rounded-[28px] text-d-on-acc hover:text-d-on-acc text-right transition-colors duration-300"
          >
            <span className="font-jbmono text-xs tracking-[0.06em]">
              NEXT · {num(next)} →
            </span>
            <span className="font-bebas text-[clamp(44px,5vw,72px)] leading-[0.9]">
              {next.name}
            </span>
          </Link>
        </nav>
      </main>

      <footer className="box-border flex flex-wrap justify-between gap-4 mx-auto px-[clamp(16px,3vw,32px)] pt-5.5 pb-8 border-[rgb(var(--d-ink)/0.08)] border-t w-full max-w-[calc(1280px_+_2_*_clamp(16px,3vw,32px))] font-jbmono text-xs text-d-mut2">
        <span>© {new Date().getFullYear()} Abeer Abdul-Ahad</span>
        <a
          href="mailto:abeer.technology@gmail.com"
          className="text-d-mut hover:text-d-acc transition-colors"
        >
          abeer.technology@gmail.com
        </a>
      </footer>
    </div>
  )
}
