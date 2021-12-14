import{
    ADMIN_BLOG_REQUEST,
    ADMIN_BLOG_SUCCESS,
    ADMIN_BLOG_FAIL,
    NEW_BLOG_REQUEST,
    NEW_BLOG_SUCCESS,
    NEW_BLOG_FAIL,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/blogConstants'

import axios from 'axios'

export const getBlogs = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_BLOG_REQUEST });
  
      const { data } = await axios.get(`/api/v1/blog/articles`);
  
      dispatch({
        type: ADMIN_BLOG_SUCCESS,
        payload: data.articles,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_BLOG_FAIL,
        payload: error
      });
    }
  };

  export const newBlog = (blogData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_BLOG_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/api/v1/blog/new",
        blogData,
        config
      );
  
      dispatch({
        type: NEW_BLOG_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_BLOG_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getBlogDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: BLOG_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/blog/${id}`);
  
      dispatch({
        type: BLOG_DETAILS_SUCCESS,
        payload: data.article,
      });
    } catch (error) {
      dispatch({
        type: BLOG_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  