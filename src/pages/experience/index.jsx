import Image from "next/image"
import React from "react"

const Experience = () => {
  return (
    <div className="min-h-full container mx-auto pt-[12rem] pb-[10rem]">
      <h1 className="text-[3rem] font-semibold text-center lg:text-left mb-[3rem] lg:mb-[6rem] underline">
        Experience
      </h1>
      <div className="content mx-[1.5rem] lg:mx-0">
        <div className="moonholding flex flex-col lg:grid lg:grid-cols-[auto_auto] lg:gap-[4rem] gap-6 mb-[8rem] lg:mb-[15rem]">
          <div className="image overflow-hidden w-[29rem] lg:w-[54rem] h-[20rem] lg:h-[36rem] border border-gray-700 rounded-xl">
            <Image
              src={"/moonholdings.png"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="info lg:flex lg:flex-col justify-center">
            <h1 className="text-[2.5rem] lg:text-[3.5] font-medium lg:font-semibold lg:mb-[1.5rem]">
              MoonHoldings
            </h1>
            <p className="lg:text-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              unde, labore quos accusantium alias aperiam ducimus laudantium
              natus quae, voluptatem quis aut illo esse blanditiis quia rem!
              Fuga, expedita cupiditate alias distinctio odio qui? Architecto,
              deserunt? Deserunt maxime iusto nesciunt velit sit inventore!
              Fuga, natus!
            </p>
          </div>
        </div>

        <div className="freelance flex flex-col lg:grid lg:grid-cols-[auto_auto] lg:gap-[4rem] gap-6 mb-[8rem]">
          <div className="image lg:order-2 overflow-hidden w-[29rem] lg:w-[54rem] h-[20rem] lg:h-[36rem] border border-gray-700 rounded-xl">
            <Image
              src={"/freelance-pic.jpg"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="info lg:order-1 lg:flex lg:flex-col justify-center">
            <h1 className="text-[2.5rem] font-medium lg:text-[3.5] lg:font-semibold lg:mb-[1.5rem]">
              Freelance Work
            </h1>
            <p className="lg:text-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              unde, labore quos accusantium alias aperiam ducimus laudantium
              natus quae, voluptatem quis aut illo esse blanditiis quia rem!
              Fuga, expedita cupiditate alias distinctio odio qui? Architecto,
              deserunt? Deserunt maxime iusto nesciunt velit sit inventore!
              Fuga, natus!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
