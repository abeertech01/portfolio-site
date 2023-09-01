import React from "react"
import Header from "./Header"
import Nav from "./Nav"

const RootLayout = ({ children }) => {
  return (
    <div className="relative px-[1.5rem] py-[2rem] page bg-gray-900 text-white text-[1.5rem]">
      <Header />
      <Nav />
      {children}
    </div>
  )
}

export default RootLayout
