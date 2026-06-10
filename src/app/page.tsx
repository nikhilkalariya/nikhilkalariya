import data from '@/data/portfolio.json'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import CertificationsSection from '@/components/CertificationsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero profile={data.profile} stats={data.stats} />
      <Skills skills={data.skills} />
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
      <CertificationsSection certifications={data.certifications} />
      <Footer />
    </main>
  )
}
