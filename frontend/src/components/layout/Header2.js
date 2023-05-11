import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand app-brand" to="/">
            <img
              src={"imgs/logo.png"}
              alt="legal help online logo"
              height="50"
              className="rounded-circle"
            />
            &nbsp;LegalHelp<span className="d-lg">Online</span>
            <img src="/imgs/256-flag.png" width={100} height={80} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav d-flex justify-content-end">
              <li className="nav-item dropstart">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LEGAL SERVICES
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="d-flex justify-content-between">
                    <section>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Banking, Finance and FinTech
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Business Stracturing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Criminal Law & Offences
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Company Formation
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Commercial Contracts
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Construction and Infrastructure
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Children & Child Custoday
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Data and Privacy
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Dispute Resolution & Litigation
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Employment Advisory Services
                        </Link>
                      </li>
                    </section>
                    <section>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Media & ENtertainment
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Land, Property & Leasing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Marriage/Devorce
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Startups
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Restructuring and Involvency
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Immigration
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Employment / Labour
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Wills/Trusts
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Civil/Debt Matters
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Tax
                        </Link>
                      </li>
                    </section>
                  </div>
                </ul>
              </li>

              <li className="nav-item dropstart">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LEGAL DOCUMENTS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="d-flex justify-content-between">
                    <section>
                      <li>
                        <a className="dropdown-item" href="#">
                          Affidavist / Statutory Declaration
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Company Formation (Incooperation)
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Caveats
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Confidentiality Agreement
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Commercial Contracts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Employment Contracts
                        </a>
                      </li>
                    </section>
                    <section>
                      <li>
                        <a className="dropdown-item" href="#">
                          Non disclosure Agreements
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Tenancy Agreements
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Land Sale Agreements
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Loan Agreements
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Partnership Agreement
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Stakeholders Agreement
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Will Drafting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Power of Attorney
                        </a>
                      </li>
                    </section>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-outline-light"
                  href="https://ravesandbox.flutterwave.com/donate/dxh2adahc3vi"
                  id="donate-btn"
                  title="Donate For Justice"
                >
                  <i className="fas fa-heart text-danger"></i> DONATE FOR
                  JUSTICE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header2;
