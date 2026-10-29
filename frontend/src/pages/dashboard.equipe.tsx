import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const members = [
  { n: "Ana Ribeiro", e: "ana@empresa.com", r: "Owner", l: "Online" },
  { n: "Bruno Tavares", e: "bruno@empresa.com", r: "Admin", l: "2 hours ago" },
  { n: "Camila Souza", e: "camila@empresa.com", r: "Member", l: "Online" },
  { n: "Lucas Mendes", e: "lucas@empresa.com", r: "Member", l: "Yesterday" },
  { n: "Marina Rocha", e: "marina@empresa.com", r: "Member", l: "Online" },
  { n: "Pedro Dias", e: "pedro@empresa.com", r: "Guest", l: "3 days ago" },
];

export function TeamPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto fade-up">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">People</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Team</h1>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Invite
        </Button>
      </div>

      <div className="mt-10 border hairline rounded-2xl bg-card overflow-hidden">
        <div className="grid grid-cols-[1.5fr_1.5fr_0.6fr_0.6fr] px-6 py-3 text-[10px] uppercase tracking-widest text-muted-foreground border-b hairline">
          <span>Nome</span>
          <span>Email</span>
          <span>Função</span>
          <span>Atividade</span>
        </div>
        {members.map((m) => (
          <div
            key={m.e}
            className="grid grid-cols-[1.5fr_1.5fr_0.6fr_0.6fr] px-6 py-4 items-center border-b hairline last:border-b-0 hover:bg-muted/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-foreground text-background grid place-items-center text-xs font-medium">
                {m.n
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <span className="text-sm font-medium">{m.n}</span>
            </div>
            <span className="text-sm text-muted-foreground">{m.e}</span>
            <span className="text-sm">{m.r}</span>
            <span className="text-xs text-muted-foreground font-mono">{m.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
