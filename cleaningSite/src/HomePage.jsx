import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import MyAnimation from "./myAnimation";
import Slogan from "./Slogan";
import StepsCard from "./StepsCard";
import Footer from "./Footer";
import { FaRegThumbsUp } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  homeIcon,
  mobileIcon,
  cleaningIcon,
  calendarIcon,
  checkIcon,
  cleanHandIcon,
  guaranteeIcon,
  ecoIcon,
  cleanTeam,
  mobileApp,
  boa2019,
  boa2021,
} from "./assets";
import carBackground from "./assets/carBackground.png";
import { Link, useNavigate } from "react-router-dom";

import TitleSummary from "./TitleSummary";
import WhyCards from "./WhyCards";
import MyCarousel from "./MyCarousel";

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/OurPrice"); // Replace '/your-path' with your desired route
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
      <header
        className={`sticky-top main-menu-area ${
          scrolled ? "headerShadow" : ""
        }`}
      >
        <Header />
      </header>
      <div className="bannerMain spaceBetween">
        <div className="container container-max">
          <div className="row">
            <div className="col-md-6">
              <Slogan
                summary="We'll take care of"
                summary2="the housework and"
                summary3="the errands"
                p="You just come home,"
                p2="smile"
                p3=", and"
                p4="relax."
              />
              {/* <Link to="/"> */}
              <div className="d-flex justify-content-left mt-4">
                <a
                  onClick={handleButtonClick}
                  className="btn btn-custom-2 px-4 py-3 fs-5 fw-bold"
                >
                  See how it works
                </a>
              </div>
              {/* </Link> */}
            </div>
            <div className="col-md-6">
              <div className="banner-right">
                <img src={carBackground} alt="Background car" />
                <div className="banner-right2">
                  <MyAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="work-steps">
        <div className="container container-max">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="fw-bold">How it works</h2>
                <p>
                  We'll clean your home weekly, every two weeks, or every three
                  weeks. <br />
                  All our plans include low-cost or FREE errand running
                  services.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 col-11 m-auto ms-lg-auto">
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
            <div className="col-lg-3 col-md-12 col-11 m-auto">
              <div className="center-card position-relative">
                <StepsCard
                  icon={calendarIcon}
                  title={"Book it."}
                  summary={
                    "We'll make your home shine, and run any errands you'd like."
                  }
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-11 m-auto me-lg-auto">
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
            <div className="col-12 mt-custom-80 text-center ">
              <a className="btn btn-custom-3" href="#">
                Learn more about our services
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="whyArea">
        <div className="container container-max">
          <div className="row ">
            <div className="mb-3">
              <TitleSummary
                title={"Why MoreHands"}
                summary={"The only maid service that cleans your"}
                rest={"home and runs your errands for you"}
              />
            </div>
            <div className="col-lg-9 col-md-11 m-auto">
              <div className="row">
                <div className="col-md-6">
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
            <div className="col-md-12">
              <div className="why-bottom-area">
                <div className="">
                  <div className="why-bottom-head">
                    <img src={mobileIcon} alt="mobile-icon" />
                    <h5 className="text-white mb-4 mt-3 fw-bold fs-4 ">
                      Take care of your household schedule on your phone
                    </h5>
                  </div>
                  <div className="why-bottom-text text-white fw-semibold fs-5">
                    <p>
                      Manage your cleaning services and schedule
                      <br /> in the MoreHands app
                    </p>
                  </div>
                  <div className="why-bottom-btns pt-5 text-center">
                    <a
                      href="https://apps.apple.com/us/app/morehands/id1513648303"
                      className="btn btn-outline-white"
                      target="_blank"
                    >
                      <i
                        className="fab fa-apple fa-lg me-2"
                        aria-hidden="true"
                      ></i>{" "}
                      Download for iOS
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.morehands.customerApp&amp;hl=en_US&amp;gl=US"
                      className="btn btn-outline-white ml-3"
                      target="_blank"
                    >
                      <i
                        className="fab fa-google-play fa-lg me-2"
                        aria-hidden="true"
                      ></i>{" "}
                      Download for Android
                    </a>
                  </div>
                  <div className="mobile-shot-area">
                    <img src={mobileApp} alt="mobile-app" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pb-3">
              <div className="section-title">
                <TitleSummary
                  title="What our customers say about MoreHands"
                  summary={"For 20 years we've helped busy Texans make"}
                  rest={"home a clean, relaxing refuge"}
                />
              </div>
              <div className="col-md-10 col-11 m-auto">
                <MyCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-custom container-max text-white mt-5 mb-8 py-4 rounded-4">
        <div className="row justify-content-md-center align-items-center">
          <div className="col-md col-md-auto text-center fs-6 fw-semibold">
            <img width="112" height="140" alt="2019" src={boa2019} />
            <br />
            Winner 2019
          </div>
          <div className="col-md col-md-auto text-center fs-6 fw-semibold">
            <img src={boa2021} width="112" height="140" alt="2021" />
            <br />
            Winner 2021
          </div>
          <div className="col-md-5 fs-4 fw-semibold h-100 text-center text-md-left mt-4 mt-md-0  ">
            <h4 className="fs-3 fw-bold">Voted Best Maid Service</h4>
            MoreHands was voted Best Maid Service in the Austin Chronicle (again{" "}
            <FaRegThumbsUp />
            ).
          </div>
        </div>
      </section>
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
