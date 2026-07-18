import { useState, useCallback } from 'react'

export default function useRevealAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  const setElement = useCallback((element: HTMLElement | null) => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [])

  return { isVisible, setElement }
}
