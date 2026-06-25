import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollAnimation() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Wait a brief tick to allow the DOM to render after a route change
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.anim-up, .anim-left, .anim-right, .anim-scale')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      elements.forEach((el) => observer.observe(el))
      
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])
}

