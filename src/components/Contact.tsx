"use client"

import { useEffect, useRef, useState } from "react"
import AnimateIn from "@/components/AnimateIn"
import Footer from "@/components/Footer"

const EMAIL = "abeer.technology@gmail.com"

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/abeertech01" },
  { name: "LinkedIn", url: "https://linkedin.com/in/abeertech01" },
  { name: "X", url: "https://x.com/abeertech01" },
  { name: "Facebook", url: "https://facebook.com/abeertech01" },
]

const field =
  "px-3.5 py-3.5 border border-white/10 focus:border-[#3ddc9f] rounded-xl bg-[#151a18] outline-none text-[15px] text-[#ecf2ef] placeholder:text-[#7d8f88] transition-colors duration-200"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [sentTo, setSentTo] = useState<string | null>(null)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current)
    }
  }, [])

  function copyEmail() {
    navigator.clipboard?.writeText(EMAIL)
    setCopied(true)
    if (copyTimer.current) clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(false), 1800)
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    // No backend: open a pre-filled Gmail compose window, as the site did before
    const subject = encodeURIComponent(`Message from ${name}`)
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${subject}&body=${body}`,
      "_blank",
      "noopener",
    )
    setSentTo(name.split(" ")[0] || "friend")
  }

  return (
    <section
      id="contact"
      className="relative bg-[#3ddc9f] overflow-hidden font-grotesk leading-[normal] text-[#0c1110] scroll-mt-0"
    >
      <div className="box-border flex flex-col gap-[clamp(36px,5vw,60px)] mx-auto px-[clamp(16px,3vw,32px)] pt-[clamp(72px,10vw,130px)] pb-10 w-full max-w-[calc(1280px_+_2_*_clamp(16px,3vw,32px))]">
        <AnimateIn threshold={0.1} duration={900}>
          <h2 className="m-0 font-bebas font-normal text-[clamp(76px,15vw,240px)] leading-[0.84]">
            Let&apos;s build something.
          </h2>
        </AnimateIn>

        <div className="gap-[clamp(28px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]">
          <AnimateIn threshold={0.1} duration={900}>
            <div className="flex flex-col gap-5.5">
              <p className="m-0 max-w-115 text-lg text-[#0f2a21] leading-[1.55]">
                Open to full-stack roles and freelance work. Based in
                Bangladesh, working remotely worldwide.
              </p>
              <button
                type="button"
                onClick={copyEmail}
                className="flex flex-wrap items-center self-start gap-x-3.5 gap-y-2.5 bg-[#0c1110] hover:bg-[#1b2b26] px-5 py-4 rounded-2xl max-w-full font-medium text-[#ecf2ef] text-[clamp(16px,1.8vw,20px)] transition-colors duration-200 cursor-pointer"
              >
                {EMAIL}
                <span className="bg-[#3ddc9f] px-2.25 py-1.25 rounded-lg font-jbmono text-xs text-[#0c1110]">
                  {copied ? "COPIED ✓" : "COPY"}
                </span>
              </button>
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:bg-[#0c1110] px-4 py-2.5 border-[1.5px] border-[#0c1110] rounded-full font-medium text-[#0c1110] hover:text-[#3ddc9f] text-sm leading-[normal] transition-colors duration-200"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn threshold={0.1} duration={900} delay={120}>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 bg-[#0c1110] p-[clamp(18px,2.5vw,28px)] rounded-3xl text-[#ecf2ef]"
            >
              {sentTo ? (
                <div className="flex flex-col items-center gap-2.5 px-2 py-12 text-center">
                  <span className="font-bebas text-5xl text-[#3ddc9f] leading-none">
                    Message ready
                  </span>
                  <span className="text-[15px] text-[#9fb0a9]">
                    Thanks, {sentTo}. Press send in the Gmail tab that just
                    opened and I&apos;ll reply within a day.
                  </span>
                  <button
                    type="button"
                    onClick={() => setSentTo(null)}
                    className="mt-1.5 font-jbmono text-[13px] text-[#3ddc9f] hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    write another →
                  </button>
                </div>
              ) : (
                <>
                  <div className="gap-3 grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))]">
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className={field}
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={field}
                    />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className={`${field} resize-y`}
                  />
                  <button
                    type="submit"
                    className="bg-[#3ddc9f] hover:bg-[#ecf2ef] p-3.75 border-none rounded-xl font-semibold text-[#0c1110] text-[15px] transition-colors duration-200 cursor-pointer"
                  >
                    Send message →
                  </button>
                </>
              )}
            </form>
          </AnimateIn>
        </div>

        <Footer />
      </div>
    </section>
  )
}
