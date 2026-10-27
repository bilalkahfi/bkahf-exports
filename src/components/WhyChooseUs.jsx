import React from 'react'
import { Compass, CheckCircle, Truck, FileCheck, Layers, Users2, ShieldAlert } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Direct from Source',
      description: 'Working closely with strictly vetted manufacturers across Indonesia.',
      detail: 'By bypassing multi-tiered domestic brokers, we secure fresh raw coconut materials at competitive prices, passing direct margin savings to our global importers.',
      icon: Compass,
      accent: 'from-amber-500/20 to-brand-amber/5',
      iconColor: 'text-brand-amber',
      badge: 'Uncompromised Origin',
    },
    {
      title: 'Strict Quality Control',
      description: 'Every batch is tested to meet international export specifications.',
      detail: 'Laboratory verification for ash percentage, moisture, density drop tests, and ignition consistency before pallets are cleared for container stuffing.',
      icon: CheckCircle,
      accent: 'from-emerald-500/20 to-emerald-500/5',
      iconColor: 'text-emerald-400',
      badge: 'Certified Quality',
    },
    {
      title: 'Seamless Logistics',
      description: 'We handle documentation, container stuffing, and freight forwarding to your destination port.',
      detail: 'Full handling of export customs, COO (Certificate of Origin), Phytosanitary inspection, Bill of Lading, and secure vessel booking via Port Tanjung Priok.',
      icon: Truck,
      accent: 'from-blue-500/20 to-blue-500/5',
      iconColor: 'text-blue-400',
      badge: 'End-to-End Delivery',
    },
  ]

  const workflowSteps = [
    {
      step: '01',
      name: 'Inquiry & Requirements',
      desc: 'Submit your product requirements, desired dimensions, packaging format, and destination port.',
    },
    {
      step: '02',
      name: 'Sample & Quotation',
      desc: 'We provide competitive FOB/CIF pricing along with lab-tested sample dispatches for your validation.',
    },
    {
      step: '03',
      name: 'Contract & Production',
      desc: 'Commercial agreement execution followed by tailored production run and packaging printing.',
    },
    {
      step: '04',
      name: 'QC & Port Dispatch',
      desc: 'Rigorous batch quality testing, moisture seal inspection, container stuffing, and shipping to your port.',
    },
  ]

  return (
    <section id="why-us" className="py-24 bg-industrial-900 border-t border-industrial-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-850 border border-brand-amber/30 text-brand-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Our Competitive Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Why Choose Bkahf Exports
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We eliminate international trade friction by combining on-the-ground manufacturing supervision with dependable ocean freight execution.
          </p>
        </div>

        {/* 3 Main Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                className="bg-industrial-950 rounded-2xl border border-industrial-800 p-8 flex flex-col justify-between hover:border-brand-amber/40 transition-all duration-300 relative overflow-hidden group shadow-xl"
              >
                {/* Background subtle gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${reason.accent} rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-industrial-900 border border-industrial-700/80 flex items-center justify-center ${reason.iconColor} shadow-inner`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1 bg-industrial-900 rounded-full border border-industrial-800">
                      {reason.badge}
                    </span>
                  </div>

                  {/* Primary Heading */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-amber transition-colors">
                    {reason.title}
                  </h3>

                  {/* Exact Requested Copy */}
                  <p className="text-sm font-semibold text-brand-amber mb-4 leading-snug">
                    {reason.description}
                  </p>

                  {/* Detailed Explanation */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {reason.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-industrial-850 flex items-center gap-2 text-xs text-slate-400">
                  <FileCheck className="w-4 h-4 text-brand-amber" />
                  <span>Backed by full export documentation</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* B2B Export Workflow Timeline */}
        <div id="workflow" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Our 4-Stage Export Workflow
            </h3>
            <p className="text-sm text-slate-400">
              Clear milestone visibility from preliminary RFQ to destination vessel arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-industrial-950/70 border border-industrial-800 rounded-xl p-6 relative group hover:border-brand-amber/30 transition-all"
              >
                <div className="text-3xl font-black text-brand-amber/30 group-hover:text-brand-amber/70 transition-colors mb-3">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
