import { cn } from "@/lib/utils";

type AnimatedGridProps = {
  className?: string;
  /** Weaker edge mask so the grid stays more visible (dashboards). */
  softMask?: boolean;
};

export function AnimatedGrid({ className, softMask = false }: AnimatedGridProps) {
  return (
    <div
      className={cn("fixed inset-0 z-0 pointer-events-none overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

      <div className="absolute top-0 bottom-0 left-[20%] w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent animate-scan-y opacity-60" />
      <div className="absolute top-0 bottom-0 right-[30%] w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent animate-scan-y-reverse opacity-50" />

      <div className="absolute left-0 right-0 top-[35%] h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent animate-scan-x opacity-60" />
      <div className="absolute left-0 right-0 bottom-[20%] h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent animate-scan-x-reverse opacity-50" />

      <div
        className={cn(
          "absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]",
          softMask ? "opacity-45" : "opacity-80",
        )}
      />
    </div>
  );
}
