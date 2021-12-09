import React, { Fragment, useEffect } from "react";


import MetaData from "../layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../actions/blogActions";
import { useAlert } from "react-alert"; 
import Blog from "./Blog"; 
import Loader from "../layout/Loader";

const Blogs = ({match}) => {
 
  const alert = useAlert();

  const dispatch = useDispatch();

  const { loading, articles, error} = useSelector(
    (state) => state.blog );


  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getBlogs());

  }, [dispatch, alert, error]);



  return (
    <Fragment>
      {/* <Carousel/> */}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Blogs"} />
    
        <h2 id="products_heading">Blogs</h2>
        <hr/>
         
                    <div className="col-8 col-md-9" >
                      <div className="row ">
                        {articles && articles.map((article) => (
                  <Blog key={article._id} article={article} col={6} />
                ))}
                      </div>
                    </div>
                  </Fragment>
               
      )}
           
    
    </Fragment>
  );
};

export default Blogs;
