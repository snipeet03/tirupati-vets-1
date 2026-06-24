import { CalendarCheck, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-purple-800" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%,white 1px,transparent 1px),radial-gradient(circle at 80% 50%,white 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center anim-up">
        <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
          Give Your Pet The Care They Deserve
        </h2>
        <p className="text-blue-100/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          Schedule an appointment today or reach out anytime — we're always here for your furry family members.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="#contact"
            className="btn-shimmer bg-white text-primary font-bold px-10 py-4 rounded-2xl text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2 shadow-lg shadow-black/10">
            <CalendarCheck className="w-5 h-5" />Book Appointment
          </a>
          <a href="tel:+919717346793"
            className="bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-colors inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
