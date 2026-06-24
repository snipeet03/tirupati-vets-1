import { Syringe, Siren, Scissors, ClipboardCheck, Microscope, Smile, BugOff, Baby } from 'lucide-react'

const services = [
  {
    icon: <Syringe className="w-7 h-7 text-primary dark:text-blue-400" />,
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    hover: 'hover:border-primary/20 dark:hover:border-blue-500/20 hover:shadow-primary/5',
    title: 'Vaccination',
    desc: 'Complete vaccination programs for puppies, kittens, and adult pets to prevent life-threatening diseases.',
  },
  {
    icon: <Siren className="w-7 h-7 text-emergency" />,
    bg: 'bg-red-50 dark:bg-red-900/20',
    hover: 'hover:border-emergency/20 dark:hover:border-red-500/20 hover:shadow-emergency/5',
    title: 'Emergency Care',
    desc: 'Round-the-clock emergency veterinary services for urgent medical situations, trauma, and critical care.',
  },
  {
    icon: <Scissors className="w-7 h-7 text-purple-600 dark:text-purple-400" />,
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    hover: 'hover:border-purple-500/20 hover:shadow-purple-500/5',
    title: 'Pet Surgery',
    desc: 'Advanced surgical procedures including spaying, neutering, orthopedic, and soft tissue surgeries.',
  },
  {
    icon: <ClipboardCheck className="w-7 h-7 text-accent" />,
    bg: 'bg-green-50 dark:bg-green-900/20',
    hover: 'hover:border-accent/20 hover:shadow-accent/5',
    title: 'Health Checkups',
    desc: 'Routine wellness exams and preventive health screenings to catch issues early and keep pets healthy.',
  },
  {
    icon: <Microscope className="w-7 h-7 text-orange-600 dark:text-orange-400" />,
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    hover: 'hover:border-orange-500/20 hover:shadow-orange-500/5',
    title: 'Diagnostics',
    desc: 'In-house laboratory testing, X-rays, ultrasound, and blood work for accurate and quick diagnosis.',
  },
  {
    icon: <Smile className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />,
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    hover: 'hover:border-cyan-500/20 hover:shadow-cyan-500/5',
    title: 'Dental Care',
    desc: 'Professional dental cleaning, extractions, and oral health treatments for fresher breath and healthier teeth.',
  },
  {
    icon: <BugOff className="w-7 h-7 text-pink-600 dark:text-pink-400" />,
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    hover: 'hover:border-pink-500/20 hover:shadow-pink-500/5',
    title: 'Deworming',
    desc: 'Regular deworming treatments to protect your pets from internal and external parasites.',
  },
  {
    icon: <Baby className="w-7 h-7 text-amber-600 dark:text-amber-400" />,
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    hover: 'hover:border-amber-500/20 hover:shadow-amber-500/5',
    title: 'Puppy & Kitten Care',
    desc: 'Specialized care programs for young pets including nutrition guidance, vaccination schedules, and growth monitoring.',
  },
]

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8']

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-6 bg-slate-50/80 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto anim-up">
          <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">What We Offer</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white">Our Services</h2>
          <p className="text-text-muted dark:text-slate-400 text-lg mt-4">Comprehensive veterinary care tailored to keep your pets healthy, happy, and safe.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-14">
          {services.map((s, i) => (
            <div key={s.title}
              className={`anim-up ${staggerClasses[i]} group bg-white dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-100 dark:border-white/5 ${s.hover} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
              <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {s.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-main dark:text-white mb-2">{s.title}</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
