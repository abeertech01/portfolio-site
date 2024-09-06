import React from "react"
import html from "../assets/images/techs/icons8-html.svg"
import css from "../assets/images/techs/icons8-css.svg"
import javascript from "../assets/images/techs/icons8-javascript.svg"
import typescript from "../assets/images/techs/icons8-typescript.svg"
import react from "../assets/images/techs/icons8-react.svg"
import node from "../assets/images/node.svg"
import graphql from "../assets/images/graphql.svg"
import avatar from "../assets/images/avatar.svg"

function IntroSide() {
  return (
    <div className="lg:fixed block lg:w-[47.3rem] lg:h-full h-auto lg:mb-0 mb-[9rem] lg:pt-[10rem] pt-[2rem]">
      <div className="relative border border-spacing-1 border-white lg:min-h-[13rem] min-h-[8rem] lg:rounded-xl rounded-lg lg:pt-[4rem] pt-[2.1rem] flex items-start justify-center mb-[8rem]">
        {/* Cover Photo type banner */}
        <div className="flex gap-[0.5rem] justify-center items-center lg:text-[2.3rem] text-[1.5rem] w-full text-white">
          <span>I code with</span>
          <img src={html} alt="" class="lg:h-[2.3rem] h-[1.4rem]" />
          <img src={css} alt="" class="lg:h-[2.3rem] h-[1.4rem]" />
          <img src={javascript} alt="" class="lg:h-[2.3rem] h-[1.4rem]" />
          <img src={typescript} alt="" class="lg:h-[2.3rem] h-[1.4rem]" />
          <img src={react} alt="" class="lg:h-[2.3rem] h-[1.4rem]" />
          <img src={node} alt="" class="lg:h-[2.3rem] h-[1.4rem]" />
          <img src={graphql} alt="" class="lg:h-[2.3rem] h-[1.4rem]" />
          <span>....</span>
        </div>

        {/* Name and Profession */}
        <div className="flex items-center bg-background absolute lg:-bottom-[6.5rem] -bottom-[3.7rem] left-[1rem] lg:p-[1rem] p-[0.5rem]">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full lg:h-[9rem] h-[5rem] relative mr-[1rem]"
          />
          <div className="text-white">
            <h1 className="lg:text-[3rem] text-[2rem] font-bold">
              Abdul Ahad Abeer
            </h1>
            <h2 className="lg:text-[2rem] text-[1.3rem] capitalize">
              full stack developer
            </h2>
          </div>
        </div>
      </div>

      {/* Little intro of what I do  */}
      <div className="text-[1.5rem] font-light mb-[5rem] text-grayish">
        I build pixel-perfect, engaging, and <br />
        fun digital products.
      </div>
    </div>
  )
}

export default IntroSide
