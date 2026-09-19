"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/ui/reveal"
import { SectionKicker } from "@/components/ui/section-kicker"
import { architecture } from "@/lib/content"

export function ArchitectureSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="systems" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg mask-fade-b opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionKicker>{architecture.kicker}</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
              {architecture.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {architecture.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Pipeline */}
          <div className="flex flex-col gap-2">
            {architecture.layers.map((layer, i) => {
              const isActive = active === i
              return (
                <div key={layer.id} className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-cyan/40 bg-cyan/[0.06]"
                        : "border-[color:var(--color-line)] bg-white/[0.01] hover:border-cyan/20"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs transition-colors ${isActive ? "text-cyan" : "text-ink-dim"}`}
                    >
                      {layer.id}
                    </span>
                    <span
                      className={`font-display text-lg font-medium transition-colors ${isActive ? "text-ink" : "text-ink-soft"}`}
                    >
                      {layer.title}
                    </span>
                    <motion.span
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                      className="ml-auto h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_2px_rgba(104,231,255,0.6)]"
                    />
                  </button>
                  {i < architecture.layers.length - 1 && (
                    <div className="ml-[27px] h-2 w-px bg-gradient-to-b from-cyan/30 to-transparent" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="glass relative min-h-[280px] overflow-hidden rounded-3xl p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/10 blur-3xl" />
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-mono text-xs tracking-[0.3em] text-cyan/70">
                  LAYER {architecture.layers[active].id}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {architecture.layers[active].title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {architecture.layers[active].detail}
                </p>
              </motion.div>

              <div className="mt-8 border-t border-[color:var(--color-line)] pt-6">
                <div className="font-mono text-[10px] tracking-[0.3em] text-ink-dim">
                  {architecture.matrixLabel}
                </div>
                <p className="mt-3 font-mono text-xs leading-relaxed text-ink-soft">
                  {architecture.matrix}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
