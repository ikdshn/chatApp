import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";
import LoggedInRoute from "./LoggedInRoute";

const App = () => {
  return (
    <Router>
      <LoggedInRoute exact path="/" component={Room} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Router>
  );
};

export default App;
