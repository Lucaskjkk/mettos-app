import { Button } from "@/components/ui/button";

const tools = [
  { t: "Slack", d: "Sends summaries and tasks to channels.", on: true },
  { t: "Notion", d: "Syncs meeting minutes to a database.", on: true },
  { t: "Jira", d: "Creates issues from detected tasks.", on: false },
  { t: "Microsoft Teams", d: "Notifications and official bot.", on: false },
  { t: "Trello", d: "Adds cards to the project board.", on: false },
  { t: "Google Calendar", d: "Imports events and links meetings.", on: true },
];

export function IntegrationsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Connections</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Integrations</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Connect Minuta to tools where your team already works.
      </p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl border hairline overflow-hidden">
        {tools.map((t) => (
          <div key={t.t} className="surface p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <div className="h-10 w-10 rounded-md bg-foreground text-background grid place-items-center font-medium">
                {t.t[0]}
              </div>
              {t.on && (
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" /> Connected
                </span>
              )}
            </div>
            <h3 className="mt-6 font-medium">{t.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground flex-1">{t.d}</p>
            <Button variant={t.on ? "outline" : "default"} size="sm" className="mt-6 w-fit">
              {t.on ? "Manage" : "Connect"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
