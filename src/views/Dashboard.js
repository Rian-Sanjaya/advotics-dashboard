import { useState } from "react";
import { format, subDays } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/dashboard/Header";
import DashboardContent from "../components/dashboard/index";
import Datepicker from "../components/datepicker/Datepicker";

function Dashboard() {
  const [rotateIcon, setRotateIcon] = useState(false);
  const [dateStart, setDateStart] = useState(subDays(new Date(), 7));
  const [dateEnd, setDateEnd] = useState(subDays(new Date(), 1));

  const handleCollapseOpen = () => {
    setRotateIcon(!rotateIcon)
  };

  return (
    <div className="dashboard-container">
      <section className="header-wrapper">
        <Header />
        <div className="datepicker-collapse-container">
          <div style={{ margin: "-2px 8px 0 0" }}><img src="/images/calendar.png" alt="Calendar" /></div>
          <span className="period">Period</span>
          <span className="range-date" onClick={handleCollapseOpen}>{format(dateStart, 'dd MMMM yyyy')} - {format(dateEnd, 'dd MMMM yyyy')}</span>
          <span className={`icon-box ${rotateIcon ? 'rotate' : ''}`} onClick={handleCollapseOpen}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div className="datepicker-container" style={{ display: rotateIcon ? "block" : "none" }}>
          <Datepicker dateStart={dateStart} dateEnd={dateEnd} setDateStart={setDateStart} setDateEnd={setDateEnd} setRotateIcon={setRotateIcon} />
        </div>
      </section>
      <DashboardContent title="Market Insights" />
    </div>
  )
}

export default Dashboard;