"use client"

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"

interface ProjectGalleryProps {
  video: { youtubeId: string; caption: string }
  screenshots: { src: StaticImageData; caption: string }[]
  projectName: string
  host: string
}

const pad = (n: number) => String(n).padStart(2, "0")

export default function ProjectGallery({
  video,
  screenshots,
  projectName,
  host,
}: ProjectGalleryProps) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  // slide 0 is the walkthrough video, the rest are screenshots
  const total = screenshots.length + 1
  const go = (i: number) => {
    setIndex((i + total) % total)
    setPlaying(false)
  }

  return (
    <section
      aria-label={`${projectName} gallery`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1)
        if (e.key === "ArrowRight") go(index + 1)
      }}
      className="flex flex-col gap-3 shadow-none mt-[clamp(40px,6vw,72px)] outline-none text-[#ecf2ef]"
    >
      {/* stage */}
      <div className="relative bg-[#0c0f0e] shadow-[0_40px_100px_rgba(0,0,0,0.45)] border border-white/8 rounded-[20px] min-[720px]:rounded-[28px] aspect-[4/3] min-[720px]:aspect-video overflow-hidden">
        <div className="z-10 relative flex items-center gap-1.5 bg-[#161b19] px-4 py-3 border-white/6 border-b">
          <span className="bg-[#ff5f57] rounded-full w-2.5 h-2.5" />
          <span className="bg-[#febc2e] rounded-full w-2.5 h-2.5" />
          <span className="bg-[#28c840] rounded-full w-2.5 h-2.5" />
          <span className="bg-[#0e1211] ml-3 px-3 py-1 rounded-lg font-jbmono text-xs text-[#7d8f88] truncate">
            {host}
          </span>
          <span className="ml-auto font-jbmono text-[11px] text-[#3ddc9f]">
            {pad(index + 1)} / {pad(total)}
          </span>
        </div>

        <div className="absolute inset-[47px_0_0_0]">
          {/* video slide */}
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center gap-4.5 bg-[radial-gradient(600px_400px_at_50%_50%,#173129,#0c0f0e_70%)] transition-opacity duration-500 ${
              index === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {playing && index === 0 ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                title={`${projectName} — ${video.caption}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play walkthrough"
                  className="bg-[#3ddc9f] shadow-[0_0_0_12px_rgba(61,220,159,0.15),0_0_0_26px_rgba(61,220,159,0.06)] rounded-full w-16 min-[720px]:w-22 h-16 min-[720px]:h-22 text-[#0c1110] text-[30px] hover:scale-[1.08] transition-transform duration-300 cursor-pointer"
                >
                  ▶
                </button>
                <span className="max-[719px]:hidden font-jbmono text-xs text-[#9fb0a9] tracking-[0.06em]">
                  WALKTHROUGH · UNLISTED ON YOUTUBE
                </span>
              </>
            )}
          </div>

          {/* screenshot slides — stacked so they crossfade */}
          {screenshots.map((shot, i) => (
            <div
              key={shot.caption}
              aria-hidden={index !== i + 1}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === i + 1 ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={shot.src}
                alt={`${projectName} — ${shot.caption}`}
                fill
                sizes="(min-width: 1344px) 1280px, 100vw"
                placeholder="blur"
                priority={i === 0}
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* dots + arrows */}
        <div className="right-4 bottom-4 left-4 z-10 absolute flex justify-between items-center gap-3 pointer-events-none">
          <span className="flex gap-1.25 bg-[rgb(12_17_16/0.85)] backdrop-blur-sm px-3 py-2.25 rounded-full">
            {Array.from({ length: total }, (_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-350 ${
                  i === index ? "w-5.5 bg-[#3ddc9f]" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </span>
          <span className="flex gap-1.5 pointer-events-auto">
            {[
              { label: "Previous", glyph: "←", to: index - 1 },
              { label: "Next", glyph: "→", to: index + 1 },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={() => go(b.to)}
                aria-label={b.label}
                className="bg-[rgb(12_17_16/0.85)] backdrop-blur-sm border border-white/14 hover:border-[#3ddc9f] rounded-full w-10 h-10 text-[#ecf2ef] hover:text-[#3ddc9f] transition-colors duration-200 cursor-pointer"
              >
                {b.glyph}
              </button>
            ))}
          </span>
        </div>
      </div>

      {/* thumbnails */}
      <div className="max-[719px]:auto-cols-[38%] max-[719px]:grid-flow-col min-[720px]:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5 grid max-[719px]:[scrollbar-width:none] max-[719px]:overflow-x-auto max-[719px]:snap-mandatory max-[719px]:snap-x">
        {Array.from({ length: total }, (_, i) => {
          const on = i === index
          const shot = i > 0 ? screenshots[i - 1] : null
          return (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={shot ? shot.caption : "Walkthrough video"}
              aria-current={on}
              className={`relative rounded-[14px] aspect-[16/10] overflow-hidden snap-start cursor-pointer transition-[opacity,outline-color] duration-250 outline-2 -outline-offset-2 hover:opacity-100 ${
                on ? "opacity-100 outline-[#3ddc9f]" : "opacity-55 outline-transparent"
              } ${
                shot
                  ? "bg-[#141917]"
                  : "bg-[radial-gradient(circle_at_50%_50%,#173129,#0c0f0e_75%)]"
              }`}
            >
              {shot ? (
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-cover object-top"
                />
              ) : (
                <span className="absolute inset-0 flex justify-center items-center">
                  <span className="flex justify-center items-center bg-[#3ddc9f] shadow-[0_0_0_6px_rgba(61,220,159,0.15)] rounded-full w-8.5 h-8.5 text-[#0c1110] text-xs">
                    ▶
                  </span>
                </span>
              )}
              <span className="right-0 bottom-0 left-0 absolute bg-white/6 h-0.75">
                <span
                  className={`block h-full bg-[#3ddc9f] transition-[width] duration-400 ${
                    on ? "w-full" : "w-0"
                  }`}
                />
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
