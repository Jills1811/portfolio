"use client"

import { Reveal } from "@/components/ui/reveal"
import { SectionKicker } from "@/components/ui/section-kicker"
import { education } from "@/lib/content"

export function EducationSection() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionKicker>{education.kicker}</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
              {education.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {education.subheading}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/40 via-cyan/15 to-transparent" />
            <div className="flex flex-col gap-10">
              {education.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center">
                      <span className="absolute h-3.5 w-3.5 rounded-full bg-cyan/20" />
                      <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_2px_rgba(104,231,255,0.6)]" />
                    </span>
                    <div className="font-mono text-xs tracking-wide text-cyan/70">
                      {item.period}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-medium text-ink">
                      {item.title}
                    </h3>
                    <div className="mt-1 text-sm text-ink-muted">{item.org}</div>
                    <div className="mt-2 inline-flex items-center rounded-full border border-[color:var(--color-line-strong)] px-3 py-1 text-xs text-ink-soft">
                      {item.meta}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <Reveal>
              <h3 className="font-display text-lg font-medium text-ink-soft">
                {education.achievementsTitle}
              </h3>
            </Reveal>
            <div className="mt-6 flex flex-col gap-4">
              {education.achievements.map((ach, i) => (
                <Reveal key={ach.title} delay={i * 0.08}>
                  <div className="glass group flex items-start gap-4 rounded-2xl p-5 transition-colors duration-500 hover:border-cyan/25">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[color:var(--color-line-strong)] text-cyan">
                      <StarIcon />
                    </span>
                    <div>
                      <div className="font-medium text-ink">{ach.title}</div>
                      <div className="mt-1 text-sm text-ink-muted">
                        {ach.detail}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5l1.8 3.9 4.2.5-3.1 2.9.8 4.2L8 11.4 4.3 13l.8-4.2L2 5.9l4.2-.5L8 1.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
