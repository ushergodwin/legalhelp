import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
import Blogs from './blog/Blogs'
const BlogsPage = () => {
    return (
        <Fragment>
            <section className="container">
                <Blogs/>
            </section>
        </Fragment>
    )
}

export default BlogsPage