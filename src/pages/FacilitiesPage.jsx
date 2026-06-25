import PageHeader from '../components/PageHeader'
import Facilities from '../components/Facilities'
import CTABanner from '../components/CTABanner'

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader 
        title="Our Facilities" 
        subtitle="Explore our advanced diagnostic laboratory, surgical theatre, sterile treatment wards, and clean recovery spaces."
      />
      <Facilities />
      <CTABanner />
    </>
  )
}
