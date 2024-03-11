import { useEffect, useState } from "react";
import SubpageBanner from "./components/SubpageBanner";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { maidService, deeperClean } from "./assets";
import { cleanBlockLists, serviceFaqLists } from "./data";
import FaqList2 from "./FaqList2";
import { PiWarningCircleLight } from "react-icons/pi";
import CleanBlockCard from "./components/CleanBlockCard";

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
              <div className="faq-warning mb-5">
                <p className="fs-custom-small text-custom-color-3 m-0">
                  <PiWarningCircleLight size={28} className="me-2" />
                  <b>
                    Only interested in a one-time, move-out, or move-in
                    cleaning?
                  </b>
                  We can take care of that, too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="maid-cleaner-area">
        <div className="container">
          <div className="row">
            <div className="col-md-11 m-auto">
              <div className="maid-service1 maid-service-clean">
                <div className="row ">
                  <div className="col-md-6 ">
                    <div className="maid-service-right">
                      <img src={deeperClean} alt="deeper-clean" />
                    </div>
                  </div>
                  <div className="col-md-6 order-md-2 d-flex flex-column align-items-center justify-content-center order-1">
                    <div className="text-start d-flex flex-column py-6 px-3">
                      <h2 className="fs-3 fw-bold ">
                        Add-on services for a deeper clean
                      </h2>
                      <p className="fs-custom-18">
                        Our services go beyond a basic cleaning. Before each
                        visit, you can choose the add-ons that will make your
                        life simpler.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="deep-cleaner-block bg-custom-2 rounded-4">
                <div className="row">
                  <div className="col-md-11 m-auto">
                    <div className="cleaner-block-list d-flex justify-content-between flex-wrap">
                      {cleanBlockLists.map((item) => (
                        <CleanBlockCard
                          key={item.id}
                          img={item.img}
                          alt={item.id}
                          price={item.price}
                          text={item.text}
                          isUnderline={item.isUnderline}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicePage;
