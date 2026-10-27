import React from 'react'
import { Flame, Layers, Box, Check, MessageCircle, FileQuestion, ArrowRight } from 'lucide-react'

export default function Products() {
  const whatsappBase = "https://wa.me/6281218829662?text="

  const products = [
    {
      id: 'briquettes',
      tag: 'Starting Commodity',
      tagColor: 'bg-brand-amber/20 text-brand-amber border-brand-amber/40',
      title: 'Coconut Shell Briquettes',
      headlineCopy: 'Ideal for Shisha and BBQ. 100% natural and smokeless.',
      specsText: 'Technical specifications (Moisture, Ash Content, Fix Carbon): TBA / Available upon request.',
      image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&q=80',
      icon: Flame,
      features: [
        'Natural raw material sourced from mature coconut shells',
        'Smokeless, low odor, and uniform burning properties',
        'Available in standard cube, hexagonal, and flat cuts',
        'Moisture, ash percentage, and fix carbon lab data provided on request'
      ],
      whatsappMsg: encodeURIComponent('Hello Bkahf Exports, I would like to request specifications and pricing for Coconut Shell Briquettes.'),
    },
    {
      id: 'derivatives',
      tag: 'Agricultural Range',
      tagColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      title: 'Coconut Derivatives',
      headlineCopy: 'High-quality coconut-based products tailored for industrial and commercial use.',
      specsText: 'Specifications: TBA / Available upon request.',
      image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80',
      icon: Layers,
      features: [
        'Sustainably gathered from prime Indonesian plantation regions',
        'Targeted for industrial, agricultural, and commercial applications',
        'Coco peat, coir fiber, and coconut-derived products upon request',
        'Full grade descriptions and lab certificates furnished upon inquiry'
      ],
      whatsappMsg: encodeURIComponent('Hello Bkahf Exports, I would like to inquire about your Coconut Derivatives range and availability.'),
    },
    {
      id: 'oem-packaging',
      tag: 'B2B Private Label',
      tagColor: 'bg-amber-400/20 text-amber-300 border-amber-400/40',
      title: 'OEM & Packaging Solutions',
      headlineCopy: 'Customizable packaging options including inner boxes, master cartons, and private labeling to suit your brand.',
      specsText: 'Packaging formats: Inner boxes (1kg / 2kg), 5-ply master cartons (10kg / 20kg), and custom printing available upon request.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      icon: Box,
      features: [
        'Private label branding with customer logo, barcodes, and regulatory text',
        'Inner plastic liners to shield goods against sea freight humidity',
        'Heavy-duty corrugated master cartons preventing crush damage',
        'FCL container stuffing with standard palletization options'
      ],
      whatsappMsg: encodeURIComponent('Hello Bkahf Exports, I would like to inquire about OEM and custom packaging solutions for my brand.'),
    },
  ]

  return (
    <section id="products" className="py-24 bg-industrial-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900 border border-brand-amber/30 text-brand-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Commodity Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Our Products
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sourced directly through vetted Indonesian manufacturers. Technical datasheets and custom production parameters are available on inquiry.
          </p>
        </div>

        {/* 3-Card Grid Layout */}
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
                    {/* Exact Title */}
                    <h3 className="text-2xl font-bold text-white mb-2.5 group-hover:text-brand-amber transition-colors">
                      {product.title}
                    </h3>

                    {/* Exact Requested Text */}
                    <p className="text-slate-200 text-sm leading-relaxed mb-5 font-medium">
                      {product.headlineCopy}
                    </p>

                    {/* Exact Requested Specs Box */}
                    <div className="bg-industrial-950/90 rounded-xl p-4 border border-industrial-800 mb-6">
                      <div className="text-[11px] font-bold text-brand-amber uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <FileQuestion className="w-3.5 h-3.5" />
                        Specification Status
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-mono">
                        {product.specsText}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 mb-8">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <Check className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-4 border-t border-industrial-800">
                    <a
                      href={`${whatsappBase}${product.whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-brand-amber to-brand-amberLight hover:from-brand-amberLight hover:to-brand-gold transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Request Specs via WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
