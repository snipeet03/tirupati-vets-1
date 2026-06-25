import { ShieldCheck, Stethoscope, Heart, Microscope, Siren, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="anim-left relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/30 dark:shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80"
              alt="Veterinarian with pet"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 md:p-6 border border-slate-100 dark:border-white/5 float-anim">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-heading font-bold text-xl text-text-main dark:text-white">Certified</div>
                <div className="text-text-muted dark:text-slate-400 text-xs">Licensed Veterinary Hospital</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 md:-left-8 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-2xl -z-10" />
        </div>

        <div className="anim-right">
          <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">About Us</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white leading-tight">
            About Tirupati Vets
          </h2>
          <p className="text-text-muted dark:text-slate-400 text-lg leading-relaxed mt-6">
            Tirupati Vets is a trusted veterinary clinic in Dwarka, Delhi, offering compassionate pet healthcare, emergency services, diagnostics, surgery, and preventive treatments through a dedicated team of experienced veterinarians.
          </p>
          <p className="text-text-muted dark:text-slate-400 leading-relaxed mt-4">
            With over 30 years of experience, we understand that your pet is family. Our state-of-the-art facility is equipped with modern diagnostic equipment, a fully functional operation theatre, and comfortable recovery areas to ensure the best possible care for your furry companions.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: <Stethoscope className="w-5 h-5 text-primary dark:text-blue-400" />, label: 'Expert Veterinarians', bg: 'bg-blue-50 dark:bg-blue-900/20' },
              { icon: <Heart className="w-5 h-5 text-accent" />, label: 'Compassionate Care', bg: 'bg-green-50 dark:bg-green-900/20' },
              { icon: <Microscope className="w-5 h-5 text-purple-600 dark:text-purple-400" />, label: 'Advanced Diagnostics', bg: 'bg-purple-50 dark:bg-purple-900/20' },
              { icon: <Siren className="w-5 h-5 text-emergency" />, label: '24×7 Emergency', bg: 'bg-red-50 dark:bg-red-900/20' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-text-main dark:text-slate-200">{item.label}</span>
              </div>
            ))}
          </div>

          <Link to="/services"
            className="btn-shimmer inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-7 py-3.5 rounded-2xl mt-8 transition-colors">
            Our Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
