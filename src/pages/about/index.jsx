import Image from "next/image"
import Link from "next/link"
import React from "react"

const About = () => {
  return (
    <div className="about container flex flex-col items-center pt-[14rem] pb-[10rem]">
      <div className="image w-[20rem] h-[21rem] rounded-lg overflow-hidden shadow-md shadow-gray-700 mb-10">
        <Image
          src={"/new-dp-2.jpg"}
          width={290}
          height={450}
          alt="my profile image"
          className="object-cover relative -top-[5rem] -left-[0.5rem] scale-110"
        />
      </div>
      <div className="write-up p-6 text-center text-[1.7rem]">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p>
          Hello, My name is Abdul Ahad (happy to be called 'Abeer'), a
          JavaScript Developer from Dhaka, Bangladesh 🇧🇩. I started coding in
          2017 with Java right after finishing my 12th grade exam. But I
          couldn't keep up with the complexity of Java and started exploring
          JavaScript and the web development world. It has been almost 5 years
          since I started exloring the web development and I am loving every bit
          of time with JavaScript. But for more than 2 years as of now I have
          done a lot of professional work. Since I have been in this field for
          quite a lot of time I have developed the sense of development and what
          works in the market and what not. <br />
          <br />
          Nowadays I am more focused on TypeScript and NextJS or overall the
          entire React-ecosystem. I am also focusing a lot on networking and my
          online presence. By the way, I am very much active on Twitter/X. You
          can follow me{" "}
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
