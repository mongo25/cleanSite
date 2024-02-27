import FaqList from "./FaqList";
import Footer from "./Footer";
import Header from "./Header";
import { faqLists } from "./data";
import { useState, useEffect } from "react";

const FaqPage = () => {
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
      <section className="no-hero-holder">
        <div className="container">
          <div className="row custom-gutter">
            <div className="col-md-12">
              <div className="no-hero-banner bg-custom-2 rounded-4 ">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-main-area">
        <div className="container container-max">
          <div className="row">
            <div className="col-md-9 mx-auto">
              {faqLists.map((list) => (
                <FaqList key={list.id} faqList={list} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FaqPage;
