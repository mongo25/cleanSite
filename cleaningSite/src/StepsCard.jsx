import React from "react";

function StepsCard({
  icon,
  title,
  summary,
  font,
  homeBttn,
  aprmntBttn,
  comBttn,
}) {
  return (
    <div>
      <div className="card border-0 stepsCard">
        <div className=" text-center">
          {icon && (
            <img
              className="pb-4"
              src={icon}
              alt="icon"
              style={{ width: "75px" }}
            />
          )}
          <h5 className={`card-title my-2 ${font}`}>{title}</h5>
          <p>{summary}</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-auto">
              <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
                <div className="d-flex justify-content-center">{homeBttn}</div>
                <div
                  className="d-flex justify-content-center"
                  style={{ minWidth: "150px", maxWidth: "100%" }}
                >
                  {aprmntBttn}
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ minWidth: "150px", maxWidth: "100%" }}
                >
                  {comBttn}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsCard;
