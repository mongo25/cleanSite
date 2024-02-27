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
          <p className="ps-2 text-custom-color-2 fw-normal">
            {faqItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
