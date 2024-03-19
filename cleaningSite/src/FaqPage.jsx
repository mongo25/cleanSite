import FaqList from "./FaqList";
import { faqLists } from "./data";

const FaqPage = () => {
  return (
    <>
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
    </>
  );
};

export default FaqPage;
