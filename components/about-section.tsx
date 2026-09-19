"use client"

import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal"
import { SectionKicker } from "@/components/ui/section-kicker"
import { motion } from "framer-motion"
import { about } from "@/lib/content"

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionKicker>{about.kicker}</SectionKicker>
            <Reveal delay={0.05}>
              <h2 className="max-w-xl text-balance text-3xl leading-tight sm:text-4xl md:text-5xl">
                {about.heading}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <RevealGroup className="grid grid-cols-2 gap-4 self-center">
            {about.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={revealItem}
                whileHover={{ y: -4 }}
                className="glass group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-cyan/10 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs leading-snug tracking-wide text-ink-dim uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
