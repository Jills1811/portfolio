"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion"
import { useRef, type ReactNode } from "react"

type Variant = "primary" | "outline" | "ghost"

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  strength?: number
  ariaLabel?: string
}

const styles: Record<Variant, string> = {
  primary:
    "bg-cyan text-void font-medium hover:shadow-[0_0_40px_-6px_rgba(104,231,255,0.6)]",
  outline:
    "border border-[color:var(--color-line-strong)] text-ink hover:border-cyan/60 hover:text-cyan",
  ghost: "text-ink-soft hover:text-ink",
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.35,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm tracking-wide transition-colors duration-300 will-change-transform"

  const MotionEl: any = href ? motion.a : motion.button

  return (
    <MotionEl
      ref={ref as never}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </MotionEl>
  )
}
