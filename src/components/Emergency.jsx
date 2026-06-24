import { AlertTriangle, PhoneCall, MessageCircle, Zap, Truck, HeartPulse, BedDouble } from 'lucide-react'

export default function Emergency() {
  return (
    <section id="emergency" className="py-20 md:py-28 px-4 md:px-6 bg-slate-900 dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-900/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emergency/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="anim-up inline-flex items-center gap-2 bg-emergency/20 border border-emergency/30 rounded-full px-5 py-2 mb-8">
          <AlertTriangle className="w-4 h-4 text-emergency" />
          <span className="text-emergency text-sm font-semibold">Emergency Services</span>
        </div>

        <h2 className="anim-up font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
          24×7 Emergency<br />Veterinary Support
        </h2>

        <p className="anim-up text-slate-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Our emergency team is available round-the-clock to provide immediate medical assistance when your pet needs urgent care. Don't hesitate — every second counts.
        </p>

        <div className="anim-up flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="tel:+919717346793"
            className="pulse-emergency bg-emergency hover:bg-red-600 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors inline-flex items-center gap-3">
            <PhoneCall className="w-6 h-6" />Call Now: +91 97173 46793
          </a>
          <a href="https://wa.me/919717346793" target="_blank" rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-colors inline-flex items-center gap-3">
            <MessageCircle className="w-5 h-5" />WhatsApp
          </a>
        </div>

        <div className="anim-up grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: <Zap className="w-6 h-6 text-yellow-400" />, label: 'Quick Response' },
            { icon: <Truck className="w-6 h-6 text-blue-400" />, label: 'On-Call Vets' },
            { icon: <HeartPulse className="w-6 h-6 text-red-400" />, label: 'Critical Care' },
            { icon: <BedDouble className="w-6 h-6 text-green-400" />, label: 'Overnight Monitoring' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-14 h-14 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <span className="text-slate-300 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
