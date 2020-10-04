import "./Navbar.scss";

import React, { useContext } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { NavContext } from "../../context/NavContext";
import { UserContext } from "../../context/UserContext";

const Navbar = (props) => {
  // const [activeItem, setActiveItem] = useState("dashboard");
  const { activeItem, setActiveItem } = useContext(NavContext);
  const { userType, setUserType } = useContext(UserContext);

  return (
    <React.Fragment>
      {userType === "student" ? (
        <div className="Navbar">
          <div className="Navbar__Logo">
            <img src="./img/tiet_logo.svg" alt="Logo" />
            <h1>Thapar Institue of Engineering & Technology</h1>
          </div>
          <Menu vertical className="Navbar__Menu">
            <Menu.Item name="dashboard" active={activeItem === "dashboard"}>
              <Link to="/">
                <div
                  className="item"
                  onClick={() => setActiveItem("dashboard")}
                >
                  <Icon name="home" />
                  Dashboard
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              name="srs"
              active={
                activeItem === "fill-srs" ||
                activeItem === "previous-srs" ||
                activeItem === "srs"
              }
            >
              <div className="item" onClick={() => setActiveItem("srs")}>
                <Icon name="gavel" />
                SRS
              </div>
              {activeItem === "fill-srs" ||
              activeItem === "previous-srs" ||
              activeItem === "srs" ? (
                <Menu.Menu>
                  <Link to="/fill-srs">
                    <Menu.Item
                      name="fill-srs"
                      active={activeItem === "fill-srs"}
                      onClick={() => {
                        setActiveItem("fill-srs");
                      }}
                    >
                      Fill SRS
                    </Menu.Item>
                  </Link>
                  {/* <Link to="/previous-srs">
                    <Menu.Item
                      name="previous-srs"
                      active={activeItem === "previous-srs"}
                      onClick={() => {
                        setActiveItem("previous-srs");
                      }}
                    >
                      See Previous SRS
                    </Menu.Item>
                  </Link> */}
                </Menu.Menu>
              ) : (
                <React.Fragment />
              )}
            </Menu.Item>
            <Menu.Item
              name="fee"
              active={
                activeItem === "pay-fee" ||
                activeItem === "fee-receipt" ||
                activeItem === "fee"
              }
            >
              <div className="item" onClick={() => setActiveItem("fee")}>
                <Icon name="money bill alternatevel" />
                Fee Details
              </div>
              {activeItem === "pay-fee" ||
              activeItem === "fee-receipt" ||
              activeItem === "fee" ? (
                <Menu.Menu>
                  <Link to="pay-fee">
                    <Menu.Item
                      name="pay-fee"
                      active={activeItem === "pay-fee"}
                      onClick={() => {
                        setActiveItem("pay-fee");
                      }}
                    >
                      Pay Fee Online
                    </Menu.Item>
                  </Link>
                  <Link to="/fee-receipt">
                    <Menu.Item
                      name="fee-receipt"
                      active={activeItem === "fee-receipt"}
                      onClick={() => {
                        setActiveItem("fee-receipt");
                      }}
                    >
                      Previous Fee Receipt
                    </Menu.Item>
                  </Link>
                </Menu.Menu>
              ) : (
                <React.Fragment />
              )}
            </Menu.Item>
            <Menu.Item
              name="marks"
              active={
                activeItem === "time-table" ||
                activeItem === "exam-schedule" ||
                activeItem === "exam-marks" ||
                activeItem === "exam-grades" ||
                activeItem === "cgpa" ||
                activeItem === "marks"
              }
            >
              <div className="item" onClick={() => setActiveItem("marks")}>
                <Icon name="tasks" />
                Academics
              </div>
              {activeItem === "time-table" ||
              activeItem === "exam-schedule" ||
              activeItem === "exam-marks" ||
              activeItem === "exam-grades" ||
              activeItem === "cgpa" ||
              activeItem === "marks" ? (
                <Menu.Menu>
                  <Link to="/time-table">
                    <Menu.Item
                      name="time-table"
                      active={activeItem === "time-table"}
                      onClick={() => {
                        setActiveItem("time-table");
                      }}
                    >
                      Time Table
                    </Menu.Item>
                  </Link>
                  <Link to="/exam-schedule">
                    <Menu.Item
                      name="exam-schedule"
                      active={activeItem === "exam-schedule"}
                      onClick={() => {
                        setActiveItem("exam-schedule");
                      }}
                    >
                      Exam Schedule
                    </Menu.Item>
                  </Link>
                  <Link to="/exam-marks">
                    <Menu.Item
                      name="exam-marks"
                      active={activeItem === "exam-marks"}
                      onClick={() => {
                        setActiveItem("exam-marks");
                      }}
                    >
                      Exam Marks
                    </Menu.Item>
                  </Link>
                  <Link to="/exam-grades">
                    <Menu.Item
                      name="exam-grades"
                      active={activeItem === "exam-grades"}
                      onClick={() => {
                        setActiveItem("exam-grades");
                      }}
                    >
                      Exam Grades
                    </Menu.Item>
                  </Link>
                  <Link to="/cgpa">
                    <Menu.Item
                      name="cgpa"
                      active={activeItem === "cgpa"}
                      onClick={() => {
                        setActiveItem("cgpa");
                      }}
                    >
                      View CGPA/SGPA
                    </Menu.Item>
                  </Link>
                </Menu.Menu>
              ) : (
                <React.Fragment />
              )}
            </Menu.Item>
            <Menu.Item
              name="student"
              active={
                activeItem === "hostel-allotment" ||
                activeItem === "student" ||
                activeItem === "student-info"
              }
            >
              <div className="item" onClick={() => setActiveItem("student")}>
                <Icon name="id badge" />
                Student
              </div>
              {activeItem === "hostel-allotment" ||
              activeItem === "student" ||
              activeItem === "student-info" ? (
                <Menu.Menu>
                  <Link to="/hostel-allotment">
                    <Menu.Item
                      name="hostel-allotment"
                      active={activeItem === "hostel-allotment"}
                      onClick={() => {
                        setActiveItem("hostel-allotment");
                      }}
                    >
                      Hostel Allotment
                    </Menu.Item>
                  </Link>
                  <Link to="/student-info">
                    <Menu.Item
                      name="student-info"
                      active={activeItem === "student-info"}
                      onClick={() => {
                        setActiveItem("student-info");
                      }}
                    >
                      Student's Info
                    </Menu.Item>
                  </Link>
                </Menu.Menu>
              ) : (
                <React.Fragment />
              )}
            </Menu.Item>
          </Menu>
          <div
            style={{ cursor: "pointer" }}
            className="Navbar__Logout"
            onClick={() => {
              setUserType("new");
            }}
          >
            <Icon name="power" />
            Logout
          </div>
        </div>
      ) : userType === "teacher" ? (
        <div className="Navbar">
          <div className="Navbar__Logo">
            <img src="./img/tiet_logo.svg" alt="Logo" />
            <h1>Thapar Institue of Engineering & Technology</h1>
          </div>
          <Menu vertical className="Navbar__Menu">
            <Menu.Item name="dashboard" active={activeItem === "dashboard"}>
              <Link to="/">
                <div
                  className="item"
                  onClick={() => setActiveItem("dashboard")}
                >
                  <Icon name="home" />
                  Dashboard
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item name="srs-details" active={activeItem === "srs-details"}>
              <Link to="/srs-details">
                <div
                  className="item"
                  onClick={() => setActiveItem("srs-details")}
                >
                  <Icon name="gavel" />
                  SRS Details
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              name="academic-records"
              active={activeItem === "academic-records"}
            >
              <Link to="/academic-records">
                <div
                  className="item"
                  onClick={() => setActiveItem("academic-records")}
                >
                  <Icon name="pencil alternate" />
                  Academic Records
                </div>
              </Link>
            </Menu.Item>
          </Menu>
          <div
            style={{ cursor: "pointer" }}
            className="Navbar__Logout"
            onClick={() => {
              setUserType("new");
            }}
          >
            <Icon name="power" />
            Logout
          </div>
        </div>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  );
};

export default Navbar;
