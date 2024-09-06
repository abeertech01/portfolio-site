import { useRef } from "react"
import IntroSide from "./components/IntroSide"
import DetailSide from "./components/DetailSide"

function App() {
  const cursorRef = useRef(null)

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX
    const y = e.clientY

    cursorRef.current.style.top = y + "px"
    cursorRef.current.style.left = x + "px"
    cursorRef.current.style.display = "block"
  })

  window.addEventListener("mouseout", () => {
    cursorRef.current.style.display = "none"
  })

  return (
    <div className="min-h-screen min-w-screen relative font-inter cursor-torch">
      <div className="lg:max-w-[110rem] lg:mx-auto px-[2rem] lg:px-0">
        <IntroSide />
        <DetailSide />
      </div>
      {/* Custom Cursor */}
      <div ref={cursorRef} class="shadow-box"></div>
    </div>
  )
}

export default App
