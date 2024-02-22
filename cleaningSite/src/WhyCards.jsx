import homeIcon from "./assets/home-icon.png";
import cleaningIcon from "./assets/cleaning-icon.png";
import calendarIcon from "./assets/home-icon.png";

function WhyCard({ icon, title, summary, rating, font }) {
  return (
    <div>
      <div className="card border-0 whyCard">
        <div className="d-flex flex-column justify-content-left">
          <img
            className="pb-2"
            src={icon}
            alt={title}
            style={{ width: "75px" }}
          />
          <div>{rating}</div>
          <h3 className="text-start">{title}</h3>
          <p className={`text-start ${font}`}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyCard;
