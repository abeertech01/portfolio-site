import Image from "next/image"
import cafe from "@/assets/abeer-cafe.webp"
import AnimateIn from "@/components/AnimateIn"
import DhakaClock from "@/components/DhakaClock"

export default function About() {
  return (
    <section
      id="about"
      className="box-content mx-auto px-[clamp(16px,3vw,32px)] py-[clamp(72px,10vw,140px)] max-w-7xl font-grotesk leading-[normal] text-d-fg"
    >
      <div className="gap-3.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {/* photo */}
        <AnimateIn
          className="min-[720px]:row-span-2 [&>*]:h-full"
          duration={900}
        >
          <div className="group relative bg-[#1b2b26] rounded-[28px] min-h-110 min-[720px]:min-h-130 overflow-hidden">
            <Image
              src={cafe}
              alt="Abeer at a café"
              fill
              sizes="(max-width: 720px) 100vw, 420px"
              className="object-cover object-[50%_30%] saturate-[1.08] contrast-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-between items-end gap-3 bg-linear-to-t from-[rgba(10,14,13,0.92)] to-transparent p-5.5">
              <span className="font-bebas text-[34px] text-[#ecf2ef] leading-none">
                OFF THE CLOCK
              </span>
              <span className="font-jbmono text-[11px] text-[#c9d4d0] text-right">
                DHAKA, AFTER HOURS
              </span>
            </div>
          </div>
        </AnimateIn>

        {/* about */}
        <AnimateIn
          className="min-[720px]:col-span-2 [&>*]:h-full"
          delay={90}
          duration={900}
        >
          <div className="flex flex-col justify-between gap-5.5 bg-d-card p-[clamp(24px,3vw,40px)] border border-[rgb(var(--d-ink)/0.07)] rounded-[28px]">
            <span className="font-jbmono text-d-acc text-xs tracking-[0.08em]">
              01 / ABOUT
            </span>
            <p className="m-0 font-medium text-[clamp(26px,3vw,42px)] leading-[1.15] tracking-[-0.02em] text-pretty">
              A hustler at heart. I track where the industry is moving and{" "}
              <span className="text-d-acc">build my own products</span> along
              the way.
            </p>
            <p className="m-0 max-w-160 text-d-mut text-base leading-[1.65] text-pretty">
              There was a period where things went quiet for me, professionally
              and personally. I&apos;m not hiding from that. I&apos;m coming
              back stronger, being intentional about it, and sharing the
              journey openly.
            </p>
          </div>
        </AnimateIn>

        {/* what I do */}
        <AnimateIn className="[&>*]:h-full" delay={180} duration={900}>
          <div className="flex flex-col justify-between gap-7 bg-d-acc p-7 rounded-[28px] min-h-69.5 text-d-on-acc">
            <span className="font-jbmono text-xs tracking-[0.08em]">
              WHAT I DO
            </span>
            <div className="flex flex-col gap-1.5 font-bebas text-[clamp(34px,3.4vw,46px)] leading-[0.95]">
              <span>Web apps</span>
              <span>APIs &amp; data</span>
              <span>AI + automation</span>
            </div>
          </div>
        </AnimateIn>

        {/* local time */}
        <AnimateIn className="[&>*]:h-full" delay={270} duration={900}>
          <div className="flex flex-col justify-between gap-7 bg-d-card p-7 border border-[rgb(var(--d-ink)/0.07)] rounded-[28px] min-h-69.5">
            <span className="font-jbmono text-d-mut2 text-xs tracking-[0.08em]">
              LOCAL TIME · DHAKA
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-bebas text-[clamp(52px,5vw,72px)] text-d-fg leading-[0.9]">
                <DhakaClock format="short" placeholder="--:-- --" />
              </span>
              <span className="text-d-mut text-sm">
                Remote worldwide. I usually reply within 24 hours.
              </span>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
