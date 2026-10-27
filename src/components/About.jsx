import React from 'react'
import { MapPin, CheckCircle, ShieldCheck, Search, FileText, Anchor } from 'lucide-react'

export default function About() {
  const pillars = [
    {
      title: 'Reliable Sourcing on the Ground',
      description: 'Headquartered in Bogor, West Java, we maintain direct proximity to harvest regions and vetted manufacturing partners across Java and Sumatra.',
      icon: Search,
    },
    {
      title: 'Stringent Quality Control',
      description: 'We perform on-site batch verification and physical checks prior to stuffing, ensuring moisture, density, and appearance match your requested specs.',
      icon: ShieldCheck,
    },
    {
      title: 'Clear Export Execution',
      description: 'From container booking at Port Tanjung Priok to Bill of Lading, Certificate of Origin, and export documentation, we oversee every logistics step.',
      icon: FileText,
    },
  ]

  return (
    <section id="about" className="py-24 bg-industrial-900 border-y border-industrial-800/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-850 border border-brand-amber/30 text-brand-amber text-xs font-semibold uppercase tracking-wider mb-4">
            About Bkahf Exports
          </div>
          {/* Exact Requested Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            Bridging Indonesian Quality with Global Demand
          </h2>
          {/* Exact Requested Text */}
          <p className="text-lg text-slate-300 leading-relaxed">
            Based in Bogor, Indonesia, Bkahf Exports acts as your reliable trading partner on the ground. We work closely with strictly vetted local manufacturing partners to source premium commodities. We focus on stringent quality control and seamless international logistics, ensuring your cargo is shipped safely and meets international standards.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Sourcing & Trading Model */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="w-2.5 h-6 bg-brand-amber rounded-sm inline-block" />
              Your Eyes and Hands in Indonesia
            </h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Navigating cross-border commodity procurement requires absolute clarity. Rather than making inflated claims, we offer straightforward trading representation: we identify the right local producer for your requirements, negotiate transparent terms, verify batch specifications independently, and supervise container loading before vessel departure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div key={idx} className="bg-industrial-950/80 border border-industrial-800 p-5 rounded-xl hover:border-brand-amber/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-industrial-900 border border-industrial-800 flex items-center justify-center text-brand-amber mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="p-4 rounded-xl bg-industrial-950/60 border border-industrial-800/90 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-300">
                <span className="text-white font-semibold">Honest & Transparent Representation:</span> We do not mark up unexpected surcharges or conceal origin details. You receive clear documentation, lab reports upon request, and direct photo/video updates throughout stuffing.
              </p>
            </div>
          </div>

          {/* Right Column: Trading Entity Profile */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-industrial-850 to-industrial-950 border border-industrial-700/60 p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-6 border-b border-industrial-800">
                <div>
                  <span className="text-xs font-semibold text-brand-amber uppercase tracking-wider block">Company Role</span>
                  <h4 className="text-xl font-bold text-white">Trading & Sourcing Partner</h4>
                </div>
                <div className="px-3 py-1 bg-brand-amber/10 border border-brand-amber/30 text-brand-amber rounded-full text-xs font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Bogor, Indonesia
                </div>
              </div>

              {/* Operating details */}
              <div className="py-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-industrial-800/60">
                  <span className="text-sm text-slate-400">Primary Hub</span>
                  <span className="text-sm font-semibold text-white">Bogor, West Java</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-industrial-800/60">
                  <span className="text-sm text-slate-400">Loading Port</span>
                  <span className="text-sm font-semibold text-white">Port Tanjung Priok (Jakarta)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-industrial-800/60">
                  <span className="text-sm text-slate-400">Manufacturing Network</span>
                  <span className="text-sm font-semibold text-brand-amber">Strictly Vetted Local Partners</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-industrial-800/60">
                  <span className="text-sm text-slate-400">Target Buyers</span>
                  <span className="text-sm font-semibold text-white">Wholesalers, Distributors, B2B Importers</span>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-2 pt-4 border-t border-industrial-800 flex items-center gap-3 text-slate-400 text-xs">
                <Anchor className="w-4 h-4 text-brand-amber shrink-0" />
                <span>Dedicated on-the-ground communication via WhatsApp and email for rapid quotation turnaround.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
