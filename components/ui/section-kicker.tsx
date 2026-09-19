import { Reveal } from "@/components/ui/reveal"

export function SectionKicker({ children }: { children: string }) {
  return (
    <Reveal>
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-cyan to-transparent" />
        <span className="font-mono text-xs tracking-[0.3em] text-cyan/80">
          {children}
        </span>
      </div>
    </Reveal>
  )
}
