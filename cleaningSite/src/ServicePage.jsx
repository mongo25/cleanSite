import { useEffect, useState } from "react";
import SubpageBanner from "./components/SubpageBanner";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { maidService } from "./assets";
import { serviceFaqLists } from "./data";
import FaqList2 from "./FaqList2";

const ServicePage = () => {
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
  return (
    <>
      <header
        className={`sticky-top main-menu-area ${
          scrolled ? "headerShadow" : ""
        }`}
      >
        <Header />
      </header>
      <SubpageBanner
        title="Our Services"
        description="Sometimes, there's just too much to do. Our maid service will take care of the housework. Sign up for recurring cleanings, and we'll run your errands too."
        textLink="Let us give you a hand"
      />
      <section className="maid-service-area" id="maid-services-section">
        <div className="container container-max">
          <div className="row">
            <div className="col-md-11 m-auto">
              <div className="row">
                <div className="col-md-6 text-start m-auto">
                  <div className="maid-service-left">
                    <h2 className="fw-bold fs-1">Our maid service</h2>
                    <h4 className="text-custom-color fw-semibold">
                      Starts at $74
                    </h4>
                    <div className="maid-service-right mob-visible">
                      <img src="/assets/images/maid-service.jpg" alt="" />
                    </div>
                    <p className="fw-semibold mt-3 mb-3">
                      Sign up for recurring cleanings, weekly, every two weeks,
                      or every three weeks. You'll enjoy a home that shines, and
                      our on-demand errand running service.
                    </p>
                    <div className="my-3 py-3">
                      <Link
                        className="btn-custom-1 px-5 py-3 fs-5 fw-bold rounded-3"
                        to="/"
                      >
                        Get a price
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mob-hidden">
                  <div className="maid-service-right">
                    <img src={maidService} alt="maid-service" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-faq">
        <div className="container container-max">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <FaqList2 faqList={serviceFaqLists} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicePage;
