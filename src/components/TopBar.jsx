import { Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-primary dark:bg-slate-900 text-white text-sm py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-4 md:gap-6 flex-wrap">
          <a href="tel:+919717346793" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+91 97173 46793</span>
            <span className="sm:hidden">Call Now</span>
          </a>
          <span className="flex items-center gap-1.5 opacity-90">
            <MapPin className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Dwarka, Delhi</span>
            <span className="md:hidden">Delhi</span>
          </span>
          <span className="flex items-center gap-1.5 opacity-90">
            <Clock className="w-3.5 h-3.5" />
            Open 24×7
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/919717346793" target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full text-xs font-medium transition-colors">
            <MessageCircle className="w-3.5 h-3.5" />WhatsApp
          </a>
          <a href="#contact"
            className="hidden sm:flex items-center gap-1.5 bg-white/15 hover:bg-white/25 px-3 py-1 rounded-full text-xs font-medium transition-colors">
            <Calendar className="w-3.5 h-3.5" />Book Appointment
          </a>
        </div>
      </div>
    </div>
  )
}
