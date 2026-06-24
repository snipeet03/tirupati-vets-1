const facilities = [
  { img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80', title: 'Operation Theatre', desc: 'Sterile, fully equipped surgical suite', overlay: 'bg-primary/40' },
  { img: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80', title: 'Diagnostics Lab', desc: 'Advanced in-house testing facility', overlay: 'bg-purple-600/40' },
  { img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80', title: 'Consultation Rooms', desc: 'Comfortable, private examination spaces', overlay: 'bg-accent/40' },
  { img: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?w=600&q=80', title: 'Pet Recovery Area', desc: 'Warm, monitored post-treatment space', overlay: 'bg-cyan-600/40' },
  { img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80', title: 'Emergency Unit', desc: 'Dedicated 24×7 emergency ward', overlay: 'bg-emergency/40' },
  { img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80', title: 'Advanced Equipment', desc: 'Latest veterinary medical technology', overlay: 'bg-orange-600/40' },
]

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6']

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 md:py-28 px-4 md:px-6 bg-slate-50/80 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto anim-up">
          <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Our Infrastructure</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white">World-Class Facilities</h2>
          <p className="text-text-muted dark:text-slate-400 text-lg mt-4">Modern infrastructure designed for comprehensive pet healthcare and comfort.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-14">
          {facilities.map((f, i) => (
            <div key={f.title}
              className={`anim-up ${staggerClasses[i]} relative rounded-2xl overflow-hidden h-72 group cursor-pointer`}>
              <img src={f.img} alt={f.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className={`absolute inset-0 ${f.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading font-semibold text-xl text-white">{f.title}</h3>
                <p className="text-white/70 text-sm mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
