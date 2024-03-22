import React from "react";

const FaqItem = ({ faqListId, faqItem }) => {
  console.log({ faqItem });
  return (
    <div className="accordion-item">
      <h2 className="accordion-header " id={faqItem.headingId}>
        <button
          className="accordion-button  collapsed ps-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${faqItem.collapseId}`}
          aria-expanded="true"
          aria-controls={faqItem.collapseId}
        >
          <span className="ps-2 fw-bold fs-6 text-custom-color-2">
            {faqItem.title}
          </span>
        </button>
      </h2>
      <div
        id={faqItem.collapseId}
        className="accordion-collapse collapse"
        aria-labelledby={faqItem.headingId}
        data-bs-parent={`#${faqListId}`}
      >
        <div className="accordion-body text-start ps-5">
          {faqItem.isList && (
            <div className="row">
              {faqItem.lists.map((item, i) => (
                <ul className={`col-md-${item.col}`} key={i}>
                  <h5 className="fw-bold fs-6 text-custom-color-4">
                    {item.title}
                  </h5>
                  {item.list.map((li, i) => (
                    <li
                      className="px-0 text-custom-color-4 fw-normal fs-custom-small me-2"
                      key={i}
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}

          {!faqItem.isList &&
            faqItem.lists.map((item) => (
              <p key={item.id} className="ps-2 ">
                <span className="fw-bold fs-6 text-custom-color-3">
                  {item.colorText}
                </span>
                <span className="text-custom-color-2 fw-normal">
                  {item.text}
                </span>
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
