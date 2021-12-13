import React from "react";
import {Link} from 'react-router-dom'

const Blog = ({ article, col }) => {
  return (
  
    <div className={`col-xs-6 col-sm-4 col-md-3 col-lg-2 ${col} my-3`}>
      <div key={article._id} className="pdt-card px-2">
        <Link  to={`/blog/${article._id}`}>
        <img
          className="card-img-top mx-auto"
          src={article && article.img_banner[0].url}
          alt=""
        />
        </Link> 
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/blog/${article._id}`} >{article.title}</Link>
          </h5>
        
          <Link to={`/blog/${article._id}`} id="view_btn" className="pdt-details btn btn-block">
            View Blog
          </Link>
        </div>
      </div>
    </div>
    
   
  );
};

export default Blog;
