import React, { Fragment } from "react";

const Header1 = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light sticky-top" id="nav1">
        <div className="container-fluid">
            <a href="#!" className="navbar-brand">
              <span><i className="fas fa-envelope text-light"></i> &nbsp;
                  <a href="mailto:egalhelponline@gmail.com" 
                  className="deco-none text-light ml-2">
                    Email: legalhelponline@gmail.com
                  </a> 
              </span>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">

                </div>
                <div className="navbar-nav ms-auto">
                    <a href="#!" className="nav-item nav-link">
                      <h4>
                        <span id="call" className="text-light">
                          Need Help? Call +256784414719
                        </span>
                      </h4>
                    </a>
                    <a href="https://wa.me/+256784414719" className="nav-item nav-link deco-none">
                       <h4>
                          <i className="fab fa-whatsapp text-light"></i> 
                          &nbsp;
                       </h4>
                      </a>
                </div>
            </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header1;
