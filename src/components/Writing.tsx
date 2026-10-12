import AnimateIn from "@/components/AnimateIn"
import { posts } from "@/lib/posts"

export default function Writing() {
  return (
    <section
      id="writing"
      className="box-border mx-auto w-full max-w-[calc(1280px_+_2_*_clamp(16px,3vw,32px))] px-[clamp(16px,3vw,32px)] pb-[clamp(72px,10vw,140px)] font-grotesk leading-[normal] text-d-fg scroll-mt-20"
    >
      <AnimateIn threshold={0.05} duration={900}>
        <div className="flex flex-wrap justify-between items-end gap-5 mb-5">
          <div className="flex flex-col gap-2.5">
            <span className="font-jbmono text-d-acc text-xs tracking-[0.08em]">
              04 / WRITING
            </span>
            <h2 className="m-0 font-bebas font-normal text-[clamp(48px,6vw,88px)] leading-[0.9]">
              Featured by the platforms
            </h2>
          </div>
          <div className="flex gap-4.5 font-jbmono text-[13px]">
            <a
              href="https://abeer.hashnode.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="text-d-mut hover:text-d-acc transition-colors"
            >
              hashnode ↗
            </a>
            <a
              href="https://dev.to/abeertech01"
              target="_blank"
              rel="noreferrer noopener"
              className="text-d-mut hover:text-d-acc transition-colors"
            >
              dev.to ↗
            </a>
          </div>
        </div>
      </AnimateIn>

      <div className="flex flex-col">
        {posts.map((w, i) => (
          <AnimateIn key={w.url} threshold={0.2} delay={i * 80} duration={800}>
            <a
              href={w.url}
              target="_blank"
              rel="noreferrer noopener"
              className="items-center gap-x-4 gap-y-2 min-[720px]:gap-[clamp(16px,3vw,40px)] grid grid-cols-[minmax(0,1fr)_auto] min-[720px]:grid-cols-[auto_minmax(0,1fr)_auto] px-1 min-[720px]:px-2 py-5 min-[720px]:py-6.5 border-[rgb(var(--d-ink)/0.09)] border-t text-d-fg hover:text-d-fg transition-[padding,background-color] duration-350 ease-[cubic-bezier(.2,.8,.2,1)] hover:px-6 hover:bg-[rgb(61_220_159/0.06)]"
            >
              <span className="col-[1/-1] min-[720px]:col-auto min-w-30 font-jbmono text-xs text-d-mut2">
                {w.platform}{" "}
                {w.badge && <span className="text-d-acc">{w.badge}</span>}
              </span>
              <span className="font-medium text-[clamp(20px,2.4vw,30px)] leading-[1.2] tracking-[-0.015em] text-pretty">
                {w.title}
              </span>
              <span className="text-[26px] text-d-acc">↗</span>
            </a>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
