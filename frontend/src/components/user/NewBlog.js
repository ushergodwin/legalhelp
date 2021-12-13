import React, { Fragment, useState, useEffect } from "react";
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader'

import SideBar from "../user/Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

import { newBlog, clearErrors } from "../../actions/blogActions";

import { NEW_BLOG_RESET } from "../../constants/blogConstants";

const NewBlog = ({ history }) => {
  const [title, setTitle] = useState("");
  const [slung, setSlung] = useState('');
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [img_banner, setImg_banner] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);


  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.newBlog);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      history.push("/blog/articles");
      alert.success("Article Created Successfully");
      dispatch({ type: NEW_BLOG_RESET });
    }
  }, [dispatch, alert, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set("title", title);
    formData.set("slung", slung);
    formData.set("author", author);
    formData.set("content", content);
   
    img_banner.forEach((image) => {
      formData.append("images", image);
    });

    // var object = {}
    // formData.forEach((value, key)=> object[key] = value)
    // var json = object

    const data = {title,slung,author,content,img_banner};
 

    dispatch(newBlog(data));
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImgPreview([]);
    setImg_banner([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgPreview((oldArray) => [...oldArray, reader.result]);
          setImg_banner((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title={"New Blog"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <SideBar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5">
              <form className="shadow-lg" onSubmit={submitHandler} encType="application/json">
                <h1 className="mb-4">New Blog</h1>

                <div className="form-group">
                  <label htmlFor="name_field">Title</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price_field">Slung</label>
                  <input
                    type="text"
                    id="price_field"
                    className="form-control"
                    value={slung}
                    onChange={(e) => setSlung(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description_field">Content</label>
                  <textarea
                    className="form-control"
                    id="description_field"
                    rows="8"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>


                <div className="form-group">
                  <label htmlFor="seller_field">Author</label>
                  <input
                    type="text"
                    id="seller_field"
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Images</label>

                  <div className="custom-file">
                    <input
                      type="file"
                      name="product_images"
                      className="custom-file-input"
                      id="customFile"
                      onChange={onChange}
                      multiple
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Images
                    </label>
                  </div>

                  {imgPreview.map(img=>(
                      <img src={img}
                       className="mt-3 mr-2" 
                       key={img} alt="Images Preview" 
                       width="55" height="52"/>
                  ))}
                </div>

                    
            {loading ? (
              <Loader/>
            ): (
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={loading ? true : false}
                >
                  CREATE
                </button>
            )}
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default NewBlog;
