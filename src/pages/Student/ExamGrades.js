import React, { useState, useContext } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";
import { StudentContext } from "../../context/StudentContext";

let AcademicSessions = [];
const ExamGrades = () => {
  const { student } = useContext(StudentContext);
  const [tableDB, setTableDB] = useState([]);
  const [session, setSession] = useState("1920EVENSEM");
  AcademicSessions = [];
  Object.entries(student["Marks"]).map((year) => {
    // console.log(year[0]);
    AcademicSessions.push({
      key: year[0],
      text: year[0],
      value: year[0],
    });
  });
  AcademicSessions.sort();
  console.log(AcademicSessions);
  return (
    <React.Fragment>
      <Grid style={{ height: "94%" }}>
        <Grid.Row
          style={{
            height: "10%",
            textAlign: "center",
          }}
        >
          <h1 style={{ width: "100%" }} className="perfectly-center">
            {session}
          </h1>
        </Grid.Row>
        <Grid.Row className="perfectly-center">
          <Dropdown
            placeholder="Select Academic Session"
            //   fluid
            selection
            options={AcademicSessions}
            onChange={(event, data) => {
              setSession(data.value);
              let sem = data.value;
              const courses = student.Marks[sem];
              let tableVal = [];
              // console.log(courses);
              // console.log(Object.entries(courses));
              Object.entries(courses).forEach((course) => {
                console.log(course);
                tableVal.push([course[0], course[1].Name, course[1].Grade]);
              });
              console.log(tableVal);
              setTableDB(tableVal);
            }}
          />
        </Grid.Row>
        <Grid.Row style={{ height: "85%" }}>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="14">
            <KioskTable
              tableTitle="Your Performance"
              tableColWidth={[4, 8, 4]}
              tableHead={["Course Code", "Course Name", "Grade Obtained"]}
              tableData={tableDB}
            />
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default ExamGrades;
