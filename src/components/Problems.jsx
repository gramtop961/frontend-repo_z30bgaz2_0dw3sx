import React from 'react'
import { motion } from 'framer-motion'

const problems = [
  'Slow manual quoting',
  'Lost or forgotten leads',
  'Spreadsheet overload',
  'No follow-up automation',
  'Inconsistent pricing',
]

export default function Problems() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A]">What contractors struggle with</h2>
          <p className="mt-2 text-slate-600">We built Quotestack to remove the friction that slows teams down.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] opacity-90" />
              <p className="mt-4 text-slate-800 font-medium">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
