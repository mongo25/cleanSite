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
import { Link, useNavigate } from "react-router-dom";

import TitleSummary from "./TitleSummary";
import WhyCards from "./WhyCards";
import MyCarousel from "./MyCarousel";

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/OurPrice'); // Replace '/your-path' with your desired route
  };

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
  return (
    <>
      <div className="sticky-top">
        <div className={scrolled ? "headerShadow" : ""}>
          <Header />
        </div>
      </div>
      <div className="bannerMain spaceBetween">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Slogan
                summary="Will take care of"
                summary2="the housework and"
                summary3="the errands"
                p="You just come home,"
                p2="smile"
                p3=", and"
                p4="relax."
              />
              {/* <Link to="/"> */}
                <button onClick={handleButtonClick} className="mainButton mt-5 float-left">
                  Get a Price
                </button>
              {/* </Link> */}
            </div>
            <div className="col-md-6">
              <div className="backGroundImg">
                <MyAnimation />
                {/* <img src={myImage} alt="Background car" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bannerSteps d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pb-3">
              <h1>How It Works</h1>
              <p>
                Well clean your home weekly, every two weeks, or every three{" "}
                <br />
                weeks. All our plans include low-cost or FREE errand running
                services.
              </p>
            </div>
            <div className="col-lg-3 col-md-12 col-11 m-auto ml-lg-auto">
              <div>
                <StepsCard
                  icon={cleaningIcon}
                  title={"Get a price."}
                  summary={
                    "Tell us about you, your home, and your cleaning needs."
                  }
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-11 m-auto ml-lg-auto">
              <div>
                <StepsCard
                  icon={calendarIcon}
                  title={"Book it."}
                  summary={
                    "We'll make your home shine, and run any errands you'd like."
                  }
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-11 m-auto ml-lg-auto">
              <div>
                <StepsCard
                  icon={homeIcon}
                  title={"Breathe, smile, relax."}
                  summary={
                    "The house is clean, the errands are done. Time to come home."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whyBanner spaceBetween">
        <div className="container">
          <div className="row">
            <TitleSummary
              title={"Why MoreHands"}
              summary={"The only maid service that cleans your"}
              rest={"home and runs your errands for you"}
            />
            <div className="col-lg-9 col-md-11 m-auto">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <WhyCards
                    icon={checkIcon}
                    title={"Reliable Service"}
                    summary={
                      "Our policy is simple: we never cancel. If an exception occurs, you receive $100 as our commitment to reliability."
                    }
                  />
                </div>
                <div className="col-md-6">
                  <WhyCards
                    icon={guaranteeIcon}
                    title={"100% Satisfaction"}
                    summary={
                      "After each cleaning, your feedback matters. If you're not completely satisfied, we'll work to make it right. Your happiness is our guarantee."
                    }
                  />
                </div>
                <div className="col-md-6">
                  <WhyCards
                    icon={cleanHandIcon}
                    title={"Top-Quality Cleaning"}
                    summary={
                      "Quality control is key. We follow up after our teams to ensure every cleaning shines with our promise of excellence."
                    }
                  />
                </div>
                <div className="col-md-6">
                  <WhyCards
                    icon={ecoIcon}
                    title={"Eco-Friendly Cleaning"}
                    summary={
                      "Caring for your home and the planet, we offer an option for environmentally friendly cleaning products. Gentle on your home, kind to the planet"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonialBanner d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pb-3">
              <h1 className="headingBanner">What our customers say about</h1>
              <p className="pBanner">
                Well clean your home weekly, every two weeks, or every three{" "}
                <br />
                weeks. All our plans include low-cost or FREE errand running
                services.
              </p>
              <div className="col-md-10 col-11 m-auto">
                <MyCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bannerMain spaceBetween">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <Slogan
                summary="Making every day brighter, cleaner, "
                summary2="and cared for – that’s Daily Clean Team for you"
                font="fs-3"
                fontP="fs-5"
                // summary3="the errands"
                p="We're more than a business; we're a family that cares for our employees, ensuring they care for your home with equal dedication."
                // p2="smile"
                // p3=", and"
                // p4="relax."
              />
              <div className="justify-content-center">
                <button className="footerButton mt-2">Get a Price</button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="pb-4"
                src={cleanTeam}
                alt="home icon"
                style={{ width: "100%", borderRadius: "4rem" }}
              />
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
