import { GitBranch } from "lucide-react";

const flows = [
  { t: "Enterprise client onboarding", type: "BPMN", date: "May 12" },
  { t: "Q2 Sales pipeline", type: "Workflow", date: "May 10" },
  { t: "Incident response", type: "SOP", date: "May 8" },
  { t: "ERP Integration", type: "Timeline", date: "May 5" },
  { t: "Feature launch", type: "BPMN", date: "May 1" },
  { t: "Budget approval", type: "Workflow", date: "Apr 28" },
];

export function FlowchartsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Generated processes</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Flowcharts</h1>
      <p className="mt-2 text-sm text-muted-foreground max-w-xl">
        Workflows, BPMNs and timelines automatically extracted from your meetings.
      </p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl border hairline overflow-hidden">
        {flows.map((f) => (
          <div key={f.t} className="surface p-6 hover-lift">
            <div className="aspect-[4/3] border hairline rounded-lg surface-strong grid place-items-center text-muted-foreground">
              <svg
                viewBox="0 0 200 140"
                className="w-3/4 h-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="20" cy="70" r="8" />
                <rect x="50" y="55" width="50" height="30" rx="4" />
                <path d="M125 40 l20 -20 l20 20 l-20 20 z" />
                <path d="M28 70 H50" />
                <path d="M100 70 H125" />
              </svg>
            </div>
            <div className="mt-5 flex items-start justify-between">
              <div>
                <div className="text-sm font-medium">{f.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{f.date}</div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground inline-flex items-center gap-1">
                <GitBranch className="h-3 w-3" /> {f.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
