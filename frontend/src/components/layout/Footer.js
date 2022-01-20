import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
  const date = new Date();
  const Year = date.getFullYear();
  const nextYear = (Year + 1);
  return (
    <Fragment>
      <footer className="container-flud">

       <div className="container">
        <div className="row">
            <div className="ml-0 col-lg-3">
              <h5><u>LegalHelp Online</u></h5>
              <h5 className="mt-3"><i className="fas fa-forward"></i> Follow Us</h5>
              <div className="d-flex">
                <h4><a href="#" className="ml-3"><i className="fab fa-facebook"></i></a></h4>&nbsp;&nbsp;&nbsp;
                <h4><a href="#" className="ml-3"><i className="fab fa-google-plus bg-danger text-light rounded"></i></a></h4>&nbsp;&nbsp;&nbsp;
                <h4></h4><a href="#" className="ml-3"><i className="fab fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;
                <h4><a href="#" className="ml-3"><i className="fab fa-youtube bg-danger text-light rounded"></i></a></h4>
              </div>
            </div>
            <div className="col-lg-3">
              <h5><u>Legal Services</u></h5>
              <p>
                <Link to="#" className="deco-none"><i className="fas fa-hammer"></i> Legal Help Online</Link>
              </p>
              <p>
                <Link to="#" className="deco-none"><i className="fas fa-user-shield"></i> Civilian Rights</Link>
              </p>
              <p>
                <Link to="#" className="deco-none"><i className="fas fa-hammer"></i> Civil Litigation</Link>
              </p>
              <p>
                <Link to="#" className="deco-none"><i className="fas fa-people-carry"></i> Divorce Law</Link>
              </p>
            </div>
            <div className="col-lg-3">
              <h5><u>Legal Documents</u></h5>
              <p>
                <a href="#" className="deco-none"><i className="fas fa-book-open"></i> Guardianship Documents</a>
              </p>
              <p>
                <a href="#" className="deco-none"><i className="fas fa-book-open"></i> Health Care Power of Attorney</a>
              </p>
              <p>
                <a href="#" className="deco-none"><i className="fas fa-book-open"></i> Financial Power of Attorney</a>
              </p>
              <p>
                <a href="#" className="deco-none"><i className="fas fa-book-open"></i> Living Will</a>
              </p>
            </div>
            <div className="col-lg-3">
              <h5><u>Conatct Us</u></h5>
              <p className="mt-2">
                <p>
                  <Link className="stretched-link" to="/about">
                    </Link>
                    <i className="fas fa-question"></i> 
                      &nbsp; About Us
                </p>
              </p>
              <p>
                <a href="tel:+256784414719" className="deco-none"><i className="fas fa-phone-alt text-info"></i> +256 784 414 719</a>
              </p>
              <p>
                <a href="tel:+256706142727" className="deco-none"><i className="fas fa-phone-alt text-info"></i> +256 706 142 727</a>
              </p>
              <p>
                <a href="https://wa.me/+256784414719" className="deco-none"> <i className="fab fa-whatsapp text-success"></i> WhatsApp</a>
              </p>
              <p>
                <a href="mailto:legalhelponline@gmail.com" className="deco-none">
                  Gmail: legalhelponline@gmail.com</a>
              </p>
            </div>
          </div>
       </div>

       <div className="text-light">
          <div className="container">
            <p>Copyright &copy; {Year} - {nextYear}, All Rights Reserved.</p>
          </div>
       </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
