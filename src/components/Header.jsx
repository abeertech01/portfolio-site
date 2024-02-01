import Image from "next/image"
import Link from "next/link"
import React from "react"
import { twMerge } from "tailwind-merge"

const socials = [
  {
    name: "twitter",
    path: "/socials/twitter-white.png",
    url: "https://x.com/abeertech01",
  },
  {
    name: "linkedin",
    path: "/socials/linkedin-white.png",
    url: "https://linkedin.com/in/abeertech01",
  },
  {
    name: "github",
    path: "/socials/github-white.png",
    url: "https://github.com/abeertech01",
  },
  {
    name: "youtube",
    path: "/socials/youtube-white.png",
    url: "https://youtube.com/@abeercodes",
  },
]

const Header = () => {
  return (
    <div className="fixed flex flex-col lg:flex-row justify-between items-center right-0 top-0 left-0 p-[1.8rem] lg:px-0 lg:py-[2rem] container mx-auto bg-inherit z-50">
      <div className="lg:block hidden absolute left-[50%] -translate-x-[50%] text-[1.7rem]">
        <p>This website is under construction</p>
      </div>

      <div className="mb-2">
        <Link href={"/"} className="text-[3rem]">
          <span className="font-bold mr-[1rem]">Abeer</span>
          <span className="font-extralight">Abdul Ahad</span>
        </Link>
      </div>

      {/* Socials */}
      <div className="">
        <ul className="flex items-center gap-[2rem]">
          {socials.map((item) => (
            <li key={item.name}>
              <Link href={item.url} target="_blank">
                <Image
                  src={item.path}
                  width={32}
                  height={32}
                  alt="social"
                  className={twMerge(
                    "w-[2rem] h-[2rem]",
                    item.name === "youtube" &&
                      "h-[3rem] w-auto relative -bottom-[0.5rem]"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
