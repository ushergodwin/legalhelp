import React, { Fragment } from 'react'

// import { Link} from 'react-router-dom'

const Header2 = () => {
    return (
        <Fragment>
    <nav2 className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
            LegalHelp Online
        </div>
      </div>
    

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <span id="blog" className="ml-3">Blog</span>
        <span id="blog" className="ml-3">About</span>
        <span id="blog" className="ml-3">Legal Documents</span>
        <span id="blog" className="ml-3">Legal Services</span>
        <buthrefn className="btn" id="donate_btn"><i class="fas fa-donate"></i> DONATE FOR JUSTICE</buthrefn>


      </div>
    </nav2>

    

        </Fragment>
    )
}

export default Header2
