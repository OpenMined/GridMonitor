import React, { useEffect } from "react";
import "./App.css";
import Connect from "./routes/Connect";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./routes/Dashboard";
import { tryAutoConnect } from "./actions/monitor";

const App = ({ tryAutoConnect }) => {
  useEffect(() => {
    tryAutoConnect();
  });

  return (
    <Router basename="/GridMonitor">
      <Switch>
        <Route exact path="/">
          <Connect />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default connect(null, { tryAutoConnect })(App);
