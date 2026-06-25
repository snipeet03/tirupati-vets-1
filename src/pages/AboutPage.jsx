import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import { Award, Mail } from 'lucide-react'

const team = [
  {
    name: 'Dr. Devender Kumar',
    role: 'Senior Surgeon & Founder',
    edu: 'D.V.M, M.V.Sc (Surgery)',
    desc: 'With over 25 years of active practice, Dr. Devender specializes in complex orthopedic and soft-tissue surgeries.',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
  },
  {
    name: 'Dr. Shalini Singh',
    role: 'Consultant Vet & Feline Expert',
    edu: 'B.V.Sc & A.H, M.V.Sc (Medicine)',
    desc: 'Dr. Shalini is our lead internal medicine expert, dedicated to feline healthcare, preventive wellness, and pet behavior therapy.',
    img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?w=400&q=80',
  },
  {
    name: 'Dr. Amit Verma',
    role: 'Veterinary Radiologist',
    edu: 'B.V.Sc & A.H',
    desc: 'Dr. Amit leads our advanced diagnostics department, specializing in digital X-rays, ultrasound imaging, and dental surgery.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  }
]

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Providing compassionate veterinary services and expert care for your beloved pets with over 30 years of excellence."
      />
      <About />
      <Stats />
      
      {/* Team Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-slate-50/80 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto anim-up mb-16">
            <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Our Experts</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white">Meet Our Veterinarians</h2>
            <p className="text-text-muted dark:text-slate-400 text-lg mt-4">Highly qualified and compassionate doctors dedicated to providing the best care for your pets.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={member.name} className={`anim-up stagger-${i+1} group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/5 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2`}>
                <div className="relative h-72 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-2">
                      <span className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer"><Mail className="w-4 h-4" /></span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-xs text-primary dark:text-blue-400 font-semibold tracking-wider uppercase mb-1">{member.role}</div>
                  <h3 className="font-heading font-bold text-xl text-text-main dark:text-white">{member.name}</h3>
                  <div className="text-xs text-text-muted dark:text-slate-400 font-medium mb-4 flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> {member.edu}</div>
                  <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
    </>
  )
}
