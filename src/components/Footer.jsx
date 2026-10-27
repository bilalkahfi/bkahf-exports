import React from 'react'
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whatsappUrl = "https://wa.me/6281218829662?text=Hello%20Bkahf%20Exports,%20I%20am%20interested%20in%20your%20products..."

  return (
    <footer className="bg-industrial-950 border-t border-industrial-800 text-slate-400 text-xs">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 columns wide on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-amber via-brand-amberDark to-industrial-900 flex items-center justify-center font-bold text-black text-lg shadow-md">
                B
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                BKAHF <span className="text-brand-amber">EXPORTS</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Indonesian agricultural commodities & coconut derivatives trading company and sourcing partner. Connecting global B2B buyers with premium coconut shell briquettes, derivatives, and OEM packaging solutions.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-brand-amber shrink-0" />
              <span>Bogor, West Java, Indonesia • Port of Tanjung Priok</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-amber transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-brand-amber transition-colors">Our Products</a></li>
              <li><a href="#trade-logistics" className="hover:text-brand-amber transition-colors">Trade & Logistics</a></li>
              <li><a href="#contact" className="hover:text-brand-amber transition-colors">Contact & Quotes</a></li>
            </ul>
          </div>

          {/* Commodities */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Commodities</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-brand-amber transition-colors">Coconut Shell Briquettes</a></li>
              <li><a href="#products" className="hover:text-brand-amber transition-colors">Shisha & BBQ Briquettes</a></li>
              <li><a href="#products" className="hover:text-brand-amber transition-colors">Coconut Derivatives</a></li>
              <li><a href="#products" className="hover:text-brand-amber transition-colors">OEM & Custom Packaging</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Contact Direct</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:bilalkahfi94@gmail.com"
                  className="hover:text-brand-amber transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-amber shrink-0" />
                  <span>bilalkahfi94@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>+62 81218829662</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-industrial-900 border border-industrial-800 text-[11px] text-brand-amber">
                  Inquiries: Active
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-industrial-900 bg-industrial-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Bkahf Exports. All rights reserved. Based in Bogor, Indonesia.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
