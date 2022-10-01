import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/dashboard/Header";
import DashboardContent from "../components/dashboard/index";
import Datepicker from "../components/datepicker/Datepicker";

function Dashboard() {
  const [rotateIcon, setRotateIcon] = useState(false);

  const handleCollapseOpen = () => {
    setRotateIcon(!rotateIcon)
  };

  return (
    <div className="dashboard-container">
      <section className="header-wrapper">
        <Header />
        <div className="datepicker-collapse-container">
          <span className="period">Period</span>
          <span className="range-date" onClick={handleCollapseOpen}>11 September 2018 - 14 September 2018</span>
          <span className={`icon-box ${rotateIcon ? 'rotate' : ''}`} onClick={handleCollapseOpen}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div className="datepicker-container" style={{ display: rotateIcon ? "block" : "none" }}>
          <Datepicker />
        </div>
      </section>
      <DashboardContent title="Market Insights" />
    </div>
  )
}

export default Dashboard;