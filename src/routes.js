import React from "react";
import { Switch, Route } from "react-router-dom";
import FeePayment from "./pages/FeePayment";
import Dashboard from "./pages/Dashboard";
import FeeReceipt from "./pages/FeeReceipt";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/pay-fee" component={FeePayment} />
      <Route path="/fee-receipt" component={FeeReceipt} />
    </Switch>
  );
};

export default Routes;
