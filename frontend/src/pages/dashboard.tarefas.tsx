import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const cols = [
  {
    name: "To do",
    items: [
      { t: "Map ERP endpoints", who: "Marina", due: "Fri", from: "Q2 Planning", prio: "High" },
      {
        t: "Partner API contingency plan",
        who: "Pedro",
        due: "Next week",
        from: "Q2 Planning",
        prio: "Medium",
      },
      { t: "Update sales deck", who: "Lucas", due: "May 23", from: "Product sync", prio: "Low" },
    ],
  },
  {
    name: "In progress",
    items: [
      {
        t: "Dashboard v2 mockups",
        who: "Bruno",
        due: "May 20",
        from: "Product roadmap",
        prio: "High",
      },
      {
        t: "Document incident SOP",
        who: "Camila",
        due: "May 18",
        from: "Post-mortem",
        prio: "Medium",
      },
    ],
  },
  {
    name: "Done",
    items: [
      { t: "Approve Q2 budget", who: "Ana", due: "May 10", from: "Quarterly review", prio: "High" },
      { t: "Hire senior dev", who: "Camila", due: "May 8", from: "Hiring panel", prio: "Medium" },
    ],
  },
];

export function TasksPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Action</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Tasks & Actions</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Everything decided in meetings — with owner and deadline.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {cols.map((c) => (
          <div key={c.name} className="border hairline rounded-2xl surface p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-sm">{c.name}</h2>
              <span className="text-xs text-muted-foreground font-mono">{c.items.length}</span>
            </div>
            <div className="space-y-3">
              {c.items.map((it) => (
                <div key={it.t} className="border hairline rounded-lg p-3 surface-strong hover-lift">
                  <div className="flex items-start gap-2">
                    <Checkbox className="mt-0.5" defaultChecked={c.name === "Done"} />
                    <div className="flex-1">
                      <div className="text-sm">{it.t}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                        from · {it.from}
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <div className="h-5 w-5 rounded-full bg-foreground text-background grid place-items-center text-[9px]">
                            {it.who[0]}
                          </div>
                          {it.who}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Badge variant="outline" className="text-[10px] font-normal">
                            {it.prio}
                          </Badge>
                          <span className="text-[10px] text-muted-foreground font-mono">
                            {it.due}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
