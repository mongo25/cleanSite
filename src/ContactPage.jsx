import { useState, useEffect } from "react";
import StepsCard from "./StepsCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { contentLocations } from "./data";
import { address, call, success } from "./assets";

function ContactPage() {
  const buttonCard = (title) => {
    return (
      <button onClick className="priceButton mt-5">
        {title}
      </button>
    );
  };

  return (
    <>
      <div className="no-hero-holder">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="no-hero-banner blue-bg" id="startContactForm">
                <h2>Get in touch with us</h2>
                <p><b>How can we take care of you? </b><br />Send us a message, or get in touch with us at any of <a href="#locations" className="page-scroll">our locations.</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page-main">
        <div className="container">
          <div className="row">
            <div className="col-md-11 m-auto">
              <div className="row">
                <div className="col-lg-6 col-md-8 col-12 m-auto">
                  <div className="contact-form-area" id="pageStatus-top">

                    <div className="pageStatusBlock pageStatus-content">
                      <form id="contactForm" name="contactForm" acceptCharset="UTF-8" autoComplete="off" encType="multipart/form-data" method="post">
                        <div className="form-group">
                          <label htmlFor="fromForm">What can we help you with?</label>
                          <select id="fromForm" name="fromForm" required="required" className="form-control" placeholder="How can we help?">
                            <option value="">How can we help?</option>
                            <option value="question">I have a question</option>
                            <option value="waitlist">I'd like to be added to your waitlist</option>
                            <option value="comments/feedback">I have comments / feedback</option>
                            <option value="career">I'm interested in a career</option>
                          </select>
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="toCity">Branch</label> */}
                          <select id="toCity" name="toCity" required="required" className="form-control" placeholder="Select a Location">
                            <option value="">Select a Location</option>
                          </select>
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="fullName">Full Name</label> */}
                          <input id="fullName" name="fullName" type="text" required="required" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="phoneNumber">Phone</label> */}
                          <input id="phoneNumber" name="phoneNumber" type="text" className="form-control" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                          {/* <label htmlFor="emailAddress">Email Address</label> */}
                          <input id="emailAddress" name="emailAddress" type="text" className="form-control" placeholder="Email Address" required="required" />
                        </div>
                        <div className="form-group pb-3">
                          {/* <label htmlFor="message">Your Message</label> */}
                          <textarea id="message" name="message" cols="40" rows="5" className="form-control" required="required" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-group">
                          <button id="saveForm" name="saveForm" type="submit" className="btn btn-primary">Send Message</button>
                        </div>
                        <input type="hidden" name="g-recaptcha-response" value="" className="captResp" />
                      </form>
                    </div>
                    <div className="pageStatusBlock pageStatus-thanks text-center" style={{ display: 'none' }}>
                      <p className="pb-4"><img src={success} alt="" /></p>
                      <h3>Thanks for your message.</h3>
                      <p>We'll get back to you real soon!</p>
                      <p className="pt-4"><a href="#" className="toggleStatus btn btn-outline-primary" data-to="content">Send Another Message</a></p>
                    </div>
                    <div className="pageStatusBlock pageStatus-oops text-center" style={{ display: 'none' }}>
                      {/* <p className="pb-4"><img src="./assets/svg/warning.svg" alt="" /></p> */}
                      <h3 className="pb-2">Oh No!</h3>
                      <p>Something went wrong and your message was not sent.</p>
                      <p className="pt-4"><a href="#" className="toggleStatus btn btn-outline-primary" data-to="content">Try Again</a></p>
                    </div>



                  </div>
                </div>
              </div>
              <div className="location-area" id="locations">
                <div className="row">
                  <div className="col-md-12">
                    <div className="location-head">
                      <h3>Our locations</h3>
                    </div>
                  </div>
                </div>
                <div className="locationInfoDiv row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" >
                  {contentLocations.map((cl, i) => {
                    let locations = cl.serving.map(s => (<b key={s.neighborhood}><a href={s.cityPage} className="text-dkblue">{s.neighborhood}</a>, </b>));
                    return (
                      <div className="col locationInfo-item" key={"location_" + i}>
                        <div className="location-1 h-100 d-flex flex-column align-items-start">

                          <div className="locationNameHolder">
                            <h2 className="locationNameVal">{cl.locationName}</h2>
                          </div>
                          <div className="mt-auto mb-auto">
                            <div className="location-pin">
                              <img src={address} alt="" />
                              <p>Serving <span className="servingList">{locations}</span></p>
                            </div>
                            <div className="location-call">
                              <img src={call} alt="" />
                              <div className="phoneDiv">
                                <div className="phone-item">
                                  <span className="cityNameDiv d-none">
                                    <em className="cityNameVal"></em>
                                  </span><a href="" className="numberVal-tel numberVal">
                                    {cl.phone[0].number}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="" style={{textAlign: 'left'}}>
                            <div className="blue-btn">
                              <a href="#" className="contactLink">Email this location</a>
                            </div>
                            <div className="white-btn">
                              <a href={cl.directions} className="directionsLink" target="_blank">Get Directions</a>
                            </div>
                          </div>
                        </div>
                      </div>

                    )
                  })}

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>




      {/* <footer>
        <div className="container">
          <div className="row custom-gutter">
            <div className="col-md-2">
              <div className="footer-logo">
                <img src="/assets/images/morehands-maid-service.png" alt="We're a family-owned, family-operated, employee-powered, cute-car-driving, make-it-shine, maid service">
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-1">
                <h4><a href="/services.html" className="text-body">Services</a></h4>
                <ul>
                  <li><a href="/services.html#add-on-services">Cleaning & Sanitizing</a></li>
                  <li><a href="/services.html#errands">Errands</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-1">
                <h4><a href="/about.html" className="text-body">About</a></h4>
                <ul>
                  <li><a href="/index.html#why-morehands">Why MoreHands</a></li>
                  <li><a href="/about.html#our-story">Our Story</a></li>
                  <!-- <li><a href="#">Blog</a></li> -->
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-1">
                <h4><a href="/covid.html" className="text-body">COVID-19</a></h4>
                <ul>
                  <li><a href="/covid.html#your-home">Your Home</a></li>
                  <li><a href="/covid.html#our-staff">Our Staff</a></li>
                  <li><a href="/covid.html#our-office">Our Office</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-1">
                <h4><a href="/faq.html" className="text-body">FAQ</a></h4>
                <ul>
                  <li><a href="/faq.html#our-maid-service">Our Maid Service</a></li>
                  <li><a href="/faq.html#our-errand-service">Our Errand Service</a></li>
                  <li><a href="/faq.html#billing-pricing">Billing and pricing</a></li>
                  <li><a href="/faq.html#appointments-scheduling">Appointments and scheduling</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-1">
                <h4><a href="/contact.html" className="text-body">Contact</a></h4>
                <ul>
                  <li><a href="/contact.html">Contact us</a></li>
                  <li><a href="/contact.html#locations">Branch information</a></li>
                  <li><a href="/careers.html">Careers</a></li>
                </ul>
              </div>
            </div><div className="col-md-12">
              <div className="footer-1 copyright">
                <ul>
                  <li>&copy; 2000</li>
                  <li><a href="/privacy-security.html">Privacy - Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row locationInfoDiv my-5 py-5 border-top">
            <div className="col-md-4 col-lg-3 locationInfo-item">
              <div className="h-100 d-flex flex-column align-items-start footer-1">

                <h4 className="locationNameVal"></h4>
                <p>Serving <span className="servingList"></span></p>
                <div className="phoneDiv">
                  <div className="phone-item"><span className="cityNameDiv d-none"><em className="cityNameVal"></em> </span><a href="" className="numberVal-tel numberVal"></a></div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default ContactPage;
