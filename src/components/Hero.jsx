import { CalendarCheck, PhoneCall, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
          alt="Golden Retriever"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-purple-900/50 dark:from-primary/95 dark:via-slate-900/80 dark:to-purple-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl float-anim hidden lg:block" />
      <div className="absolute bottom-32 right-40 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl float-anim-delay hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-20">
        <div className="max-w-2xl">
          <div className="hero-badge-anim inline-flex items-center gap-2 bg-white/10 glass-card border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Open 24×7 — Emergency Available</span>
          </div>

          <h1 className="hero-content font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
            Trusted 24×7 Veterinary Care For Your Beloved Pets
          </h1>

          <p className="hero-content text-lg md:text-xl text-blue-100/80 mt-6 max-w-xl leading-relaxed">
            Tirupati Vets provides comprehensive pet healthcare, emergency veterinary services, diagnostics, surgery, vaccination, and advanced treatment facilities in Dwarka, Delhi.
          </p>

          <div className="hero-features-anim flex flex-wrap gap-x-5 gap-y-2 mt-6">
            {['Emergency Support', 'Open 24 Hours', 'Experienced Vets', 'Advanced Facilities'].map((f) => (
              <span key={f} className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-400" />{f}
              </span>
            ))}
          </div>

          <div className="hero-buttons-anim flex flex-wrap gap-4 mt-8">
            <Link to="/contact"
              className="btn-shimmer bg-white text-primary font-semibold px-8 py-4 rounded-2xl text-base hover:bg-blue-50 transition-colors inline-flex items-center gap-2 shadow-lg shadow-black/10">
              <CalendarCheck className="w-5 h-5" />Book Appointment
            </Link>
            <a href="tel:+919717346793"
              className="pulse-emergency bg-emergency hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-colors inline-flex items-center gap-2">
              <PhoneCall className="w-5 h-5" />Emergency Call
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="scroll-indicator-anim w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
