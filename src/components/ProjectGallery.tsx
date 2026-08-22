"use client"

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { Play } from "lucide-react"

interface ProjectGalleryProps {
  video: { youtubeId: string; caption: string }
  screenshots: { src: StaticImageData; caption: string }[]
  projectName: string
}

export default function ProjectGallery({
  video,
  screenshots,
  projectName,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [videoActivated, setVideoActivated] = useState(false)
  const isVideo = activeIndex === 0

  function showScreenshot(index: number) {
    setActiveIndex(index)
    setVideoActivated(false)
  }

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-[104px_1fr] lg:grid-cols-[120px_1fr] mb-14">
      {/* Thumbnail rail */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto">
        <button
          onClick={() => setActiveIndex(0)}
          aria-label={`Play ${video.caption}`}
          className={`relative shrink-0 w-24 md:w-full aspect-video rounded-xl border-2 overflow-hidden transition-colors cursor-pointer ${
            activeIndex === 0
              ? "border-emerald-600 dark:border-emerald-400"
              : "border-black/8 dark:border-white/10 hover:border-black/20 dark:hover:border-white/25"
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-br from-zinc-800 to-zinc-950" />
          <div className="absolute inset-0 flex justify-center items-center">
            <Play size={16} className="fill-emerald-500 text-emerald-500" />
          </div>
        </button>

        {screenshots.map((shot, i) => (
          <button
            key={shot.caption}
            onClick={() => showScreenshot(i + 1)}
            aria-label={shot.caption}
            className={`relative shrink-0 w-24 md:w-full aspect-video rounded-xl border-2 overflow-hidden transition-colors cursor-pointer ${
              activeIndex === i + 1
                ? "border-emerald-600 dark:border-emerald-400"
                : "border-black/8 dark:border-white/10 hover:border-black/20 dark:hover:border-white/25"
            }`}
          >
            <Image
              src={shot.src}
              alt={shot.caption}
              fill
              sizes="120px"
              placeholder="blur"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main viewer */}
      <div className="relative order-1 md:order-2 border border-black/8 dark:border-white/10 rounded-2xl aspect-video overflow-hidden">
        {isVideo ? (
          videoActivated ? (
            <iframe
              key={video.youtubeId}
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              title={`${projectName} — ${video.caption}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setVideoActivated(true)}
              aria-label={`Play ${video.caption}`}
              className="group absolute inset-0 w-full h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-zinc-800 to-zinc-950" />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="flex justify-center items-center bg-emerald-500 group-hover:bg-emerald-400 rounded-full w-16 h-16 transition-colors">
                  <Play size={26} className="fill-zinc-950 ml-1 text-zinc-950" />
                </div>
              </div>
              <span className="top-3.5 left-4 absolute bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full font-medium text-white text-xs">
                Unlisted · YouTube
              </span>
            </button>
          )
        ) : (
          <>
            <Image
              src={screenshots[activeIndex - 1].src}
              alt={screenshots[activeIndex - 1].caption}
              fill
              sizes="(min-width: 1024px) 850px, 100vw"
              placeholder="blur"
              priority
              className="object-cover"
            />
            <span className="bottom-3.5 left-4 absolute bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full font-medium text-white text-xs">
              {screenshots[activeIndex - 1].caption}
            </span>
          </>
        )}
      </div>
    </div>
  )
}
