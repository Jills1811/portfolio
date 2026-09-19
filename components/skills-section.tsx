"use client"

import { motion } from "framer-motion"
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal"
import { SectionKicker } from "@/components/ui/section-kicker"
import { skills } from "@/lib/content"

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionKicker>{skills.kicker}</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
              {skills.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {skills.subheading}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.06}
              className={group.title === "AI / ML" ? "lg:row-span-2" : ""}
            >
              <div className="glass h-full rounded-2xl p-6 transition-colors duration-500 hover:border-cyan/25">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(104,231,255,0.5)]" />
                  <h3 className="font-display text-lg font-medium text-ink">
                    {group.title}
                  </h3>
                </div>
                <RevealGroup className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={revealItem}
                      whileHover={{ y: -2 }}
                      className="rounded-lg border border-[color:var(--color-line)] bg-white/[0.02] px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
                    >
                      {item}
                    </motion.span>
                  ))}
                </RevealGroup>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
