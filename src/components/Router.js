import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import Login from "./Login";
import Shopping from "./Shopping";
import Uplaod from "./Uplaod";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/Admin" component={Admin} />
      <Route path="/upload" component={Uplaod} />
      <Route path="/shop" component={Shopping} />
    </Switch>
  </BrowserRouter>
);

export default Router;
