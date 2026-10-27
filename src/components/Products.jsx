import React, { useState } from 'react'
import { Flame, Layers, Box, Check, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react'

export default function Products({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('all')

  const products = [
    {
      id: 'briquettes',
      category: 'flagship',
      tag: 'Flagship Commodity',
      tagColor: 'bg-brand-amber/20 text-brand-amber border-brand-amber/40',
      title: 'Coconut Shell Briquettes',
      headlineCopy: 'High-grade, long-burning briquettes ideal for Shisha and BBQ. 100% natural, low ash, and smokeless.',
      image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&q=80',
      specs: [
        { label: 'Burning Time', value: '2.5 to 3+ Hours' },
        { label: 'Ash Content', value: '< 2.5% (White Ash)' },
        { label: 'Fixed Carbon', value: '> 80%' },
        { label: 'Moisture', value: '< 5%' },
        { label: 'Calorie Value', value: '> 7,200 Kcal/kg' },
        { label: 'Available Cuts', value: 'Cube (25/26mm), Flat, Hexagonal' },
      ],
      features: [
        '100% natural coconut shell, zero chemical binders',
        'Smokeless, odorless, non-sparking ignition',
        'Clean white/natural grey residue ash',
        'Drop-test certified high compaction strength'
      ],
      icon: Flame,
    },
    {
      id: 'derivatives',
      category: 'commodities',
      tag: 'Agricultural Range',
      tagColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      title: 'Coconut Derivatives',
      headlineCopy: 'A wide range of high-quality coconut-based products tailored for industrial, agricultural, and commercial use.',
      image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80',
      specs: [
        { label: 'Raw Materials', value: 'Sustainably Harvested Palms' },
        { label: 'Quality Grade', value: 'Export Standard Grade A' },
        { label: 'Packaging', value: 'Bales, Sacks & Bulk Containers' },
        { label: 'Origin', value: 'West Java, Sumatra, Sulawesi' },
        { label: 'Supply Capacity', value: 'Up to 500 MT / Month' },
        { label: 'Compliance', value: 'Phytosanitary & Fumigated' },
      ],
      features: [
        'Coco Peat Blocks & Coco Coir fiber for agricultural soil mixes',
        'Desiccated Coconut (Fine & Medium grade for food industries)',
        'Semi-Husked Mature Coconuts for wholesale distribution',
        'Crude & Virgin Coconut Oil for industrial extraction'
      ],
      icon: Layers,
    },
    {
      id: 'oem-packaging',
      category: 'solutions',
      tag: 'B2B Private Label',
      tagColor: 'bg-amber-400/20 text-amber-300 border-amber-400/40',
      title: 'Custom OEM & Packaging',
      headlineCopy: 'Customizable packaging options, including inner boxes, master cartons, and private labeling to suit your brand identity.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      specs: [
        { label: 'Inner Box', value: '1 kg / 2 kg Full Color Duplex' },
        { label: 'Inner Liner', value: 'Sealed Plastic Protection' },
        { label: 'Master Carton', value: '10 kg / 20 kg Corrugated 5-Ply' },
        { label: 'Branding', value: 'Full OEM Private Label Printing' },
        { label: 'Palletizing', value: 'Standard Wooden / Plastic Pallets' },
        { label: 'FCL Loading', value: '17 - 26 Metric Tons / Container' },
      ],
      features: [
        'Complete artwork placement, barcode, and multilingual copy',
        'High-strength 5-ply cartons preventing transit crush damage',
        'Moisture-lock inner polybags protecting from humidity during sea freight',
        'Custom packing tape and tamper-evident container strapping'
      ],
      icon: Box,
    },
  ]

  return (
    <section id="products" className="py-24 bg-industrial-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900 border border-brand-amber/30 text-brand-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Export Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Our Products & Commodities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sourced and engineered to satisfy demanding international market benchmarks for density, burn performance, and physical purity.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="bg-industrial-900/90 rounded-2xl border border-industrial-800 hover:border-brand-amber/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-amber/10 group"
              >
                {/* Product Image Header with Tag */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-xl bg-industrial-950/90 border border-industrial-700/80 flex items-center justify-center text-brand-amber shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-amber transition-colors">
                      {product.title}
                    </h3>

                    {/* Exact User Copy Requirement */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                      "{product.headlineCopy}"
                    </p>

                    {/* Specifications Table */}
                    <div className="bg-industrial-950/80 rounded-xl p-4 border border-industrial-800/80 mb-6">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-amber" />
                        Key Specifications
                      </div>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs">
                        {product.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="border-b border-industrial-850 pb-1">
                            <span className="text-slate-500 block text-[11px]">{spec.label}</span>
                            <span className="text-slate-200 font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 mb-8">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-4 border-t border-industrial-800">
                    <a
                      href="#contact"
                      onClick={() => onSelectProduct && onSelectProduct(product.title)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-industrial-850 hover:bg-brand-amber hover:text-black border border-industrial-700/80 hover:border-transparent transition-all shadow-md group-hover:bg-brand-amber group-hover:text-black"
                    >
                      <span>Inquire About {product.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Custom Specification Banner */}
        <div className="mt-12 bg-gradient-to-r from-industrial-900 via-industrial-850 to-industrial-900 border border-industrial-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Zap className="w-5 h-5 text-brand-amber" />
              Need Specific Dimensions, Ash Levels, or Custom Shapes?
            </h4>
            <p className="text-sm text-slate-400">
              We tailor formulation, carbon purity, and packaging dimensions according to your target market regulations.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-industrial-800 hover:bg-industrial-700 text-white font-semibold text-xs uppercase tracking-wider border border-industrial-600 transition-colors"
          >
            Request Custom Spec Sheet
          </a>
        </div>

      </div>
    </section>
  )
}
