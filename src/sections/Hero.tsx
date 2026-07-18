import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import VideoBackground from '../components/VideoBackground'
import useRevealAnimation from '../hooks/useRevealAnimation'

type Section = 'projects' | 'about' | 'contact'

interface HeroProps {
  onNavigate: (section: Section) => void
}

const videos = [
  {
    id: 0,
    title: 'GRIDWAVE',
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4',
  },
]

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isVisible, setElement } = useRevealAnimation()

  useEffect(() => {
    if (containerRef.current) {
      setElement(containerRef.current)
    }
  }, [setElement])

  const accentColor = '#F598F2'
  const dotColor = '#F598F2'
  const dotGlow = '0 0 24px #F598F2'

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground videos={videos} activeIndex={0} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* Hero Content */}
      <main
        ref={containerRef}
        className="relative z-[2] max-w-[1340px] mx-auto w-full h-screen flex flex-col justify-end items-end gap-[150px] pt-[190px] px-[15px] pb-[60px] md-tablet:gap-8 md-tablet:justify-end md-tablet:items-end md-tablet:pb-[52px] md-tablet:pl-6 mobile:justify-end mobile:items-start mobile:gap-[72px] mobile:pt-[140px] mobile:px-[18px] mobile:pb-11"
      >
        {/* Section 1: Availability */}
        <div className="flex w-full justify-end items-start gap-8 md-tablet:gap-4 mobile:flex-col mobile:gap-7">
          {/* Availability Indicator */}
          <div className="flex flex-col items-end gap-3 mobile:items-start">
            <div
              className="w-[7px] h-[7px] rounded-full animate-dotPulse"
              style={{
                backgroundColor: dotColor,
                boxShadow: dotGlow,
              }}
              role="status"
              aria-live="polite"
            />
            <span className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase">
              Available for work
            </span>
          </div>
        </div>

        {/* Section 2: Name + CTA */}
        <div className="flex w-full gap-8 md-tablet:gap-7 mobile:flex-col mobile:gap-8">
          {/* Name */}
          <div className="flex-[2]">
            {isVisible && (
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[clamp(48px,8.5vw,120px)] leading-[87%] tracking-[-4px] font-medium uppercase md-tablet:tracking-[-3px] mobile:text-[clamp(36px,10vw,56px)] mobile:leading-[94%] mobile:tracking-[-2px]"
              >
                Ritobrato<br />Maiti<span style={{ color: accentColor }}>.</span>
              </motion.h1>
            )}
          </div>

          {/* CTA Section */}
          <div className="flex-1 pl-[50px] md-tablet:pl-6 mobile:pl-0 mobile:max-w-[420px]">
            {isVisible && (
              <>
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base leading-6 tracking-[-0.16px] font-medium mb-6"
                >
                  I craft bold brands and modern websites with purpose. Every
                  pixel serves the vision, every interaction tells your story.
                </motion.p>

                <motion.button
                  onClick={() => onNavigate('contact')}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.08,
                  }}
                  className="btn-fill-up"
                >
                  start a project
                </motion.button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
