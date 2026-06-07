import React from "react"
import { twMerge } from "tailwind-merge"
import abeerInSuit from "@/assets/abeer-in-suit.png"
import dhaka from "@/assets/dhaka_drone.jpg"
import worldMap from "@/assets/world-map.svg"
import PhotoCard from "@/components/PhotoCard"
import { HoverProvider, HoverZone } from "@/components/HoverLink"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiRedux,
  SiExpress,
  SiPrisma,
  SiDrizzle,
  SiShadcnui,
  SiGmail,
  SiGithub,
  SiX,
  SiFacebook,
  SiHashnode,
  SiDevdotto,
} from "react-icons/si"
import { FaLinkedin } from "react-icons/fa6"
import type { IconType } from "react-icons"

/** brand colour per tech, so each logo reads true */
type Skill = { icon: IconType; name: string; color: string }

const SKILLS_TOP: Skill[] = [
  { icon: SiJavascript, name: "JS", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TS", color: "#3178C6" },
  { icon: SiNodedotjs, name: "Node", color: "#5FA04E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiPostgresql, name: "Postgres", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
]

const SKILLS_BOTTOM: Skill[] = [
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
  { icon: SiShadcnui, name: "Shadcn UI", color: "#ffffff" },
  { icon: SiExpress, name: "ExpressJS", color: "#ffffff" },
  { icon: SiPrisma, name: "Prisma", color: "#5A67D8" },
  { icon: SiDrizzle, name: "Drizzle", color: "#C5F74F" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
]

function SkillPill({ icon: Icon, name, color }: Skill) {
  // White brand icons (#ffffff) are invisible on the light background.
  // Pass no `color` prop so they inherit CSS `currentColor`, then control
  // it with Tailwind classes — no useTheme needed (avoids hydration mismatch).
  const isWhite = color === "#ffffff"

  return (
    <span className="inline-flex items-center gap-1.75 px-3.25 whitespace-nowrap">
      <Icon
        size={16}
        color={isWhite ? undefined : color}
        className={`shrink-0 ${isWhite ? "text-zinc-600 dark:text-white" : ""}`}
      />
      <span className="font-grotesk text-[0.82rem] text-zinc-600 dark:text-white/82 tracking-[0.02em]">
        {name}
      </span>
    </span>
  )
}

/**
 * One scrolling row. Both ends fade to transparent so items dissolve in/out at
 * the edges. The fade mask uses a long gradient string with template literals,
 * which is awkward to express as a Tailwind class, so it stays as inline style.
 */
function SkillRow({ items, dir }: { items: Skill[]; dir: "ltr" | "rtl" }) {
  const fade =
    "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)"

  return (
    <div
      className="relative flex items-center bg-black/3 dark:bg-white/2 border-black/6 border-y dark:border-white/5 h-9.5 overflow-hidden"
      style={{ maskImage: fade, WebkitMaskImage: fade }}
    >
      <div
        className={`${
          dir === "ltr" ? "marquee-ltr" : "marquee-rtl"
        } flex w-max will-change-transform`}
      >
        {[...items, ...items].map((s, i) => (
          <SkillPill key={`${s.name}-${i}`} {...s} />
        ))}
      </div>
    </div>
  )
}

/** Shared card surface. Use twMerge() when a cell needs to override e.g. p-5. */
const card =
  "bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-[20px] p-5 overflow-hidden"

/** Featured writing — three picks across Hashnode + dev.to. */
type BlogPost = {
  title: string
  href: string
  platform: "Hashnode" | "dev.to"
  featured?: boolean
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "All you need to know about middleware in Next.js",
    href: "https://abeer.hashnode.dev/all-you-need-to-know-about-middleware-in-nextjs",
    platform: "Hashnode",
    featured: true,
  },
  {
    title: "Server Actions in Next.js 14, explained",
    href: "https://abeer.hashnode.dev/what-are-server-actions-in-nextjs-nextjs-14-edition",
    platform: "Hashnode",
    featured: true,
  },
  {
    title: "What's new in React 19 — a clear walkthrough",
    href: "https://dev.to/abeertech01/what-new-react-19-has-brought-to-the-table-get-clear-understanding-327h",
    platform: "dev.to",
  },
  {
    title: "The simplest Zustand tutorial",
    href: "https://dev.to/abeertech01/simplest-zustand-tutorial-28a8",
    platform: "dev.to",
  },
  {
    title: "Dockerize a PERN + Prisma app with Docker Compose",
    href: "https://dev.to/abeertech01/dockerize-pern-typescript-app-using-prisma-orm-with-docker-compose-415n",
    platform: "dev.to",
  },
]

function BlogCard({ title, href, platform, featured }: BlogPost) {
  const PlatformIcon = platform === "Hashnode" ? SiHashnode : SiDevdotto
  const iconColor = platform === "Hashnode" ? "#2962FF" : undefined

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group block bg-black/4 hover:bg-black/[0.07] dark:bg-white/3 dark:hover:bg-white/6 px-3 py-2.5 border border-black/[0.07] hover:border-emerald-600/40 dark:border-white/6 dark:hover:border-emerald-400/40 rounded-[10px] transition-colors"
    >
      {/* meta row: platform badge + (optional) featured pill */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <PlatformIcon
          size={13}
          color={iconColor}
          className={`shrink-0 ${platform === "dev.to" ? "text-zinc-600 dark:text-white" : ""}`}
        />
        <span className="font-grotesk text-[0.64rem] text-zinc-500 dark:text-white/45 uppercase tracking-[0.14em]">
          {platform}
        </span>
        {featured && (
          <span className="bg-emerald-600/10 dark:bg-emerald-400/10 ml-auto px-1.5 py-px border border-emerald-600/25 dark:border-emerald-400/25 rounded font-grotesk text-[0.52rem] text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.14em]">
            Featured
          </span>
        )}
      </div>

      {/* title */}
      <p className="font-semibold text-[0.94rem] text-zinc-800 dark:group-hover:text-white dark:text-white/85 group-hover:text-zinc-900 leading-[1.3]">
        {title}
      </p>
    </a>
  )
}

/** Small clickable pill used for social-link icons. */
function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: IconType
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="flex justify-center items-center bg-black/4 hover:bg-black/[0.07] dark:bg-white/3 dark:hover:bg-white/6 py-2.5 border border-black/[0.07] hover:border-emerald-600/40 dark:border-white/6 dark:hover:border-emerald-400/40 rounded-[10px] text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 dark:text-white/70 transition-colors"
    >
      <Icon size={18} />
    </a>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto px-8 pb-28 w-full max-w-243.75 scroll-mt-24"
    >
      {/* marquee animations live here (not globals.css) so they ship with the
          component and aren't subject to global CSS tree-shaking / stale HMR */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes marquee-ltr { from { transform: translateX(-50%); } to { transform: translateX(0); } }
@keyframes marquee-rtl { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee-ltr { animation: marquee-ltr 22s linear infinite; }
.marquee-rtl { animation: marquee-rtl 22s linear infinite; }
`,
        }}
      />
      <HoverProvider>
        <div className="gap-4 grid grid-cols-2 md:grid-cols-3 md:grid-rows-[180px_138.5px_138.5px_228px]">
          {/* ── 1 · Name ─────────────────────────────── col 1 · row 1 ── */}
          <div
            className={twMerge(
              card,
              "col-start-1 row-start-1 aspect-square md:aspect-auto md:row-end-2 flex flex-col justify-center items-center text-center px-6 py-5 backdrop-blur-[20px]",
            )}
          >
            <h2 className="font-extrabold text-zinc-900 dark:text-white leading-[1.2] md:leading-[1.05] tracking-[-0.03em] about-name-glow">
              <span className="text-[1.6rem] md:text-[2.2rem]">ABEER</span>
              <br />
              <span className="text-[1.2rem] md:text-[2rem]">ABDUL AHAD</span>
            </h2>

            {/* separator */}
            <div className="bg-black/40 dark:bg-white/30 my-4 md:my-3 w-14 h-[1.2px]" />

            <p className="font-normal text-[0.77rem] text-zinc-500 dark:text-white/42 uppercase tracking-[0.12em] md:tracking-[0.14em]">
              Full Stack Developer
            </p>
          </div>

          {/* ── 2 · Location / map (hovering here reveals Dhaka in the photo) ── */}
          <HoverZone
            className={twMerge(
              card,
              "col-span-2 row-start-2 md:col-start-2 md:col-end-4 md:row-start-1 min-h-37.5 md:min-h-0 p-0 relative flex items-end backdrop-blur-[20px]",
            )}
          >
            {/* faint world map (white SVG used as a mask, tinted emerald-grey).
                Mask values are dynamic JS strings — cleanest as inline style. */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[rgba(180,210,200,0.16)]"
              style={{
                maskImage: `url(${worldMap.src})`,
                WebkitMaskImage: `url(${worldMap.src})`,
                maskSize: "115% auto",
                WebkitMaskSize: "115% auto",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />

            {/* vertical scanning beam sweeping left → right (animation = .map-scan in globals.css) */}
            <div
              aria-hidden
              className="absolute inset-y-0 bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_3px_#34d399] w-0.5 -translate-x-1/2 map-scan"
            />

            {/* readout */}
            <div className="relative p-7">
              <p
                className="font-extrabold text-[1.8rem] text-zinc-900 md:text-[2rem] dark:text-white leading-[1.2] md:leading-none tracking-[-0.01em]"
                style={{ textShadow: "0 0 24px #34d39955" }}
              >
                DHAKA, BANGLADESH
              </p>
              <p className="mt-2.5 font-grotesk text-[0.95rem] text-zinc-500 dark:text-white/55 tracking-[0.04em]">
                23.8103° N, 90.4125° E
              </p>
              <p className="mt-1 font-grotesk text-[0.95rem] text-emerald-600 dark:text-emerald-400 tracking-[0.04em]">
                — GMT +6
              </p>
            </div>
          </HoverZone>

          {/* ── 3 · What I do (tall) ──────────── col 1 · rows 2–4 ── */}
          <div
            className={twMerge(
              card,
              "col-span-2 row-start-3 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-5 backdrop-blur-[20px] flex flex-col gap-3.5",
            )}
          >
            {/* heading + underline */}
            <div>
              <h3 className="font-extrabold text-[1.6rem] text-zinc-900 dark:text-white leading-none tracking-[-0.01em]">
                What I do
              </h3>
              <div className="bg-emerald-600 dark:bg-emerald-400 mt-2 rounded-[1px] w-8.5 h-[1.5px]" />
            </div>

            {/* opening pitch */}
            <p className="text-[0.96rem] text-zinc-600 dark:text-white/72 leading-[1.55]">
              <span className="inline-block mb-1.25 font-semibold">
                I build pixel-perfect, scalable web apps that are fun to use.
              </span>
              <br />I work across AI and automation, meeting what a business
              needs.
            </p>

            {/* small label above the rails */}
            <p className="font-grotesk text-[0.65rem] text-zinc-500 dark:text-white/32 uppercase tracking-[0.16em]">
              Stack I work with
            </p>

            {/* two opposite-scrolling rails of tech */}
            <div className="flex flex-col gap-2.5">
              <SkillRow items={SKILLS_TOP} dir="rtl" />
              {/* reversed list + ltr motion → Next.js leads, then Redux, etc. */}
              <SkillRow items={[...SKILLS_BOTTOM].reverse()} dir="ltr" />
            </div>

            {/* closing note */}
            <p className="text-[0.96rem] text-zinc-600 dark:text-white/72 leading-[1.55]">
              A hustler at heart, aware of modern technologies — where the
              industry is moving, developing my own products along the way.
              <br />
              <span className="inline-block mt-1.25 font-semibold">
                Open to collaborate on exciting projects!
              </span>
            </p>

            {/* status pill — pinned to the bottom */}
            <div className="flex items-center gap-2.25 mt-auto pt-1">
              <span
                aria-hidden
                className="bg-emerald-600 dark:bg-emerald-400 shadow-[0_0_10px_#34d399] rounded-full w-1.75 h-1.75 shrink-0"
              />
              <span className="font-grotesk text-[0.55rem] text-zinc-500 dark:text-white/62 uppercase tracking-wider">
                Open for new opportunities &amp; freelance
              </span>
            </div>
          </div>

          {/* ── 4 · Photo ───────────────────── col 2 · rows 2–3 ── */}
          <div
            className={twMerge(
              card,
              "col-start-2 row-start-1 aspect-square md:aspect-auto md:row-start-2 md:row-end-4 p-0 relative",
            )}
          >
            <PhotoCard
              photo={abeerInSuit}
              hoverImage={dhaka}
              alt="Abeer Abdul Ahad"
            />
          </div>

          {/* ── 5 · Writing (tall) ─────────────── col 3 · rows 2–4 ── */}
          <div
            className={twMerge(
              card,
              "col-span-2 row-start-5 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-5 backdrop-blur-[20px] flex flex-col gap-5",
            )}
          >
            {/* heading + underline (matches "What I do" / "Get in touch") */}
            <div>
              <h3 className="font-extrabold text-[1.6rem] text-zinc-900 dark:text-white leading-none tracking-[-0.01em]">
                Writing
              </h3>
              <div className="bg-emerald-600 dark:bg-emerald-400 mt-2 rounded-[1px] w-8.5 h-[1.5px]" />
            </div>

            {/* featured posts explanation */}
            <p className="text-[0.85rem] text-zinc-500 dark:text-white/55 leading-normal">
              Posts featured and shared by the platforms&apos; official handles
            </p>

            {/* featured posts — stacked (first 3 only) */}
            <div className="flex flex-col gap-2">
              {BLOG_POSTS.slice(0, 3).map((p) => (
                <BlogCard key={p.href} {...p} />
              ))}
            </div>

            {/* explore more links */}
            <div className="flex flex-col gap-2 mt-auto pt-2">
              <p className="font-grotesk text-[0.75rem] text-zinc-500 dark:text-white/40 uppercase tracking-[0.12em]">
                Explore more
              </p>
              <div className="flex gap-2">
                <a
                  href="https://abeer.hashnode.dev"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-1 justify-center items-center gap-1.5 bg-black/4 hover:bg-black/[0.07] dark:bg-white/3 dark:hover:bg-white/6 px-3 py-2 border border-black/[0.07] hover:border-emerald-600/40 dark:border-white/6 dark:hover:border-emerald-400/40 rounded-[8px] font-medium text-[0.8rem] text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 dark:text-white/70 transition-colors"
                >
                  <SiHashnode size={14} />
                  Hashnode
                </a>
                <a
                  href="https://dev.to/abeertech01"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-1 justify-center items-center gap-1.5 bg-black/4 hover:bg-black/[0.07] dark:bg-white/3 dark:hover:bg-white/6 px-3 py-2 border border-black/[0.07] hover:border-emerald-600/40 dark:border-white/6 dark:hover:border-emerald-400/40 rounded-[8px] font-medium text-[0.8rem] text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 dark:text-white/70 transition-colors"
                >
                  <SiDevdotto size={14} />
                  Dev.to
                </a>
              </div>
            </div>
          </div>

          {/* ── 6 · Get in touch ─────────────────── col 2 · row 4 ── */}
          <div
            className={twMerge(
              card,
              "col-span-2 row-start-4 md:col-start-2 md:col-end-3 md:row-start-4 backdrop-blur-[20px] flex flex-col gap-3.5",
            )}
          >
            {/* heading + underline (matches the "What I do" treatment) */}
            <div>
              <h3 className="font-extrabold text-[1.6rem] text-zinc-900 dark:text-white leading-none tracking-[-0.01em]">
                Get in touch
              </h3>
              <div className="bg-emerald-600 dark:bg-emerald-400 mt-2 rounded-[1px] w-8.5 h-[1.5px]" />
            </div>

            <p className="text-[0.96rem] text-zinc-600 dark:text-white/72 leading-[1.55]">
              Let&apos;s connect and discuss!
            </p>

            {/* link grid — email spans all 4 cols, socials sit in row 2 */}
            <div className="gap-2 grid grid-cols-4 mt-auto pt-1">
              {/* email — full-width row */}
              <a
                href="mailto:abeer.technology@gmail.com"
                className="group flex items-center gap-2.5 col-span-4 bg-black/4 hover:bg-black/[0.07] dark:bg-white/3 dark:hover:bg-white/6 px-3.5 py-2.5 border border-black/[0.07] hover:border-emerald-600/40 dark:border-white/6 dark:hover:border-emerald-400/40 rounded-[10px] transition-colors"
              >
                <SiGmail
                  size={14}
                  className="text-emerald-600 dark:text-emerald-400 shrink-0"
                />
                <span className="font-grotesk text-[0.78rem] text-zinc-700 dark:group-hover:text-white dark:text-white/80 group-hover:text-zinc-900 truncate">
                  abeer.technology@gmail.com
                </span>
              </a>

              <SocialLink
                href="https://github.com/abeertech01"
                label="GitHub"
                icon={SiGithub}
              />
              <SocialLink
                href="https://linkedin.com/in/abeertech01"
                label="LinkedIn"
                icon={FaLinkedin}
              />
              <SocialLink
                href="https://x.com/abeertech01"
                label="X (Twitter)"
                icon={SiX}
              />
              <SocialLink
                href="https://facebook.com/abeertech01"
                label="Facebook"
                icon={SiFacebook}
              />
            </div>
          </div>
        </div>
      </HoverProvider>
    </section>
  )
}
