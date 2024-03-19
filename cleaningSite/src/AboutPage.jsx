import { useState, useEffect } from "react";
import "./App.css";
import StepsCard from "./StepsCard";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutPage() {
  const buttonCard = (title) => {
    return (
      <button onClick className="priceButton mt-5">
        {title}
      </button>
    );
  };

  return (
    <>
      <div
        style={{ height: "450px" }}
        className="bannerSteps d-flex align-items-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 pb-3">
              <h1>Get a Price</h1>
            </div>
            <div className="col-lg-8 m-auto ml-lg-auto">
              <div>
                <StepsCard
                  font="fs-2"
                  homeBttn={buttonCard("House")}
                  aprmntBttn={buttonCard("Apartment")}
                  comBttn={buttonCard("Commercial")}
                  //   icon={homeIcon}
                  title={"Tell us about your home"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
