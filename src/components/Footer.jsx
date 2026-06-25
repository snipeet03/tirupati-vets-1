import { HeartPulse, MapPin, Phone, Clock, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg leading-none block">Tirupati Vets</span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase">24×7 Pet Care</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trusted veterinary hospital in Dwarka, Delhi providing comprehensive pet healthcare with compassion and excellence since 30+ years.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-slate-300 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/services', 'Services'],
                ['/emergency', 'Emergency'],
                ['/gallery', 'Gallery'],
                ['/contact', 'Contact']
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-slate-300 mb-5">Services</h4>
            <ul className="space-y-3">
              {['Vaccination', 'Emergency Care', 'Pet Surgery', 'Diagnostics', 'Dental Care', 'Health Checkups'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase text-slate-300 mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Pocket-10, Sarvanchal Enclave, Plot No. 124, Golf Course Road, Sector 23B, Dwarka, Delhi – 110077</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href="tel:+919717346793" className="text-slate-400 hover:text-white text-sm transition-colors">+91 97173 46793</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Open 24×7, 365 Days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">Copyright © 2025 Tirupati Vets. All rights reserved.</p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Designed with <Heart className="w-3 h-3 text-emergency" /> for pets and their families
          </p>
        </div>
      </div>
    </footer>
  )
}
