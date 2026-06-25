import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import Facilities from '../components/Facilities'
import CTABanner from '../components/CTABanner'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Do you require appointments, or can I walk in?',
    a: 'While we accept emergency trauma cases 24/7 without notice, we highly recommend booking an appointment for routine checkups, vaccinations, and non-urgent consultations to minimize your wait time.'
  },
  {
    q: 'Do you offer home visits for pets?',
    a: 'Yes, we offer veterinary home visit services for vaccinations, routine health checks, and minor treatments in Dwarka and adjacent sectors. Contact our helpline to arrange a slot.'
  },
  {
    q: "What should I bring to my pet's first vet checkup?",
    a: "Please bring any prior vaccination record sheets, prescription history files, lists of foods/supplements, and ensure dogs are on a leash and cats are secure in a ventilated carrier."
  },
  {
    q: 'Are you open during national holidays or weekends?',
    a: 'Yes, Tirupati Vets operates 24 hours a day, 7 days a week, 365 days a year. Our emergency diagnostics, surgical theatre, ICU, and inpatient monitoring are always fully active.'
  }
]

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive veterinary care, advanced diagnostic testing, dental checkups, surgeries, and specialized pet wellness programs."
      />
      <Services />
      <Facilities />

      {/* FAQ Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-slate-50/80 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto anim-up mb-16">
            <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">FAQ</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-main dark:text-white">Frequently Asked Questions</h2>
            <p className="text-text-muted dark:text-slate-400 text-base mt-3">Answers to common questions about our clinic guidelines, appointments, and care services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div key={idx} 
                  className="anim-up bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-semibold text-text-main dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary/70 dark:text-blue-400/75 flex-shrink-0" />
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 border-t border-slate-50 dark:border-white/5' : 'max-h-0'} overflow-hidden`}>
                    <p className="px-6 py-5 text-text-muted dark:text-slate-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
