import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const Year = date.getFullYear();
  const nextYear = Year + 1;
  const footerStyle = {
    indent: {
      textIndent: "text-indent: 10px",
      marginLeft: "5px",
    },
  };
  return (
    <Fragment>
      <footer className="container-fluid">
        <section className="row">
          <div className="col-md-4">
            <h3>
              <img
                src={"imgs/logo.png"}
                alt="legal help online logo"
                height="50"
                className="rounded-circle"
              />
              &nbsp; LegalHelpOnline
            </h3>
            <p>
              <a href="mailto:legalhelponline@gmail.com" className="deco-none">
                Gmail: legalhelponline@gmail.com
              </a>
            </p>
            <div className="row">
              <div className="ml-0 col-lg-6">
                <h4>
                  <a href="#" className="ml-3">
                    <i className="fab fa-facebook"></i>
                  </a>
                </h4>

                <h4>
                  <a href="#" className="ml-3">
                    <i className="fab fa-instagram rounded"></i>
                  </a>
                </h4>

                <h4></h4>
                <a href="#" className="ml-3">
                  <i className="fab fa-twitter"></i>
                </a>

                <h4>
                  <a href="#" className="ml-3">
                    <i className="fab fa-youtube rounded"></i>
                  </a>
                </h4>
              </div>
              <div className="col-lg-6">
                <p>
                  <Link className="deco-none" to="/about">
                    About Us
                  </Link>
                </p>

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
            </div>
          </div>
          <div
            className="col-md-8"
            style={{ backgroundColor: "#dfe4e8!important" }}
          >
            <div className="row">
              <div className="col-md-12">
                <h5>LEGAL SERVICES</h5>
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li className="text-muted">
                        Banking, Finance and FinTech
                      </li>
                    </ul>
                    <ul>
                      <li className="text-muted">Business Stracturing</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Criminal Law & Offences</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Company Formation</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Commercial Contracts</li>
                    </ul>
                    <ul>
                      <li className="text-muted">
                        Construction and Infrastructure
                      </li>
                    </ul>
                    <ul>
                      <li className="text-muted">Children & Child Custoday</li>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <li className="text-muted">Data and Privacy</li>
                    </ul>
                    <ul>
                      <li className="text-muted">
                        Dispute Resolution & Litigation
                      </li>
                    </ul>
                    <ul>
                      <li className="text-muted">
                        Employment Advisory Services
                      </li>
                    </ul>
                    <ul>
                      <li className="text-muted">Media & ENtertainment</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Land, Property & Leasing</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Marriage/Devorce</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Startups</li>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <li className="text-muted">
                        Restructuring and Involvency
                      </li>
                    </ul>
                    <ul>
                      <li className="text-muted">Immigration</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Employment / Labour</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Wills/Trusts</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Civil/Debt Matters</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Tax</li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-md-12">
                <h5>LEGAL DOCUMENTS</h5>
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li className="text-muted">
                        Affidavist / Statutory Declaration
                      </li>
                    </ul>
                    <ul>
                      <li className="text-muted">
                        Company Formation (Incooperation)
                      </li>
                    </ul>
                    <ul>
                      <li className="text-muted">Caveats</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Confidentiality Agreement</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Commercial Contracts</li>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <li className="text-muted">Employment Contracts</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Non disclosure Agreements</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Tenancy Agreements</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Land Sale Agreements</li>
                    </ul>
                    <ul>
                      <li className="text-muted">
                        Employment Advisory Services
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <li className="text-muted">Loan Agreements</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Partnership Agreement</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Stakeholders Agreement</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Will Drafting</li>
                    </ul>
                    <ul>
                      <li className="text-muted">Power of Attorney</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <div className="text-center">
          <div className="container">
            <p>&copy; {Year} LegalHelpOnline. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
