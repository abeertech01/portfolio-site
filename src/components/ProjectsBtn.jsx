import React from "react"
import Image from "next/image"
import Link from "next/link"

const ProjectsBtn = () => {
  return (
    <div>
      <Link
        href={"/projects"}
        className="relative w-[16.5rem] h-[16.5rem] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat"
      >
        <Image
          src={"/PNGs/rounded-text.png"}
          width={128}
          height={135}
          alt="rounded-text"
          className="animate-spin-slow"
        />
        <Image
          src={"/click-icon.png"}
          width={50}
          height={50}
          alt="click-icon"
          className="w-[5rem] h-[5rem] absolute"
        />
      </Link>
    </div>
  )
}

export default ProjectsBtn
