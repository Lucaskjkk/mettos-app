import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingDown, TrendingUp, Mic } from "lucide-react";

const kpis = [
  { l: "Meetings this week", v: "12", d: "+3 vs. last week", up: true },
  { l: "Time in meetings", v: "8h 42m", d: "-1h 12m", up: false },
  { l: "Decisions made", v: "47", d: "+11", up: true },
  { l: "Unproductive", v: "9%", d: "-4pp", up: false },
];

export function DashboardOverview() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Overview</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">
            Good morning, Ana.
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Here's what happened while you were focused.
          </p>
        </div>
        <Button asChild size="lg">
          <Link to="/dashboard/inicio_reuniao">
            <Mic className="h-4 w-4" />
            Start meeting
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl border hairline overflow-hidden">
        {kpis.map((k) => (
          <div key={k.l} className="bg-background p-6">
            <p className="text-xs text-muted-foreground">{k.l}</p>
            <div className="mt-3 font-display text-3xl tracking-tight font-semibold">{k.v}</div>
            <div
              className={`mt-2 flex items-center gap-1 text-xs ${k.up ? "text-foreground" : "text-muted-foreground"}`}
            >
              {k.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}{" "}
              {k.d}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 border hairline rounded-2xl bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-medium">Time by topic · last 30 days</h2>
            <span className="text-xs text-muted-foreground font-mono">42h total</span>
          </div>
          <div className="space-y-4">
            {[
              { t: "Q2 Planning", h: 14, p: 78 },
              { t: "ERP Integration", h: 9, p: 52 },
              { t: "Customer success", h: 7, p: 40 },
              { t: "Hiring", h: 6, p: 34 },
              { t: "Product roadmap", h: 4, p: 24 },
              { t: "Other", h: 2, p: 12 },
            ].map((r) => (
              <div key={r.t}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{r.t}</span>
                  <span className="text-muted-foreground font-mono">{r.h}h</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground rounded-full transition-all"
                    style={{ width: `${r.p}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border hairline rounded-2xl bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-medium">Upcoming meetings</h2>
            <Link
              to="/dashboard/lista_reunioes"
              className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              View all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { t: "Product sync", w: "Today, 3pm", who: "5 people" },
              { t: "1:1 with Bruno", w: "Tomorrow, 10am", who: "2 people" },
              { t: "Quarterly review", w: "Fri, 2pm", who: "12 people" },
            ].map((m) => (
              <div key={m.t} className="border-t hairline pt-4 first:border-t-0 first:pt-0">
                <div className="text-sm font-medium">{m.t}</div>
                <div className="text-xs text-muted-foreground mt-1 flex justify-between">
                  <span>{m.w}</span>
                  <span>{m.who}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
