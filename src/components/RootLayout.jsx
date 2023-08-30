import React from "react"
import Header from "./Header"
import Nav from "./Nav"
import Image from "next/image"

const RootLayout = ({ children }) => {
  return (
    <div className="relative px-[1.5rem] page bg-gray-900 text-white text-[1.5rem]">
      {/* <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] mix-blend-color-dodge animate-pulse duration-75">
        <Image
          src={"/red-flare-light.png"}
          width={850}
          height={850}
          alt="red flare light"
        />
      </div> */}
      <Header />
      <Nav />
      {children}
    </div>
  )
}

export default RootLayout
