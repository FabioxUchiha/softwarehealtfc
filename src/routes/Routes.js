import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import { Dashboard } from "../views/dashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/softwarehealtfc">
          <App />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <h1>pagina no encontrada</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
