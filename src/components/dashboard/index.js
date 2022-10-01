import { useState, useEffect, useRef } from "react";
import { ComposedChart, Bar, Line, XAxis, YAxis,Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import "./index.scss";

const dataChart = [
  {name: 'Jun 12', Nett: 26000, Gross: 25000}, 
  {name: 'Tue', Nett: 23000, Gross: 22000}, 
  {name: 'Wed', Nett: 20000, Gross: 19000}, 
  {name: 'Thu', Nett: 21000, Gross: 17000}, 
  {name: 'Fri', Nett: 21500, Gross: 20000}, 
  {name: 'Sat', Nett: 22000, Gross: 22000}, 
  {name: 'Sun', Nett: 24000, Gross: 24000}, 
];

const renderComposedChart = (
  <ResponsiveContainer width="100%" height={300}>
    <ComposedChart data={dataChart} margin={{ left: -10, top: 32 }}>
      <XAxis dataKey="name" stroke="#43425D" axisLine={false} />
      <YAxis stroke="#43425D" axisLine={false} tickLine={false} />
      <Tooltip />
      <Legend align="left" wrapperStyle={{ paddingLeft: 35 }} />
      <CartesianGrid stroke="#ccc" vertical={false} />
      <Bar dataKey="Nett" fill="#279D44" barSize={30} />
      <Line type="monotone" dataKey="Gross" stroke="#FFE854" strokeWidth={2} activeDot={{ r: 5 }} />
    </ComposedChart>
  </ResponsiveContainer>
);

function Dashboard({ title }) {
  const [rotateIcon, setRotateIcon] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      const content = document.querySelector(".collapse-content");
      setContentHeight(content.offsetHeight);
      // make deafult collapse open
      content.style.height = content.offsetHeight + "px";
      content.style.opacity = 1;
      setRotateIcon(!rotateIcon);

      // make default collapse close
      // content.style.height = 0;
      // content.style.opacity = 0;

      content.style.visibility = "unset";
    }
  }, [setRotateIcon, rotateIcon])

  const handleCollapseOpen = () => {
    setRotateIcon(!rotateIcon)
    const content = document.querySelector(".collapse-content");
    if (rotateIcon) {
      content.style.height = 0;
      content.style.opacity = 0;
    } else {
      content.style.height = contentHeight + "px";
      content.style.opacity = 1;
    }
  };

  return (
    <section className="content">
      <div className="collapse-container">
        <section className="collapse-header">
          <span className="title" onClick={handleCollapseOpen}>{ title }</span>
          <span className={`icon-box ${rotateIcon ? 'rotate' : ''}`} onClick={handleCollapseOpen}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </section>
        <section className={`collapse-content`}>
          <section className="content-row-1">
            <Card title="Sales Turnover">
              <div className="sales-turnover-box">
                <div className="left-side">
                  <div className="sales-number">Rp 3,600,000</div>
                  <div className="down-arrow-img"><img src="/images/down-arrow.svg" alt="Down Arrow" /></div>
                  <span className="sales-percentage">&nbsp;13.8%</span>
                  <span className="sales-text">&nbsp;last period in products sold</span>
                </div>
                <div className="right-side">
                  <div className="cart-img"><img src="/images/sales-turnover.svg" alt="Salaes Turnover" /></div>
                </div>
              </div>
            </Card>
          </section>
          <section className="content-row-2">
            <div className="card1-container">
              <Card title="AVERAGE PURCHASE VALUE" titleStyle={{ color: "#4D4F5C", fontSize: "1.1rem" }} inStyle={{ width: "100%" }} source="APV">
                {renderComposedChart}
              </Card>
            </div>
            <div className="card2-container">
              <Card title="BEST SELLING SKU" titleStyle={{ color: "#4D4F5C", fontSize: "1.1rem" }} inStyle={{ width: "100%" }}>

              </Card>
            </div>
            <div className="card3-container">
              <Card title="TOP COMPETITOR SKU" titleStyle={{ color: "#4D4F5C", fontSize: "1.1rem" }} inStyle={{ width: "100%" }}>

              </Card>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Dashboard;