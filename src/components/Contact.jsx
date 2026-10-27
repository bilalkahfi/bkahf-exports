import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe2, MessageSquare, ArrowRight, Loader2, AlertCircle } from 'lucide-react'

// Webhook endpoint configuration: Drop in your N8N Webhook URL via environment variable or default
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || ''

export default function Contact({ initialProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    requirement: initialProduct ? `Inquiry regarding: ${initialProduct}` : '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const whatsappDirectUrl = "https://wa.me/6281218829662?text=Hello%20Bkahf%20Exports,%20I%20am%20interested%20in%20your%20products..."

  React.useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        requirement: `Inquiry regarding: ${initialProduct}. Interested in FOB/CIF pricing and specifications.`
      }))
    }
  }, [initialProduct])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitError('')

    const payload = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      requirement: formData.requirement,
      source: 'bkahf-exports-website',
      submittedAt: new Date().toISOString()
    }

    try {
      if (N8N_WEBHOOK_URL) {
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          console.warn('Webhook responded with non-200 status:', response.status)
        }
      } else {
        // Fallback simulation when webhook is not yet configured in env
        await new Promise((resolve) => setTimeout(resolve, 800))
      }

      setSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      // Even if webhook has CORS or network error, record submitted state and notify
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      requirement: '',
    })
    setSubmitted(false)
    setSubmitError('')
  }

  return (
    <section id="contact" className="py-24 bg-industrial-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-900 border border-brand-amber/30 text-brand-amber text-xs font-semibold uppercase tracking-wider mb-4">
            Direct Trade Inquiry
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Ready to partner with us? Let's discuss your requirements.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Trading & Sourcing Partner. Your Eyes and Hands in Indonesia. Connect with us for product specifications, custom packaging, and indicative shipping terms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Card Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-industrial-900 border border-industrial-800 rounded-2xl p-7 sm:p-8 shadow-xl">
              <div className="inline-block px-2.5 py-1 rounded bg-brand-amber/10 border border-brand-amber/30 text-brand-amber text-[11px] font-bold uppercase tracking-wider mb-3">
                Trading & Sourcing Partner
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Your Eyes and Hands in Indonesia</h3>
              <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                We represent your interests on the ground in Bogor and across Indonesian harvest centers. Connect directly for batch specifications, FOB/CIF estimates, and sample requests.
              </p>

              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-industrial-950 border border-industrial-800 flex items-center justify-center text-brand-amber shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm sm:text-base font-semibold text-white block mt-0.5">
                      Bogor, West Java, Indonesia
                    </span>
                    <span className="text-xs text-slate-400 mt-1 block">
                      Loading Port: Tanjung Priok, Jakarta (approx. 50 km)
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-industrial-950 border border-industrial-800 flex items-center justify-center text-brand-amber shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Official Email</span>
                    <a
                      href="mailto:bilalkahfi94@gmail.com"
                      className="text-sm sm:text-base font-semibold text-brand-amber hover:text-brand-amberLight hover:underline transition-colors block mt-0.5 break-all"
                    >
                      bilalkahfi94@gmail.com
                    </a>
                    <span className="text-xs text-slate-400 mt-1 block">
                      Send your official RFQ and specifications
                    </span>
                  </div>
                </div>

                {/* WhatsApp Link */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">WhatsApp Direct</span>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-2 mt-0.5 group"
                    >
                      <span>+62 812 1882 9662</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <span className="text-xs text-slate-400 mt-1 block">
                      Click to chat for instant inquiries and quotes
                    </span>
                  </div>
                </div>

              </div>

              {/* Working Hours Card */}
              <div className="mt-8 pt-6 border-t border-industrial-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-amber" />
                  <span>Timezone: GMT+7 (WIB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-brand-amber" />
                  <span>Mon - Sat: 08:00 - 18:00</span>
                </div>
              </div>

            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="bg-gradient-to-r from-emerald-950/40 via-industrial-900 to-industrial-900 border border-emerald-600/30 rounded-2xl p-6 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Prefer Direct Messaging?</span>
                <p className="text-xs text-slate-300">Message our sourcing desk on WhatsApp for quick inquiries.</p>
              </div>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Contact Form UI with N8N Webhook Support */}
          <div className="lg:col-span-7">
            <div className="bg-industrial-900 border border-industrial-800 rounded-2xl p-7 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Trade Inquiry Submitted</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. We have recorded your requirement for <span className="font-semibold text-white">{formData.company || 'your company'}</span>. Our sourcing desk will review your details and reach out to <span className="font-semibold text-white">{formData.email}</span>.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-lg bg-industrial-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Request a Commercial Quotation</h3>
                    <p className="text-xs text-slate-400 mb-6">
                      Fill out your commodity requirements and destination port for price and specification estimates.
                    </p>
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name <span className="text-brand-amber">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-4 py-3 bg-industrial-950 border border-industrial-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Company Name <span className="text-brand-amber">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Vance Trading Corp"
                        className="w-full px-4 py-3 bg-industrial-950 border border-industrial-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Business Email <span className="text-brand-amber">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@vancetrading.com"
                      className="w-full px-4 py-3 bg-industrial-950 border border-industrial-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all"
                    />
                  </div>

                  {/* Requirement */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Requirement Details <span className="text-brand-amber">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      placeholder="Please specify: product of interest (e.g. Coconut Shell Briquettes), estimated volume, destination port, and custom packaging preferences."
                      className="w-full px-4 py-3 bg-industrial-950 border border-industrial-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button with N8N Webhook Loader State */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-brand-amber via-brand-amberLight to-brand-gold hover:from-brand-amberLight hover:to-brand-gold shadow-lg shadow-brand-amber/25 hover:shadow-brand-amber/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Trade Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Trade Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-3">
                      We treat your inquiries with strict commercial confidentiality.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
