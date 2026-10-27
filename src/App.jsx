import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import TradeLogistics from './components/TradeLogistics'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('')
  const whatsappUrl = "https://wa.me/6281218829662?text=Hello%20Bkahf%20Exports,%20I%20am%20interested%20in%20your%20products..."

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
        <Products />

        {/* 4. Trade & Logistics Info Section */}
        <TradeLogistics />

        {/* 5. Contact Section */}
        <Contact initialProduct={selectedProduct} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button for Instant B2B Inquiries */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all text-xs sm:text-sm group"
          title="Chat with Bkahf Exports on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-black fill-current" />
          <span className="hidden sm:inline">Inquire via WhatsApp</span>
        </a>
      </aside>
    </div>
  )
}
