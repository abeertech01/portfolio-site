import Image from "next/image"
import Link from "next/link"
import React from "react"

const About = () => {
  return (
    <div className="about lg:min-h-full container mx-auto flex flex-col lg:grid lg:grid-cols-[auto_auto] lg:gap-[5rem] items-center pt-[14rem] lg:pt-0 pb-[10rem] lg:pb-0 ">
      <div className="image lg:order-2 w-[20rem] lg:w-[33rem] h-[21rem] lg:h-[39rem] rounded-lg shadow-md lg:shadow-lg shadow-gray-600 overflow-hidden mb-10 lg:mb-0">
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
          Hello, My name is Abdul Ahad (happy to be called 'Abeer'), a
          JavaScript Developer from Dhaka, Bangladesh 🇧🇩. I started coding in
          2017 with Java right after finishing my 12th grade exam. But I
          couldn't keep up with the complexity of Java and started exploring
          JavaScript and the web development world. It has been almost 5 years
          since I started exloring the web development and I am loving every bit
          of the time with JavaScript. But for more than 2 years as of now I
          have done a lot of professional work. Since I have been in this field
          for quite a long time I have developed the sense of web development
          and what works in the market and what not. <br />
          <br />
          Nowadays I am more focused on TypeScript and NextJS or overall the
          entire React-ecosystem. I am also focusing a lot on networking and my
          online presence. By the way, I am very much active on Twitter/X. You
          can follow me here{" "}
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