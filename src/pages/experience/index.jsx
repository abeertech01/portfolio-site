import Image from "next/image"
import Link from "next/link"
import React from "react"

const Experience = () => {
  return (
    <div className="min-h-full container mx-auto pt-[12rem] pb-[10rem]">
      <h1 className="text-[3rem] font-semibold text-center lg:text-left mb-[3rem] lg:mb-[6rem] underline">
        Experience
      </h1>
      <div className="content mx-[1.5rem] lg:mx-0">
        <div className="moonholding flex flex-col lg:grid lg:grid-cols-[auto_auto] lg:gap-[4rem] gap-6 mb-[8rem] lg:mb-[15rem] rounded-lg">
          <div className="image overflow-hidden w-[29rem] lg:w-[54rem] h-[20rem] lg:h-[36rem] border border-gray-700 rounded-xl">
            <Image
              src={"/moonholdings.png"}
              width={500}
              height={500}
              alt="moonholdings ss"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="info lg:flex lg:flex-col justify-center">
            <h1 className="text-[2.5rem] lg:text-[3.5] font-medium lg:font-semibold lg:mb-[1.5rem]">
              MoonHoldings
            </h1>
            <p className="text-[1.6rem]">
              I worked at MoonHoldings(
              <Link
                href={"https://moonholdings.xyz"}
                target="_blank"
                className="underline text-[#7cc0ff]"
              >
                moonholdings.xyz
              </Link>
              , a web3 startup) for a year, from June, 2022 to May, 2023. During
              that time, I was a Full-time Fullstack JavaScript Developer. My
              main focus was on building both the client site, which is what
              users see and interact with, as well as the backend, which is the
              behind-the-scenes functionalities for serving the data of the
              website. I played a significant role in the team, contributing to
              the development of both these aspects. <br />
              <br />
              In terms of the technologies I used, my stack included: <br />
              <br />
              1. Vue and Pinia
              <br />
              2. React and Next.js 12
              <br />
              3. Redux Toolkit for state management
              <br />
              4. Node.js and Express.js
              <br />
              5. Firebase Firestore as Database
            </p>
          </div>
        </div>

        <div className="freelance flex flex-col lg:grid lg:grid-cols-[auto_auto] lg:gap-[4rem] gap-6 mb-[8rem]">
          <div className="image lg:order-2 overflow-hidden w-[29rem] lg:w-[54rem] h-[20rem] lg:h-[36rem] border border-gray-700 rounded-xl">
            <Image
              src={"/freelance-pic.jpg"}
              width={500}
              height={500}
              alt="freelance-pic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="info lg:order-1 lg:flex lg:flex-col justify-center">
            <h1 className="text-[2.5rem] font-medium lg:text-[3.5] lg:font-semibold lg:mb-[1.5rem]">
              Freelance Work
            </h1>
            <p className="text-[1.6rem]">
              Before Joining MoonHoldings, I used to work as a freelance
              developer. Usually I used to post on discord for hire and I got to
              have some of the projects from different clients. <br /> <br />
              At that time mostly I used Vue and Nuxt.js for development
              although I am mostly focused on React, Next.js and Overall
              React&apos;s ecosystem at present. <br />
              <br /> I worked as a freelance developer from 2021 to 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
