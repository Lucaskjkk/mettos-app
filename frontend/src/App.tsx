import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { LoginPage } from "@/pages/login";
import { DashboardLayout } from "@/pages/dashboard";
import { DashboardOverview } from "@/pages/dashboard.index";
import { StartMeetingPage } from "@/pages/dashboard.inicio_reuniao";
import { MeetingsListPage } from "@/pages/dashboard.lista_reunioes";
import { FlowchartsPage } from "@/pages/dashboard.fluxogramas";
import { TasksPage } from "@/pages/dashboard.tarefas";
import { InsightsPage } from "@/pages/dashboard.insights_ia";
import { IntegrationsPage } from "@/pages/dashboard.integracoes";
import { SettingsPage } from "@/pages/dashboard.configuracoes";
import { TeamPage } from "@/pages/dashboard.equipe";
import { BillingPage } from "@/pages/dashboard.billing";
import { ApiPage } from "@/pages/dashboard.api";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <AuthProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="inicio_reuniao" element={<StartMeetingPage />} />
                <Route path="lista_reunioes" element={<MeetingsListPage />} />
                <Route path="fluxogramas" element={<FlowchartsPage />} />
                <Route path="tarefas" element={<TasksPage />} />
                <Route path="insights_ia" element={<InsightsPage />} />
                <Route path="integracoes" element={<IntegrationsPage />} />
                <Route path="configuracoes" element={<SettingsPage />} />
                <Route path="equipe" element={<TeamPage />} />
                <Route path="billing" element={<BillingPage />} />
                <Route path="api" element={<ApiPage />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  );
}
