import React from 'react'
import { MapPin, CheckCircle2, ShieldCheck, Factory, Award, Anchor } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      title: 'Strategic Hub in Bogor',
      description: 'Conveniently situated near major agricultural harvest belts in West Java and Sumatra, with fast transit to Jakarta Port (Tanjung Priok).',
      icon: MapPin,
    },
    {
      title: 'Vetted Manufacturing',
      description: 'Direct relationships with modern production facilities ensuring consistent kiln temperatures, high density, and clean cut blocks.',
      icon: Factory,
    },
    {
      title: 'Full Export Compliance',
      description: 'Complete assistance with Phytosanitary Certificates, Certificate of Origin (COO), MSDS, and Surveyor Inspections (SGS/Sucofindo).',
      icon: Award,
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            Your Trusted Export Partner
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Based in Bogor, Indonesia, Bkahf Exports bridges the gap between top-tier local manufacturing and global market demands. We specialize in sourcing, strict quality control, and seamless international logistics, ensuring every shipment meets international standards.
          </p>
        </div>

        {/* 2-Column Feature & Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Strengths & Process Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="w-2.5 h-6 bg-brand-amber rounded-sm inline-block" />
              Bridging Indonesian Producers with the World
            </h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We understand the critical pain points international buyers face when importing commodities from Southeast Asia: inconsistent batch quality, delayed dispatch, and unclear documentation. Bkahf Exports acts as your eyes and hands on the ground in Indonesia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, idx) => {
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
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-300">
                <span className="text-white font-semibold">Ready for Container Load Shipments (FCL):</span> Available in 20ft (approx. 17-18 MT) and 40ft High Cube (approx. 26-27 MT) configurations shipped to major ports in the Middle East, Europe, Americas, and Asia.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Industrial Card with Live Origin Details */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-industrial-850 to-industrial-950 border border-industrial-700/60 p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-6 border-b border-industrial-800">
                <div>
                  <span className="text-xs font-semibold text-brand-amber uppercase tracking-wider block">Headquarters</span>
                  <h4 className="text-xl font-bold text-white">Bogor, West Java</h4>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Export Facility
                </div>
              </div>

              {/* Specification stats grid */}
              <div className="py-6 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-industrial-800/60">
                  <span className="text-sm text-slate-400">Loading Port</span>
                  <span className="text-sm font-semibold text-white">Port of Tanjung Priok (IDTPP)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-industrial-800/60">
                  <span className="text-sm text-slate-400">Incoterms Supported</span>
                  <span className="text-sm font-semibold text-brand-amber">FOB, CIF, CFR</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-industrial-800/60">
                  <span className="text-sm text-slate-400">Main Focus</span>
                  <span className="text-sm font-semibold text-white">100% Coconut Shell Briquettes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-industrial-800/60">
                  <span className="text-sm text-slate-400">Target Markets</span>
                  <span className="text-sm font-semibold text-white">Middle East, Europe, North America, Asia</span>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-2 pt-4 border-t border-industrial-800 flex items-center gap-3 text-slate-400 text-xs">
                <Anchor className="w-4 h-4 text-brand-amber shrink-0" />
                <span>End-to-end container clearance, bill of lading documentation, and laboratory certificate verification.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
