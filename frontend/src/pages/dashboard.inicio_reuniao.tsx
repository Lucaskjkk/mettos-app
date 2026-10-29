import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mic, Calendar, Sparkles, FileText, Radio } from "lucide-react";

export function StartMeetingPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="p-8 max-w-5xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Action</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Start a meeting</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Place the device on the table. The AI handles the rest.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="group text-left rounded-2xl border hairline bg-foreground text-background p-10 hover-lift relative overflow-hidden cursor-pointer">
              <span
                className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-white/20 blur-3xl"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -bottom-20 -right-16 h-44 w-44 rounded-full bg-white/15 blur-3xl"
                aria-hidden
              />
              <Mic className="relative h-7 w-7" strokeWidth={1.5} />
              <h3 className="relative mt-8 font-display text-3xl tracking-tight font-semibold">
                Start now
              </h3>
              <p className="relative mt-3 text-sm opacity-70">
                Starts recording, transcription and topic detection in real time.
              </p>
              <span className="relative mt-8 inline-flex items-center gap-2 text-sm">Start →</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">New meeting</DialogTitle>
              <DialogDescription>Select the mode. You can change it later.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 mt-2">
              {[
                { i: Radio, t: "Start recording", d: "Starts immediately; ideal for in-person." },
                { i: Calendar, t: "Schedule meeting", d: "Schedules and sends invite with link." },
                {
                  i: Mic,
                  t: "Real-time transcription",
                  d: "See text appear as the conversation unfolds.",
                },
                { i: Sparkles, t: "AI detecting topics", d: "Automatic tags by topic." },
                {
                  i: FileText,
                  t: "Live insight generation",
                  d: "Decisions and tasks generated in real time.",
                },
              ].map((o) => (
                <button
                  key={o.t}
                  className="w-full text-left flex items-start gap-4 p-4 rounded-lg border hairline hover:bg-muted transition-colors"
                >
                  <o.i className="h-5 w-5 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">{o.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{o.d}</div>
                  </div>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <div className="rounded-2xl border hairline surface p-10 hover-lift">
          <Calendar className="h-7 w-7" strokeWidth={1.5} />
          <h3 className="mt-8 font-display text-3xl tracking-tight font-semibold">Schedule</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Schedule with participants and context.
          </p>
          <div className="mt-8 space-y-3">
            <div>
              <Label className="text-xs">Title</Label>
              <Input placeholder="E.g.: Product sync" className="mt-1.5" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Date</Label>
                <Input type="date" className="mt-1.5" />
              </div>
              <div>
                <Label className="text-xs">Time</Label>
                <Input type="time" className="mt-1.5" />
              </div>
            </div>
            <Button className="w-full mt-2">Schedule</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
