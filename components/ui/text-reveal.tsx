"use client"

import { motion, type Variants } from "framer-motion"

type TextRevealProps = {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
}

const word: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Animates a line of text word-by-word as it enters the viewport. */
export function TextReveal({ text, className, delay = 0, once = true }: TextRevealProps) {
  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      {text.split(" ").map((w, i) => (
        <span
          key={`${w}-${i}`}
          style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.06em" }}
        >
          <motion.span variants={word} style={{ display: "inline-block" }}>
            {w}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
