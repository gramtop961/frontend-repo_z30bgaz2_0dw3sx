import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Mail, Gauge, Users, Widget, Box, Wrench } from 'lucide-react'

const features = [
  { title: 'Instant AC quotes', icon: Gauge },
  { title: 'Automated emails/SMS', icon: Mail },
  { title: 'Real-time analytics', icon: BarChart3 },
  { title: 'Customer records', icon: Users },
  { title: 'Website widget', icon: Widget },
  { title: 'Equipment catalogs', icon: Box },
  { title: 'Labour & margin controls', icon: Wrench },
]

export default function FeatureGrid() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A]">Everything you need</h2>
          <p className="mt-2 text-slate-600">Modern tools designed for HVAC teams.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#000A5A]">{f.title}</h3>
                </div>
                <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 group-hover:border-transparent group-hover:shadow-[0_20px_60px_rgba(13,110,253,0.15)] transition-all" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
