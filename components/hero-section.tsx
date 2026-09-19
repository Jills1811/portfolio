"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { NeuralNetwork } from "@/components/neural-network"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { TextReveal } from "@/components/ui/text-reveal"
import { person } from "@/lib/content"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const netY = useTransform(scrollYProgress, [0, 1], [0, 220])

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Neural network layer */}
      <motion.div
        style={{ y: netY }}
        className="pointer-events-auto absolute inset-0 z-0"
      >
        <NeuralNetwork className="h-full w-full opacity-70" />
      </motion.div>

      {/* Radial glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-2/3 z-0 h-[380px] w-[380px] rounded-full bg-indigo/10 blur-[120px]" />

      {/* Side status labels */}
      <motion.span
        style={{ opacity }}
        className="pointer-events-none absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 font-mono text-[10px] tracking-[0.35em] text-cyan/60 lg:block"
      >
        RAG · CONTEXT
      </motion.span>
      <motion.span
        style={{ opacity }}
        className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 font-mono text-[10px] tracking-[0.35em] text-indigo/60 lg:block"
      >
        AGENT · ACTIVE
      </motion.span>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          <span className="text-xs tracking-[0.2em] text-ink-soft uppercase">
            {person.role}
          </span>
        </motion.div>

        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="block text-ink">
            <TextReveal text={person.heroTitle[0]} />
          </span>
          <span className="mt-1 block">
            <TextReveal
              text={person.heroTitle[1]}
              className="text-gradient"
              delay={0.35}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {person.heroIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="#projects" variant="primary">
            View My Work
            <ArrowIcon />
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Let’s Connect
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Download Resume
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-dim"
        aria-label="Explore system"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">
          EXPLORE SYSTEM
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-[color:var(--color-line-strong)] p-1">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-cyan"
          />
        </span>
      </motion.a>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
