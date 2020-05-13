import React from "react";
import { Switch, Route } from "react-router-dom";
import FeeSection from "./pages/FeeSection";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/fee-section" component={FeeSection} />
    </Switch>
  );
};

export default Routes;
