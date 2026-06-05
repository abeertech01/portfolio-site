import Image from "next/image"
import avatar from "@/assets/abeer-avatar.png"
import TiltCard from "@/components/TiltCard"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <main className="flex flex-1 justify-center items-center pt-20 min-h-screen">
        {/* Hero group — card + text, centered together */}
        <div className="flex flex-col items-center gap-8">
          {/* Glass card */}
          <TiltCard className="relative w-62 md:w-77.5 h-80 md:h-100">
            <div className="absolute inset-0 shadow-[0_0_50px_rgba(35,148,125,0.14),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-[20px] border border-[rgba(35,148,125,0.6)] rounded-[22px] overflow-hidden">
              <Image
                src={avatar}
                alt="Abdul Ahad Abeer"
                fill
                className="object-[top_center] object-cover"
                priority
              />
              {/* Emerald tint overlay — gradient kept inline (verbose as a class) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(35,148,125,0.12) 0%, transparent 50%)",
                }}
              />
              {/* Top edge glow */}
              <div
                className="top-0 left-1/2 absolute w-3/5 h-px -translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(35,148,125,0.9), transparent)",
                }}
              />
            </div>
          </TiltCard>

          {/* Greeting */}
          <h1 className="text-center leading-[1.3]">
            <span className="block mb-3 md:mb-[0.4rem] font-grotesk font-semibold text-[1.5rem] text-white/60 md:text-[1.9rem]">
              Hey, I&apos;m
            </span>

            {/* Bebas Neue name on solid emerald background */}
            <span className="inline-block bg-[#23947d] p-[0.12em_0.3em_0.07em] md:p-[0.18em_0.5em_0.10em] font-bebas text-[2.5rem] text-white md:text-[3.2rem] leading-none tracking-[0.04em]">
              Abeer Abdul-Ahad
            </span>
          </h1>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-1.5 mt-2 animate-[float-y_2.2s_ease-in-out_infinite]">
            <span className="text-white/35 text-xs uppercase tracking-[0.12em]">
              Scroll to explore
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-white/35"
            >
              <path
                d="M7 1v12M7 13l-4-4M7 13l4-4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </main>

      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
