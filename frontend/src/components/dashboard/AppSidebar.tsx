import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  PlayCircle,
  LayoutDashboard,
  Mic,
  GitBranch,
  ListChecks,
  Sparkles,
  Plug,
  Settings,
  Users,
  Code2,
  CreditCard,
} from "lucide-react";

type Item = {
  title: string;
  url: string;
  icon: typeof PlayCircle;
  accent?: boolean;
  exact?: boolean;
};
type Group = { label: string; items: Item[] };
const groups: Group[] = [
  {
    label: "Action",
    items: [
      { title: "Start meeting", url: "/dashboard/inicio_reuniao", icon: PlayCircle, accent: true },
    ],
  },
  {
    label: "Overview",
    items: [{ title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, exact: true }],
  },
  {
    label: "Meetings",
    items: [
      { title: "Meeting list", url: "/dashboard/lista_reunioes", icon: Mic },
      { title: "Flowcharts", url: "/dashboard/fluxogramas", icon: GitBranch },
      { title: "Tasks & Actions", url: "/dashboard/tarefas", icon: ListChecks },
    ],
  },
  {
    label: "Intelligence",
    items: [
      { title: "AI Insights", url: "/dashboard/insights_ia", icon: Sparkles },
      { title: "Integrations", url: "/dashboard/integracoes", icon: Plug },
    ],
  },
  {
    label: "Workspace",
    items: [
      { title: "Settings", url: "/dashboard/configuracoes", icon: Settings },
      { title: "Team", url: "/dashboard/equipe", icon: Users },
      { title: "Billing", url: "/dashboard/billing", icon: CreditCard },
      { title: "API / Developers", url: "/dashboard/api", icon: Code2 },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname: path } = useLocation();

  return (
    <Sidebar collapsible="icon">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
        <div className="absolute -top-16 -left-10 h-44 w-44 rounded-full bg-white/[0.06] blur-3xl animate-float-slow" />
        <div className="absolute -bottom-10 -right-12 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl animate-float-slow-reverse" />
        <div className="absolute left-0 right-0 top-[40%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan-x opacity-50" />
      </div>
      <SidebarHeader className="relative z-10 border-b border-sidebar-border">
        <Link to="/dashboard" className="flex items-center gap-2 px-2 py-1.5">
          <div className="h-7 w-7 rounded-md bg-sidebar-primary text-sidebar-primary-foreground grid place-items-center text-[11px] font-semibold shrink-0">
            M
          </div>
          {!collapsed && <span className="font-semibold text-sidebar-foreground">Minuta</span>}
        </Link>
      </SidebarHeader>
      <SidebarContent className="relative z-10">
        {groups.map((g) => (
          <SidebarGroup key={g.label}>
            {!collapsed && (
              <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-sidebar-foreground/50">
                {g.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((it) => {
                  const active = it.exact ? path === it.url : path.startsWith(it.url);
                  return (
                    <SidebarMenuItem key={it.url}>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        tooltip={it.title}
                        className={
                          it.accent
                            ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground active:bg-sidebar-primary active:text-sidebar-primary-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                            : ""
                        }
                      >
                        <Link to={it.url as string}>
                          <it.icon className="h-4 w-4" />
                          <span>{it.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
