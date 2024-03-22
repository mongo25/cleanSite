import { RiArrowDownSLine } from "react-icons/ri";
const SubpageBanner = ({ title, description, textLink }) => {
  return (
    <div className="subpage-banner">
      <div className="container container-max">
        <div className="row ">
          <div className="col-md-12 ">
            <div className="bg-custom-2 rounded-4">
              <div className="row px-5">
                <div className="col-md-6 pl-65">
                  <div className="text-start pb-lg-4 pt-lg-4 pt-md-3 pt-xl-5">
                    <h1 className="fw-bold fs-1 pb-3">{title}</h1>
                    <p className="pb-3 fs-5 fw-normal">{description}</p>
                    <p>
                      {textLink && (
                        <a
                          href="#maid-service-section"
                          className="fw-bold fs-5 text-custom-color"
                        >
                          {textLink}
                          <span>
                            <RiArrowDownSLine size={"32"} />
                          </span>
                        </a>
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-md-6 pr-55">
                  <div className="inner-banner-right">
                    <img
                      src="/assets/images/banners/Services-illustration.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubpageBanner;
