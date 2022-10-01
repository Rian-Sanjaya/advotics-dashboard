import Header from "../components/dashboard/Header";
import DashboardContent from "../components/dashboard/index";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <DashboardContent title="Market Insights" />
    </div>
  )
}

export default Dashboard;