import React, { Fragment } from 'react'
import { Link} from 'react-router-dom'

const Header2 = () => {
    return (
        <Fragment>
         <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand app-brand" to="/">
              <img src={'imgs/logo.png'} alt="legal help online logo" height="50"
              className="rounded-circle"/>
                 &nbsp;LegalHelp<span className='d-lg'>Online</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
                </ul>
                <ul className="navbar-nav d-flex justify-content-end">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    LEGAL SERVICES
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="#">Free Legal Help Online</Link></li>
                    <li><Link className="dropdown-item" to="#">Criminal Law</Link></li>
                    <li><Link className="dropdown-item" to="#">Civil Litigation</Link></li>
                    <li><Link className="dropdown-item" to="#">Commercial Law</Link></li>
                    <li><Link className="dropdown-item" to="#">Land Matters / Property</Link></li>
                    <li><Link className="dropdown-item" to="#">Marriage / Divorce</Link></li>
                    <li><Link className="dropdown-item" to="#">Employment / Labour</Link></li>
                    <li><Link className="dropdown-item" to="#">Cyber Crime Law</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">See All</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    LEGAL DOCUMENTS
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Company Incorporation</a></li>
                    <li><a className="dropdown-item" href="#">Land Agreement</a></li>
                    <li><a className="dropdown-item" href="#">Caveats </a></li>
                    <li><a className="dropdown-item" href="#">Affidavits </a></li>
                    <li><a className="dropdown-item" href="#">Power of Attorney</a></li>
                    <li><a className="dropdown-item" href="#">Wills </a></li>
                    <li><a className="dropdown-item" href="#">Employment Contracts</a></li>
                    <li><a className="dropdown-item" href="#">Affidavits </a></li>
                    <li><a className="dropdown-item" href="#">Tenancy Agreement </a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">All Document</a></li>
                  </ul>
                </li>
                  <li className="nav-item">
                  <Link to="/blog/articles/all" class="nav-link">BLOG</Link>
                  </li>
                    <li className="nav-item">
                      <a className="nav-link btn btn-outline-light" 
                      href="https://ravesandbox.flutterwave.com/donate/dxh2adahc3vi" id="donate-btn"
                      title="Donate For Justice"
                      >
                         <i className="fas fa-heart text-danger"></i> DONATE FOR JUSTICE</a>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
        </Fragment>
    )
}

export default Header2
