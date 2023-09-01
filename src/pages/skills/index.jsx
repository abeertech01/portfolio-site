import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

const Skills = () => {
  return (
    <div className="container mx-auto min-h-full py-[10rem] text-[2rem] px-[3rem] lg:px-0">
      <h1 className="text-[3rem] font-semibold text-center lg:text-left underline mt-[4rem] mb-[4rem]">
        Skills
      </h1>
      <div className="skills flex flex-col lg:flex-row justify-start lg:justify-between gap-[10rem]">
        <div className="language">
          <Image
            src={"/PNGs/programming.png"}
            width={300}
            height={300}
            alt="programming"
            className="w-[17rem] h-[17rem] mb-[3rem]"
          />
          <h1 className="text-[3.5rem] font-semibold mb-4">Language</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="technology">
          <Image
            src={"/PNGs/technology.png"}
            width={300}
            height={300}
            alt="technology"
            className="w-[17rem] h-[17rem] mb-[3rem]"
          />
          <h1 className="text-[3.5rem] font-semibold mb-4">Technology</h1>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Zustand</li>
            <li>Vue</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="tools">
          <Image
            src={"/PNGs/tools.png"}
            width={300}
            height={300}
            alt="programming tools"
            className="w-[17rem] h-[17rem] mb-[3rem]"
          />
          <h1 className="text-[3.5rem] font-semibold mb-4">Tools</h1>
          <ul>
            <li>VS Code</li>
            <li>Git</li>
            <li>Github</li>
            <li>Firebase</li>
            <li>Prisma</li>
          </ul>
        </div>
      </div>
      <div className="mt-[2rem]">
        <Link href={"/projects"} className="border-b">
          What I built <BsArrowRight className="inline-block" />
        </Link>
      </div>
    </div>
  )
}

export default Skills
