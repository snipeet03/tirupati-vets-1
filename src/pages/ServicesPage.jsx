import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import Facilities from '../components/Facilities'
import CTABanner from '../components/CTABanner'

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive veterinary care, advanced diagnostic testing, dental checkups, surgeries, and specialized pet wellness programs."
      />
      <Services />
      <Facilities />
      <CTABanner />
    </>
  )
}
