import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddUser from "./AddUser";
import Login from "./Login";
import PaymentPage from "./PaymentPage";
import Shopping from "./Shopping";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/addUser" component={AddUser} />
      <Route path="/shop" component={Shopping} />
      <Route path="/pay" component={PaymentPage} />
    </Router>
  );
};

export default App;
