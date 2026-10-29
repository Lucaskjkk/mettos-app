import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BillingPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Billing</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">Billing</h1>

      <div className="mt-10 grid md:grid-cols-3 gap-px bg-border rounded-2xl border hairline overflow-hidden">
        <div className="md:col-span-2 bg-card p-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Current Plan</p>
          <div className="flex items-baseline justify-between mt-3">
            <h2 className="font-display text-3xl tracking-tight font-semibold">Medium</h2>
            <span className="text-sm text-muted-foreground font-mono">$20 / user / month</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Next charge on June 12, 2026 d $240.00 (12 users)
          </p>
          <div className="mt-6 flex gap-2">
            <Button asChild>
              <Link to="/precos">Change Plan</Link>
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
        <div className="bg-card p-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Usage this month
          </p>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Meetings</span>
              <span className="font-mono">32 / 50</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-foreground" style={{ width: "64%" }} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Members</span>
              <span className="font-mono">12 / 20</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-foreground" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border hairline rounded-2xl bg-card overflow-hidden">
        <div className="px-6 py-3 border-b hairline text-[10px] uppercase tracking-widest text-muted-foreground grid grid-cols-4">
          <span>Data</span>
          <span>Descrição</span>
          <span>Valor</span>
          <span>Status</span>
        </div>
        {[
          { d: "12 mai 2026", t: "Plano Medium · 12 usuários", v: "$240,00", s: "Pago" },
          { d: "12 abr 2026", t: "Plano Medium · 11 usuários", v: "$220,00", s: "Pago" },
          { d: "12 mar 2026", t: "Plano Medium · 9 usuários", v: "$180,00", s: "Pago" },
        ].map((r) => (
          <div
            key={r.d}
            className="px-6 py-4 grid grid-cols-4 text-sm border-b hairline last:border-b-0"
          >
            <span className="font-mono text-muted-foreground">{r.d}</span>
            <span>{r.t}</span>
            <span className="font-mono">{r.v}</span>
            <span className="text-muted-foreground">{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
