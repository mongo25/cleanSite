import homeIcon from "./assets/home-icon.png";
import cleaningIcon from "./assets/cleaning-icon.png";
import calendarIcon from "./assets/home-icon.png";

function StepsCard({ icon, title, summary, rating, font }) {
  return (
    <div>
      <div className="card border-0 whyCard">
        <div className="card-body d-flex flex-column align-items-center">
          <img
            className="pb-2"
            src={icon}
            alt="home icon"
            style={{ width: "75px" }}
          />
          <div>{rating}</div>
          <h5 className="card-title">{title}</h5>
          <p className={`card-text text-center ${font}`}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default StepsCard;
