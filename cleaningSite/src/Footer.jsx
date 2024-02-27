import React from "react";
import morehandLogo from "./assets/morehands-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container container-max">
        <div className="row custom-gutter text-start">
          <div className="col-md-2">
            <div className="footer-logo">
              <img
                src={morehandLogo}
                alt="We're a family-owned, family-operated, employee-powered, cute-car-driving, make-it-shine, maid service"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-1">
              <h4>
                <a href="/services.html" className="text-body">
                  Services
                </a>
              </h4>
              <ul className="mb-0 ps-0 d-flex flex-column">
                <li className="px-0">
                  <a href="/services.html#add-on-services">
                    Cleaning &amp; Sanitizing
                  </a>
                </li>
                <li className="px-0">
                  <a href="/services.html#errands">Errands</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-1">
              <h4>
                <a href="/about.html" className="text-body">
                  About
                </a>
              </h4>
              <ul className="mb-0 ps-0 d-flex flex-column">
                <li className="px-0">
                  <a href="/index.html#why-morehands">Why MoreHands</a>
                </li>
                <li className="px-0">
                  <a href="/about.html#our-story">Our Story</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-1">
              <h4>
                <a href="/covid.html" className="text-body">
                  COVID-19
                </a>
              </h4>
              <ul className="mb-0 ps-0 d-flex t flex-column">
                <li className="px-0">
                  <a href="/covid.html#your-home">Your Home</a>
                </li>
                <li className="px-0">
                  <a href="/covid.html#our-staff">Our Staff</a>
                </li>
                <li className="px-0">
                  <a href="/covid.html#our-office">Our Office</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-1">
              <h4>
                <a href="/faq.html" className="text-body">
                  FAQ
                </a>
              </h4>
              <ul className="mb-0 ps-0 d-flex flex-column">
                <li className="px-0">
                  <a href="/faq.html#our-maid-service">Our Maid Service</a>
                </li>
                <li className="px-0">
                  <a href="/faq.html#our-errand-service">Our Errand Service</a>
                </li>
                <li className="px-0">
                  <a href="/faq.html#billing-pricing">Billing and pricing</a>
                </li>
                <li className="px-0">
                  <a href="/faq.html#appointments-scheduling">
                    Appointments and scheduling
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-1">
              <h4>
                <a href="/contact.html" className="text-body">
                  Contact
                </a>
              </h4>
              <ul className="mb-0 ps-0 d-flex flex-column">
                <li className="px-0">
                  <a href="/contact.html">Contact us</a>
                </li>
                <li className="px-0">
                  <a href="/contact.html#locations">Branch information</a>
                </li>
                <li className="px-0">
                  <a href="/careers.html">Careers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer-1 copyright">
              <ul className="mb-0 ps-0 d-flex flex-column">
                <li className="px-0">© 2000</li>
                <li className="px-0">
                  <a href="/privacy-security.html">Privacy - Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row locationInfoDiv my-5 py-5 border-top">
          <div
            className="col-md-4 col-lg-3 locationInfo-item akinit"
            data-index="0"
          >
            <div className="h-100 d-flex flex-column align-items-start footer-1">
              <h4 className="locationNameVal">Austin</h4>
              <p className="text-start">
                Serving{" "}
                <span className="servingList">
                  <b>
                    <a
                      href="https://morehands.com/cities/austin-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Austin
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/cedar-park-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Cedar Park
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/georgetown-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Georgetown
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/lakeway-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Lakeway
                    </a>
                  </b>
                  , and{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/round-rock-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Round Rock
                    </a>
                  </b>
                </span>
              </p>
              <div className="phoneDiv">
                <div className="phone-item akinit" data-index="0">
                  <span className="cityNameDiv">
                    <em className="cityNameVal">Austin</em>{" "}
                  </span>
                  <a
                    href="tel:512-479-7978"
                    className="numberVal-tel numberVal"
                  >
                    512-479-7978
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 locationInfo-item akinit"
            data-index="1"
          >
            <div className="h-100 d-flex flex-column align-items-start footer-1">
              <h4 className="locationNameVal">Dallas</h4>
              <p className="text-start">
                Serving{" "}
                <span className="servingList">
                  <b>
                    <a
                      href="https://morehands.com/cities/carrollton-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Carrollton
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/dallas-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Dallas
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/plano-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Plano
                    </a>
                  </b>
                  , and{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/richardson-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Richardson
                    </a>
                  </b>
                </span>
              </p>
              <div className="phoneDiv">
                <div className="phone-item akinit" data-index="0">
                  <span className="cityNameDiv d-none hidden">
                    <em className="cityNameVal"></em>{" "}
                  </span>
                  <a
                    href="tel:469-713-1207"
                    className="numberVal-tel numberVal"
                  >
                    469-713-1207
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 locationInfo-item akinit"
            data-index="2"
          >
            <div className="h-100 d-flex flex-column align-items-start footer-1">
              <h4 className="locationNameVal">Katy</h4>
              <p className="text-start">
                Serving{" "}
                <span className="servingList">
                  <b>
                    <a
                      href="https://morehands.com/cities/katy-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Katy
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/richmond-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Richmond
                    </a>
                  </b>
                  , and <b>Sugar Land</b>
                </span>
              </p>
              <div className="phoneDiv">
                <div className="phone-item akinit" data-index="0">
                  <span className="cityNameDiv d-none hidden">
                    <em className="cityNameVal"></em>{" "}
                  </span>
                  <a
                    href="tel:832-437-0343"
                    className="numberVal-tel numberVal"
                  >
                    832-437-0343
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 locationInfo-item akinit"
            data-index="3"
          >
            <div className="h-100 d-flex flex-column align-items-start footer-1">
              <h4 className="locationNameVal">Cypress-Fairbanks</h4>
              <p className="text-start">
                Serving{" "}
                <span className="servingList">
                  <b>
                    <a
                      href="https://morehands.com/cities/cypress-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Cypress-Fairbanks
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/hockley-waller-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Hockly/Waller
                    </a>
                  </b>
                  , and{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/west-houston-tx-maid-service/"
                      className="text-dkblue"
                    >
                      West Houston
                    </a>
                  </b>
                </span>
              </p>
              <div className="phoneDiv">
                <div className="phone-item akinit" data-index="0">
                  <span className="cityNameDiv d-none hidden">
                    <em className="cityNameVal"></em>{" "}
                  </span>
                  <a
                    href="tel:713-439-1111"
                    className="numberVal-tel numberVal"
                  >
                    713-439-1111
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 locationInfo-item akinit"
            data-index="4"
          >
            <div className="h-100 d-flex flex-column align-items-start footer-1">
              <h4 className="locationNameVal">Houston</h4>
              <p className="text-start">
                Serving{" "}
                <span className="servingList">
                  <b>
                    <a
                      href="https://morehands.com/cities/houston-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Central Houston
                    </a>
                  </b>
                </span>
              </p>
              <div className="phoneDiv">
                <div className="phone-item akinit" data-index="0">
                  <span className="cityNameDiv d-none hidden">
                    <em className="cityNameVal"></em>{" "}
                  </span>
                  <a
                    href="tel:713-439-1111"
                    className="numberVal-tel numberVal"
                  >
                    713-439-1111
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 locationInfo-item akinit"
            data-index="5"
          >
            <div className="h-100 d-flex flex-column align-items-start footer-1">
              <h4 className="locationNameVal">Spring</h4>
              <p className="text-start">
                Serving{" "}
                <span className="servingList">
                  <b>North Houston</b>,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/spring-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Spring
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/tomball-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Tomball
                    </a>
                  </b>
                  , and{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/the-woodlands-tx-maid-service/"
                      className="text-dkblue"
                    >
                      The Woodlands
                    </a>
                  </b>
                </span>
              </p>
              <div className="phoneDiv">
                <div className="phone-item akinit" data-index="0">
                  <span className="cityNameDiv d-none hidden">
                    <em className="cityNameVal"></em>{" "}
                  </span>
                  <a
                    href="tel:281-350-9900"
                    className="numberVal-tel numberVal"
                  >
                    281-350-9900
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 locationInfo-item akinit"
            data-index="6"
          >
            <div className="h-100 d-flex flex-column align-items-start footer-1">
              <h4 className="locationNameVal">Humble</h4>
              <p className="text-start">
                Serving{" "}
                <span className="servingList">
                  <b>
                    <a
                      href="https://morehands.com/cities/atascocita-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Atascocita
                    </a>
                  </b>
                  ,{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/humble-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Humble
                    </a>
                  </b>
                  , <b>Northeast Houston</b>, and{" "}
                  <b>
                    <a
                      href="https://morehands.com/cities/kingwood-tx-maid-service/"
                      className="text-dkblue"
                    >
                      Kingwood
                    </a>
                  </b>
                </span>
              </p>
              <div className="phoneDiv">
                <div className="phone-item akinit" data-index="0">
                  <span className="cityNameDiv d-none hidden">
                    <em className="cityNameVal"></em>{" "}
                  </span>
                  <a
                    href="tel:281-350-9900"
                    className="numberVal-tel numberVal"
                  >
                    281-350-9900
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
