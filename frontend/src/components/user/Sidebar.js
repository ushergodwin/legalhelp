import React from 'react'

import {Link} from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="sidebar-wrapper" >
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link>
                    </li>
            
                    <li>
                        <a href="#blogSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Blogs</a>
                        <ul className="collapse list-unstyled" id="blogSubmenu">
                            <li>
                            <Link to="/blog/articles"><i className="fa fa-clipboard"></i> All</Link>
                            </li>
            
                            <li>
                            <Link to="/blog/new"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                </ul>
                </nav>
            </div>
    )
}

export default SideBar
