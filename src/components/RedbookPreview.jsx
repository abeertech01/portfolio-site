import React, { useContext } from "react"
import YoutubePlayer from "./YoutubePlayer"
import { VideoContext } from "../App"

function RedbookPreview() {
  const { setIsVideoOpen } = useContext(VideoContext)
  const handleVideoClose = () => {
    setIsVideoOpen(false)
  }

  return (
    <div className="fixed w-screen h-screen z-50 flex justify-center items-center">
      <div
        onClick={handleVideoClose}
        className="absolute w-full h-full bg-zinc-900 opacity-40 z-[55]"
      ></div>
      <YoutubePlayer />
    </div>
  )
}

export default RedbookPreview
