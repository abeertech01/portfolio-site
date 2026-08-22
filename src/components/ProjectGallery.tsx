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
  const isVideo = activeIndex === 0

  return (
    <div className="gap-4 grid grid-cols-[104px_1fr] lg:grid-cols-[120px_1fr] mb-14">
      {/* Thumbnail rail */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto">
        <button
          onClick={() => setActiveIndex(0)}
          aria-label={`Play ${video.caption}`}
          className={`relative flex-shrink-0 w-24 md:w-full aspect-video rounded-xl border-2 overflow-hidden transition-colors cursor-pointer ${
            activeIndex === 0
              ? "border-emerald-600 dark:border-emerald-400"
              : "border-black/8 dark:border-white/10 hover:border-black/20 dark:hover:border-white/25"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
          <div className="absolute inset-0 flex justify-center items-center">
            <Play size={16} className="fill-emerald-500 text-emerald-500" />
          </div>
        </button>

        {screenshots.map((shot, i) => (
          <button
            key={shot.caption}
            onClick={() => setActiveIndex(i + 1)}
            aria-label={shot.caption}
            className={`relative flex-shrink-0 w-24 md:w-full aspect-video rounded-xl border-2 overflow-hidden transition-colors cursor-pointer ${
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
      <div className="relative order-1 md:order-2 rounded-2xl border border-black/8 dark:border-white/10 aspect-video overflow-hidden">
        {isVideo ? (
          <iframe
            key={video.youtubeId}
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={`${projectName} — ${video.caption}`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
