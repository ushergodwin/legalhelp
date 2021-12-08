import React, { Fragment } from "react";

const Header1 = () => {
  return (
    <Fragment>
      <nav className="navbar row sticky-top" id="nav1">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <span><i className="fas fa-envelope"></i> <a href="mailto:egalhelponline@gmail.com" className="deco-none text-light">Email:legalhelponline@gmail.com</a> </span>
          </div>
        </div>

        
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        
          <span id="call" className="ml-3">

          Need Help? Call +256784414719 <i className="fab fa-whatsapp"></i>

          Need Help? Call +256784414719 <i class="fab fa-whatsapp"></i>
 
          </span>
          
        </div>
      </nav>
    </Fragment>
  );
};

export default Header1;
