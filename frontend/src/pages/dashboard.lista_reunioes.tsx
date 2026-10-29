import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const meetings = [
  {
    t: "Q2 Planning",
    date: "May 12",
    who: ["AR", "LM", "PD"],
    dur: "47m",
    status: "Completed",
    tags: ["Strategy", "ERP"],
  },
  {
    t: "Product sync",
    date: "May 10",
    who: ["AR", "BT"],
    dur: "32m",
    status: "Completed",
    tags: ["Product"],
  },
  {
    t: "1:1 Camila",
    date: "May 9",
    who: ["AR", "CS"],
    dur: "24m",
    status: "Completed",
    tags: ["People"],
  },
  {
    t: "Partner kickoff",
    date: "May 7",
    who: ["AR", "LM", "PD", "JS"],
    dur: "1h12",
    status: "In review",
    tags: ["Sales", "ERP"],
  },
  {
    t: "Sprint 23 retrospective",
    date: "May 3",
    who: ["AR", "BT", "JS", "MR"],
    dur: "55m",
    status: "Completed",
    tags: ["Engineering"],
  },
  {
    t: "Hiring panel",
    date: "May 2",
    who: ["AR", "CS", "BT"],
    dur: "40m",
    status: "Draft",
    tags: ["Hiring"],
  },
];

export function MeetingsListPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">History</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Meetings</h1>
        </div>
        <div className="relative w-72">
          <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Filter by title, tag, person…" className="pl-8" />
        </div>
      </div>

      <div className="mt-10 border hairline rounded-2xl surface overflow-hidden">
        <div className="grid grid-cols-[1.5fr_0.6fr_1fr_0.6fr_1fr_0.6fr] px-6 py-3 text-[10px] uppercase tracking-widest text-muted-foreground border-b hairline">
          <span>Meeting</span>
          <span>Date</span>
          <span>Participants</span>
          <span>Duration</span>
          <span>Tags</span>
          <span>Status</span>
        </div>
        {meetings.map((m) => (
          <div
            key={m.t}
            className="grid grid-cols-[1.5fr_0.6fr_1fr_0.6fr_1fr_0.6fr] px-6 py-4 items-center border-b hairline last:border-b-0 hover:bg-muted/40 transition-colors"
          >
            <span className="font-medium text-sm">{m.t}</span>
            <span className="text-sm text-muted-foreground font-mono">{m.date}</span>
            <div className="flex -space-x-1.5">
              {m.who.map((w) => (
                <div
                  key={w}
                  className="h-6 w-6 rounded-full bg-foreground text-background grid place-items-center text-[9px] font-medium ring-2 ring-card"
                >
                  {w}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-mono">{m.dur}</span>
            <div className="flex flex-wrap gap-1">
              {m.tags.map((t) => (
                <Badge key={t} variant="secondary" className="text-[10px] font-normal">
                  {t}
                </Badge>
              ))}
            </div>
            <span className="text-xs">{m.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
