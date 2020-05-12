import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeeSection from "./pages/FeeSection";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/fee-section" component={FeeSection} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
