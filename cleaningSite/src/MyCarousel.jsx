import { useState } from "react";
import { Carousel } from "react-bootstrap";
import WhyCards from "./WhyCards";
import {
  reviewOne,
  reviewTwo,
  reviewThree,
  reviewFour,
  reviewFive,
} from "./assets";
import Rating from "@mui/material/Rating";
import { reviewItems } from "./data";
import ReviewCard from "./reviewCard";

function MyCarousel() {
  const [value] = useState(5);

  return (
    <Carousel>
      {reviewItems.map((item) => (
        <Carousel.Item key={item.id}>
          <div className="myCarousel">
            <div className="col-md-12">
              <ReviewCard item={item} />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
