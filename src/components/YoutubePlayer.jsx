import YouTube from "react-youtube"

const YoutubePlayer = () => {
  const opts = {
    width: "100%",
    playerVars: { autoplay: 1 },
  }

  const videoReady = (event) => {
    event.target.pauseVideo()
  }

  return (
    <YouTube
      iframeClassName="relative w-full aspect-video lg:w-[102.4rem] lg:h-[64rem] z-[60]"
      videoId="SJKd8GhW-iE"
      opts={opts}
      onReady={videoReady}
    />
  )
}

export default YoutubePlayer
