import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Projects from '@/app/components/Projects'
import Experience from '@/app/components/Experience'
import Certifications from '@/app/components/Certifications'
import StarryBackground from '@/app/components/StarryBackground'
import Organization from '@/app/components/Organization'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Competition from './components/Competition'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative px-1">
      <StarryBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Profile />
        <Skills />
        <Experience />
        <Organization />
        <Competition />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </main>
  )
}