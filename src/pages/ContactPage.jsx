import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import { Calendar, User, Phone, MessageSquare, CheckCircle, Sparkles, Loader } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    petType: 'dog',
    phone: '',
    date: '',
    time: 'morning',
    notes: ''
  })
  
  const [status, setStatus] = useState('idle') // idle, loading, success
  const [bookingRef, setBookingRef] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.ownerName || !formData.petName || !formData.phone || !formData.date) {
      return
    }
    
    setStatus('loading')
    
    // Simulate API booking submit
    setTimeout(() => {
      setStatus('success')
      setBookingRef('TV-' + Math.floor(100000 + Math.random() * 900000))
    }, 1500)
  }

  const resetForm = () => {
    setFormData({
      ownerName: '',
      petName: '',
      petType: 'dog',
      phone: '',
      date: '',
      time: 'morning',
      notes: ''
    })
    setStatus('idle')
  }

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We are open 24/7. Locate us on the map, call us directly, or book your appointment online."
      />
      
      <Contact />

      {/* Appointment Form Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-white dark:bg-bg-dark border-t border-slate-200/50 dark:border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto anim-up mb-14">
            <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Book Visit</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-main dark:text-white">Schedule Appointment</h2>
            <p className="text-text-muted dark:text-slate-400 text-base mt-3">
              Fill in the form below and our coordinators will confirm your slot with a call or WhatsApp message within 15 minutes.
            </p>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-900/30 rounded-3xl border border-slate-200/50 dark:border-white/5 p-8 md:p-12 shadow-sm relative overflow-hidden anim-up">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent" />
            
            {status === 'success' ? (
              <div className="text-center py-10 anim-scale">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-main dark:text-white mb-2">Appointment Request Submitted!</h3>
                <p className="text-text-muted dark:text-slate-400 max-w-md mx-auto text-sm leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-text-main dark:text-white">{formData.ownerName}</span>. We have received your booking request for your pet <span className="font-semibold text-text-main dark:text-white">{formData.petName}</span>.
                </p>
                <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-2xl p-5 max-w-sm mx-auto mb-8 shadow-sm">
                  <div className="text-xs text-text-muted dark:text-slate-400 uppercase tracking-wider">Booking Ref ID</div>
                  <div className="text-xl font-heading font-bold text-primary dark:text-blue-400 mt-1 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4.5 h-4.5 text-amber-500" />
                    {bookingRef}
                  </div>
                  <div className="text-xs text-text-muted dark:text-slate-400 mt-3 border-t border-slate-100 dark:border-white/5 pt-3">
                    Scheduled for: <span className="font-medium text-text-main dark:text-slate-200">{formData.date} ({formData.time})</span>
                  </div>
                </div>
                <button onClick={resetForm}
                  className="bg-primary hover:bg-primary-light text-white font-medium px-8 py-3.5 rounded-xl transition-colors text-sm shadow-md">
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-main dark:text-slate-200 mb-2">Owner's Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        name="ownerName"
                        required
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary dark:focus:border-blue-500 text-text-main dark:text-slate-200 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main dark:text-slate-200 mb-2">Pet Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="petName"
                        required
                        value={formData.petName}
                        onChange={handleChange}
                        placeholder="Buddy"
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary dark:focus:border-blue-500 text-text-main dark:text-slate-200 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-main dark:text-slate-200 mb-2">Pet Category</label>
                    <select 
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary dark:focus:border-blue-500 text-text-main dark:text-slate-200 transition-colors">
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="bird">Bird</option>
                      <option value="other">Other / Exotic</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main dark:text-slate-200 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary dark:focus:border-blue-500 text-text-main dark:text-slate-200 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-main dark:text-slate-200 mb-2">Preferred Date <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                      <input 
                        type="date" 
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary dark:focus:border-blue-500 text-text-main dark:text-slate-200 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main dark:text-slate-200 mb-2">Preferred Time Slot</label>
                    <select 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary dark:focus:border-blue-500 text-text-main dark:text-slate-200 transition-colors">
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                      <option value="night">Late Night / Emergency (8:00 PM - 12:00 AM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-main dark:text-slate-200 mb-2">Brief Notes / Reason for Visit</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <textarea 
                      name="notes"
                      rows="4"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Detail any symptoms or treatment history here..."
                      className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary dark:focus:border-blue-500 text-text-main dark:text-slate-200 transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-2 text-right">
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full md:w-auto btn-shimmer bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2 text-sm shadow-md shadow-primary/10 disabled:opacity-75">
                    {status === 'loading' ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" /> Scheduling...
                      </>
                    ) : (
                      'Request Appointment'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
