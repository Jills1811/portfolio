"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Reveal } from "@/components/ui/reveal"
import { SectionKicker } from "@/components/ui/section-kicker"
import { projects, type Project } from "@/lib/content"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <SectionKicker>{projects.kicker}</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
              {projects.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {projects.subheading}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-6">
          {projects.items.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06} y={40}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 150, damping: 18 })
  const sry = useSpring(ry, { stiffness: 150, damping: 18 })

  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    ry.set((px - 0.5) * 8)
    rx.set((0.5 - py) * 8)
    glowX.set(px * 100)
    glowY.set(py * 100)
  }

  const reset = () => {
    rx.set(0)
    ry.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
      className="group relative overflow-hidden rounded-3xl border border-[color:var(--color-line)] bg-surface/60 p-8 transition-colors duration-500 hover:border-cyan/30 sm:p-10"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: hovered
            ? `radial-gradient(500px circle at ${glowX.get()}% ${glowY.get()}%, rgba(104,231,255,0.10), transparent 60%)`
            : undefined,
        }}
      />

      <div className="relative grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
        <div className="flex items-start gap-4 lg:flex-col lg:gap-3">
          <span className="font-display text-5xl font-semibold text-white/10 transition-colors duration-500 group-hover:text-cyan/25 sm:text-6xl">
            {project.index}
          </span>
          <span className="mt-1 inline-flex w-fit items-center rounded-full border border-[color:var(--color-line-strong)] px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-cyan/70 uppercase">
            {project.badge}
          </span>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-cyan sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[color:var(--color-line)] bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-cyan"
              >
                {link.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
