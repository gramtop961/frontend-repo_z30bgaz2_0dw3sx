import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const GradientBG = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#EAF4FF]" />
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-70 blur-3xl pointer-events-none" style={{
      background: 'radial-gradient(circle at 50% 50%, rgba(13,110,253,0.25), transparent 60%)'
    }} />
  </div>
)

export default function Hero() {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 400], [0, 60])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

  return (
    <section className="relative overflow-hidden" aria-label="Quotestack Hero">
      <GradientBG />

      <motion.div style={{ y: translateY, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 sm:pt-32 sm:pb-40">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[#0D6EFD]" />
                New: HVAC quoting made effortless
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.7 }}
                className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-[#000A5A]"
              >
                Quote smarter. Sell faster.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="mt-4 text-lg sm:text-xl text-slate-700 max-w-xl"
              >
                AC quoting & automation for HVAC contractors. Clean, accurate quotes in minutes with automated follow‑up.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0D6EFD] to-[#55B4E6] px-6 py-3 text-white shadow-lg shadow-blue-200 transition-transform hover:-translate-y-0.5"
                >
                  Start Free Demo
                </a>
                <a
                  href="#video"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-900 hover:shadow-md transition-shadow"
                >
                  Watch Product Video
                </a>
              </motion.div>
            </div>

            <div className="relative h-[520px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.97, rotateX: 6 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#55B4E6]/30 to-[#0D6EFD]/20 blur-2xl rounded-[32px]" />
                <div className="relative h-full rounded-[28px] border border-slate-200 bg-white/80 backdrop-blur-xl shadow-[0_30px_60px_rgba(13,110,253,0.15)] overflow-hidden">
                  <div className="absolute -top-20 right-10 w-[380px] h-[240px] rounded-3xl bg-white border border-slate-200 shadow-xl rotate-3 hover:-translate-y-1 transition-transform" />
                  <div className="absolute -bottom-16 left-6 w-[420px] h-[260px] rounded-3xl bg-white border border-slate-200 shadow-xl -rotate-2 hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 grid place-items-center text-slate-500">
                    3D UI mockups
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
