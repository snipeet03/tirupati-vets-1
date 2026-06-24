import { HeartPulse, MapPin, Phone, Clock, PhoneCall, Navigation, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 md:px-6 bg-slate-50/80 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto anim-up">
          <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Get In Touch</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <div className="anim-left rounded-3xl overflow-hidden h-[400px] md:h-full min-h-[400px] shadow-lg border border-slate-200/50 dark:border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8!2d77.04!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzQ4LjAiTiA3N8KwMDInMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale dark:grayscale-0 dark:brightness-90"
              title="Tirupati Vets Location"
            />
          </div>

          <div className="anim-right">
            <div className="bg-white dark:bg-slate-800/60 rounded-3xl p-8 md:p-10 border border-slate-100 dark:border-white/5 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-primary dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-text-main dark:text-white">Tirupati Vets</h3>
                  <p className="text-text-muted dark:text-slate-400 text-sm">Veterinary Hospital</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-text-main dark:text-white text-sm">Address</div>
                    <div className="text-text-muted dark:text-slate-400 text-sm mt-0.5">
                      Pocket-10, Sarvanchal Enclave, Plot No. 124, Golf Course Road, Near IGL Station, Sector 23B, Dwarka, Delhi – 110077
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-text-main dark:text-white text-sm">Phone</div>
                    <a href="tel:+919717346793" className="text-primary dark:text-blue-400 text-sm hover:underline">+91 97173 46793</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="font-medium text-text-main dark:text-white text-sm">Hours</div>
                    <div className="text-text-muted dark:text-slate-400 text-sm mt-0.5">Open 24×7 | 365 Days a Year</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href="tel:+919717346793"
                  className="flex-1 btn-shimmer bg-primary hover:bg-primary-light text-white font-semibold py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2 text-sm">
                  <PhoneCall className="w-4 h-4" />Call Now
                </a>
                <a href="https://www.google.com/maps/dir//Tirupati+Vets+Dwarka+Delhi" target="_blank" rel="noreferrer"
                  className="flex-1 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 text-text-main dark:text-white font-semibold py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2 text-sm border border-slate-200 dark:border-white/5">
                  <Navigation className="w-4 h-4" />Directions
                </a>
                <a href="https://wa.me/919717346793" target="_blank" rel="noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2 text-sm">
                  <MessageCircle className="w-4 h-4" />WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
