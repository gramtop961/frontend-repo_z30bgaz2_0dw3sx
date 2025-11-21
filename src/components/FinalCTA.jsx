import React from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0D6EFD] to-[#000A5A]" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), transparent 45%)' }} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center text-white">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold"
        >
          Quote faster. Win more.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-2 text-white/90"
        >
          Start a free demo or book a call to see how Quotestack can transform your workflow.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#pricing" className="rounded-xl bg-white text-[#000A5A] px-6 py-3 font-medium shadow-lg hover:-translate-y-0.5 transition">Start Free Demo</a>
          <a href="#" className="rounded-xl border border-white/30 bg-white/10 backdrop-blur px-6 py-3 font-medium hover:-translate-y-0.5 transition">Book a Call</a>
        </motion.div>
      </div>
    </section>
  )
}
