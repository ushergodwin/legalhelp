import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import SideBar from "../user/Sidebar";

import {useDispatch, useSelector} from "react-redux";

import {getBlogs} from "../../actions/blogActions"


const Dashboard = () => {
  const dispatch = useDispatch()

  const {articles,loading} = useSelector(state => state.blog)


  useEffect(() => {
    dispatch(getBlogs())
  
  },[dispatch])

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <SideBar />
        </div>

        <div className="col-12 col-md-10">
          <h1 className="my-4">Dashboard</h1>

          {loading ? <Loader/> : (
            <Fragment>
              <MetaData title={"Admin Dashboard"}/>

              <div className="row pr-4">
            <div className="col-xl-12 col-sm-12 mb-3">
              <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                  <div className="text-center card-font-size">
                    <h2>Blogs</h2>
                    <br /> <b>Number of Blogs: {articles && articles.length}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>

         

            </Fragment>
          )}

         
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
