import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { AnimatedGrid } from "@/components/marketing/AnimatedGrid";

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <AnimatedGrid softMask />
      <AppSidebar />
      <SidebarInset className="relative z-10 bg-transparent">
        <DashboardHeader />
        <main className="flex-1 relative">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
