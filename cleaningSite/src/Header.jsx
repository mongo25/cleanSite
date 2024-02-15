function Header() {
  return (
    <div className="container container-max">
      <div className="row align-items-center  mx-auto p-4">
        <div className="col-auto">
          <ul className="list-unstyled d-flex">
            <li>
              <a href="default.asp">Home</a>
            </li>
            <li>
              <a href="news.asp">News</a>
            </li>
            <li>
              <a href="contact.asp">Contact</a>
            </li>
          </ul>
        </div>
        <div style={{ marginLeft: "auto" }} className="col-auto">
          <ul className="list-unstyled">
            <li>
              <span className="active floatRight" href="#about">
                About
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
