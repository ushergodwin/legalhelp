import React, { Fragment } from 'react'
import { Link} from 'react-router-dom'

const Header2 = () => {
    return (
        <Fragment>
         <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id="nav2">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">LegalHelpOnline</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li> */}
                </ul>
                <ul className="navbar-nav d-flex justify-content-end">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Legal Services
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="#">Legal Help Online</Link></li>
                    <li><Link className="dropdown-item" to="#">Criminal Law</Link></li>
                    <li><Link className="dropdown-item" to="#">Civil Litigation</Link></li>
                    <li><Link className="dropdown-item" to="#">Divorce and Family</Link></li>
                    <li><Link className="dropdown-item" to="#">Land Matters / Property</Link></li>
                    <li><Link className="dropdown-item" to="#">Employment / Labour</Link></li>
                    <li><Link className="dropdown-item" to="#">Cyber Crime Law</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">See All</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Legal Documents
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Document 1</a></li>
                    <li><a className="dropdown-item" href="#">Document 2</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">All Document</a></li>
                  </ul>
                </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link btn btn-outline-light" 
                      href="javascript:void(0)" id="donate-btn"
                      title="Donate For Justice"
                      >
                         <i className="fas fa-donate"></i> Donate</a>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
        </Fragment>
    )
}

export default Header2
