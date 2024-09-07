import { useRef, useEffect, useState } from "react"
import IntroSide from "./components/IntroSide"
import DetailSide from "./components/DetailSide"

function App() {
  const [presentTab, setPresentTab] = useState("")
  const cursorRef = useRef(null) // Initialize with null

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

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, []) // Empty dependency array to run only on mount/unmount

  const tabClick = (tab) => {
    setPresentTab(tab)
  }

  return (
    <div className="min-h-screen min-w-screen relative font-inter cursor-torch">
      <div className="lg:max-w-[110rem] lg:mx-auto px-[2rem] lg:px-0">
        <IntroSide tabClick={tabClick} />
        <DetailSide presentTab={presentTab} />
      </div>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="shadow-box"></div>{" "}
      {/* Use className instead of class */}
    </div>
  )
}

export default App
