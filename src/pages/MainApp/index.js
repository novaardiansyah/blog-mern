import React from "react";
import Home from "../Home";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import { Footer, Header } from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainApp = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-blog" component={CreateBlog} />
          <Route path="/detail-blog" component={DetailBlog} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default MainApp;
