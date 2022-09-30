import DashboardContent from "../components/dashboard/index";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <section className="header-content">
        <div className="header-title">Dashboard</div>
      </section>
      <section className="content">
        <DashboardContent title="Market Insights" />
      </section>
    </div>
  )
}

export default Dashboard;