import Image from "next/image"
import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const Carousel = ({ projectsData }) => {
  // Responsiveness
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  // The carousel items
  const projects = [
    ...projectsData.map((project) => (
      <div
        key={project.name}
        className="relative max-w-[30rem] lg:max-w-[33rem] h-[39rem] lg:h-[42rem] mx-auto rounded-xl p-[2rem] shadow-lg bg-gray-800 border-x-slate-600"
      >
        <div className="image h-[20rem] overflow-hidden rounded-md">
          <Image
            src={project?.image}
            width={320}
            height={280}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="info pt-[1rem] lg:pt-[2rem]">
          <h1 className="text-[1.8rem] lg:text-[2rem] font-semibold mb-[1rem]">
            {project?.name}
          </h1>
          <p className="text-[1.5rem] lg:text-[1.6rem] lg:leading-[2rem]">
            {project?.description}
          </p>
        </div>
        <div className="pt-[0.5rem] absolute bottom-[2rem] left-[2rem]">
          <button className="border-b border-b-[#4b9fff] py-2 mr-[1rem] text-[#4b9fff]">
            Live Website
          </button>
          <button className="border-b border-b-[#4b9fff] py-2 text-[#4b9fff]">
            Github Repo
          </button>
        </div>
      </div>
    )),
  ]
  return (
    <div className="">
      <AliceCarousel
        mouseTracking
        items={projects}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  )
}

export default Carousel
