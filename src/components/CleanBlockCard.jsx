import React from "react";

const CleanBlockCard = ({ img, price, text, alt, isUnderline }) => {
  return (
    <div className="p-4 pb-5 bg-white cleaner-block rounded-4 text-start">
      <img src={img} alt={alt} />
      <p className="mt-2 fs-5 fw-bold">
        <span className="text-custom-color-3">{price}</span>
        <span> * </span>
      </p>
      <h3 className={`fs-6 pb-1 ${isUnderline ? "border-custom-bottom" : ""}`}>
        {text}
      </h3>
    </div>
  );
};

export default CleanBlockCard;
