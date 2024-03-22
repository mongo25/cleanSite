import { useState, useEffect } from "react";
import StepsCard from "./StepsCard";

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
      {/* <div
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
      </div> */}
      <div className="subpage-banner about-banner">
          <div className="container">
              <div className="row custom-gutter">
                  <div className="col-md-12">
                      <div className="blue-bg">
                          <div className="row custom-gutter">
                              <div className="col-md-6 pl-55">
                                  <div className="inner-banner-left pl-5 pt-7">
                                      <h1>The MoreHands family</h1>
                                      <p>As a family business, we take care of each other, our employees, and you. And then everyone gets to go home, happy. </p>
                                  </div>
                              </div>
                              <div className="col-md-6 pr-55">
                                  <div className="inner-banner-right">
                                      {/* <!--- <img src="/assets/images/banners/about-animation.png" alt=""/> --->
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="/assets/images/banners/about-animation.json" background="transparent" speed="1" loop autoplay></lottie-player> */}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
    
    
      
      <div className="about-who-area" id="who-we-are">
          <div className="container">
              <div className="row custom-gutter">
                  <div className="col-lg-10 col-md-11 m-auto">
                      <div className="anywhere-head">
                          <h3>Who we are</h3>
                          <p>We're the family owned and operated, cute-car-driving, home cleaning crew.<br/>Our team is made of siblings, in-laws, cousins, friends, and long-time staff.<br/>Together we take care of people, all over Texas.<strong> Meet our team.</strong></p>
                      </div>
            <div className="staffDiv">
            
                        <div className="client-area staff-item">
                            <div className="client-left">
                                <h3><span className="yearNumVal"></span>+ years</h3>
                                <p>of caring for<br/> MoreHands clients</p>
                            </div>
                            <div className="client-right">
                                <ul className="staffPicsDiv">
                                    <li className="staffPics-item"><img src="" alt="" className="imageVal" data-path="/assets/images/staff/"/></li>
                                </ul>
                            </div>
                        </div>
                      </div>
            
                  </div>
              </div>
          </div>
      </div>
      
      <div className="about-video-area">
          <div className="container">
              <div className="row custom-gutter">
                  <div className="col-md-11 m-auto">
                      <div className="row custom-gutter">
                          <div className="col-md-6">
                              <div className="about-video-left">
                                  <h2>A dedicated crew is the key to clean. </h2>
                                  <div className="about-video-right mob-visible embed-responsive embed-responsive-16by9">
                                      {/* <!--- <a href="javascript:void(0)" onclick="$(this).css('opacity',0)">
                                          <img src="/assets/images/Video.jpg" alt=""/ style="position:absolute;z-index:5">
                                      </a> ---> */}
                    <iframe src="https://player.vimeo.com/video/492216591" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                                  </div>
                                  <p><b>All our staff are committed, full-time housekeepers</b> who enjoy a fair wage, complete benefits, paid vacation, and a respectful work environment.</p>
                                  <p>And good old family fun, of course. Some employees have been with us for over 15 years and counting. Here's why. </p>
                              </div>
                          </div>
                          <div className="col-md-6 mob-hidden">
                              <div className="about-video-right embed-responsive embed-responsive-16by9">
                                      {/* <!--- <a href="javascript:void(0)" onclick="$(this).css('opacity',0);$(this).parent().find('iframe').css('opacity',1)">
                                          <img src="/assets/images/Video.jpg" alt=""/ style="position:absolute;z-index:5;top:0;">
                    </a> ---> */}
                  <iframe src="https://player.vimeo.com/video/492216591" style={{zIndex:1}} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="about-family" id="meet-the-family">
          <div className="container">
              <div className="row custom-gutter">
                  <div className="col-md-10 m-auto">
                      <div className="about-family-text">
                          <h2>Meet the family</h2>
                          <img src="/assets/images/family-picture.jpg" alt=""/>
                          <p>MoreHands started 20 years ago with a vision for happy, relaxed, well-cared-for Texans and their housekeepers. Since then, the business has grown to include the whole family: sisters, brothers, in-laws, and cousins. We love, laugh, and argue with each other, in and out of the office. We're passionate about taking care of people, all over Texas.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="about-video-area about-client-area">
          <div className="container">
              <div className="row custom-gutter">
                  <div className="col-md-11 m-auto">
                      <div className="row custom-gutter">
                          <div className="col-md-6 mob-hidden">
                              <div className="about-video-right">
                                  <img src="/assets/images/Client-picture.jpg" alt=""/>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="about-video-left">
                                  <h5>We take care of the mess and the errands, so coming home makes you happy. </h5>
                                  <div className="about-video-right mob-visible">
                                      <img src="/assets/images/Client-picture.jpg" alt=""/>
                                  </div>
                                  <br/>
                                  <p>At MoreHands, we believe that home should be a place of rest, not more work. That's why we do what we do — so you can come home to the life you've worked so hard to build, and just enjoy it. </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="guarantee-area" id="happiness-guarantee">
          <div className="container">
              <div className="row custom-gutter">
                  <div className="col-md-11 m-auto">
                      <div className="guarentee-head">
                          <h2>We guarantee your happiness. Here's how:</h2>
                      </div>
                      <div className="row custom-gutter">
                          <div className="col-lg-4 col-md-6">
                              <div className="guarantee1">
                                  <div className="guarantee-img">
                                      <img src="/assets/images/icons/Family-photo.png" alt=""/>
                                  </div>
                                  <div className="guarantee-text">
                                      <h3>Family owned and operated</h3>
                                      <p>As a family business, we are committed to taking the very best care of our customers and our staff. </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="guarantee1">
                                  <div className="guarantee-img">
                                      <img src="/assets/images/icons/Award.svg" alt=""/>
                                  </div>
                                  <div className="guarantee-text">
                                      <h3>The best employees</h3>
                                      <p>All services are done by our very own, five-star, full-time MoreHands employees. We never use contract labor. </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="guarantee1">
                                  <div className="guarantee-img">
                                      <img src="/assets/images/icons/Happy-staff.svg" alt=""/>
                                  </div>
                                  <div className="guarantee-text">
                                      <h3>Happy staff, happy you</h3>
                                      <p>We treat our staff with respect — all our employees earn a living wage. That means high quality work, and a happy you. </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="guarantee1">
                                  <div className="guarantee-img">
                                      <img src="/assets/images/icons/Pride.svg" alt=""/>
                                  </div>
                                  <div className="guarantee-text">
                                      <h3>We take pride in our work</h3>
                                      <p>If you're not 100% satisfied with our services, we'll come back and re-clean. </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="guarantee1">
                                  <div className="guarantee-img">
                                      <img src="/assets/images/icons/no-cancelations-badge.svg" alt=""/>
                                  </div>
                                  <div className="guarantee-text">
                                      <h3>We never cancel. Ever. </h3>
                                      <p>Cleaning is a commitment. If we ever were to cancel, we'd pay you $100. Guaranteed.  </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="guarantee1">
                                  <div className="guarantee-img">
                                      <img src="/assets/images/icons/no-contracts.svg" alt=""/>
                                  </div>
                                  <div className="guarantee-text">
                                      <h3>No contracts</h3>
                                      <p>You can cancel our services whenever you'd like. </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="team-area">
          <div className="container">
              <div className="row custom-gutter">
                  <div className="col-md-11 m-auto">
                      <div className="team-area-text blue-bg blue-btn">
                          <h2>We're your team of housekeepers and errand runners.</h2>
                          <p>With 20 years in the business, our team knows clean.<br/> Recurring clients get discounted or even free errands. That's right, free.</p>
                          <a href="/services.html">Learn more about our services</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default AboutPage;
