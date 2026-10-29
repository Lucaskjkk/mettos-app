import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AnimatedGrid } from "@/components/marketing/AnimatedGrid";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";

export function LoginPage() {
  const { user, loading, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(email, password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha no login");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatedGrid />
      </div>

      <BackgroundBeamsWithCollision className="hidden md:flex bg-zinc-950 text-zinc-50 p-12 flex-col items-start justify-between relative z-10 shadow-2xl">
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none z-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 z-0" />

        <Link to="/login" className="flex items-center gap-2 relative z-20">
          <div className="h-7 w-7 rounded-md bg-zinc-50 text-zinc-950 grid place-items-center text-[11px] font-bold">
            M
          </div>
          <span className="font-semibold text-white">Minuta</span>
        </Link>

        <div className="max-w-md relative z-20 w-full">
          <p className="text-xs uppercase font-bold tracking-widest text-primary mb-4">
            Welcome back
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight font-semibold text-balance leading-tight text-white mb-2">
            "We left the meeting with the notes ready. No going back."
          </h1>
          <p className="mt-6 text-sm text-zinc-400">
            — Camila Souza, Head of Operations at Helio
          </p>
        </div>

        <div className="text-xs text-zinc-500 font-mono relative z-20">
          © Minuta Labs · 2026
        </div>
      </BackgroundBeamsWithCollision>

      <div className="flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-sm fade-up bg-background/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border hairline shadow-xl ring-1 ring-black/5 dark:ring-white/5">
          <Link to="/login" className="md:hidden flex items-center gap-2 mb-12">
            <div className="h-7 w-7 rounded-md bg-foreground text-background grid place-items-center text-[11px] font-semibold">
              M
            </div>
            <span className="font-semibold">Minuta</span>
          </Link>
          <h2 className="font-display text-3xl tracking-tight font-semibold">Sign in</h2>
          <p className="mt-2 text-sm text-muted-foreground">Continue where you left off.</p>

          <div className="mt-8 space-y-2">
            <Button type="button" variant="outline" className="w-full justify-center h-11">
              <GoogleIcon /> Continue with Google
            </Button>
            <Button type="button" variant="outline" className="w-full justify-center h-11">
              <LinkedinIcon /> Continue with LinkedIn
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" /> or with email{" "}
            <div className="flex-1 h-px bg-border" />
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="email" className="text-xs">
                Username or email
              </Label>
              <Input
                id="email"
                type="text"
                autoComplete="username"
                placeholder="you@company.com"
                className="mt-1.5 h-11"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="flex justify-between">
                <Label htmlFor="pwd" className="text-xs">
                  Password
                </Label>
                <a href="#" className="text-xs text-muted-foreground hover:underline">
                  Forgot?
                </a>
              </div>
              <Input
                id="pwd"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="mt-1.5 h-11"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full h-11" disabled={submitting}>
              {submitting ? "Signing in…" : "Sign in"}
            </Button>
          </form>

          <p className="mt-8 text-sm text-center text-muted-foreground">
            New here?{" "}
            <a href="#" className="text-foreground underline underline-offset-4">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4-5.5 4-3.3 0-6-2.7-6-6.1S8.7 5.9 12 5.9c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12s4.2 9.5 9.4 9.5c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z"
      />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#0A66C2]">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-5.3c0-1.3-.5-2.2-1.7-2.2a1.8 1.8 0 00-1.7 1.2c-.1.2-.1.5-.1.8V19h-3V9h3v1.3a3 3 0 012.7-1.5c2 0 3.5 1.3 3.5 4V19z" />
    </svg>
  );
}
