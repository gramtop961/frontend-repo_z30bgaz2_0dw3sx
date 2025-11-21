import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Website Widget',
    desc: 'Captures leads and room info',
  },
  {
    title: 'Instant Calculations',
    desc: 'Sizes rooms at 150 W/m²',
  },
  {
    title: 'Smart Equipment Selection',
    desc: 'Split/multi-split from catalogs',
  },
  {
    title: 'Send & Automate',
    desc: 'Branded quote + follow-up',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A]">How it works</h2>
          <p className="mt-2 text-slate-600">From lead to signed quote in minutes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-blue-100/40 hover:shadow-blue-200/60 hover:-translate-y-1 transition-all"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#55B4E6]/0 to-[#0D6EFD]/0 group-hover:from-[#55B4E6]/10 group-hover:to-[#0D6EFD]/10 transition-colors" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] mb-4" />
                <h3 className="text-lg font-semibold text-[#000A5A]">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
