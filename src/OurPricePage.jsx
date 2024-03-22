function OurPricePage() {
  return (
    <>
      <div className="no-hero-holder">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="no-hero-banner blue-bg">
                <h2>Get a price</h2>
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
                <div className="col-md-7 m-auto">
                  <div className="contact-form-area" style={{ position: "relative" }}>

                    <h3 className="text-center">Tell us about your home</h3>

                    <form id="getPriceForm" name="getPriceForm" method="POST" action="cart/index.php" className="mt-5" accept-charset="UTF-8" autocomplete="off" enctype="multipart/form-data">
                      <input type="hidden" name="vwattr0_City" id="mhBranch" className="akReq" value="" />
                      <input type="hidden" name="vwattr0_Resident Type" id="mhResType" className="akReq" value="" />
                      <input type="hidden" name="branch-friendly" id="branchFriendly" value="" />
                      <div className="mb-4 text-center">
                        <a href="javascript:void(0)" className="switchButton btn btn-outline-secondary m-2" data-controls="mhResType" data-value="house">House</a>
                        <a href="javascript:void(0)" className="switchButton btn btn-outline-secondary m-2" data-controls="mhResType" data-value="apartment">Apartment</a>
                      </div>
                      <div className="d-none d-md-block">
                        <div style={{ position: 'absolute', bottom: 20, right: 25, fontSize: 12, display: "none" }} className="explodeAddress resTypeOption resType-any"><a href="javascript:void(0)" data-toggle="popover" title="Can't find your address?" data-content="<div className='text-center'><a href='#' className='manualAddressBtn'>Click here</a> to enter it manually.</div>" data-html="true" data-placement="bottom">Need help?</a></div>
                      </div>

                      <div className="d-md-none text-center">
                        <div style={{ textAlign: "center", fontSize: 12, display: "none" }} className="explodeAddress resTypeOption resType-any mb-4">Can't find your address? <a href="#" className="manualAddressBtn">Enter it manually.</a></div>
                      </div>


                      <div className="row">
                        <div className="resTypeOption resType-any col-md-9 m-auto" style={{ display: "none" }}>
                          <div className="row g-3">
                            <div className="autocompleteHolder col-12 mb-4">
                              <input id="autocomplete" name="vwattr0_Address" placeholder="Your Address*" type="text" className="form-control" required autocomplete="nope" tabindex="1" onfocus="this.setAttribute('autocomplete', 'new-password');" />
                            </div>
                          </div>
                          <div className="addressPieces row" style={{ display: "none" }}>
                            <div className="col-md-8 pr-md-0 mb-4">
                              <input id="google-address" name="vwattr0_AddrStreet" placeholder="Street address*" type="text" className="form-control akReq" required tabindex="2" />
                            </div>
                            <div className="col-md-4 mb-4">
                              <input id="google-zipcode" name="vwattr0_AddrZip" placeholder="Zip*" type="text" className="form-control akReq" required tabindex="3" />
                            </div>
                            <input id="google-state" name="vwattr0_AddrState" type="hidden" />
                            <input id="google-city" name="vwattr0_AddrCity" type="hidden" />
                          </div>
                          <div className="row g-3 weService" style={{ display: "none" }}>
                            <div className="col-12 mb-4 resTypeOption resType-house" style={{ display: "none" }}>
                              <select name="vwattr0_House Size" id="zillow-square-foot" className="form-control priceChange akReq" required tabindex="4">
                                <option value="">Size*</option>
                              </select>
                            </div>

                            <div className="col-12 col-md-8 mb-4 pr-md-0 resTypeOption resType-apartment" style={{ display: "none" }}>
                              <input id="mhAptName" name="vwattr0_AptName" placeholder="Apt Name*" type="text" className="form-control akReq" required tabindex="5" />
                            </div>
                            <div className="col-12 col-md-4 mb-4 resTypeOption resType-apartment" style={{ display: "none" }}>
                              <input id="mhAptNum" name="vwattr0_AddrUnit" placeholder="Unit*" type="text" className="form-control akReq" required tabindex="6" />
                            </div>


                            <div className="col-12 col-md-6 mb-4 pr-md-0 zillowDiv" style={{ display: "none" }}>
                              <select name="vwattr0_Bedrooms" id="zillow-bedrooms" className="form-control priceChange akReq" required tabindex="7" data-append="bed">
                                <option value="">Beds*</option>
                                <option value="1">1 bed</option>
                                <option value="2">2 bed</option>
                                <option value="3">3 bed</option>
                                <option value="4">4 bed</option>
                                <option value="5">5 bed</option>
                                <option value="6">6 bed</option>
                              </select>
                            </div>
                            <div className="col-12 col-md-6 mb-4 zillowDiv" style={{ display: "none" }}>
                              <select name="vwattr0_Bathrooms" id="zillow-bathrooms" className="form-control priceChange akReq" required tabindex="8" data-append="bath">
                                <option value="">Baths*</option>
                                <option value="1">1 bath</option>
                                <option value="2">2 bath</option>
                                <option value="3">3 bath</option>
                                <option value="4">4 bath</option>
                                <option value="5">5 bath</option>
                                <option value="6">6 bath</option>
                              </select>
                            </div>

                            {/* <!--
                                      <div className="col-12 mb-4">
                                        <select name="vwattr0_Date" id="mhDate" placeholder="Select a date*" className="form-control akReq" required tabindex="9">
                                          <option value="">Select a date*</option>
                                        </select>
                                      </div>
											  --> */}

                            <div className="col-12 text-center">
                              <button name="submit" type="submit" id="submitButton" className="btn btn-primary" tabindex="10">Next <i className="fas fa-arrow-right"></i></button>
                            </div>
                          </div>
                          <div className="noService" style={{ display: "none" }}>
                            <h4>Oh no!</h4>
                            <p>We are not servicing <span className="zipcodeVal"></span> at this time.</p>
                          </div>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-area get-price-work">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="work-title">
                <h2>How it works</h2>
                <p>We'll clean your home weekly, every two weeks, or every three weeks. <br />All our plans include low-cost or FREE errand running services.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-11 m-auto ml-lg-auto">
              <div className="work-card1">
                <div className="work-card-icon">
                  <img src="/assets/images/icons/Room.svg" alt="" />
                </div>
                <div className="work-card-title">
                  <h3>Get a price.</h3>
                  <p>Tell us about you, your home, and your cleaning needs. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-11 m-auto">
              <div className="work-card1 center-card">
                <div className="work-card-icon">
                  <img src="/assets/images/icons/Calendar.svg" alt="" />
                </div>
                <div className="work-card-title">
                  <h3>Book it.</h3>
                  <p>We'll make your home shine, and run any errands you'd like.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-11 m-auto mr-lg-auto">
              <div className="work-card1">
                <div className="work-card-icon">
                  <img src="/assets/images/icons/house-icon.svg" alt="" />
                </div>
                <div className="work-card-title">
                  <h3>Breathe, smile, relax.</h3>
                  <p>The house is clean, the errands are done. Time to come home. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="why-top-area">
                <div className="work-title">
                  <h2>Why MoreHands</h2>
                  <p>The only maid service that cleans your home<br /> and runs your errands for you</p>
                </div>
                <div className="row">
                  <div className="col-md-9 m-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="why1">
                          <div className="why-icon ml-md-auto mr-md-auto">
                            <img src="/assets/images/icons/no-cancelations-badge.svg" alt="" />
                          </div>
                          <div className="why-text">
                            <h3>We never cancel. Ever.</h3>
                            <p>Cleaning is a commitment. If we ever were to cancel, we'd pay you $100. Guaranteed.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="why1">
                          <div className="why-icon ml-md-auto mr-md-auto">
                            <img src="/assets/images/icons/tasks-list.svg" alt="" />
                          </div>
                          <div className="why-text">
                            <h3>Your happiness, guaranteed</h3>
                            <p>We ask for feedback after each visit. If you're not 100% satisfied with our services, we will make it right. </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="why1">
                          <div className="why-icon ml-md-auto mr-md-auto">
                            <img src="/assets/images/icons/maids-team.svg" alt="" />
                          </div>
                          <div className="why-text">
                            <h3>Know who's in your home</h3>
                            <p>Want the same cleaning team every time? We can make that happen, just let us know when you sign up for service. </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="why1">
                          <div className="why-icon ml-md-auto mr-md-auto">
                            <img src="/assets/images/icons/Quality.svg" alt="" />
                          </div>
                          <div className="why-text">
                            <h3>Quality control</h3>
                            <p>Our quality control inspectors follow behind our teams to make sure we deliver the sparkly results we promise.  </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="faq-price-area">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="faq-price">
                            <h3>Frequently Asked Questions</h3>
                          </div>
                          <div className="faq-main-area">

                            <div className="faq-page-1 faqsDiv" data-categories="our-maid-service">

                              {/* <!-- Repeating section: content-faq.json--> */}
                              <div className="faqs-item">
                                <a name="" className="friendlyVal-inpN"></a>
                                <h3 className="">About our Basic Cleaning Service</h3>
                                <div className="maid-faq-area">
                                  <ul className="itemsDiv">
                                    <li className="items-item">
                                      <div className="faq-head">
                                        <h4 className="questionVal"></h4>
                                      </div>
                                      <div className="faq-visible">
                                        <p className="answerVal"></p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* <!-- end repeating section--> */}

                            </div>



                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default OurPricePage;
