import { Inter, Sacramento, Rampart_One, Fira_Code } from "next/font/google"
import { twMerge } from "tailwind-merge"

import ProjectsBtn from "@/components/ProjectsBtn"
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"

// framer motion
import { motion } from "framer-motion"

// variants
import { fadeIn } from "../variants"

const sacramento = Sacramento({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

const rampart_one = Rampart_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

const fira_code = Fira_Code({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
})

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="relative w-full h-full flex flex-col justify-center container mx-auto">
      <div className="hidden lg:block absolute -right-[6rem] mix-blend-screen">
        <Image
          src={"/man-coding.svg"}
          width={550}
          height={480}
          alt="man coding"
        />
      </div>
      {/* Intro */}
      <div className="-translate-y-[25%] lg:-translate-y-[5%] flex flex-col items-center lg:items-start">
        {/* html */}
        <div
          className={twMerge(
            sacramento.className,
            "body-tag relative -top-5 -left-12"
          )}
        >
          {"<body>"}
        </div>

        {/* Greeting */}
        <div className="relative text-[4.5rem] lg:text-[5.5rem] font-bold">
          <span
            className={twMerge(
              sacramento.className,
              "h1-tag absolute -top-[1.2rem]"
            )}
          >
            {"<h1> "}
          </span>
          Hi, I&apos;m{" "}
          <span
            className={twMerge(
              rampart_one.className,
              "name-gradient text-[4.5rem] lg:text-[6rem]"
            )}
          >
            Abeer
          </span>
        </div>

        {/* Profession */}
        <div className="relative text-[4.5rem] lg:text-[5.5rem] font-bold web-dev-gradient leading-[4.8rem] lg:leading-[5.3rem] mb-[3rem]">
          Web Developer
          <span
            className={twMerge(
              sacramento.className,
              "h1-tag absolute -right-[6rem] -bottom-[1.5rem]"
            )}
          >
            {" </h1>"}
          </span>
        </div>

        {/* Sub title */}
        <div
          className={twMerge(
            fira_code.className,
            "text-center lg:text-left text-[1.7rem] lg:text-[2rem] text-gray-400 mb-2"
          )}
        >
          JavaScript Enthusiast • MERN stack • Next.js Expert
        </div>

        <div>
          <Link
            href={"https://abeer.hashnode.dev"}
            target="_blank"
            className={twMerge(
              "blog-btn text-[1.7rem] border-b text-gray-400 py-2"
            )}
          >
            Visit My Blog <BsArrowRight className="inline-block" />
          </Link>
        </div>

        {/* closing html */}
        <div
          className={twMerge(
            sacramento.className,
            "body-tag relative -bottom-5 -left-12"
          )}
        >
          {"</body>"}
        </div>
      </div>

      <div className="absolute bottom-[25%] lg:bottom-[20%] translate-y-[50%] left-[50%] lg:left-0 -translate-x-[50%] lg:translate-x-0 flex justify-center">
        <ProjectsBtn />
      </div>
    </main>
  )
}
