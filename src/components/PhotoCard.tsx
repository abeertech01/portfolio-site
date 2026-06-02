"use client"

import React from "react"
import Image, { type StaticImageData } from "next/image"
import { useHover } from "@/components/HoverLink"

/**
 * Photo tile that crossfades to the Dhaka image — but the trigger is hovering
 * the location/map box, not this tile. Hover state comes from the shared
 * context. The hover image sits in the DOM at opacity 0, so it's loaded before
 * the cursor arrives and the fade has nothing to wait on.
 */
export default function PhotoCard({
  photo,
  hoverImage,
  alt,
}: {
  photo: StaticImageData
  hoverImage: StaticImageData
  alt: string
}) {
  const { hovered } = useHover()

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <Image
        src={photo}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 300px"
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />
      <Image
        src={hoverImage}
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 768px) 50vw, 300px"
        style={{
          objectFit: "cover",
          objectPosition: "center top",
          opacity: hovered ? 1 : 0,
          transition: "opacity 450ms ease",
        }}
      />
    </div>
  )
}
