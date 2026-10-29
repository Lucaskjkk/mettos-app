import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export function ApiPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto fade-up">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Platform</p>
      <h1 className="mt-2 font-display text-4xl tracking-tight font-semibold">API & Developers</h1>
      <p className="mt-2 text-sm text-muted-foreground">Integrate Minuta with your own systems.</p>

      <div className="mt-10 border hairline rounded-2xl surface p-8">
        <h2 className="font-medium">API Keys</h2>
        <div className="mt-4 space-y-3">
          {[
            { n: "Production", k: "mn_live_••••••••••••5f31" },
            { n: "Staging", k: "mn_test_••••••••••••a09c" },
          ].map((k) => (
            <div
              key={k.n}
              className="border hairline rounded-lg surface-strong p-4 flex items-center justify-between"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{k.n}</div>
                <div className="font-mono text-sm mt-1">{k.k}</div>
              </div>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border hairline rounded-2xl bg-foreground text-background p-8 ink">
        <p className="text-xs uppercase tracking-widest opacity-70">Example · cURL</p>
        <pre className="mt-4 font-mono text-xs leading-relaxed overflow-x-auto">
          {`curl https://api.minuta.app/v1/meetings \\
  -H "Authorization: Bearer mn_live_•••" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Sync de produto",
    "participants": ["ana@x.com", "bruno@x.com"]
  }'`}
        </pre>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-px bg-border rounded-2xl border hairline overflow-hidden">
        {[
          { t: "Documentação", d: "Endpoints, schemas e SDKs." },
          { t: "Webhooks", d: "Receive events in real time." },
          { t: "OAuth Apps", d: "Build integrations for the marketplace." },
        ].map((x) => (
          <div key={x.t} className="surface p-6 hover-lift">
            <div className="font-medium">{x.t}</div>
            <p className="text-sm text-muted-foreground mt-2">{x.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
