import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Providing compassionate veterinary services and expert care for your beloved pets with over 30 years of excellence."
      />
      <About />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}
