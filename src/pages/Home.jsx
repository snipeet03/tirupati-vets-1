import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}
