import DashboardLayout from "../components/layout/DashboardLayout.tsx";
import DashboardPage from "../features/pages/DashboardPage.tsx";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
}
