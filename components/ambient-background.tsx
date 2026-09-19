export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-[0.4]" />
      <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan/[0.06] blur-[130px]" />
      <div className="absolute right-[-5%] top-[45%] h-[380px] w-[380px] rounded-full bg-indigo/[0.05] blur-[130px]" />
      <div className="absolute bottom-[5%] left-1/3 h-[360px] w-[360px] rounded-full bg-cyan/[0.04] blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--color-void)_100%)]" />
    </div>
  )
}
