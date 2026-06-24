import { useState, useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    text: '"Dr. Rajesh and his team saved my golden retriever during an emergency at 2 AM. Their quick response and compassionate care gave me hope when I was terrified. I can\'t thank them enough."',
    name: 'Priya Sharma',
    role: 'Pet Parent — Golden Retriever',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    text: '"Best vet clinic in Dwarka. Very professional and caring. They explained every step of the treatment and the pricing was transparent. My Labrador is always excited to visit!"',
    name: 'Rahul Verma',
    role: 'Pet Parent — Labrador',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: '"My cat was treated for a serious condition and the care was exceptional. The follow-up calls showed how much they genuinely care. Truly a gem of a veterinary hospital."',
    name: 'Anita Gupta',
    role: 'Pet Parent — Persian Cat',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    text: '"30 years of experience really shows. The vets here are incredibly knowledgeable and trustworthy. They treated my beagle with such patience and love. Highly recommended!"',
    name: 'Vikram Singh',
    role: 'Pet Parent — Beagle',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    text: '"The vaccination and wellness packages are very affordable and thorough. The staff remembers my puppy\'s name every visit. It feels like family, not a clinic. Five stars always!"',
    name: 'Meera Patel',
    role: 'Pet Parent — Indie Puppy',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  const goTo = (i) => setCurrent(i)

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    startAuto()
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-slate-50/80 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto anim-up">
          <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white">What Pet Parents Say</h2>
        </div>

        <div className="relative mt-14 anim-up"
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={startAuto}>
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2">
                  <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800/60 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-white/5 shadow-sm">
                    <div className="flex gap-1 mb-6">
                      {Array(5).fill(0).map((_, si) => (
                        <Star key={si} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-text-main dark:text-slate-200 text-lg md:text-xl leading-relaxed italic">{t.text}</p>
                    <div className="flex items-center gap-4 mt-8">
                      <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                      <div>
                        <div className="font-heading font-semibold text-text-main dark:text-white">{t.name}</div>
                        <div className="text-text-muted dark:text-slate-400 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-3 h-3 bg-primary' : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
