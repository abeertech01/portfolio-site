import Image from "next/image"
import Link from "next/link"
import React from "react"

const About = () => {
  return (
    <div className="about lg:min-h-full container mx-auto flex flex-col lg:grid lg:grid-cols-[auto_auto] lg:gap-[5rem] items-center pt-[14rem] lg:pt-0 pb-[10rem] lg:pb-0 ">
      <div className="image lg:order-2 w-[20rem] lg:w-[33rem] h-[21rem] lg:h-[39rem] rounded-lg shadow-md lg:shadow-lg shadow-gray-600 overflow-hidden mb-10 lg:mb-0 hover:scale-105 hover:origin-center hover:rotate-6 duration-300">
        <Image
          src={"/new-dp-2.jpg"}
          width={440}
          height={550}
          alt="my profile image"
          className="object-cover relative -top-[5rem] -left-[0.8rem] scale-110"
        />
      </div>
      <div className="write-up lg:order-1 p-6 lg:p-0 text-center lg:text-left text-[1.9rem]">
        <h1 className="text-[3rem] lg:text-[5rem] font-bold mb-4 lg:mb-6">
          About Me
        </h1>
        <p>
          Hello, My name is Abdul Ahad (you can call me &apos;Abeer&apos;), a
          JavaScript Developer from Dhaka, Bangladesh 🇧🇩. I started coding in
          2017 with Java to explore programming in general. After spending some
          time with Java and Android Development I got interest in web
          development while exploring the JavaScript World. Since 2021, I am
          working as a professional JavaScript Developer. I started coding with
          Vue framework but ended up loving the React Realm and MERN stack.{" "}
          <br />
          <br />I have worked on some freelance projects in 2021. From 2022,{" "}
          <span className="text-yellow-300">
            I started working at a startup called MoonHoldings, founded by{" "}
            <Link
              href={"https://x.com/leongaban"}
              target="_blank"
              className="underline text-[#7cc0ff]"
            >
              Leon Gaban
            </Link>
            . I handled the Frontend with Vue and NextJS, Backend with ExpressJS
            and Firebase mostly.
          </span>{" "}
          I worked at the startup for a year and it was a great experience.
          <br />
          <br />
          Nowadays I am more focused on TypeScript and NextJS or overall the
          entire React-ecosystem. I am also focusing a lot on networking and my
          online presence. By the way, I am trying to be regularly active on
          Twitter/X. You can follow me here{" "}
          <Link
            href={"https://x.com/abeertech01"}
            target="_blank"
            className="underline text-[#7cc0ff]"
          >
            X@abeertech01
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default About
