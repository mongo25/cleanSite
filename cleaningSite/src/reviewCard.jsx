import homeIcon from "./assets/home-icon.png";
import cleaningIcon from "./assets/cleaning-icon.png";
import calendarIcon from "./assets/home-icon.png";
import StarRating from "./StarRating";
import Leaf from "./leaf";

function ReviewCard({ item }) {
  return (
    <div className="testimonialDiv m-2">
      <div className="card border-0 testimonial1">
        <p className={`text-center fs-4 para-comment`}>{item.comment}</p>
      </div>
      <div className="card border-0 testimonial-card">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <img src={item.avatar} alt="" width="35" height="35" />
          <h6 className={`fw-bold text-center fs-5 text-custom-color `}>
            {item.person}
          </h6>
        </div>
        <hr />
        <h4>
          <StarRating value={item.rating} />
        </h4>
        <p className="mt-2">
          <span>
            <Leaf />
          </span>
          <span className="text-custom-color fw-semibold ms-2">
            {item.address}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
