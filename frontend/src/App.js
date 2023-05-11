import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "./components/layout/Header1";
import Header2 from "./components/layout/Header2";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Login from "./components/user/Login";
import AboutUs from "./components/AboutUs";
import LegalHelpBot from "./components/LegalHelpBot";

import Dashboard from "./components/user/Dashboard";
import NewBlog from "./components/user/NewBlog";
import BlogList from "./components/user/BlogList";
import Blogs from "./components/blog/Blogs";
import BlogDetails from "./components/blog/BlogDetails";
import BlogsPage from "./components/BlogsPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Header1 />
        <Header2 />
        <div className="container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutUs} exact />

          <Route path="/login" component={Login} exact />

          <LegalHelpBot />
        </div>

        <div className="mt-1">
          <Route path="/dashboard" isAdmin={true} component={Dashboard} exact />
        </div>

        <Route path="/blog/new" component={NewBlog} exact />
        <Route path="/blog/articles" component={BlogList} exact />
        <Route path="/blogs" component={Blogs} exact />
        <Route path="/blog/:id" component={BlogDetails} exact />
        <Route path="/blog/articles/all" component={BlogsPage} exact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
