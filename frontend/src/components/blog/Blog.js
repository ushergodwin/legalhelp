import React from "react";
import {Link} from 'react-router-dom'

const Blog = ({ article, col }) => {
  console.log(article)
  return (
  //{article && article.img_banner[0].url}
    <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-4 ${col} my-3`} id="blog">
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
            {article.title}
          </h5>
        
          <div className="card-footer nav-bg">
            <Link to={`/blog/${article._id}`} id="view_btn" className="pdt-details btn btn-block stretched-link">
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </div>
    
   
  );
};

export default Blog;
