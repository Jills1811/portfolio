import { navLinks, person } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[color:var(--color-line)] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div>
            <a
              href="#home"
              className="font-display text-xl font-semibold tracking-tight text-ink"
            >
              {person.mark}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-dim">
              {person.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--color-line)] pt-6 text-xs text-ink-dim sm:flex-row">
          <span>
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </span>
          <span className="font-mono tracking-[0.2em]">
            DESIGNED &amp; ENGINEERED WITH INTENT
          </span>
        </div>
      </div>
    </footer>
  )
}
