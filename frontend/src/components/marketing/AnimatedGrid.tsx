export function AnimatedGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Basic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      {/* Moving lines (scanlines) */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[2px] bg-gradient-to-b from-transparent via-foreground/20 to-transparent animate-scan-y opacity-50" />
      <div className="absolute top-0 bottom-0 right-[30%] w-[2px] bg-gradient-to-b from-transparent via-foreground/20 to-transparent animate-scan-y-reverse opacity-50" />

      <div className="absolute left-0 right-0 top-[35%] h-[2px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent animate-scan-x opacity-50" />
      <div className="absolute left-0 right-0 bottom-[20%] h-[2px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent animate-scan-x-reverse opacity-50" />

      {/* Radial mask to fade out the grid near the edges */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)] opacity-80" />
    </div>
  );
}
