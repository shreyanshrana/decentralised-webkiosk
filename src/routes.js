import React from "react";
import { Switch, Route } from "react-router-dom";
import FeePayment from "./pages/FeePayment";
import Dashboard from "./pages/Dashboard";
import FeeReceipt from "./pages/FeeReceipt";
import ExamMarks from "./pages/ExamMarks";
import ExamGrades from "./pages/ExamGrades";
import CGPA from "./pages/CGPA";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/pay-fee" component={FeePayment} />
      <Route path="/fee-receipt" component={FeeReceipt} />
      <Route path="/exam-marks" component={ExamMarks} />
      <Route path="/exam-grades" component={ExamGrades} />
      <Route path="/cgpa" component={CGPA} />
    </Switch>
  );
};

export default Routes;
