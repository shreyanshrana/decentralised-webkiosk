import React from "react";
import { Switch, Route } from "react-router-dom";
import FeePayment from "./pages/FeePayment";
import Dashboard from "./pages/Dashboard";
import FeeReceipt from "./pages/FeeReceipt";
import ExamMarks from "./pages/ExamMarks";
import ExamGrades from "./pages/ExamGrades";
import CGPA from "./pages/CGPA";
import SRS from "./pages/SRS";
import PrevSRS from "./pages/PrevSRS";
import TimeTable from "./pages/TimeTable";
import ExamSchedule from "./pages/ExamSchedule";
import HostelAllotment from "./pages/HostelAllotment";
import StudentInfo from "./pages/StudentInfo";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/pay-fee" component={FeePayment} />
      <Route path="/fee-receipt" component={FeeReceipt} />
      <Route path="/exam-marks" component={ExamMarks} />
      <Route path="/exam-grades" component={ExamGrades} />
      <Route path="/cgpa" component={CGPA} />
      <Route path="/fill-srs" component={SRS} />
      <Route path="/previous-srs" component={PrevSRS} />
      <Route path="/time-table" component={TimeTable} />
      <Route path="/exam-schedule" component={ExamSchedule} />
      <Route path="/hostel-allotment" component={HostelAllotment} />
      <Route path="/student-info" component={StudentInfo} />
    </Switch>
  );
};

export default Routes;
