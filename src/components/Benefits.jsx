import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Trophy, Clock, Shield, Inbox, Rocket } from 'lucide-react'

const items = [
  { icon: Clock, text: 'Respond faster' },
  { icon: Trophy, text: 'Win more jobs' },
  { icon: Zap, text: 'Save admin time' },
  { icon: Shield, text: 'Protect margins' },
  { icon: Inbox, text: 'Never lose a lead' },
  { icon: Rocket, text: 'Grow with automation' },
]

export default function Benefits() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A]">Benefits for HVAC companies</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="grid place-items-center h-10 w-10 rounded-lg bg-gradient-to-br from-[#55B4E6] to-[#0D6EFD] text-white">
                  <Icon size={18} />
                </div>
                <p className="text-slate-800 font-medium">{it.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
