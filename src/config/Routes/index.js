import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainApp, Login, Register } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainApp} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default Routes;
