import "./Header.scss";

import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { NavContext } from "../../context/NavContext";

const Header = () => {
  const { activeItem } = useContext(NavContext);

  let title = "";
  switch (activeItem) {
    case "dashboard":
      title = "Dashboard";
      break;
    case "fill-srs":
      title = "Fill SRS";
      break;
    case "previous-srs":
      title = "See Previous SRS";
      break;
    case "pay-fee":
      title = "Pay Fee Online";
      break;
    case "fee-receipt":
      title = "Previous Fee Receipt";
      break;
    case "srs":
      title = "SRS Section";
      break;
    case "fee":
      title = "Fee Section";
      break;
    case "marks":
      title = "Academics";
      break;
    case "exam-marks":
      title = "Exam Marks";
      break;
    case "exam-grades":
      title = "Exam Grades";
      break;
    case "cgpa":
      title = "CGPA/SGPA";
      break;
    case "time-table":
      title = "Time Table";
      break;
    case "hostel-allotment":
      title = "Hostel Allotment";
      break;
    case "student-info":
      title = "Student's Info";
      break;
    default:
      title = activeItem;
  }

  return (
    <div className="Header">
      {title}
      <Icon name="bell" />
    </div>
  );
};

export default Header;
