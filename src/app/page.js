"use client"

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
import AnimatedSection from './components/AnimatedSection'
import { useRouter } from 'next/navigation'
import BottomPage from './components/BottomPage'

export default function Home() {

  return (
    <main className="min-h-screen bg-black relative px-1">
      <StarryBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AnimatedSection animation="slideUp">
          <Profile />
        </AnimatedSection>
        <AnimatedSection animation="slideUp">
          <Skills />
        </AnimatedSection>
        <AnimatedSection animation="slideUp">
          <Experience />
        </AnimatedSection>
        <AnimatedSection animation="scale">
          <Organization />
        </AnimatedSection>
        <AnimatedSection animation="slideUp">
          <Competition />
        </AnimatedSection>
        <AnimatedSection animation="slideUp">
          <Projects />
        </AnimatedSection>
        <AnimatedSection animation="fade">
          <Certifications />
        </AnimatedSection>
        <AnimatedSection animation="slideUp">
          <BottomPage />
        </AnimatedSection>
        <Footer />
      </div>
    </main>
  )
}