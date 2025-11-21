import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0D6EFD] to-[#55B4E6]" />
          <span className="font-semibold text-[#000A5A]">Quotestack</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-[#0D6EFD] transition">Features</a>
          <a href="#how" className="hover:text-[#0D6EFD] transition">How it works</a>
          <a href="#pricing" className="hover:text-[#0D6EFD] transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900">Book a Call</a>
          <a href="#pricing" className="inline-flex rounded-xl bg-gradient-to-r from-[#0D6EFD] to-[#55B4E6] px-4 py-2 text-white shadow">Start Demo</a>
        </div>
      </div>
    </header>
  )
}
