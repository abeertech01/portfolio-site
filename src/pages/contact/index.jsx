// icons
import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = () => {
    alert(`Email: ${email}\nSubject: ${subject}\nMessage: ${message}`)
  }

  return (
    <div className="container mx-auto min-h-full flex flex-col justify-center">
      <div className="text-center lg:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[70rem]">
          {/* text & form */}
          <h1 className="text-[3rem] font-semibold underline text-left">
            Contact
          </h1>
          <h2 className="mb-12 text-[2rem] font-medium text-left">
            Let&apos;s <span className="">connect.</span>
          </h2>
          {/* form */}
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="lg:flex lg:gap-x-6">
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                className="lg:flex-1 w-full bg-transparent border border-gray-500 placeholder-gray-500 text-[1.6rem] lg:text-[2rem] px-[1rem] lg:px-[1.8rem] py-[0.5rem] lg:py-[1rem] rounded-md mb-6 lg:mb-0"
              />
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="lg:flex-1 w-full bg-transparent border border-gray-500 placeholder-gray-500 text-[1.6rem] lg:text-[2rem] px-[1rem] lg:px-[1.8rem] py-[0.5rem] lg:py-[1rem] rounded-md"
              />
            </div>
            <textarea
              rows="4"
              placeholder="message"
              onChange={(e) => setMessage(e.target.value)}
              className="textarea bg-transparent border border-gray-500 placeholder-gray-500 text-[2rem] px-[1.8rem] py-[1rem] p-2 rounded-md"
            />
            <button className="btn rounded-full border border-gray-400 max-w-[170px] px-8 py-6 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red-500 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
