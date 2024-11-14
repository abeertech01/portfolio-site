import React, { forwardRef, useContext } from "react"
import redbookImage from "../../assets/images/projects/redbook.png"
import meltingPotImage from "../../assets/images/projects/melting-pot.png"
import messengerImage from "../../assets/images/projects/messenger-clone.png"
import leetcodeImage from "../../assets/images/projects/leetcode-clone.png"
import vueDishesImage from "../../assets/images/projects/vue-dishes.png"
import { VideoContext } from "../../App"

const Projects = forwardRef((_, ref) => {
  const { isVideoOpen, setIsVideoOpen } = useContext(VideoContext)
  return (
    <div
      ref={ref}
      id="projects"
      className="projects tab text-grayish text-[1.4rem] pt-[8rem]"
    >
      <h1 className="heading-name sticky top-0 lg:hidden block text-[1.6rem] font-medium text-white uppercase tracking-wider py-8 bg-background">
        Projects
      </h1>

      {/* Redbook */}
      <div className="flex flex-col lg:w-[54.5rem] lg:p-[2rem] lg:grid lg:grid-cols-[auto_70%] lg:gap-[3rem] text-grayish font-light lg:hover:bg-[#5fffd409] lg:hover:rounded-2xl lg:hover:border-t-[0.01rem] lg:hover:border-[#ffffff2a] lg:mb-0 mb-[3.5rem]">
        <h1 className="lg:order-none order-2">
          <img
            src={redbookImage}
            alt="Redbook"
            className="lg:w-auto w-[22.5rem] border-2 lg:hover:border border-[#fdfdfd73] group-hover:border-[#41ffcc5e] rounded-lg lg:hover:scale-[250%] lg:hover:duration-300 lg:transition origin-top-left"
          />
        </h1>
        <div className="lg:order-none order-1 lg:mb-0 mb-[1.5rem]">
          <h1 className="font-normal text-[1.6rem] text-white mb-[0.5rem]">
            Redbook - Social Media App
            <p className="font-normal text-[1.2rem] text-white">
              My Champion Project - trying to put all the complexity.
            </p>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="text-[1.4rem] text-sky-400 hover:underline"
            >
              Watch the preview
            </button>
          </h1>
          <ul className="list-disc list-inside mb-1">
            <li>
              Redbook is my Champion project where I incorporate some of the
              coolest social media features.
            </li>
            <li>Redbook is kinda mixture of facebook and reddit.</li>
            <li>
              Redbook mostly resembles facebook and reddit. But I planned to add
              some different features too.
            </li>
            <li>
              The MVP contains Profile-Timeline, reddit-like posts and comments
              and Realtime Chatting.
            </li>
          </ul>
          <p className="mb-[0.8rem] text-white">
            Check out the{" "}
            <a
              target="_blank"
              href="https://github.com/abeertech01/redbook.git"
              className="text-sky-400 hover:underline font-semibold"
            >
              Redbook Github Repository
            </a>
          </p>
          <p className="flex flex-wrap gap-x-[0.8rem] gap-y-[0.6rem]">
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              TypeScript
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              React 18
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Tailwind CSS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Daisy UI
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              NodeJS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Prisma
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              PostgreSQL
            </span>
          </p>
        </div>
      </div>

      {/* Melting Pot Restaurant  */}
      <div className="flex flex-col lg:w-[54.5rem] lg:p-[2rem] lg:grid lg:grid-cols-[auto_70%] lg:gap-[3rem] text-grayish font-light lg:hover:bg-[#5fffd409] lg:hover:rounded-2xl lg:hover:border-t-[0.01rem] lg:hover:border-[#ffffff2a] lg:mb-0 mb-[3.5rem]">
        <h1 className="lg:order-none order-2">
          <img
            src={meltingPotImage}
            alt="Melting Pot"
            className="lg:w-auto w-[22.5rem] border-2 lg:hover:border border-[#fdfdfd73] group-hover:border-[#41ffcc5e] rounded-lg lg:hover:scale-[250%] lg:hover:duration-500 lg:transition origin-top-left"
          />
        </h1>
        <div className="lg:order-none order-1 lg:mb-0 mb-[1.5rem]">
          <h1 className="font-normal text-[1.6rem] text-white mb-[0.5rem]">
            <a
              href="https://melting-pot-restaurant.vercel.app/"
              target="_blank"
              className="flex items-center gap-[0.5rem]"
            >
              Melting Pot - Restaurant Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
            </a>
          </h1>
          <ul className="list-disc list-inside mb-[0.8rem]">
            <li>A kinda landing page developed with React.</li>
            <li>
              This website shows a certain degree of the my capability of
              animations.
            </li>
            <li>Incorporated some animation related libraries.</li>
          </ul>
          <p className="flex flex-wrap gap-x-[0.8rem] gap-y-[0.6rem]">
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              React
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Tailwind CSS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Animation
            </span>
          </p>
        </div>
      </div>

      {/* Messenger */}
      <div className="flex flex-col lg:w-[54.5rem] lg:p-[2rem] lg:grid lg:grid-cols-[auto_70%] lg:gap-[3rem] text-grayish font-light lg:hover:bg-[#5fffd409] lg:hover:rounded-2xl lg:hover:border-t-[0.01rem] lg:hover:border-[#ffffff2a] lg:mb-0 mb-[3.5rem]">
        <h1 className="lg:order-none order-2">
          <img
            src={messengerImage}
            alt="Messenger"
            className="lg:w-auto w-[22.5rem] border-2 lg:hover:border border-[#fdfdfd73] group-hover:border-[#41ffcc5e] rounded-lg lg:hover:scale-[250%] lg:hover:duration-500 lg:transition origin-top-left"
          />
        </h1>
        <div className="lg:order-none order-1 lg:mb-0 mb-[1.5rem]">
          <h1 className="font-normal text-[1.6rem] text-white mb-[0.5rem]">
            <a
              href="https://messenger-clone-teal.vercel.app"
              target="_blank"
              className="flex items-center gap-[0.5rem]"
            >
              Messenger Clone
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
            </a>
          </h1>
          <ul className="list-disc list-inside mb-[0.8rem]">
            <li>A replicate messenger app with NextJS 13.</li>
            <li>Authentication and realtime chatting with other users.</li>
            <li>PusherJS has been incorporated for realtime communication.</li>
          </ul>
          <p className="flex flex-wrap gap-x-[0.8rem] gap-y-[0.6rem]">
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              NextJS 13
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Tailwind CSS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Prisma
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              MongoDB
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Next Auth
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Pusher
            </span>
          </p>
        </div>
      </div>

      {/* Leetcode  */}
      <div className="flex flex-col lg:w-[54.5rem] lg:p-[2rem] lg:grid lg:grid-cols-[auto_70%] lg:gap-[3rem] text-grayish font-light lg:hover:bg-[#5fffd409] lg:hover:rounded-2xl lg:hover:border-t-[0.01rem] lg:hover:border-[#ffffff2a] lg:mb-0 mb-[3.5rem]">
        <h1 className="lg:order-none order-2">
          <img
            src={leetcodeImage}
            alt="LeetCode"
            className="lg:w-auto w-[22.5rem] border-2 lg:hover:border border-[#fdfdfd73] group-hover:border-[#41ffcc5e] rounded-lg lg:hover:scale-[250%] lg:hover:duration-500 lg:transition origin-top-left"
          />
        </h1>
        <div className="lg:order-none order-1 lg:mb-0 mb-[1.5rem]">
          <h1 className="font-normal text-[1.6rem] text-white mb-[0.5rem]">
            <a
              href="https://leetcode-clone-ebon.vercel.app"
              target="_blank"
              className="flex items-center gap-[0.5rem]"
            >
              Leetcode Clone
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
            </a>
          </h1>
          <ul className="list-disc list-inside mb-[0.8rem]">
            <li>
              I watched the leetcode clone video on freecodecamp's youtube
              channel, but deeply focused on functionalities.
            </li>
            <li>
              Authentication and code editor incorporated for solving coding
              problems for every user.
            </li>
          </ul>
          <p className="flex flex-wrap gap-x-[0.8rem] gap-y-[0.6rem]">
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              NextJS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Tailwind CSS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Firebase
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:w-[54.5rem] lg:p-[2rem] lg:grid lg:grid-cols-[auto_70%] lg:gap-[3rem] text-grayish font-light lg:hover:bg-[#5fffd409] lg:hover:rounded-2xl lg:hover:border-t-[0.01rem] lg:hover:border-[#ffffff2a] lg:mb-0 mb-[3.5rem]">
        <h1 className="lg:order-none order-2">
          <img
            src={vueDishesImage}
            alt="Vue Dishes"
            className="lg:w-auto w-[22.5rem] border-2 lg:hover:border border-[#fdfdfd73] group-hover:border-[#41ffcc5e] rounded-lg lg:hover:scale-[250%] lg:hover:duration-500 lg:transition origin-top-left"
          />
        </h1>
        <div className="lg:order-none order-1 lg:mb-0 mb-[1.5rem]">
          <h1 className="font-normal text-[1.6rem] text-white mb-[0.5rem]">
            <a
              href="https://vue-dishes.web.app"
              target="_blank"
              className="flex items-center gap-[0.5rem]"
            >
              Vue Dishes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
            </a>
          </h1>
          <ul className="list-disc list-inside mb-[0.8rem]">
            <li>
              Searching, bookmarking dishes and measuring ingredients according
              to the number of guests.
            </li>
            <span className="font-normal text-white">
              <li>
                This API is created by Jonas Schmadtmann, he built it for his
                'The complete JavaScript Course' on Udemy
              </li>
            </span>
            <li>I learned to play with APIs with this project.</li>
          </ul>
          <p className="flex flex-wrap gap-x-[0.8rem] gap-y-[0.6rem]">
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Vue
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Vuex
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              REST API
            </span>
          </p>
        </div>
      </div>
    </div>
  )
})

export default Projects
