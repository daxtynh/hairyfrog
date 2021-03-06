import Head from 'next/head'
import Header from '@components/Header.js'
import Footer from '@components/Footer.js'
import { Hero } from '@components/Hero.js'
import { About } from '@components/About.js'
import { Portfolio } from '@components/Portfolio.js'
import { Products } from '@components/Products.js'
import { Contact } from '@components/Contact.js'
export default function Home() {
  return (
    <div className="relative bg-gray-50">
      <Head>
        <title>Home Page!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Welcome to my app!" />
      <main>
        <Hero />
        <Portfolio />
        <Products />
        <About />
        <Contact />
      </main>
      

      <Footer />
    </div>
  )
}
