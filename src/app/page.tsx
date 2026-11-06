import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Work from "@/components/Work"
import Terminal from "@/components/Terminal"
import Writing from "@/components/Writing"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    // opaque backdrop so the global cursor glow only shows on the pages that
    // still use it (project detail), like the design's flat page background
    <div className="bg-d-bg">
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Work />
      <Terminal />
      <Writing />
      <Contact />
    </div>
  )
}
