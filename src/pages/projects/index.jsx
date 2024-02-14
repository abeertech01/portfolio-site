import Carousel from "@/components/Carousel"
import React from "react"

const projectsData = [
  {
    name: "Friendsbook (Facebook Clone)",
    description:
      "Facebook Clone App named Friendsbook is being developed with ReactJS, NoodeJS, Apollo GraphQL, Prisma, PostgreSQL etc.",
    image: "/project-images/friendsbook.png",
    link: "#",
    github: "https://github.com/abeertech01/friendsbook-client",
    tech_stack: [
      "ReactJS",
      "Tailwind CSS",
      "TypeScript",
      "ExpressJS",
      "Prisma",
      "Apollo GraphQL",
      "PostgreSQL",
      "Redis",
    ],
  },
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
    name: "Responsive Portfolio",
    description:
      "This is a responsive portfolio project which has modern animations",
    image: "/project-images/ethan-smith-portfolio.png",
    link: "https://next-tw-framer-portfolio.vercel.app/",
    github: "https://github.com/abeertech01/next-tw-framer-portfolio",
    tech_stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Responsive And Animated Portfolio",
    description:
      "This is a responsive portfolio project which has modern and cool animations. This is under development",
    image: "/project-images/responsive-animated-portfolio.png",
    link: "https://responsive-animated-portfolio.vercel.app/",
    github: "https://github.com/abeertech01/responsive-animated-portfolio",
    tech_stack: ["Next.js", "CSS", "SASS", "Framer Motion"],
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
