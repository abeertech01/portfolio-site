import React from "react"
import avatar from "../assets/images/avatar.svg"
import blogPosts from "../assets/blogPosts"

function IntroSide({ tabClick, activeTab }) {
  return (
    <div className="lg:fixed lg:flex lg:flex-col lg:justify-between block lg:w-[47.3rem] lg:h-full h-auto lg:pt-[7rem] pt-[2rem] lg:mb-0 mb-[9rem]">
      <div className="flex flex-col gap-[3rem] mb-[4rem] lg:mb-0">
        {/* Name and Profession */}
        <div className="flex items-center">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full lg:h-[9rem] h-[6.5rem] relative mr-[1rem]"
          />
          <div className="text-white">
            <h1 className="lg:text-[3rem] text-[2.5rem] font-bold">
              Abdul Ahad Abeer
            </h1>
            <h2 className="lg:text-[2rem] text-[1.5rem] capitalize">
              full stack developer
            </h2>
          </div>
        </div>

        {/* Little intro of what I do  */}
        <div className="lg:w-5/6 text-[1.5rem] font-light text-grayish">
          I build pixel-perfect, engaging, and fun digital products that lets
          you live and breath better.
        </div>
      </div>

      {/* Tabs */}
      <div className="hidden tabs text-grayish text-[1.6rem] font-inter tracking-wider font-medium lg:flex lg:flex-col lg:items-start gap-[0.7rem]">
        <button
          onClick={() => tabClick("about")}
          className={`about tab-btn flex items-center gap-[2rem] group ${
            activeTab === "about" ? "active" : ""
          }`}
        >
          <div className="h-[0.1rem] w-[3rem] inline-block bg-grayish group-hover:w-[7rem] group-hover:h-[0.2rem] group-hover:text-white duration-200"></div>
          <span className="group-hover:text-white">About</span>
        </button>
        <button
          onClick={() => tabClick("experience")}
          className={`experience tab-btn flex items-center gap-[2rem] group ${
            activeTab === "experience" ? "active" : ""
          }`}
        >
          <div className="h-[0.1rem] w-[3rem] inline-block bg-grayish group-hover:w-[7rem] group-hover:h-[0.2rem] group-hover:text-white duration-200"></div>
          <span className="group-hover:text-white">Experience</span>
        </button>
        <button
          onClick={() => tabClick("projects")}
          className={`projects tab-btn flex items-center gap-[2rem] group ${
            activeTab === "projects" ? "active" : ""
          }`}
        >
          <div className="h-[0.1rem] w-[3rem] inline-block bg-grayish group-hover:w-[7rem] group-hover:h-[0.2rem] group-hover:text-white duration-200"></div>
          <span className="group-hover:text-white">Projects</span>
        </button>
      </div>

      <div className="text-grayish text-[1.4rem] mb-[5rem] lg:mb-0">
        <h1 className="text-[1.4rem] font-medium mb-6">
          <a
            href="https://abeer.hashnode.dev"
            target="_blank"
            className="font-normal underline"
          >
            Check out My Insightful & Well-tuned Blog
          </a>
        </h1>

        <ul className="lg:w-5/6 relative -left-2 lg:-left-4">
          {blogPosts.map((post, index) => (
            <li
              key={index}
              className="mb-4 bg-[#5fffd409] rounded-xl border-t-[0.01rem] border-[#ffffff2a]"
            >
              <a href={post.link} target="_blank" className="w-full h-full">
                <div className="flex gap-4 p-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-48 h-28 bg-cover rounded-md border border-spacing-2 border-[#eeeeee40]"
                  />
                  <div className="flex flex-col justify-between">
                    <h3 className="font-medium line-clamp-1 text-white text-[1.5rem]">
                      {post.title}
                    </h3>
                    <div className="line-clamp-2 text-[1.3rem]">
                      {post.preview}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social network links */}
      <div className="text-grayish mb-[3.5vh]">
        <div className="flex gap-[1.5rem]">
          {/* Github  */}
          <a href="https://github.com/abeertech01" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-github lg:w-[2.3rem] lg:h-[2.3rem]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          {/* Linkedin */}
          <a href="https://linkedin.com/in/abeertech01" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-linkedin lg:w-[2.3rem] lg:h-[2.3rem]"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          {/* X  */}
          <a href="https://x.com/abeertech01" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-twitter-x lg:w-[2.3rem] lg:h-[2.3rem]"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </a>
          {/* Facebook  */}
          <a href="https://facebook.com/abeertech01" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-facebook lg:w-[2.3rem] lg:h-[2.3rem]"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IntroSide
