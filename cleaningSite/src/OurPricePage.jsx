import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import MyAnimation from "./myAnimation";
import Slogan from "./Slogan";
import StepsCard from "./StepsCard";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  homeIcon,
  cleaningIcon,
  calendarIcon,
  checkIcon,
  cleanHandIcon,
  guaranteeIcon,
  ecoIcon,
  cleanTeam,
} from "./assets";

import TitleSummary from "./TitleSummary";
import WhyCards from "./WhyCards";
import MyCarousel from "./MyCarousel";

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
      console.log("scrollllleddd");
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonCard = (title) => {
    return (
      <button onClick className="priceButton mt-5">
        {title}
      </button>
    );
  };

  return (
    <>
      <div className="sticky-top">
        <div className={scrolled ? "headerShadow" : ""}>
          <Header />
        </div>
      </div>
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
      <Footer />
      {/* <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        isClickToPauseDisabled={true}
        // width={300}
      /> */}
    </>
  );
}

export default HomePage;
