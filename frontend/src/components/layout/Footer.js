import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const Year = date.getFullYear();
  const nextYear = Year + 1;
  const footerStyle = {
    indent: {
      textIndent: 'text-indent: 10px',
      marginLeft: '5px'
    }
  }
  return (
    <Fragment>
      <footer className="container-flud">
        <div className="container">
          <div className="row">
            <div className="ml-0 col-lg-4">
              <h3>
              <img src={'imgs/logo.png'} alt="legal help online logo" height="50"
              className="rounded-circle"/>
                 &nbsp; LegalHelpOnline
              </h3>
              <p>
                <a
                  href="mailto:legalhelponline@gmail.com"
                  className="deco-none"
                >
                  Gmail: legalhelponline@gmail.com
                </a>
              </p>
              <h5 className="mt-3">
                <i className="fas fa-forward"></i> Follow Us
              </h5>
              <div className="d-flex">
                <h4>
                  <a href="#" className="ml-3">
                    <i className="fab fa-facebook text-light"></i>
                  </a>
                </h4>
                &nbsp;&nbsp;&nbsp;
                <h4>
                  <a href="#" className="ml-3">
                    <i className="fab fa-instagram bg-danger text-light rounded"></i>
                  </a>
                </h4>
                &nbsp;&nbsp;&nbsp;
                <h4></h4>
                <a href="#" className="ml-3">
                  <i className="fab fa-twitter"></i>
                </a>
                &nbsp;&nbsp;&nbsp;
                <h4>
                  <a href="#" className="ml-3">
                    <i className="fab fa-youtube bg-danger text-light rounded"></i>
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-lg-4">
              <h5>
                Legal Services
              </h5>
              <h5>
                Legal Documents
              </h5>
            </div>

            <div className="col-lg-4">
              <p className="mt-2">
                <p>
                  <Link className="deco-none" to="/about"> 
                    About Us
                  </Link>
                  
                </p>
              </p>
              <h5>
                <u>Contact Us</u>
              </h5>
              <p>
                <a href="tel:+256784414719" className="deco-none">
                  +256 784 414 719
                </a>
              </p>
              <p>
                <a href="tel:+256706142727" className="deco-none">
                  +256 706 142 727
                </a>
              </p>
            </div>
            <hr/>
        <div className="col-lg-12">
          <h5>
            Why Us?
          </h5>
          <span id="about-message" style={footerStyle.indent}>
            We provide a platform that ensures everyone has access to justice.
            Clients can raise queries and get free legal advice. LegalHelpOnline
            is built upon one simple but powerful belief: that no person should
            be denied the right to access equal justice.
          </span>
        </div>
          </div>
        </div>
        <hr/>
        <div className="text-light text-center">
          <div className="container">
            <p>
              &copy; {Year} LegalHelpOnline. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
