import React from "react";
import { Link } from "react-router-dom";
import { BlogItem } from "../../components";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-end mt-3">
        <div className="col-md-6 col-lg-4 text-end">
          <Link to="/create-blog" className="btn btn-success">
            create blog
          </Link>
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-md-6 col-lg-4 mb-3">
          <BlogItem />
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <BlogItem />
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <BlogItem />
        </div>
      </div>
    </div>
  );
};

export default Home;
