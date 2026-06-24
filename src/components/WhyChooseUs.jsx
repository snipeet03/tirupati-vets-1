import { Award, Clock, Cpu, GraduationCap, Building2, HandHeart } from 'lucide-react'

const reasons = [
  { icon: <Award className="w-6 h-6 text-primary dark:text-blue-400" />, bg: 'bg-blue-50 dark:bg-blue-900/20', title: '30+ Years Experience', desc: 'Three decades of trusted veterinary care serving thousands of pet families in Delhi.' },
  { icon: <Clock className="w-6 h-6 text-accent" />, bg: 'bg-green-50 dark:bg-green-900/20', title: '24×7 Availability', desc: 'We never close. Day or night, weekday or holiday, we\'re here for your pet.' },
  { icon: <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />, bg: 'bg-purple-50 dark:bg-purple-900/20', title: 'Modern Equipment', desc: 'State-of-the-art diagnostic and surgical equipment for accurate treatment.' },
  { icon: <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-400" />, bg: 'bg-orange-50 dark:bg-orange-900/20', title: 'Qualified Veterinarians', desc: 'Our team of certified vets brings expertise, skill, and genuine love for animals.' },
  { icon: <Building2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />, bg: 'bg-cyan-50 dark:bg-cyan-900/20', title: 'Fully Equipped Hospital', desc: 'Complete in-house facility with OT, lab, pharmacy, and comfortable recovery areas.' },
  { icon: <HandHeart className="w-6 h-6 text-pink-600 dark:text-pink-400" />, bg: 'bg-pink-50 dark:bg-pink-900/20', title: 'Compassionate Care', desc: 'Every pet is treated with gentle handling, patience, and genuine affection.' },
]

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6']

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto anim-up">
          <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Why Us</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white">Why Choose Tirupati Vets</h2>
          <p className="text-text-muted dark:text-slate-400 text-lg mt-4">We combine decades of experience with modern medicine to deliver exceptional pet care.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-14">
          {reasons.map((r, i) => (
            <div key={r.title}
              className={`anim-up ${staggerClasses[i]} group bg-white dark:bg-slate-800/50 rounded-2xl p-7 border border-slate-100 dark:border-white/5 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1`}>
              <div className={`w-12 h-12 ${r.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {r.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-main dark:text-white mb-2">{r.title}</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
