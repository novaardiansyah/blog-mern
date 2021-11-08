import React from "react";
import Home from "../Home";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainApp = () => {
  return (
    <div>
      <p>Header</p>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-blog" component={CreateBlog} />
          <Route path="/detail-blog" component={DetailBlog} />
        </Switch>
      </Router>
      <p>Footer</p>
    </div>
  );
};

export default MainApp;
