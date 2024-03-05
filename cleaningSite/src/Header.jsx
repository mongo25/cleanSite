import morehandLogo from "./assets/morehands-logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container container-max ">
      <div className="row align-items-center">
        <div className="col-auto">
          <div className="main-logo">
            <h1>
              <Link to="/">
                <img src={morehandLogo} alt="morehand-logo" />
              </Link>
            </h1>
          </div>
        </div>
        <div className="col-auto main-menu">
          <ul className="list-unstyled d-flex m-0">
            <li>
              <Link to="/service">Our Service</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-auto ms-auto">
          <ul className="list-unstyled d-flex align-items-center m-0">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                >
                  <circle
                    cx="19"
                    cy="20"
                    r="18"
                    fill="white"
                    stroke="#00AFD0"
                    stroke-width="2"
                  />
                  <rect
                    width="22"
                    height="22"
                    transform="translate(8 9)"
                    fill="white"
                  />
                  <path
                    d="M22.0324 22.0057L20.0698 23.9417C19.0463 23.3246 18.0956 22.5944 17.2354 21.7646C16.407 20.9031 15.6768 19.9522 15.0584 18.9294L16.9925 16.9668C17.1097 16.8478 17.1888 16.6967 17.2198 16.5327C17.2508 16.3686 17.2323 16.1991 17.1667 16.0456L15.15 11.3449C15.0704 11.1595 14.9267 11.009 14.7454 10.9206C14.564 10.8323 14.3569 10.8121 14.1619 10.8636L10.464 11.8417C10.2794 11.8896 10.1164 11.9987 10.0018 12.1513C9.88728 12.3038 9.82787 12.4907 9.83336 12.6814C10.0686 16.9822 11.8569 21.0514 14.8659 24.1333C17.9483 27.1433 22.0186 28.9318 26.3205 29.1667C26.5114 29.1731 26.6987 29.1142 26.8516 28.9997C27.0044 28.8852 27.1136 28.722 27.1611 28.537L28.1383 24.8373C28.1901 24.6424 28.1701 24.4353 28.0819 24.2539C27.9937 24.0725 27.8432 23.9288 27.6579 23.8491L22.9564 21.8334C22.8027 21.7668 22.6326 21.7476 22.468 21.7783C22.3034 21.809 22.1517 21.8882 22.0324 22.0057V22.0057Z"
                    stroke="#00AFD0"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                  <circle
                    cx="30"
                    cy="6"
                    r="5"
                    fill="#3DDC97"
                    stroke="#DDF9FF"
                    stroke-width="2"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="btn btn-custom-1 fw-bold" href="#">
                Get a Price
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
