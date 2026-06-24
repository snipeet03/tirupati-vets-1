import { useEffect, useRef, useState } from 'react'

function Counter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const duration = 2000
        const start = performance.now()
        const animate = (now) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 4)
          setCount(Math.floor(ease * target))
          if (progress < 1) requestAnimationFrame(animate)
          else setCount(target)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="relative -mt-16 z-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800/80 glass-card rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/30 border border-slate-100 dark:border-white/5 p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="font-heading font-bold text-3xl md:text-4xl text-primary dark:text-blue-400">
              <Counter target={30} />+
            </div>
            <div className="text-text-muted dark:text-slate-400 text-sm mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl md:text-4xl text-primary dark:text-blue-400">24/7</div>
            <div className="text-text-muted dark:text-slate-400 text-sm mt-1">Emergency Support</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl md:text-4xl text-primary dark:text-blue-400">
              <Counter target={1000} />+
            </div>
            <div className="text-text-muted dark:text-slate-400 text-sm mt-1">Happy Pet Families</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl md:text-4xl text-primary dark:text-blue-400">
              <Counter target={365} />
            </div>
            <div className="text-text-muted dark:text-slate-400 text-sm mt-1">Days Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
