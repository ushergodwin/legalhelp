import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

// import ListReviews from '../reviews/ListReviews'

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetails, clearErrors } from "../../actions/blogActions";


// import {NEW_COMMENT_RESET} from "../../constants/productConstants";

const BlogDetails = ({ match }) => {
 
//   const [comment, setComment] = useState('')

  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, article } = useSelector( (state) => state.blogDetails);
 
//   const {error: commentError, success} = useSelector( (state) => state.newComment)

  useEffect(() => {
    dispatch(getBlogDetails(match.params.id));

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    // if (commentError) {
    //   alert.error(commentError);
    //   dispatch(clearErrors());
    // }

    // if(success){
    //     alert.success('Review posted Successfully');
    //     dispatch({type: NEW_COMMENT_RESET})
    // }
  }, [dispatch, alert, error, match.params.id]);


    // const commentHandler = () =>{
    //   const formData = new FormData();

    //   formData.set('rating', rating)
    //   formData.set('comment', comment)
    //   formData.set('blogId', match.params.id)
     
    //   dispatch(newComment(formData))
    // }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={article.title} />
          <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
              {/* //new bootstrap Component for carousel */}
              <Carousel pause="hover">
                {article.img_banner &&
                  article.img_banner.map((image) => (
                    <Carousel.Item
                      className="carousel-item"
                      key={image.public_id}
                    >
                      <img
                        className="d-block w-100"
                        src={image.url}
                        alt={article.title}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            <div className="col-12 col-lg-5 mt-5">
              <h3>{article.title}</h3>
              <p id="product_id">Article # {article._id}</p>

              <hr />

              <h4 className="mt-2">Content:</h4>
              <p>{article.content}</p>
              <hr />
              <p id="product_seller mb-3">
                Published By:  
                     <strong>{article.author}</strong>
              <hr/>
                Slung:  
                        <strong>{article.slung}</strong>
              </p>
              


              <div className="row mt-2 mb-5">
                <div className="rating w-50">
                  <div
                    className="modal fade"
                    id="ratingModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="ratingModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ratingModalLabel">
                            Submit Review
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                                              <textarea
                            name="review"
                            id="review"
                            className="form-control mt-3"
                            // value={comment}
                            // onChange={(e)=> setComment(e.target.value)}
                          ></textarea>

                          <button
                            className="btn my-3 float-right review-btn px-4 text-white"
                            // onClick={reviewHandler}
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {article.comment && article.comment.length > 0 && (
           <ListReviews reviews={article.comments}/>
          )} */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default BlogDetails;
