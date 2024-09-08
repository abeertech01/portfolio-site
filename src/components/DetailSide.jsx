import React from "react"
import About from "./Detail/About"
import Experience from "./Detail/Experience"
import Projects from "./Detail/Projects"

function DetailSide({ aboutRef, experienceRef, projectsRef }) {
  return (
    <div className="lg:grid lg:grid-cols-[43%_auto] lg:gap-[5rem]">
      <div className="lg:block hidden"></div>
      <div className="lg:flex lg:flex-col lg:items-end leading-relaxed tracking-wide text-[1.6rem]">
        {/* About */}
        <About ref={aboutRef} />

        {/* Exxperience */}
        <Experience ref={experienceRef} />

        {/* Projects */}
        <Projects ref={projectsRef} />

        {/* About this project */}
        <div className="about-site text-grayish text-[1.4rem] mb-[3.5vh] lg:w-[54.5rem] lg:pt-[9rem] pt-[6rem]">
          Developed with React, HTML and Tailwind CSS with Vite.
        </div>
      </div>
    </div>
  )
}

export default DetailSide
