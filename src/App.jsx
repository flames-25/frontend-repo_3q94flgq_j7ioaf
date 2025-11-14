import { useState } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const [ctaClicked, setCtaClicked] = useState(false)

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero Section with Spline background */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* 3D Spline Cover (full-bleed) */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft gradient overlays for readability (do not block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-600/20 via-white/0 to-white/90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#d70018]/30 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 mb-5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#d70018]" />
              <span className="text-xs font-semibold tracking-wide text-gray-700">Coca‑Cola • New Drop</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              <span className="text-[#d70018]">Taste</span> the Feeling.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl">
              Ice‑cold refreshment with a playful sparkle. Pop the cap, feel the fizz, and let the
              moment become memorable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setCtaClicked(true)}
                className="inline-flex items-center justify-center rounded-full bg-[#d70018] text-white px-6 py-3 font-semibold shadow-lg shadow-red-500/20 hover:brightness-110 transition"
              >
                Shop Now
              </button>
              <a
                href="#flavors"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
              >
                Explore Flavors
              </a>
            </div>

            {ctaClicked && (
              <p className="mt-3 text-sm text-gray-600">Yum! Adding refreshment to your day…</p>
            )}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="flavors" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why everyone loves it</h2>
            <p className="mt-2 text-gray-600">Classic taste. Cool vibes. Instant smiles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature title="Signature Taste" desc="A perfectly balanced flavor that’s instantly recognizable and always refreshing."/>
            <Feature title="Ice‑Cold Ready" desc="Crack open a chilled can and watch the condensation dance — pure satisfaction."/>
            <Feature title="Share the Spark" desc="From game nights to road trips, it turns little moments into big memories."/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Coca‑Cola • Taste the Feeling</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a className="hover:text-gray-900" href="#">Privacy</a>
            <a className="hover:text-gray-900" href="#">Terms</a>
            <a className="hover:text-gray-900" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  )
}

export default App
