import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Quotestack cut our quoting time from days to minutes. We close more jobs and the team loves it.',
    author: 'James R.',
    role: 'Operations Manager, NorthAir HVAC'
  },
  {
    quote: 'The automation keeps leads warm without us chasing. Our conversion rate is up 30%.',
    author: 'Lara P.',
    role: 'Owner, CoolWorks'
  },
  {
    quote: 'Finally a simple tool for pricing consistently. Margins are protected and clients get quotes fast.',
    author: 'Michael D.',
    role: 'Director, BreezePro'
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A] mb-10">Loved by HVAC teams</h2>
        <div className="relative h-44">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl"
            >
              <p className="text-xl text-slate-700">“{testimonials[index].quote}”</p>
              <p className="mt-4 font-semibold text-[#000A5A]">{testimonials[index].author}</p>
              <p className="text-slate-500">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
