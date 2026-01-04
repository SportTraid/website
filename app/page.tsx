import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Features from '@/components/Features'
import Intro from '@/components/Intro'
import Footer from '@/components/Footer'
import HelpUsBuild from '@/components/HelpUsBuild'
import SportTriad from '@/components/SportTriad'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ marginBottom: 0, paddingBottom: 0 }}>
      <Navbar />
      <Hero />
      <Pillars />
      <Features />
      <Intro />
      <HelpUsBuild />
      <SportTriad />
    </main>
  )
}

