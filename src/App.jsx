import { useRef, useEffect, useState } from "react"
import IntroSide from "./components/IntroSide"
import DetailSide from "./components/DetailSide"

function App() {
  const [presentTab, setPresentTab] = useState("")
  const [activeTab, setActiveTab] = useState("about")
  const cursorRef = useRef(null) // Initialize with null

  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  // Check scroll position and activate corresponding tab
  const checkScrollPosition = () => {
    const scrollPosition = window.scrollY
    const sections = [
      { ref: aboutRef, name: "about" },
      { ref: experienceRef, name: "experience" },
      { ref: projectsRef, name: "projects" },
    ]

    sections.forEach(({ ref, name }, i) => {
      const tabTop = ref.current.offsetTop
      const tabBottom = tabTop + ref.current.clientHeight

      if (scrollPosition >= tabTop - 100 && scrollPosition <= tabBottom - 100) {
        setActiveTab(name)
      }
    })
  }

  useEffect(() => {
    if (presentTab === "about") {
      scrollToSection(aboutRef)
    } else if (presentTab === "experience") {
      scrollToSection(experienceRef)
    } else if (presentTab === "projects") {
      scrollToSection(projectsRef)
    }
  }, [presentTab])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.top = y + "px"
        cursorRef.current.style.left = x + "px"
        cursorRef.current.style.display = "block"
      }
    }

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = "none"
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseout", handleMouseOut)

    window.addEventListener("scroll", checkScrollPosition)

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)

      window.removeEventListener("scroll", checkScrollPosition)
    }
  }, []) // Empty dependency array to run only on mount/unmount

  const tabClick = (tab) => {
    setPresentTab(tab)
  }

  return (
    <div className="min-h-screen min-w-screen relative font-inter cursor-torch">
      <div className="lg:max-w-[110rem] lg:mx-auto px-[2rem] lg:px-0">
        <IntroSide tabClick={tabClick} activeTab={activeTab} />
        <DetailSide
          presentTab={presentTab}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
        />
      </div>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="shadow-box"></div>{" "}
      {/* Use className instead of class */}
    </div>
  )
}

export default App
