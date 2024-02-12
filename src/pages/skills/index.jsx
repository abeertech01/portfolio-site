import Card from "@/components/Card"
import React from "react"

const langauges = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "NodeJS(Runtime)",
  "SQL",
]
const technologies = [
  "ReactJS",
  "NextJS",
  "Redux",
  "Tailwind CSS",
  "ExpressJS",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
]
const tools = ["Git", "Github", "Figma", "Firebase", "Prisma", "VS Code"]

const Skills = () => {
  return (
    <div className="container mx-auto min-h-full py-[8rem] text-[2rem] px-[3rem] lg:px-0">
      <h1 className="text-[3rem] font-semibold text-center lg:text-left underline mt-[4rem] mb-[4rem]">
        Skills
      </h1>
      <div className="skills grid grid-rows-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-[3rem]">
        <Card
          image={"/PNGs/code2.png"}
          topic={"Programming Languages"}
          elements={langauges}
        />
        <Card
          image={"/PNGs/innovation.png"}
          topic={"Technologies"}
          elements={technologies}
        />
        <Card image={"/PNGs/tools.png"} topic={"Tools"} elements={tools} />
      </div>
    </div>
  )
}

export default Skills
