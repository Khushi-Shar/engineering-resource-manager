import React from "react";
import Dashboard from "../layouts/Dashboard/Dashboard.jsx";
import LoginView from "../views/Login/LoginForm/Login.view.js";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return <div> hi</div>;
};
const RouteComponent = () => (
  <Switch>
    <Route path={"/login"} component={LoginView} />
    <Route path={"/"} component={Dashboard} />
  </Switch>
);
export default RouteComponent;
