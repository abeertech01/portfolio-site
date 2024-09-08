import React, { forwardRef } from "react"
import js from "../../assets/images/techs/js.svg"
import ts from "../../assets/images/techs/ts.svg"
import react from "../../assets/images/techs/icons8-react.svg"
import redux from "../../assets/images/techs/icons8-redux.svg"
import nextjs from "../../assets/images/techs/icons8-nextjs.svg"
import twcss from "../../assets/images/techs/icons8-tailwind-css.svg"
import node from "../../assets/images/techs/icons8-nodejs.svg"
import express from "../../assets/images/techs/icons8-express-js.svg"
import graphql from "../../assets/images/techs/icons8-graphql.svg"
import prisma from "../../assets/images/techs/icons8-prisma-orm.svg"
import git from "../../assets/images/techs/icons8-git.svg"

const About = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      id="about"
      className="about tab text-grayish lg:w-[54.5rem] lg:px-[2rem] font-roboto font-light lg:pt-[8rem] pt-[0rem]"
    >
      <h1 className="heading-name sticky top-0 lg:hidden block text-[1.6rem] font-medium text-white uppercase tracking-wider py-8 bg-background">
        About
      </h1>
      <p className="mb-4">
        Hi 👋, I am{" "}
        <span className="text-white font-normal">Abdul Ahad (Abeer)</span>, a
        JavaScript-based Full Stack Developer from Dhaka, Bangladesh. I started
        my coding journey in 2017 with Java and Android but later transitioned
        to JavaScript and web development.
      </p>
      <p className="mb-4">
        Since 2021, I have been working professionally, including experience
        with a US-based Web3 startup, MoonHoldings, Founded by Mr.{" "}
        <a
          href="https://x.com/leongaban"
          target="_blank"
          className="font-normal underline text-white"
        >
          Leon Gaban
        </a>
        . My current focus is on React-ecosystem, MERN stack, TypeScript, and
        Full stack Development. I am also interested in learning React Native,
        Python, and Rust.
      </p>

      <div className="mt-[2rem] flex flex-wrap gap-[0.8rem]">
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={js}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          JavaScript
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={ts}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          TypeScript
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={react}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          React
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={redux}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          Redux
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={nextjs}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          NextJS
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={twcss}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          Tailwind CSS
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={node}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          NodeJS
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={express}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          ExpressJS
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={graphql}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          GraphQL
        </span>
        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={prisma}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          Prisma
        </span>

        <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
          <img
            src={git}
            alt=""
            className="h-[1.8rem] inline-block mr-[0.4rem]"
          />
          Git
        </span>
      </div>
    </div>
  )
})

export default About
