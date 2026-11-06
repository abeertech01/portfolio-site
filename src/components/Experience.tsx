import AnimateIn from "@/components/AnimateIn"

const TAGS = ["Vue.js", "Next.js", "Node.js", "Firebase", "Chart.js"]

const BULLETS = [
  {
    num: "01",
    lead: "Built the Vue.js frontend",
    rest: " for a Web3 portfolio dashboard: wallet balances, token values, portfolio breakdowns.",
  },
  {
    num: "02",
    lead: "Led the migration from Vue.js to Next.js,",
    rest: " adding server-side rendering for SEO and page performance.",
  },
  {
    num: "03",
    lead: "Shipped live token-price charts",
    rest: " (Chart.js) with real-time updates from a crypto market-data API.",
  },
  {
    num: "04",
    lead: "Built Node.js and Firebase services",
    rest: " delivering real-time data to 1,000+ total users (about 100 daily).",
  },
  {
    num: "05",
    lead: "Worked directly with the founder,",
    rest: " almost six days a week, to ship price tracking, multi-wallet support and UX fixes.",
  },
]

const STATS = [
  { label: "REACH", value: "1,000+", note: "total users on the product", hot: true },
  { label: "DAILY", value: "~100", note: "active users every day" },
  { label: "MIGRATION", value: "Vue → Next", note: "led the move to server-side rendering" },
  { label: "CADENCE", value: "6 days/wk", note: "shipping side by side with the founder" },
]

const border = "border-[rgb(var(--d-ink)/0.07)]"

export default function Experience() {
  return (
    <section
      id="experience"
      className="box-border mx-auto w-full max-w-[calc(1280px+2*clamp(16px,3vw,32px))] px-[clamp(16px,3vw,32px)] pb-[clamp(72px,10vw,140px)] font-grotesk leading-[normal] text-d-fg scroll-mt-20"
    >
      {/* header */}
      <AnimateIn threshold={0.05} duration={900}>
        <div className="flex flex-wrap justify-between items-end gap-6 mb-7">
          <div className="flex flex-col gap-2.5">
            <span className="font-jbmono text-d-acc text-xs tracking-[0.08em]">
              02 / EXPERIENCE
            </span>
            <h2 className="m-0 font-bebas font-normal text-[clamp(56px,8vw,120px)] leading-[0.88]">
              Where I&apos;ve worked
            </h2>
          </div>
          <span className="max-w-80 font-jbmono text-d-mut2 text-xs min-[720px]:text-right tracking-[0.06em]">
            REAL USERS · REAL DEADLINES · A FOUNDER WHO SHIPS
          </span>
        </div>
      </AnimateIn>

      {/* job card */}
      <AnimateIn threshold={0.05} duration={900} delay={100}>
        <article
          className={`grid grid-cols-1 min-[860px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] bg-d-card border ${border} rounded-[28px] overflow-hidden`}
        >
          {/* left: role */}
          <div className="flex flex-col justify-between gap-6 min-[720px]:gap-8 bg-[radial-gradient(560px_380px_at_0%_0%,var(--d-glow),transparent_72%)] px-5 py-6 min-[720px]:p-[clamp(24px,3vw,40px)]">
            <div className="flex flex-wrap justify-between items-center gap-3 font-jbmono text-xs tracking-[0.06em]">
              <span className="text-d-acc">JUN 2022 — MAY 2023</span>
              <span className="px-2.5 py-1 border border-[rgb(var(--d-ink)/0.14)] rounded-full text-d-fg2">
                REMOTE · USA
              </span>
            </div>

            <div className="flex flex-col gap-3.5">
              <span className="font-jbmono text-d-mut2 text-xs tracking-[0.08em]">
                WEB3 · PORTFOLIO TRACKING
              </span>
              <h3 className="m-0 font-bebas font-normal text-[min(14vw,72px)] min-[720px]:text-[clamp(60px,6.6vw,108px)] leading-[0.86] whitespace-nowrap">
                MoonHoldings
              </h3>
              <span className="font-medium text-[clamp(18px,1.8vw,24px)] text-d-fg tracking-[-0.01em]">
                Full-Stack Developer
              </span>
              <p className="m-0 max-w-105 text-[15px] text-d-mut leading-[1.6] text-pretty">
                A US startup building a dashboard to track crypto wallets and
                portfolios. I worked directly with the founder and shipped it
                front to back.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 border border-[rgb(var(--d-ink)/0.12)] rounded-full font-jbmono text-[11px] text-d-fg2"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* right: what I shipped */}
          <div
            className={`flex flex-col justify-center border-t min-[860px]:border-t-0 min-[860px]:border-l ${border} px-3 pt-1 pb-2 min-[720px]:px-[clamp(20px,2.6vw,36px)] min-[720px]:py-[clamp(12px,2vw,24px)]`}
          >
            <span className="px-2 py-3 font-jbmono text-[11px] text-d-mut2 tracking-[0.08em]">
              WHAT I SHIPPED
            </span>
            {BULLETS.map((b, i) => (
              <AnimateIn
                key={b.num}
                from="left"
                threshold={0.2}
                duration={700}
                delay={200 + i * 80}
              >
                <div className="items-baseline gap-3 min-[720px]:gap-4.5 grid grid-cols-[auto_minmax(0,1fr)] hover:bg-[rgb(61_220_159/0.06)] px-2 hover:px-4.5 py-4 min-[720px]:py-4.5 border-[rgb(var(--d-ink)/0.09)] border-t rounded-sm transition-[padding,background-color] duration-350 ease-[cubic-bezier(.2,.8,.2,1)]">
                  <span className="font-jbmono text-d-acc text-xs">
                    {b.num}
                  </span>
                  <span className="text-[15px] min-[720px]:text-base leading-[1.55] text-pretty">
                    <span className="font-medium text-d-fg">{b.lead}</span>
                    <span className="text-d-mut">{b.rest}</span>
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </article>
      </AnimateIn>

      {/* stats */}
      <div className="gap-2.5 min-[720px]:gap-3.5 grid grid-cols-2 min-[1024px]:grid-cols-4 mt-2.5 min-[720px]:mt-3.5">
        {STATS.map((x, i) => (
          <AnimateIn
            key={x.label}
            className="[&>*]:h-full min-w-0"
            threshold={0.1}
            duration={800}
            delay={i * 90}
          >
            <div
              className={`flex flex-col justify-between gap-4.5 min-[720px]:gap-7 p-4.5 min-[720px]:p-7 border rounded-[22px] min-[720px]:rounded-[28px] min-h-37.5 min-[720px]:min-h-45 min-w-0 ${
                x.hot
                  ? "bg-d-acc border-d-acc text-d-on-acc"
                  : `bg-d-card ${border} text-d-fg`
              }`}
            >
              <span
                className={`font-jbmono text-[11px] min-[720px]:text-xs tracking-[0.08em] ${
                  x.hot ? "text-d-on-acc" : "text-d-mut2"
                }`}
              >
                {x.label}
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="font-bebas text-[clamp(28px,8.6vw,38px)] min-[720px]:text-[clamp(48px,4.6vw,68px)] leading-[0.9]">
                  {x.value}
                </span>
                <span
                  className={`text-[13px] min-[720px]:text-sm leading-[1.4] ${
                    x.hot ? "text-d-on-acc" : "text-d-mut"
                  }`}
                >
                  {x.note}
                </span>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
