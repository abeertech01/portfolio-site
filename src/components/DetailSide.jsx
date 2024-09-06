import React from "react"
import js from "../assets/images/techs/js.svg"
import ts from "../assets/images/techs/ts.svg"
import react from "../assets/images/techs/icons8-react.svg"
import redux from "../assets/images/techs/icons8-redux.svg"
import nextjs from "../assets/images/techs/icons8-nextjs.svg"
import twcss from "../assets/images/techs/icons8-tailwind-css.svg"
import node from "../assets/images/techs/icons8-nodejs.svg"
import express from "../assets/images/techs/icons8-express-js.svg"
import graphql from "../assets/images/techs/icons8-graphql.svg"
import prisma from "../assets/images/techs/icons8-prisma-orm.svg"
import mongodb from "../assets/images/techs/icons8-mongodb.svg"
import postgres from "../assets/images/techs/icons8-postgresql.svg"
import firebase from "../assets/images/techs/icons8-firebase.svg"
import git from "../assets/images/techs/icons8-git.svg"

function DetailSide() {
  return (
    <div className="lg:grid lg:grid-cols-[43%_auto] lg:gap-[5rem]">
      <div className="lg:block hidden"></div>
      <div className="lg:flex lg:flex-col lg:items-end leading-relaxed tracking-wide text-[1.6rem]">
        {/* About */}
        <div
          id="about"
          className="about tab text-grayish lg:w-[54.5rem] lg:px-[2rem] font-roboto font-light lg:pt-[6rem] pt-[0rem]"
        >
          <h1 className="heading-name lg:hidden block text-[1.6rem] font-medium text-white uppercase tracking-wider py-8 bg-background">
            About
          </h1>
          <p className="mb-4">
            Hello, My name is
            <span className="text-white font-normal">Abdul Ahad</span> (you can
            call me '<span className="text-white font-normal">Abeer</span>'), a
            JavaScript based Full stack Developer from Dhaka, Bangladesh. Back
            in 2017, I started my coding journey with Java and Android while
            giving programming a try though I ended up loving JavaScript and
            making a career in web development.
          </p>
          <p className="mb-4">
            Since 2021, I have been working as a professional,
            <span className="text-white font-normal">
              including a significant experience working with{" "}
              <a
                href="https://x.com/leongaban"
                className="font-normal underline"
              >
                Leon Gaban
              </a>{" "}
              at his US-based Web3 startup.
            </span>
            .
          </p>
          <p className="mb-4">
            I believe in pursuing excellence, which is why I am honing my skills
            and hustling to make a significant impact on the projects I am
            working on.
          </p>
          <p>
            Nowawady, my focus is on all the React-ecosystem and MERN stack with
            TypeScript. I am also planning to get into React Native, Python
            development and looking forward to try out Rust. Now, Here is a
            brief list of the technologies that I am comfortable in:
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
              Node
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
              Prisma ORM
            </span>
            <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
              <img
                src={mongodb}
                alt=""
                className="h-[1.8rem] inline-block mr-[0.4rem]"
              />
              MongoDB
            </span>
            <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
              <img
                src={postgres}
                alt=""
                className="h-[1.8rem] inline-block mr-[0.4rem]"
              />
              PostgreSQL
            </span>
            <span className="flex items-center font-normal text-[1.5rem] px-[1rem] py-[0.4rem] bg-[#41ffcc1e]">
              <img
                src={firebase}
                alt=""
                className="h-[1.8rem] inline-block mr-[0.4rem]"
              />
              Firebase
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
      </div>
    </div>
  )
}

export default DetailSide
