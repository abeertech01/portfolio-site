import Carousel from "@/components/Carousel"
import React from "react"

const projectsData = [
  {
    name: "Messenger Clone",
    description:
      "Facebook's Messenger Clone App made with Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth and Pusher. It's under development",
    image: "/project-images/messenger-clone.png",
    link: "https://messenger-clone-teal.vercel.app",
    github: "https://github.com/abeertech01/messenger-clone",
    tech_stack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Pusher",
    ],
  },
  {
    name: "Leetcode Clone",
    description:
      "LeetCode Clone App made with Next JS, TypeScript, Tailwind CSS and Firebase",
    image: "/project-images/leetcode-clone.png",
    link: "https://leetcode-clone-ebon.vercel.app/",
    github: "https://github.com/abeertech01/leetcode-clone",
    tech_stack: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
  },
  {
    name: "Vue Dishes",
    description:
      "Vue Dishes is a showcase project that I made with Vue Ecosystem",
    image: "/project-images/vue-dishes.png",
    link: "https://vue-dishes.web.app/",
    github: "https://github.com/abeertech01/vue-dishes",
    tech_stack: ["Vue", "JavaScript", "API"],
  },
  {
    name: "Vue Blog",
    description: "Vue Blog is made with Vue and Firebase",
    image: "/project-images/vue-blog.png",
    link: "https://vueblogs-abeer.web.app/",
    github: "https://github.com/abeertech01/vue-blogs",
    tech_stack: ["Vue", "JavaScript", "Firebase"],
  },
]

const Projects = () => {
  return (
    <div className="container mx-auto w-[38rem] lg:w-full min-h-full flex flex-col justify-center py-[10rem]">
      <h1 className="text-[3rem] mb-[1rem] text-center font-semibold underline">
        Projects
      </h1>
      <p className="mb-[3rem] text-[1.7rem] lg:text-[1.9rem] lg:text-center">
        These are some of the projects I built in my free time.
      </p>
      <Carousel projectsData={projectsData} />
    </div>
  )
}

export default Projects
