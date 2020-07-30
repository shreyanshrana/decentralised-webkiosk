import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import FeePayment from "./pages/Student/FeePayment";
import Dashboard from "./pages/Student/Dashboard";
import FeeReceipt from "./pages/Student/FeeReceipt";
import ExamMarks from "./pages/Student/ExamMarks";
import ExamGrades from "./pages/Student/ExamGrades";
import CGPA from "./pages/Student/CGPA";
import SRS from "./pages/Student/SRS";
import PrevSRS from "./pages/Student/PrevSRS";
import TimeTable from "./pages/Student/TimeTable";
import ExamSchedule from "./pages/Student/ExamSchedule";
import HostelAllotment from "./pages/Student/HostelAllotment";
import StudentInfo from "./pages/Student/StudentInfo";

//Teachers

import { UserContext } from "./context/UserContext";
import TeachersDashboard from "./pages/Teacher/TeachersDashboard";
import AcademicRecords from "./pages/Teacher/AcademicRecords";
import SRSDetails from "./pages/Teacher/SRSDetails";

const Routes = () => {
  const { userType } = useContext(UserContext);

  return userType === "student" ? (
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
  ) : userType === "teacher" ? (
    <Switch>
      <Route exact path="/" component={TeachersDashboard} />
      <Route path="/srs-details" component={SRSDetails} />
      <Route path="/academic-records" component={AcademicRecords} />
    </Switch>
  ) : (
    <h1>Access Denied</h1>
  );
};

export default Routes;
