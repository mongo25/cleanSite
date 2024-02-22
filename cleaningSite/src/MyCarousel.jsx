import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./App.css";
import WhyCards from "./WhyCards";
import {
  reviewOne,
  reviewTwo,
  reviewThree,
  reviewFour,
  reviewFive,
} from "./assets";
import Rating from "@mui/material/Rating";

function MyCarousel() {
  const [value] = useState(5);

  return (
    <Carousel>
      <Carousel.Item>
        <div className="myCarousel">
          {/* <h3>Second slide label</h3>
          <p>Summary of the second item.</p> */}
          <div className="col-md-12">
            <WhyCards
              font={"fs-4 lh-base"}
              icon={reviewFive}
              title={"Jessica Gomez"}
              summary={""}
              rating={<Rating name="read-only" value={value} readOnly />}
            />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="myCarousel">
          {/* <h3>Second slide label</h3>
          <p>Summary of the second item.</p> */}
          <div className="col-md-12">
            <WhyCards
              font={"fs-4 lh-base"}
              icon={reviewOne}
              title={"Eric Lee"}
              summary={
                "Superb experience! I'm always on-the-go and their once-a-month cleaning keeps my studio apartment in perfect shape. The team is discreet and efficient, and they always respect my space. Their rates? Unbeatable for the quality they offer."
              }
              rating={<Rating name="read-only" value={value} readOnly />}
            />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="myCarousel">
          {/* <h3>Second slide label</h3>
          <p>Summary of the second item.</p> */}
          <div className="col-md-12">
            <WhyCards
              font={"fs-4 lh-base"}
              icon={reviewTwo}
              title={"Veronica Galvan"}
              summary={
                "Stellar service! With three pets, it's tough to keep the house fur-free. Their monthly cleaning makes a huge difference. They're gentle with my pets and use pet-friendly products, which I appreciate. Efficient, friendly, and affordable – they've got a customer for life."
              }
              rating={<Rating name="read-only" value={value} readOnly />}
            />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="myCarousel">
          {/* <h3>Second slide label</h3>
          <p>Summary of the second item.</p> */}
          <div className="col-md-12">
            <WhyCards
              font={"fs-4 lh-base"}
              icon={reviewThree}
              title={"Julie Wertz"}
              summary={
                "Highly recommend! With two toddlers at home, cleaning is a never-ending task. Their weekly service gives me a much-needed break. The team is friendly, and they handle everything with care. Plus, their flexibility with scheduling is a huge relief."
              }
              rating={<Rating name="read-only" value={value} readOnly />}
            />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="myCarousel">
          {/* <h3>Second slide label</h3>
          <p>Summary of the second item.</p> */}
          <div className="col-md-12">
            <WhyCards
              font={"fs-4 lh-base"}
              icon={reviewFour}
              title={"Jessica Gomez"}
              summary={
                "A real lifesaver! Running a home business means little time for house chores. Their monthly deep cleaning service is thorough and efficient, especially in the kitchen. Also, their use of pet-safe products is much appreciated. Worth every penny!"
              }
              rating={<Rating name="read-only" value={value} readOnly />}
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
