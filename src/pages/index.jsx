import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Call Automation - AI-Powered Call Handling</title>
        <meta name="description" content="AI handles every inbound call in under 3 seconds — qualifying leads, booking appointments, and capturing revenue." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}