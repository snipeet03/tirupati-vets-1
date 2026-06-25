import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We are open 24/7. Locate us on the map, call us directly, or book your appointment online."
      />
      <Contact />
    </>
  )
}
