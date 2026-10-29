import { Sparkles, AlertTriangle, Repeat, TrendingDown, Lightbulb, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const cards = [
  {
    i: Repeat,
    t: "Recurring topic",
    d: '"ERP Integration" appeared in 7 meetings. Consider a dedicated workstream.',
  },
  {
    i: AlertTriangle,
    t: "Detected risk",
    d: "Partner API dependency was mentioned as a blocker in 3 meetings.",
  },
  {
    i: TrendingDown,
    t: "Unproductive meetings",
    d: "9% of meetings ended without a decision. Suggestion: apply an agenda template.",
  },
  {
    i: Lightbulb,
    t: "Suggestion",
    d: "Marina and Bruno discuss similar topics separately — propose a weekly sync.",
  },
];

export function InsightsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2">
        <Sparkles className="h-3 w-3" /> Intelligence
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">AI Insights</h1>
      <p className="mt-2 text-sm text-muted-foreground max-w-xl">
        Patterns, bottlenecks and recommendations detected across all your meetings.
      </p>

      <div className="mt-10 border hairline rounded-2xl surface p-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Semantic search
        </p>
        <div className="relative">
          <Search className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder='E.g.: "Show meetings that discussed ERP integration"'
            className="pl-11 h-12 text-base"
          />
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-px bg-border rounded-2xl border hairline overflow-hidden">
        {cards.map((c) => (
          <div key={c.t} className="surface-strong p-8 hover-lift">
            <c.i className="h-5 w-5" strokeWidth={1.5} />
            <h3 className="mt-6 font-medium">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
