import React from "react";
import { Switch, Route } from "react-router-dom";
import FeePayment from "./pages/FeePayment";
import Dashboard from "./pages/Dashboard";
import FeeReceipt from "./pages/FeeReceipt";
import ExamMarks from "./pages/ExamMarks";
import ExamGrades from "./pages/ExamGrades";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/pay-fee" component={FeePayment} />
      <Route path="/fee-receipt" component={FeeReceipt} />
      <Route path="/exam-marks" component={ExamMarks} />
      <Route path="/exam-grades" component={ExamGrades} />
    </Switch>
  );
};

export default Routes;
