const ROW_A = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "TanStack Query",
  "Tailwind CSS",
  "Shadcn UI",
  "SCSS",
  "Figma",
  "Git",
]

const ROW_B = [
  "Node.js",
  "Express",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Prisma",
  "Drizzle",
  "Docker",
  "Firebase",
  "NextAuth",
]

function Row({
  items,
  animation,
  className,
}: {
  items: string[]
  animation: string
  className: string
}) {
  // Four copies, animated by -50%: two full periods, so the loop is seamless
  // and there's no gap even on very wide screens.
  const copies = [...items, ...items, ...items, ...items]
  return (
    <div className={`flex w-max will-change-transform ${animation} ${className}`}>
      {copies.map((t, i) => (
        <span
          key={`${t}-${i}`}
          aria-hidden={i >= items.length ? true : undefined}
          className="inline-flex items-center gap-3.5 pr-3.5 font-bebas text-[clamp(28px,3.4vw,44px)] leading-none whitespace-nowrap"
        >
          {t}
          <span className="text-[0.6em] text-d-acc">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      aria-label="Technologies I work with"
      className="flex flex-col shrink-0 gap-3 bg-d-bg2 py-4.5 border-[rgb(var(--d-ink)/0.08)] border-y overflow-hidden marquee-pause"
    >
      <Row items={ROW_A} animation="marquee-slow-a" className="text-d-fg" />
      <Row items={ROW_B} animation="marquee-slow-b" className="text-d-mut3" />
    </div>
  )
}
