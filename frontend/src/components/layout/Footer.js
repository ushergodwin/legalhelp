import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
  const date = new Date();
  const Year = date.getFullYear();
  const nextYear = (Year + 1);
  return (
    <Fragment>
      <footer className="py-1">
        <div className="row">
          <div className="ml-0 col-lg-3">
            <p>LegalHelp Online</p>
            <p>Copyright &copy; {Year} - {nextYear}, All Rights Reserved.</p>
          </div>
          <div className="col-lg-3">
            <p>Legal Services</p>
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
            <p>Legal Documents</p>
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
            <p>Conatct Us</p>
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
      </footer>
    </Fragment>
  );
};

export default Footer;
