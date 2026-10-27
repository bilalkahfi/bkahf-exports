import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const whatsappUrl = "https://wa.me/6281218829662?text=Hello%20Bkahf%20Exports,%20I%20am%20interested%20in%20your%20products..."

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Trade & Logistics', href: '#trade-logistics' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-industrial-950/95 backdrop-blur-md border-b border-industrial-800/80 shadow-2xl py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Text Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-amber via-brand-amberDark to-industrial-900 flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-brand-amber/20 group-hover:scale-105 transition-transform">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                BKAHF <span className="text-brand-amber">EXPORTS</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Indonesia • Sourcing Partner
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-amber transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white bg-industrial-900 border border-industrial-700/60 px-3.5 py-2.5 rounded-lg hover:border-brand-amber/50 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-brand-amber to-brand-amberLight hover:from-brand-amberLight hover:to-brand-gold px-5 py-2.5 rounded-lg shadow-lg shadow-brand-amber/25 hover:shadow-brand-amber/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold bg-emerald-500 text-black px-3 py-1.5 rounded-md flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-industrial-900 border border-industrial-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-industrial-800 bg-industrial-950/98 rounded-2xl p-5 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-brand-amber transition-colors py-1 border-b border-industrial-850"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-black bg-emerald-500 hover:bg-emerald-400 py-3 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire via WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-black bg-brand-amber hover:bg-brand-amberLight py-3 rounded-lg"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
