"use client"

import React from "react"
import AnimateIn from "@/components/AnimateIn"

export default function Contact() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${name}`)
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`,
    )
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=abeer.technology@gmail.com&su=${subject}&body=${body}`
    window.open(gmailUrl, "_blank")
  }

  return (
    <section
      id="contact"
      className="mx-auto px-4 md:px-8 py-16 md:py-28 w-full max-w-243.75 scroll-mt-24"
    >
      {/* Eyebrow */}
      <AnimateIn>
        <div className="mb-8 md:mb-12 text-center">
          <p className="mb-2 font-grotesk text-[0.75rem] text-zinc-500 dark:text-white/40 uppercase tracking-[0.18em]">
            Contact
          </p>
          <h2 className="font-extrabold text-[2rem] md:text-[3.2rem] leading-[1.1] tracking-[-0.02em]">
            <span className="text-zinc-900 dark:text-white">Let&apos;s Build </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-700 via-emerald-500 to-emerald-400 dark:from-white dark:via-emerald-300 dark:to-emerald-500">
              Something
            </span>
          </h2>
        </div>
      </AnimateIn>

      {/* Two-column body */}
      <div className="items-stretch gap-6 md:gap-12 grid grid-cols-1 md:grid-cols-2">
        {/* Left — info side */}
        <AnimateIn from="left" delay={100} className="h-full">
          <div className="flex flex-col gap-6 md:gap-8 bg-black/[0.04] dark:bg-white/4 backdrop-blur-[20px] p-4 md:p-7 border border-black/[0.08] dark:border-white/8 rounded-[16px] h-full">
            <p className="text-[1rem] text-zinc-500 dark:text-white/60 leading-[1.75]">
              There was a period where things went quiet for me — professionally
              and personally. I&apos;m not hiding from that. What I am doing is
              coming back stronger, being intentional about it, and sharing the
              journey openly. This portfolio is part of that. I&apos;m available
              for full-stack roles and open to conversations.
            </p>

            {/* Status cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-black/[0.04] dark:bg-white/4 backdrop-blur-[20px] px-5 py-4 border border-black/[0.08] dark:border-white/8 rounded-[12px]">
                <span className="relative flex w-2.5 h-2.5 shrink-0">
                  <span className="inline-flex absolute bg-emerald-600 dark:bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping" />
                  <span className="inline-flex relative bg-emerald-600 dark:bg-emerald-400 rounded-full w-2.5 h-2.5" />
                </span>
                <span className="font-grotesk text-[0.9rem] text-zinc-700 dark:text-white/80">
                  Open to full-time &amp; freelance opportunities
                </span>
              </div>

              <div className="flex items-center gap-3 bg-black/[0.04] dark:bg-white/4 backdrop-blur-[20px] px-5 py-4 border border-black/[0.08] dark:border-white/8 rounded-[12px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-emerald-600 dark:text-emerald-400 shrink-0"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-grotesk text-[0.9rem] text-zinc-700 dark:text-white/80">
                  Based in Bangladesh &mdash; available remotely worldwide
                </span>
              </div>

              <div className="flex items-center gap-3 bg-black/[0.04] dark:bg-white/4 backdrop-blur-[20px] px-5 py-4 border border-black/[0.08] dark:border-white/8 rounded-[12px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-emerald-600 dark:text-emerald-400 shrink-0"
                >
                  <path
                    d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A8.002 8.002 0 0 1 4.07 9H5a1 1 0 0 1 0 2 6.002 6.002 0 0 0 5 5.93zm0-4.86A6.002 6.002 0 0 0 8.07 7H9a1 1 0 0 1 0 2 4 4 0 0 1 3 3.32v.68a1 1 0 0 1-2 0v-.68A4.002 4.002 0 0 1 7 9a1 1 0 0 1 0-2h.07A6.002 6.002 0 0 0 11 4.07V5a1 1 0 0 1 2 0v-.07A6.002 6.002 0 0 0 16.93 9H17a1 1 0 0 1 0 2 4 4 0 0 1-3 3.32V15a1 1 0 0 1-2 0v-.93z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-grotesk text-[0.9rem] text-zinc-700 dark:text-white/80">
                  Documenting the comeback on{" "}
                  <a
                    href="#about"
                    className="border-black/30 dark:border-white/30 hover:border-emerald-600/60 dark:hover:border-emerald-400/60 border-b text-zinc-700 dark:text-white/80 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    social networks
                  </a>
                </span>
              </div>
            </div>

            {/* Reply time note */}
            <p className="text-[0.82rem] text-zinc-400 dark:text-white/30">
              I typically reply within 24 hours.
            </p>
          </div>
        </AnimateIn>

        {/* Right — form side */}
        <AnimateIn from="right" delay={100} className="h-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-black/[0.04] dark:bg-white/4 backdrop-blur-[20px] p-4 md:p-7 border border-black/[0.08] dark:border-white/8 rounded-[16px] h-full"
          >
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-grotesk text-[0.72rem] text-zinc-500 dark:text-white/40 uppercase tracking-[0.12em]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-black/[0.04] dark:bg-white/4 px-4 py-3 border border-black/[0.08] dark:border-white/8 focus:border-emerald-600/40 dark:focus:border-emerald-400/40 rounded-[10px] outline-none text-[0.9rem] text-zinc-800 dark:text-white/85 placeholder:text-zinc-400 dark:placeholder:text-white/25 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-grotesk text-[0.72rem] text-zinc-500 dark:text-white/40 uppercase tracking-[0.12em]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-black/[0.04] dark:bg-white/4 px-4 py-3 border border-black/[0.08] dark:border-white/8 focus:border-emerald-600/40 dark:focus:border-emerald-400/40 rounded-[10px] outline-none text-[0.9rem] text-zinc-800 dark:text-white/85 placeholder:text-zinc-400 dark:placeholder:text-white/25 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-1.5">
              <label
                htmlFor="message"
                className="font-grotesk text-[0.72rem] text-zinc-500 dark:text-white/40 uppercase tracking-[0.12em]"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                className="flex-1 bg-black/[0.04] dark:bg-white/4 px-4 py-3 border border-black/[0.08] dark:border-white/8 focus:border-emerald-600/40 dark:focus:border-emerald-400/40 rounded-[10px] outline-none min-h-35 md:min-h-0 text-[0.9rem] text-zinc-800 dark:text-white/85 placeholder:text-zinc-400 dark:placeholder:text-white/25 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-600 mt-1 py-3 rounded-[10px] font-grotesk font-semibold text-white transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </AnimateIn>
      </div>
    </section>
  )
}
