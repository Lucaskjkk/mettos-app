import { Link, useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Search, Settings, CreditCard, Code2, Users, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

export function DashboardHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function onSignOut() {
    await logout();
    navigate("/login", { replace: true });
  }

  return (
    <header className="h-14 border-b hairline flex items-center px-4 gap-3 bg-background/80 backdrop-blur-md sticky top-0 z-30">
      <SidebarTrigger />
      <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search meetings, decisions, people…"
            className="pl-8 h-9 bg-muted/40 border-transparent focus-visible:bg-background"
          />
        </div>
      </div>
      <div className="flex-1" />
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Bell className="h-4 w-4" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 rounded-full pl-2 pr-1 py-1 hover:bg-muted transition-colors">
            <span className="hidden md:inline text-sm">{user?.name ?? "User"}</span>
            <div className="h-7 w-7 rounded-full bg-foreground text-background grid place-items-center text-xs font-medium">
              {user?.initials ?? "U"}
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/dashboard/configuracoes">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/billing">
              <CreditCard className="h-4 w-4 mr-2" />
              Billing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/api">
              <Code2 className="h-4 w-4 mr-2" />
              API / Developers
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/equipe">
              <Users className="h-4 w-4 mr-2" />
              Team
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
