import React from 'react'
import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', price: '$49', features: ['Instant quotes', 'Email support', 'Basic analytics'] },
  { name: 'Pro', price: '$149', features: ['All Starter', 'Automations', 'SMS', 'Advanced analytics'] },
  { name: 'Business', price: '$299', features: ['All Pro', 'Team controls', 'Priority support'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A]">Simple pricing</h2>
          <p className="mt-2 text-slate-600">Choose a plan that grows with your business.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 bg-white shadow-sm transition-all ${p.name === 'Pro' ? 'border-transparent shadow-[0_30px_60px_rgba(13,110,253,0.2)]' : 'border-slate-200'}`}
            >
              {p.name === 'Pro' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0D6EFD]/20 to-[#55B4E6]/20 pointer-events-none" />
              )}
              <div className="relative">
                <h3 className="text-xl font-bold text-[#000A5A]">{p.name}</h3>
                <p className="mt-2 text-4xl font-extrabold text-[#000A5A]">{p.price}<span className="text-base font-medium text-slate-500">/mo</span></p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#0D6EFD]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-medium transition-transform hover:-translate-y-0.5 ${p.name === 'Pro' ? 'bg-gradient-to-r from-[#0D6EFD] to-[#55B4E6] text-white shadow-lg' : 'border border-slate-200 bg-white text-slate-900 hover:shadow-md'}`}>Get started</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
