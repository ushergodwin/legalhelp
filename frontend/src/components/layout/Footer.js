import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
  const date = new Date();
  const Year = date.getFullYear();
  const nextYear = (Year + 1);
  return (
    <Fragment>
      <footer className="container-flud py-1">

       <div className="container">
        <div className="row">
            <div className="ml-0 col-lg-3">
              <h5>LegalHelp Online</h5>
              <p className="mt-2">
                <span><a href="mailto:egalhelponline@gmail.com" className="deco-none text-light">Email: legalhelponline@gmail.com</a> </span>
              </p>
              <h5 className="mt-3">Follow Us</h5>
              <div className="d-flex">
                <h4><a href="#" className="ml-3"><i className="fab fa-facebook"></i></a></h4>&nbsp;&nbsp;&nbsp;
                <h4><a href="#" className="ml-3"><i className="fab fa-google-plus bg-danger text-light rounded"></i></a></h4>&nbsp;&nbsp;&nbsp;
                <h4></h4><a href="#" className="ml-3"><i className="fab fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;
                <h4><a href="#" className="ml-3"><i className="fab fa-youtube bg-danger text-light rounded"></i></a></h4>
              </div>
            </div>
            <div className="col-lg-3">
              <h5>Legal Services</h5>
              <p>
                <Link to="#" className="deco-none">Legal Help Online</Link>
              </p>
              <p>
                <Link to="#" className="deco-none">Criminal Law</Link>
              </p>
              <p>
                <Link to="#" className="deco-none">Civil Litigation</Link>
              </p>
              <p>
                <Link to="#" className="deco-none">Divorce Law</Link>
              </p>
            </div>
            <div className="col-lg-3">
              <h5>Legal Documents</h5>
              <p>
                <a href="#" className="deco-none">Document 1</a>
              </p>
              <p>
                <a href="#" className="deco-none">Document 2</a>
              </p>
              <p>
                <a href="#" className="deco-none">Document 3</a>
              </p>
            </div>
            <div className="col-lg-3">
              <h5>Conatct Us</h5>
              <p>
                <a href="mailto:legalhelponline@gmail.com" className="deco-none"><i className="fas fa-envelope text-info"></i> Email:legalhelponline@gmail.com</a>
              </p>
              <p>
                <a href="tel:+256784414719" className="deco-none"><i className="fas fa-phone-alt text-info"></i> +256784414719</a>
              </p>
              <p>
                <a href="https://wa.me/+256784414719" className="deco-none"> <i className="fab fa-whatsapp text-success"></i> WhatsApp</a>
              </p>
            </div>
          </div>
       </div>

       <div className="nav2 text-light">
          <div className="container">
            <p>Copyright &copy; {Year} - {nextYear}, All Rights Reserved.</p>
          </div>
       </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
