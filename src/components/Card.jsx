import clsx from "clsx"
import Image from "next/image"
import React from "react"

const Card = ({ image, topic, elements }) => {
  return (
    <div className="flex flex-col min-h-[40rem] lg:min-h-[50rem] rounded-2xl bg-[#1d2b4c] px-[4rem] py-[3rem] text-gray-200">
      <h1 className="w-full flex-none items-center">
        <Image
          width={40}
          height={40}
          src={image}
          className="inline-block mr-[1.5rem]"
        />
        <span>{topic}</span>
      </h1>
      <div className="w-full flex-1 flex items-center lg:items-start pt-[2rem] lg:pt-[6rem]">
        <div className="w-full grid grid-cols-3 gap-[1rem]">
          {elements.map((el, i) => (
            <div
              key={i}
              className={clsx(
                "aspect-[4/3] bg-[#44516c] rounded-xl p-4 flex justify-center",
                i === 0 ? "row-span-2 col-span-2" : ""
              )}
            >
              <Image
                width={100}
                height={100}
                src={
                  el === "SQL"
                    ? `/tech-logos/${el}.png`
                    : `/tech-logos/${el}.svg`
                }
                className="w-3/4 h-4/7"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
