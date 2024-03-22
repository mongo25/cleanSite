import { useState, useEffect } from "react";
import { faqLists } from "./data";
import FaqList2 from "./FaqList2";
import FaqItem from "./FaqItem";
import ServiceDatePicker from "./components/ServiceDatePicker";

function CheckoutPage() {
  const buttonCard = (title) => {
    return (
      <button onClick className="priceButton mt-5">
        {title}
      </button>
    );
  };

  const faqForCheckout = faqLists.find((list) => list.id == "faq-1");

  return (
    <>
      <main style={{ marginTop: 100 }}>
        <div className="inner">
          <section id="serviceInfo">
            <div className="title">Your cleaning service information</div>
            <div className="shadowBox">
              <div className="cartSteps">
                <div className="step active">
                  <span>1</span> Create your cleaning plan
                </div>
                <div className="step">
                  <span>2</span> Billing &amp; Payment
                </div>
              </div>

              <div
                className="option oversize"
                id="pricing"
                style={{ display: "none" }}
              >
                <div className="title">Choose your pricing preference</div>
                <div className="selections">
                  <span
                    className="selection"
                    data-sub="hourly"
                    data-value="hourly"
                    data-price-title="hour(s) cleaning"
                  >
                    Hourly cleaning
                  </span>
                  <span className="selection" data-value="fixed">
                    Fixed price
                  </span>
                </div>
                <div className="message hourly">
                  <span className="icon">
                    <i
                      className="fas fa-exclamation-circle turq"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <p>
                    <span className="turq">
                      Looks like you have a pretty big home, so we recommend you
                      try an hourly cleaning.
                    </span>{" "}
                    It's more affordable, and you get to pick and choose what
                    you want cleaned.
                  </p>
                </div>
                <div className="message fixed">
                  <span className="icon">
                    <i
                      className="fas fa-exclamation-circle turq"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <p>
                    <span className="turq">
                      Looks like you have a pretty big home, so a fixed price
                      might not be your best bet.
                    </span>{" "}
                    Switch to hourly — it's more affordable, and you get to pick
                    and choose what you want cleaned.
                  </p>
                </div>
              </div>

              <div className="option" id="frequency">
                <div className="title">
                  Choose your service frequency and service date
                </div>
                <div className="selections main">
                  <span
                    className="selection sub selected"
                    data-sub-id="recurring"
                    data-sub="weekly"
                    data-main-title="weekly"
                    data-price-title="% Recurring service discount (weekly)"
                    data-free="6 Free errands"
                    data-frq="Every week"
                  >
                    Weekly
                  </span>
                  <span
                    className="selection sub"
                    data-sub-id="recurring"
                    data-sub="every2"
                    data-main-title="every 2 weeks"
                    data-price-mod="5"
                    data-price-title="% Recurring service discount (every 2 weeks)"
                    data-free="3 Free errands"
                    data-frq="Every two weeks"
                  >
                    Every 2 weeks
                  </span>
                  <span
                    className="selection sub"
                    data-sub-id="recurring"
                    data-sub="every3"
                    data-main-title="every 3 weeks"
                    data-price-mod="20"
                    data-price-title="% Recurring service discount (every 3 weeks)"
                    data-frq="Every three weeks"
                  >
                    Every 3 weeks
                  </span>
                  <span
                    className="selection sub"
                    data-sub-id="oneTime"
                    data-main-title="one time"
                    data-sub="oneTime"
                    data-frq="Only once"
                  >
                    One Time
                  </span>
                </div>
              </div>

              <div
                className="subs frequency oneTime"
                style={{ display: "block" }}
              >
                <div
                  className="subelem"
                  data-id="oneTime"
                  style={{ display: "none" }}
                >
                  <div className="grayBox">
                    <div className="title">
                      What kind of one-time cleaning do you need?
                    </div>
                    <div className="selections">
                      <span
                        className="selection turq sub"
                        data-sub-sub-id="basic"
                      >
                        Basic
                      </span>
                      <span
                        id="moveInSelect"
                        className="selection turq sub"
                        data-sub="moveIn"
                        data-sub-sub-id="moveIn"
                      >
                        Move in
                      </span>
                      <span
                        id="moveOutSelect"
                        className="selection turq sub"
                        data-sub="moveOut"
                        data-sub-sub-id="moveOut"
                        data-id="moveOut"
                        data-baseprice-title="Move out cleaning"
                      >
                        Move out
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="calendar">
                <ServiceDatePicker />
              </div>

              <div
                className="subs nooversize oneTimeSubs"
                style={{ display: "none" }}
              >
                <div className="subelem" data-id="moveIn">
                  <div className="title">
                    What can we expect when we arrive for your service?
                  </div>
                  <div className="selections info">
                    <span
                      className="selection"
                      data-option-name="My home will be"
                      data-option-value="Empty"
                    >
                      My home will be empty
                    </span>
                    <span
                      className="selection"
                      data-option-name="My home will be"
                      data-option-value="Furnished"
                    >
                      <img src="./assets/icon-cabinets.png" /> My home will have
                      furnishing
                    </span>
                  </div>
                </div>
                <div className="subelem" data-id="moveOut">
                  <div className="message">
                    <span className="icon">
                      <i
                        className="fas fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <p>
                      Move out cleaning services cost{" "}
                      <span className="hourlyVarFee1">$55</span> per hour, per
                      employee. We can only estimate your price, because costs
                      vary greatly from home to home, based on conditions. Teams
                      are typically 2 employees (totalling{" "}
                      <span className="hourlyVarFee2">$110</span> per hour), and
                      occasionally 3-4 employees (totalling{" "}
                      <span className="hourlyVarFee3">
                        $165 or <span className="hourlyVarFee4">$220</span> per
                        hour, respectively).
                      </span>
                    </p>
                  </div>
                  <div className="title">
                    Do you want us to complete the cleaning even if it exceeds
                    the hourly estimate?
                  </div>
                  <div
                    className="selections info required"
                    id="completeCleaning"
                  >
                    <span
                      className="selection"
                      data-option-name="OK to exceed"
                      data-option-value="Yes"
                    >
                      Yes, complete my cleaning
                    </span>
                    <span
                      className="selection"
                      data-option-name="OK to exceed"
                      data-option-value="No"
                    >
                      No, only clean up to my estimated time
                    </span>
                  </div>
                  <div className="title">
                    Would you like to receive a phone call if the cleaning time
                    exceeds the hourly estimate?
                  </div>
                  <div className="selections info required" id="callExceed">
                    <span
                      className="selection"
                      data-option-name="Call if exceeds"
                      data-option-value="Yes"
                    >
                      Yes, please call me if the cleaning time goes over the
                      estimate
                    </span>
                    <span
                      className="selection"
                      data-option-name="Call if exceeds"
                      data-option-value="No"
                    >
                      No, do what you need to do to get the job done!
                    </span>
                  </div>
                  <div className="checkbox info required">
                    <label htmlFor="priceAgree">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="priceAgree"
                        name="vwattr0_Confirmation"
                        data-option-name="Confirmation"
                        data-option-value="Yes, I understand that this price is only an estimate and subject to change based on actual time spent cleaning"
                      />
                      Yes, I understand that this service is{" "}
                      <span className="hourlyVarFee2">$110</span> an hour + tax
                      based on a team of 2 employees, with a minimum time charge
                      of 2 hours, and charged by the minute.
                    </label>
                  </div>
                </div>
              </div>

              <div className="subs frequency" style={{ display: "block" }}>
                <div className="subelem" data-id="weekly">
                  <div className="message grayBox errands">
                    <div className="errands">
                      <p className="lb">You'll get 2 free errands a month</p>
                      <p>for a period of 3 months.</p>
                      <a
                        href="/"
                        className="modalLink"
                        data-fancybox=""
                        data-src="#freeErrands"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="message noerrands">
                    <img src="./assets/errands-soon.png" />
                    <p>
                      <b>MoreHands errands</b>{" "}
                      <span className="lb">coming soon to your area!</span>
                      <span className="nomob">
                        Currently only in Central Austin &amp; Cypress
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="subelem"
                  data-id="every2"
                  style={{ display: "none" }}
                >
                  <div className="message grayBox errands">
                    <p className="lb">You'll get 1 free errands a month</p>
                    <p>for a period of 3 months.</p>
                    <a
                      href="/"
                      className="modalLink"
                      data-fancybox=""
                      data-src="#freeErrands"
                    >
                      Learn more
                    </a>
                  </div>
                  <div className="message noerrands">
                    <img src="./assets/errands-soon.png" />
                    <p>
                      <b>MoreHands errands</b>{" "}
                      <span className="lb">coming soon to your area!</span>
                      <span className="nomob">
                        Currently only in Central Austin &amp; Cypress
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="subelem"
                  data-id="every3"
                  style={{ display: "none" }}
                >
                  <div className="message grayBox errands">
                    <p className="lb">Doesn't include free errands</p>
                    <p>You can get discounts by joining other errands!</p>
                    <a
                      href="/"
                      className="modalLink"
                      data-fancybox=""
                      data-src="#freeErrands"
                    >
                      Learn more
                    </a>
                  </div>
                  <div className="message noerrands">
                    <img src="./assets/errands-soon.png" />
                    <p>
                      <b>MoreHands errands</b>{" "}
                      <span className="lb">coming soon to your area!</span>
                      <span className="nomob">
                        Currently only in Central Austin &amp; Cypress
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="subs pricing">
                <div className="subelem" data-id="hourly">
                  <div className="title">
                    Choose the rooms you'd like cleaned, and your estimate will
                    adjust.
                  </div>
                  <div className="selections add multi">
                    <span
                      className="selection selected"
                      data-add-value="15"
                      data-add-name="Kitchen"
                    >
                      Kitchen
                    </span>
                    <span
                      className="selection selected"
                      data-add-value="15"
                      data-add-name="Living room"
                    >
                      Living room
                    </span>
                    <span
                      className="selection selected"
                      data-add-value="15"
                      data-add-name="Primary bedroom"
                    >
                      Primary bedroom
                    </span>
                    <span
                      className="selection selected"
                      data-add-value="15"
                      data-add-name="Primary bathroom"
                    >
                      Primary bathroom
                    </span>
                    <span
                      className="selection"
                      data-add-value="15"
                      data-add-name="Foyer"
                    >
                      Foyer
                    </span>
                    <span
                      className="selection"
                      data-add-value="15"
                      data-add-name="Laundry room"
                    >
                      Laundry room
                    </span>
                    <span
                      className="selection selected"
                      data-add-value="15"
                      data-add-name="Secondary bedroom"
                    >
                      Secondary bedroom
                    </span>
                    <span
                      className="selection selected"
                      data-add-value="15"
                      data-add-name="Secondary bathroom"
                    >
                      Secondary bathroom
                    </span>
                    <span
                      className="selection"
                      data-add-value="15"
                      data-add-name="Game room"
                    >
                      Game room
                    </span>
                    <span
                      className="selection"
                      data-add-value="15"
                      data-add-name="Office room"
                    >
                      Office room
                    </span>
                    <span
                      className="selection"
                      data-add-value="15"
                      data-add-name="Dining room"
                    >
                      Dining room
                    </span>
                    <span
                      className="selection"
                      data-add-value="15"
                      data-add-name="Eating area"
                    >
                      Eating area
                    </span>
                    <span
                      className="selection dropdown"
                      data-add-value=""
                      data-add-name=""
                    >
                      <span
                        className="label"
                        data-initial="Add more rooms to estimate"
                      >
                        Add more rooms to estimate
                      </span>
                      <i className="fas fa-chevron-down" aria-hidden="true"></i>
                      <div className="opts">
                        <span className="option" data-add-name="">
                          No, thanks
                        </span>
                        <span
                          className="option"
                          data-add-value="15"
                          data-add-name="1 room"
                        >
                          1 room
                        </span>
                        <span
                          className="option"
                          data-add-value="30"
                          data-add-name="2 rooms"
                        >
                          2 rooms
                        </span>
                        <span
                          className="option"
                          data-add-value="45"
                          data-add-name="3 rooms"
                        >
                          3 rooms
                        </span>
                        <span
                          className="option"
                          data-add-value="60"
                          data-add-name="4 rooms"
                        >
                          4 rooms
                        </span>
                        <span
                          className="option"
                          data-add-value="75"
                          data-add-name="5 rooms"
                        >
                          5 rooms
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="textarea info">
                    <div className="title">
                      Any special instructions about your areas you'd like us to
                      clean?
                    </div>
                    <textarea
                      id="instructions"
                      name="vwattr0_Instructions"
                      data-option-name="Additional Instructions"
                      placeholder='Ex. "Please don&apos;t clean the desk I work on."'
                    ></textarea>
                  </div>
                  <div className="checkbox info required">
                    <label htmlFor="roomsAgree">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="roomsAgree"
                        name="vwattr0_Confirmation"
                        data-option-name="Confirmation"
                        data-option-value="Yes, I understand that this service is an hourly cleaning estimate, which allows me to pick and choose what parts of my house I want cleaned on a visit-by-visit basis."
                      />
                      Yes, I understand that this service is an hourly cleaning
                      estimate, which allows me to pick and choose what parts of
                      my house I want cleaned on a visit-by-visit basis.
                    </label>
                  </div>
                </div>
              </div>

              <div className="option reg nomoveout nohourly">
                <div className="title">Do you have any pets?</div>
                <div className="selections">
                  <span className="selection selected">No pets</span>
                  <span
                    className="selection"
                    data-option-name="Pets"
                    data-option-value="One Pet"
                    data-option-price="5.00"
                  >
                    <img src="src/assets/svg/pets.svg" />1 Pet
                  </span>
                  <span
                    className="selection"
                    data-option-name="Pets"
                    data-option-value="Multiple Pets"
                    data-option-price="10.00"
                  >
                    <img src="src/assets/svg/pets.svg" />
                    Multiple Pets
                  </span>
                </div>
              </div>

              <div className="option reg nomoveout nohourly">
                <div className="title">
                  Do you want us to use green cleaning products?
                </div>
                <div className="selections">
                  <span className="selection selected">
                    No, use classic products
                  </span>
                  <span
                    className="selection"
                    data-option-name="GreenClean"
                    data-option-value="Yes"
                    data-option-price="20.00"
                  >
                    <img src="src/assets/svg/green-product.svg" />
                    Yes, use green products
                  </span>
                </div>
              </div>

              <div className="additionalItems nomoveout nohourly">
                <div className="title">Laundry services</div>
                <div className="inner">
                  <div className="additionalItem half">
                    <div className="icon">
                      <img src="src/assets/svg/laundry.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Fold clothes"
                      data-option-value="$5 / load"
                      data-option-price="5.00"
                    >
                      $5 / load
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">Fold clothes</div>
                  </div>
                </div>
              </div>

              <div className="additionalItems nomoveout nohourly">
                <div className="title">Deep clean services</div>
                <div className="inner">
                  <div className="additionalItem half">
                    <div className="icon">
                      <img src="src/assets/svg/sweep.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Sweep porches"
                      data-option-value="$7.00"
                      data-option-price="7.00"
                    >
                      $7.00
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">Sweep porches</div>
                  </div>
                  <div className="additionalItem half">
                    <div className="icon">
                      <img src="src/assets/svg/baseboards.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Clean baseboards"
                      data-option-value="$49"
                      data-option-price="49.00"
                    >
                      $49
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">Clean baseboards</div>
                  </div>
                  <div className="additionalItem half">
                    <div className="icon">
                      <img src="src/assets/svg/cabinets.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Clean cabinets"
                      data-option-value="$19"
                      data-option-price="19.00"
                    >
                      $19
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">Clean cabinets</div>
                  </div>
                  <div className="additionalItem half">
                    <div className="icon">
                      <img src="src/assets/svg/window.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Clean interior windows"
                      data-option-value="$64"
                      data-option-price="64.00"
                    >
                      $64
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">Clean interior windows</div>
                  </div>
                  <div className="additionalItem half">
                    <div className="icon">
                      <img src="src/assets/svg/oven.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Deep clean oven"
                      data-option-value="$44"
                      data-option-price="44.00"
                    >
                      $44
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">Deep clean oven</div>
                  </div>
                  <div className="additionalItem half">
                    <div className="icon">
                      <img src="src/assets/svg/fridge.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Clean fridge/freezer"
                      data-option-value="$44"
                      data-option-price="44.00"
                    >
                      $44
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">Clean fridge/freezer</div>
                  </div>
                  <div className="additionalItem half">
                    <div className="icon">
                      <img src="src/assets/svg/blinds.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Deep clean blinds"
                      data-option-value="$84"
                      data-option-price="84.00"
                    >
                      $84
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">Deep clean blinds</div>
                  </div>
                </div>
              </div>

              <div className="additionalItems nohourly">
                <div className="title">Disinfection services</div>
                <div className="inner">
                  <div className="additionalItem full">
                    <div className="icon">
                      <img src="src/assets/svg/spray.svg" />
                    </div>
                    <div
                      className="price"
                      data-option-name="Disinfecting spray service"
                      data-option-value="$59"
                      data-option-price="59.00"
                    >
                      $59
                    </div>
                    <div className="check">
                      <i className="fas fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="title">
                      Electrostatic, non-toxic, disinfecting spray service
                    </div>
                  </div>
                </div>
              </div>

              <div className="buttons">
                <button type="button">Next</button>
              </div>
            </div>
          </section>

          <section id="sideBar">
            <div id="cart">
              <div className="title">
                Your <span id="titleData">weekly</span> cleaning price
              </div>
              <div className="lines">
                <div className="line main">
                  <span className="txt">House basic cleaning</span>
                  <span className="num">$209.00</span>
                </div>
                <div className="line green">
                  <span className="txt">
                    40% Recurring service discount (weekly)
                  </span>
                  <span className="num">-$85.00</span>
                </div>
                <div className="line green free">
                  <span className="txt">6 Free errands</span>
                  <span className="num">$0.00</span>
                </div>
              </div>
              <div className="extras"></div>
              <div className="total">
                <span className="txt">Total</span>
                <span className="num">$124.00</span>
              </div>
              <div className="help basic">
                <a href="/" data-fancybox="" data-src="#whatsIncludedBasic">
                  <i
                    className="fas fa-exclamation-circle"
                    aria-hidden="true"
                  ></i>{" "}
                  What's included in basic cleaning?
                </a>
              </div>
              <div className="help moveIn" style={{ display: "none" }}>
                <a href="/" data-fancybox="" data-src="#whatsIncludedMoveIn">
                  <i
                    className="fas fa-exclamation-circle"
                    aria-hidden="true"
                  ></i>{" "}
                  What's included in move in cleaning?
                </a>
              </div>
              <div className="help moveOut" style={{ display: "none" }}>
                <a href="/" data-fancybox="" data-src="#whatsIncludedMoveOut">
                  <i
                    className="fas fa-exclamation-circle"
                    aria-hidden="true"
                  ></i>{" "}
                  What's included in move out cleaning?
                </a>
              </div>
              <div className="help hourly" style={{ display: "none" }}>
                <a href="/" data-fancybox="" data-src="#whatsIncludedHourly">
                  <i
                    className="fas fa-exclamation-circle"
                    aria-hidden="true"
                  ></i>{" "}
                  If this is only an estimate, can I depend on this price?
                </a>
              </div>
            </div>
            <div id="faq">
              <div className="title">Frequently asked questions</div>
              <div className="faqs">
                {faqForCheckout &&
                  faqForCheckout.faqItems.map((item, i) => (
                    <FaqItem
                      key={i}
                      faqListId={item.headingId}
                      faqItem={item}
                      isCustom={true}
                    />
                  ))}
              </div>
            </div>
          </section>

          <div className="ca"></div>
        </div>

        <section id="assuranceBoxes">
          <div className="asBox">
            <div className="icon">
              <img src="src/assets/icon-nocancel.png" />
            </div>
            <div className="title">We never cancel. Ever.</div>
            <div className="text">
              Cleaning is a commitment. If we ever were to cancel, we'd pay you
              $100. Guaranteed.
            </div>
          </div>
          <div className="asBox">
            <div className="icon">
              <img src="src/assets/icon-satisfaction.png" />
            </div>
            <div className="title">Your happiness, guaranteed</div>
            <div className="text">
              We ask for feedback after each visit. If you're not 100% satisfied
              with our services, we will make it right.
            </div>
          </div>
          <div className="asBox">
            <div className="icon">
              <img src="src/assets/icon-team.png" />
            </div>
            <div className="title">Know who's in your home</div>
            <div className="text">
              Want the same cleaning team every time? We can make that happen,
              just let us know when you sign up for service.
            </div>
          </div>
          <div className="asBox">
            <div className="icon">
              <img src="src/assets/icon-quality.png" />
            </div>
            <div className="title">Quality control</div>
            <div className="text">
              Our quality control isnpectors follow behind our teams to make
              sure we deliver the sparkly results we promise.
            </div>
          </div>
        </section>

        <div style={{ display: "none" }} id="modalInfo">
          <div id="whatsIncludedBasic">
            <div className="title">Basic cleaning includes</div>
            <section>
              <div className="title">Everywhere</div>
              <span>Vacuum carpets</span>
              <span>Dust ceiling fans</span>
              <span>Dust furniture</span>
              <span>Dust window sills</span>
              <span>Polish furniture</span>
              <span>Take out trash</span>
              <span>Sanitize light switches</span>
              <span>Sweep and mop floors</span>
            </section>
            <section>
              <div className="title">Bathrooms</div>
              <span>Scrub and disinfect toilets</span>
              <span>Scrub and disinfect tubs</span>
              <span>Scrub and disinfect showers</span>
              <span>Scrub and disinfect sinks</span>
              <span>Scrub and disinfect counters</span>
              <span>Clean mirrors</span>
              <span>Polish chrome</span>
            </section>
            <section>
              <div className="title">Kitchen</div>
              <span>Scrub and sanitize sinks</span>
              <span>Scrub and sanitize counters</span>
              <span>Clean other surfaces</span>
              <span>Clean outside appliances</span>
              <span>Clean inside microwave</span>
              <span>Place dishes in dishwasher</span>
            </section>
            <section>
              <div className="title">Bedrooms</div>
              <span>Make beds</span>
              <span>Change linens</span>
            </section>
          </div>

          <div id="whatsIncludedMoveIn">
            <div className="title">Move In cleaning includes</div>
            <section>
              <div className="title">Everywhere</div>
              <span>Vacuum carpets</span>
              <span>Dust ceiling fans</span>
              <span>Dust furniture</span>
              <span>Dust window sills</span>
              <span>Polish furniture</span>
              <span>Take out trash</span>
              <span>Sanitize light switches</span>
              <span>Sweep and mop floors</span>
            </section>
            <section>
              <div className="title">Bathrooms</div>
              <span>Scrub and disinfect toilets</span>
              <span>Scrub and disinfect tubs</span>
              <span>Scrub and disinfect showers</span>
              <span>Scrub and disinfect sinks</span>
              <span>Scrub and disinfect counters</span>
              <span>Clean mirrors</span>
              <span>Polish chrome</span>
            </section>
            <section>
              <div className="title">Kitchen</div>
              <span>Scrub and sanitize sinks</span>
              <span>Scrub and sanitize counters</span>
              <span>Clean other surfaces</span>
              <span>Clean outside appliances</span>
              <span>Clean inside microwave</span>
              <span>Place dishes in dishwasher</span>
            </section>
            <section>
              <div className="title">Bedrooms</div>
              <span>Make beds</span>
              <span>Change linens</span>
            </section>
          </div>

          <div id="whatsIncludedMoveOut">
            <div className="title">Move Out cleaning includes</div>
            <section>
              <div className="title">Everywhere</div>
              <span>Vacuum carpets</span>
              <span>Dust ceiling fans</span>
              <span>Dust furniture</span>
              <span>Dust window sills</span>
              <span>Polish furniture</span>
              <span>Take out trash</span>
              <span>Sanitize light switches</span>
              <span>Sweep and mop floors</span>
              <span className="lightblue">Clean all baseboards</span>
              <span className="lightblue">Clean miniblinds &amp; shutters</span>
            </section>
            <section>
              <div className="title">Kitchen</div>
              <span>Scrub and sanitize sinks</span>
              <span>Scrub and sanitize counters</span>
              <span>Clean other surfaces</span>
              <span>Clean outside appliances</span>
              <span>Clean inside microwave</span>
              <span>Place dishes in dishwasher</span>
              <span className="lightblue">
                Clean refrigerator and freezer inside &amp; out
              </span>
              <span className="lightblue">Deep-clean oven and stove</span>
              <span className="lightblue">
                Dust/clean all cabinets inside &amp; out
              </span>
            </section>
            <section>
              <div className="title">Bathrooms</div>
              <span>Scrub and disinfect toilets</span>
              <span>Scrub and disinfect tubs</span>
              <span>Scrub and disinfect showers</span>
              <span>Scrub and disinfect sinks</span>
              <span>Scrub and disinfect counters</span>
              <span>Clean mirrors</span>
              <span>Polish chrome</span>
              <span className="lightblue">
                Dust/clean cabinets inside &amp; out
              </span>
            </section>
          </div>

          <div id="whatsIncludedHourly">
            <section>
              <b>We estimate the time</b> we'll spend in your home{" "}
              <b>based on the rooms you've asked us to clean.</b>
            </section>
            <section>
              <b>
                We've been cleaning homes for over 20 years, so our estimates
                are usually pretty good
              </b>{" "}
              — but it's not an exact science.
            </section>
            <section>
              <b>Depending on the size of each room</b>, it may take our
              employees more or less time to clean than we've estimated.
            </section>
            <section>
              <b>Your card will be charged</b> after we're done cleaning,{" "}
              <b>based on the exact amount of time</b> we were in your home.
            </section>
          </div>

          <div id="freeErrands">
            <img src="./assets/errands-popup-icon.png" />
            <div className="title">MoreHands Errands Running</div>
            <br />
            When you book a recurring maid service, you get free errands! Here's
            how it works:
            <br />
            <br />
            <b>For you, we go anywhere</b>
            <br />
            We pick up, drop off, and return stuff that services like HEB &amp;
            Instacart won't
            <br />
            <br />
            <b>Name your price</b>
            <br />
            When do you want your errand done?
            <br />
            <div className="prices">
              <div className="flex">
                <span>Today</span>
                <span className="num">$10</span>
              </div>
              <div className="flex">
                <span>Tomorrow</span>
                <span className="num">$5</span>
              </div>
              <div className="flex">
                <span>In two days</span>
                <span className="num">$3</span>
              </div>
              <div className="flex">
                <span>Join a community errand any time</span>
                <span className="num">$3</span>
              </div>
            </div>
            <b>Just tell us what you need</b>
            <br />
            Order yout errands on the MoreHands app!
            <br />
          </div>
        </div>
      </main>
    </>
  );
}

export default CheckoutPage;
