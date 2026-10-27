import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('')

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName)
    const contactElem = document.getElementById('contact')
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans selection:bg-brand-amber selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Our Products Section */}
        <Products onSelectProduct={handleSelectProduct} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Contact Section */}
        <Contact initialProduct={selectedProduct} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button for Instant B2B Inquiries */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/6281218829662?text=Hello%20Bkahf%20Exports%2C%20I%20would%20like%20to%20inquire%20about%20your%20export%20commodities."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all text-xs sm:text-sm group"
          title="Chat with Bkahf Exports on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-black fill-current" />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>
      </aside>
    </div>
  )
}
