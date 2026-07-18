import { useEffect, useRef, useState } from 'react'

interface Video {
  id: number
  title: string
  url: string
}

interface VideoBackgroundProps {
  videos: Video[]
  activeIndex: number
}

export default function VideoBackground({ videos, activeIndex }: VideoBackgroundProps) {
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const [videoUrls, setVideoUrls] = useState<Record<number, string>>({})

  // Preload videos
  useEffect(() => {
    const preloadVideos = async () => {
      const urls: Record<number, string> = {}

      for (const video of videos) {
        try {
          const response = await fetch(video.url)
          const blob = await response.blob()
          const objectUrl = URL.createObjectURL(blob)
          urls[video.id] = objectUrl
        } catch (error) {
          console.warn(`Failed to preload video ${video.id}, using original URL`, error)
          urls[video.id] = video.url
        }
      }

      setVideoUrls(urls)
    }

    preloadVideos()
  }, [videos])

  // Ensure active video is playing
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === activeIndex) {
        video?.play().catch(() => console.log('Auto-play prevented'))
      } else {
        video?.pause()
      }
    })
  }, [activeIndex])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {videos.map((video, index) => (
        <video
          key={video.id}
          ref={(el) => {
            if (el) videoRefs.current[index] = el
          }}
          src={videoUrls[video.id] || video.url}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: index === activeIndex ? 1 : 0,
            transition: 'opacity 1200ms ease-in-out',
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
