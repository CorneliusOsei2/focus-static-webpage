import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Team } from '@/components/Team'
import { Products } from '@/components/Products'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <Testimonials />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
