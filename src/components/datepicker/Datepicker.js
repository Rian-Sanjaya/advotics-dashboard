import { useState } from "react";
import { subDays, startOfMonth } from "date-fns";
import DatePicker from "react-datepicker";
import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker({ dateStart, dateEnd, setDateStart, setDateEnd, setRotateIcon }) {
  const [startDate, setStartDate] = useState(dateStart);
  const [endDate, setEndDate] = useState(dateEnd);
  const [currentOption, setCurrentOption] = useState("")

  const handleClick = (start, end, option) => {
    setCurrentOption(option);
    setStartDate(start);
    setEndDate(end);
  }

  const handleOnChange = (dates) => {
    const [start, end] = dates;
    if (start && end) setCurrentOption("");
    setStartDate(start);
    setEndDate(end);
  };

  const handleCustom = () => {
    setCurrentOption("");
  }

  const handleApply = () => {
    if (!startDate || !endDate) return;
    setDateStart(startDate);
    setDateEnd(endDate);
    setRotateIcon(false);
  };

  const handleCancel = () => {
    setRotateIcon(false)
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "16px" }}><img src="/images/calendar.png" alt="Calendar" /></div>
          <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>Period</span>
        </div>
        <div style={{ cursor: "pointer", fontSize: "1.2rem" }} onClick={handleCancel}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div 
          style={{ 
            paddingRight: 16, 
            borderRight: "2px solid rgba(220,220,220,0.8)", 
            color: "#9B9AA7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: 125,
          }}
        >
          <div 
            style={{ cursor: "pointer", color: currentOption === "Today" ? "#289E45" : "#9B9AA7", fontWeight: currentOption === "Today" ? 600 : 500 }} 
            onClick={() => handleClick(new Date(), new Date(), "Today")}
          >
            Today
          </div>
          <div><Divider style={{ margin: "8px 0" }} /></div>
          <div 
            style={{ cursor: "pointer", color: currentOption === "Yesterday" ? "#289E45" : "#9B9AA7", fontWeight: currentOption === "Yesterday" ? 600 : 500 }}
            onClick={() => handleClick(subDays(new Date(), 1), subDays(new Date(), 1), "Yesterday")}
          >
            Yesterday
          </div>
          <div><Divider style={{ margin: "8px 0" }} /></div>
          <div 
            style={{ cursor: "pointer", color: currentOption === "Last 7 days" ? "#289E45" : "#9B9AA7", fontWeight: currentOption === "Last 7 days" ? 600 : 500 }}
            onClick={() => handleClick(subDays(new Date(), 7), subDays(new Date(), 1), "Last 7 days")}
          >
            Last 7 days
          </div>
          <div><Divider style={{ margin: "8px 0" }} /></div>
          <div 
            style={{ cursor: "pointer", color: currentOption === "Last 30 days" ? "#289E45" : "#9B9AA7", fontWeight: currentOption === "Last 30 days" ? 600 : 500 }}
            onClick={() => handleClick(subDays(new Date(), 30), subDays(new Date(), 1), "Last 30 days")}
          >
            Last 30 days
          </div>
          <div><Divider style={{ margin: "8px 0" }} /></div>
          <div 
            style={{ cursor: "pointer", color: currentOption === "This Month" ? "#289E45" : "#9B9AA7", fontWeight: currentOption === "This Month" ? 600 : 500 }}
            onClick={() => handleClick(startOfMonth(new Date()), new Date(), "This Month")}
          >
            This Month
          </div>
          <div><Divider style={{ margin: "8px 0" }} /></div>
          <div 
            style={{ cursor: "pointer", color: currentOption === "Custom" ? "#289E45" : "#9B9AA7", fontWeight: currentOption === "Custom" ? 600 : 500 }}
            onClick={handleCustom}
          >
            Custom
          </div>
          <div style={{ marginTop: 8 }}>
            <button
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                background: "#009D38",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "3px",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
        <div style={{ paddingLeft: 16 }}>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            filterDate = {(date) => {
              return new Date() > date;
            }}
            
            onChange={handleOnChange}
            monthsShown={2}
            inline
          />
        </div>
      </div>
    </div>
  );
}

export default Datepicker;