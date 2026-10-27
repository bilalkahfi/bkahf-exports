import React from 'react'
import { ArrowRight, MessageCircle, Shield, Ship, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const heroImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
  const whatsappUrl = "https://wa.me/6281218829662?text=Hello%20Bkahf%20Exports,%20I%20am%20interested%20in%20your%20products..."

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-industrial-950">
      {/* Background Cargo & Logistics Image with Dark Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="International Cargo and Logistics Containers"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse transition-transform duration-1000"
        />
        {/* Layered dark gradients for clean text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/85 to-industrial-950/70" />
        <div className="absolute inset-0 bg-industrial-950/40" />
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.25) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="max-w-4xl">
          
          {/* Top Location & Positioning Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-900/90 border border-brand-amber/30 text-slate-300 text-xs sm:text-sm font-medium mb-6 shadow-xl backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-brand-amber animate-ping" />
            <span className="text-brand-amber font-semibold">Bogor, Indonesia</span>
            <span className="text-industrial-600">|</span>
            <span>Trading Company & Sourcing Partner</span>
          </div>

          {/* Exact Requested Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Premium Coconut Derivatives & Export Commodities from Indonesia.
          </h1>

          {/* Exact Requested Hero Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed mb-10 max-w-3xl">
            Your trusted sourcing partner. Connecting global B2B markets with high-quality, sustainably sourced Indonesian agricultural products.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            {/* Exact Requested CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-black bg-gradient-to-r from-brand-amber via-brand-amberLight to-brand-gold hover:from-brand-amberLight hover:to-brand-gold shadow-2xl shadow-brand-amber/30 hover:shadow-brand-amber/50 transform hover:-translate-y-0.5 transition-all text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Inquire via WhatsApp</span>
            </a>

            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-industrial-900/90 hover:bg-industrial-850 border border-industrial-700/80 hover:border-slate-500 backdrop-blur-md transition-all text-center"
            >
              <span>View Commodities</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Honest Trading & Sourcing Value Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-industrial-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-industrial-900 border border-industrial-700/60 flex items-center justify-center text-brand-amber shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Sourcing Partner</div>
                <div className="text-xs text-slate-400">On-the-ground in Bogor</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-industrial-900 border border-industrial-700/60 flex items-center justify-center text-brand-amber shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Vetted Producers</div>
                <div className="text-xs text-slate-400">Strict Quality Checks</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-industrial-900 border border-industrial-700/60 flex items-center justify-center text-brand-amber shrink-0">
                <Ship className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Port Tanjung Priok</div>
                <div className="text-xs text-slate-400">Direct Container Loading</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-industrial-900 border border-industrial-700/60 flex items-center justify-center text-brand-amber shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Export Terms</div>
                <div className="text-xs text-slate-400">FOB, CIF, CFR</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
