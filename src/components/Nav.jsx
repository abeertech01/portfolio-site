import React from "react"

// icons
import { FaHome, FaUserAlt, FaPaperPlane, FaUserTie } from "react-icons/fa"
import { AiFillProject, AiFillSetting } from "react-icons/ai"
import Link from "next/link"

// nav data
const navData = [
  {
    name: "home",
    path: "/",
    icon: <FaHome className="h-[3rem] lg:h-[1.8rem] w-[3rem] lg:w-[1.8rem]" />,
  },
  {
    name: "about",
    path: "/about",
    icon: (
      <FaUserAlt className="h-[3rem] lg:h-[1.8rem] w-[3rem] lg:w-[1.8rem]" />
    ),
  },
  {
    name: "skills",
    path: "/skills",
    icon: (
      <AiFillSetting className="h-[3rem] lg:h-[1.8rem] w-[3rem] lg:w-[1.8rem]" />
    ),
  },
  {
    name: "projects",
    path: "/projects",
    icon: (
      <AiFillProject className="h-[3rem] lg:h-[1.8rem] w-[3rem] lg:w-[1.8rem]" />
    ),
  },
  {
    name: "experience",
    path: "/experience",
    icon: (
      <FaUserTie className="h-[3rem] lg:h-[1.8rem] w-[3rem] lg:w-[1.8rem]" />
    ),
  },
  {
    name: "contact",
    path: "/contact",
    icon: (
      <FaPaperPlane className="h-[3rem] lg:h-[1.8rem] w-[3rem] lg:w-[1.8rem]" />
    ),
  },
]

const Nav = () => {
  return (
    <div className="fixed flex items-center bottom-0 right-0 lg:right-[2rem] left-0 lg:top-[50%] lg:-translate-y-[50%] lg:left-auto lg:bottom-auto px-[1.8rem] lg:py-[2rem] w-full lg:w-[4rem] h-[8rem] lg:h-auto bg-slate-600 lg:rounded-full z-50">
      <ul className="w-full h-full flex flex-row lg:flex-col items-center justify-between lg:gap-y-[2.5rem]">
        {navData.map((item) => (
          <li key={item.name} className="">
            <Link href={item.path} className="group w-full h-full">
              {/* tooltip */}
              <div className="absolute pr-14 right-[1rem] hidden lg:group-hover:flex ">
                <div className="bg-black relative flex text-primary items-center p-[6px] rounded-[3px] shadow-lg shadow-gray-800">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {item.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-black border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav

/**
 *
 */
