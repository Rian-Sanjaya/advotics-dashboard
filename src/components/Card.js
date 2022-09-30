import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import "./card.scss";

function Card({ title, inStyle, children }) {
  return (
    <div 
      className="card-wrapper"
      style={{
        width: inStyle?.width || null,
      }}
    >
      <section className="card-header">
        <span className="title">{ title }</span>
        <span className="ellipsis"><FontAwesomeIcon icon={faEllipsisVertical} /></span>
      </section>
      <section className="card-content">
        { children }
      </section>
    </div>
  );
}

export default Card;