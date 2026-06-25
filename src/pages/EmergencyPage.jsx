import PageHeader from '../components/PageHeader'
import Emergency from '../components/Emergency'

export default function EmergencyPage() {
  return (
    <>
      <PageHeader 
        title="24/7 Emergency Care" 
        subtitle="Critical and urgent veterinary medical assistance when your pet needs it most. Available 365 days a year."
      />
      <Emergency />
      
      {/* Emergency First-Aid Guidelines Section */}
      <section className="py-16 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main dark:text-white mb-6 text-center">
            What to do in an Emergency
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
              <h3 className="font-heading font-semibold text-lg text-primary dark:text-blue-400 mb-2">1. Stay Calm & Keep Pet Safe</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm">
                Speak in a quiet, soothing voice. Check for responsiveness. Place your pet on a blanket or flat board if you need to carry them to prevent further injury.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
              <h3 className="font-heading font-semibold text-lg text-primary dark:text-blue-400 mb-2">2. Call Us Immediately</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm">
                Call our emergency line at <a href="tel:+919717346793" className="font-bold underline hover:text-primary transition-colors">+91 97173 46793</a>. This allows us to prepare our surgical suite or treatment ward before you arrive.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
              <h3 className="font-heading font-semibold text-lg text-primary dark:text-blue-400 mb-2">3. Handle Injured Pets Carefully</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm">
                Even gentle pets may bite when in severe pain. Muzzle dogs temporarily if needed (unless vomiting) and wrap cats in a thick towel.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
              <h3 className="font-heading font-semibold text-lg text-primary dark:text-blue-400 mb-2">4. Head Straight to Our Clinic</h3>
              <p className="text-text-muted dark:text-slate-400 text-sm">
                Get your pet to our clinic quickly. Drive safely. We are located near sector 23B, Dwarka, Delhi. We are open 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
