"use client"

import { motion } from "framer-motion"
import { Reveal } from "@/components/ui/reveal"
import { SectionKicker } from "@/components/ui/section-kicker"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { NeuralNetwork } from "@/components/neural-network"
import { contact, person } from "@/lib/content"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--color-line-strong)] bg-surface/50 px-6 py-16 sm:px-16 sm:py-24">
          <div className="absolute inset-0 z-0 opacity-50">
            <NeuralNetwork className="h-full w-full" />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <SectionKicker>{contact.kicker}</SectionKicker>
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl text-balance text-3xl leading-tight sm:text-5xl md:text-6xl">
                {contact.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-gradient font-display">
                {contact.subheading}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton
                  href={`mailto:${person.email}`}
                  variant="primary"
                >
                  <MailIcon />
                  {person.email}
                </MagneticButton>
                <MagneticButton
                  href={person.linkedin}
                  variant="outline"
                  ariaLabel="LinkedIn profile"
                >
                  <LinkedInIcon />
                  LinkedIn
                </MagneticButton>
              </div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 font-mono text-xs tracking-[0.3em] text-ink-dim"
            >
              {person.tagline.toUpperCase()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.4 2A1.4 1.4 0 102 3.4 1.4 1.4 0 003.4 2zM2.2 5.6h2.4V14H2.2V5.6zM6.4 5.6h2.3v1.15h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.68V14h-2.4V9.66c0-1.03-.02-2.36-1.44-2.36-1.44 0-1.66 1.13-1.66 2.29V14H6.4V5.6z" />
    </svg>
  )
}
