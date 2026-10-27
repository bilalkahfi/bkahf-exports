import React from 'react'
import { Ship, Anchor, ShieldCheck, FileCheck, PackageCheck, Truck } from 'lucide-react'

export default function TradeLogistics() {
  const tradePillars = [
    {
      title: 'Supported Incoterms',
      value: 'FOB (Jakarta/Tanjung Priok), CIF, CFR',
      description: 'Flexible commercial terms tailored to your freight preference, whether you handle ocean booking or require CIF to your destination port.',
      icon: Ship,
      highlight: true,
    },
    {
      title: 'Primary Loading Port',
      value: 'Port of Tanjung Priok, Jakarta (IDTPP)',
      description: 'Indonesia’s main international container port, located approximately 50 km from our Bogor operations hub for efficient stuffing and vessel departure.',
      icon: Anchor,
      highlight: false,
    },
    {
      title: 'Batch Quality Control',
      value: 'Direct On-Site Inspection',
      description: 'We supervise production runs with vetted manufacturing partners, verifying dimensions, packaging integrity, and moisture seals before sealing containers.',
      icon: ShieldCheck,
      highlight: false,
    },
    {
      title: 'Export Documentation',
      value: 'Full Compliance Clearance',
      description: 'Complete export paperwork provided: Bill of Lading (B/L), Certificate of Origin (COO), Phytosanitary Certificate, Commercial Invoice, and Packing List.',
      icon: FileCheck,
      highlight: false,
    },
    {
      title: 'Container Load Capacity',
      value: '20ft & 40ft FCL Shipments',
      description: 'We coordinate full container loads (FCL) with shrink-wrapped pallets or floor-loaded master cartons according to your port unloading setup.',
      icon: PackageCheck,
      highlight: false,
    },
    {
      title: 'Ground Transit in Indonesia',
      value: 'Bogor to Port Transport',
      description: 'Safe transport from regional harvest kilns to port warehousing with continuous dispatch tracking and direct photo updates.',
      icon: Truck,
      highlight: false,
    },
  ]

  return (
    <section id="trade-logistics" className="py-24 bg-industrial-900 border-t border-industrial-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-850 border border-brand-amber/30 text-brand-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Commercial Terms
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Trade & Logistics Info
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Straightforward shipping terms, verified port clearance, and transparent handling for international B2B buyers.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tradePillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-gradient-to-b from-industrial-850 to-industrial-950 border-brand-amber/60 shadow-xl shadow-brand-amber/5'
                    : 'bg-industrial-950 border-industrial-800 hover:border-industrial-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-industrial-900 border border-industrial-700/80 flex items-center justify-center text-brand-amber">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.highlight && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-brand-amber px-2.5 py-1 rounded-full">
                        Core Incoterms
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  
                  <div className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                    {item.value}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Direct Quote Help Strip */}
        <div className="bg-industrial-950 border border-industrial-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Need a Freight Quote to Your Nearest Port?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Provide your destination port name (e.g. Jebel Ali, Rotterdam, Mersin, Santos) for indicative CIF freight calculations.
            </p>
          </div>
          <a
            href="https://wa.me/6281218829662?text=Hello%20Bkahf%20Exports,%20I%20would%20like%20to%20request%20a%20freight%20and%20CIF%20quote%20to%20my%20destination%20port."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-brand-amber hover:bg-brand-amberLight text-black font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Inquire Port Rates
          </a>
        </div>

      </div>
    </section>
  )
}
