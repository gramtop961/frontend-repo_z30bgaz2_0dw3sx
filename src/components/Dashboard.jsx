import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Counter({ from = 0, to = 100, duration = 1.5 }) {
  const [value, setValue] = useState(from)
  useEffect(() => {
    let start = performance.now()
    let raf
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(from + (to - from) * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [from, to, duration])
  return <span>{value.toLocaleString()}</span>
}

export default function Dashboard() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, -40])

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A]">Performance at a glance</h2>
          <p className="mt-2 text-slate-600">Live analytics that show what matters.</p>
        </div>

        <motion.div style={{ y }} className="relative">
          <div className="relative mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white/80 backdrop-blur-xl shadow-[0_40px_80px_rgba(13,110,253,0.12)] p-6 overflow-hidden">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl p-5 bg-gradient-to-br from-[#EAF4FF] to-white border border-slate-200">
                <p className="text-sm text-slate-600">Total Quotes</p>
                <p className="mt-2 text-3xl font-bold text-[#000A5A]"><Counter to={4280} /></p>
              </div>
              <div className="rounded-2xl p-5 bg-gradient-to-br from-[#EAF4FF] to-white border border-slate-200">
                <p className="text-sm text-slate-600">Conversion Rate</p>
                <p className="mt-2 text-3xl font-bold text-[#000A5A]"><Counter to={34} />%</p>
              </div>
              <div className="rounded-2xl p-5 bg-gradient-to-br from-[#EAF4FF] to-white border border-slate-200">
                <p className="text-sm text-slate-600">Avg. Margin</p>
                <p className="mt-2 text-3xl font-bold text-[#000A5A]"><Counter to={22} />%</p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="h-48 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#EAF4FF]/60 relative overflow-hidden">
                <div className="absolute inset-x-6 bottom-6 flex items-end gap-2">
                  {[...Array(20)].map((_, i) => (
                    <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${20 + (i % 5) * 12}%` }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.03, type: 'spring', stiffness: 50 }} className="flex-1 bg-gradient-to-t from-[#0D6EFD] to-[#55B4E6] rounded-t" />
                  ))}
                </div>
              </div>
              <div className="h-48 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#EAF4FF]/60 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <motion.path d="M0 150 C 100 100, 200 120, 300 80 S 500 110, 600 70" fill="none" stroke="url(#grad)" strokeWidth="4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeInOut' }} />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0D6EFD" />
                      <stop offset="100%" stopColor="#55B4E6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
