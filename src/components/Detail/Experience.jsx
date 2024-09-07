import React, { forwardRef } from "react"

const Experience = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      id="experience"
      className="experience tab text-grayish text-[1.4rem] lg:pt-[8rem] pt-[6rem]"
    >
      <h1 className="heading-name lg:hidden block text-[1.6rem] font-medium text-white uppercase tracking-wider py-8 bg-background">
        Experience
      </h1>
      <div className="freelancing lg:w-[54.5rem] lg:p-[2rem] lg:grid lg:grid-cols-[auto_70%] lg:gap-[1rem] text-grayish font-light lg:hover:bg-[#5fffd409] lg:hover:rounded-2xl lg:hover:border-t-[0.01rem] lg:hover:border-[#ffffff2a] lg:mb-0 mb-[3rem]">
        <h1 className="lg:font-normal">2022 JUN - 2023</h1>
        <div className="">
          <h1 className="font-normal text-white mb-[0.5rem]">
            MoonHoldingsXYZ・Full Stack Developer
          </h1>
          <div>
            I worked at MoonHoldings (moonholdings.xyz, a web3 startup)
            <span className="text-white font-normal">
              for a year, from June, 2022 to May, 2023.
            </span>
            <ul className="list-disc list-inside mb-[0.8rem]">
              <li>
                Developed at the front end and functionalities for better data
                visualization.
              </li>
              <li>
                Migrated the Client-side to Next.js for SSR and better SEO which
                improves the crawlability, page load times and indexing of web
                pages by up to 50% compared to CSR.
              </li>
            </ul>
          </div>
          <p className="flex flex-wrap gap-x-[0.8rem] gap-y-[0.6rem]">
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Vue & Pinia
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              NextJS 12
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              SASS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              NodeJS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              ExpressJS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Firebase
            </span>
          </p>
        </div>
      </div>
      <div className="freelancing lg:w-[54.5rem] lg:p-[2rem] lg:grid lg:grid-cols-[auto_70%] lg:gap-[3rem] text-grayish font-light lg:hover:bg-[#5fffd409] lg:hover:rounded-2xl lg:hover:border-t-[0.01rem] lg:hover:border-[#ffffff2a] lg:mb-0">
        <h1>2021 - 2022</h1>
        <div className="">
          <h1 className="font-normal text-white mb-[0.5rem]">
            Frontend Developer・Freelance Projects
          </h1>
          <p className="mb-[0.8rem]">
            Before Joining MoonHoldings, I used to work as a freelance developer
            from 2021 to 2022. During that time mostly I worked with Vue and
            Nuxt.js for development.
          </p>
          <p className="flex flex-wrap gap-x-[0.8rem] gap-y-[0.6rem]">
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Vue
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              NuxJS
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Pinia
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              React
            </span>
            <span className="text-[1.2rem] inline-block px-[1rem] py-[0.3rem] font-normal bg-[#41ffcc1e] text-[#41ffccc0] rounded-full">
              Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </div>
  )
})

export default Experience
