import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import "./index.scss";

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
            <Card title="AVERAGE PURCHASE VALUE" inStyle={{ width: "100%" }}>

            </Card>
          </div>
          <div className="card2-container">
            <Card title="BEST SELLING SKU" inStyle={{ width: "100%" }}>

            </Card>
          </div>
          <div className="card3-container">
            <Card title="TOP COMPETITOT SKU" inStyle={{ width: "100%" }}>

            </Card>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;