import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import "./card.scss";

const { Option } = Select;

function Card({ title, titleStyle, inStyle, source, children }) {
  return (
    <div 
      className="card-wrapper"
      style={{
        width: inStyle?.width || null,
      }}
    >
      <section className="card-header">
        <span 
          className="title"
          style={{
            color: titleStyle?.color || null,
            fontSize: titleStyle?.fontSize || null,
          }}
        >
          { title }
        </span>
        <div>
          {source && source === "APV" &&
            <span style={{ marginRight: 16 }}>
              <Select defaultValue="6">
                <Option value="6">Last 6 months</Option>
                <Option value="5">Last 5 months</Option>
                <Option value="4">Last 4 months</Option>
              </Select>
            </span>
          }
          <span className="ellipsis"><FontAwesomeIcon icon={faEllipsisVertical} /></span>
        </div>
      </section>
      <section className="card-content">
        { children }
      </section>
    </div>
  );
}

export default Card;