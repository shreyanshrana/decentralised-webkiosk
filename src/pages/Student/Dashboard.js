import React, { useContext } from "react";
import Info from "../../Components/Info/Info";
import MPWidget from "../../Components/MarksPrevWdgt/MarksPrevWdgt";
import { Grid } from "semantic-ui-react";
import AttendancePreview from "../../Components/AttendancePreview/AttendancePreview";
import { StudentContext } from "../../context/StudentContext";

const Dashboard = () => {
  const { student } = useContext(StudentContext);

  console.log(student);

  return (
    <React.Fragment>
      <div style={{ height: "94%" }}>
        <Grid>
          <Grid.Row style={{ padding: "15px", paddingBottom: "0" }}>
            {/* <Grid.Column width="1"></Grid.Column>
            <Grid.Column width="14"> */}
            <Info
              name={student.Name}
              rollno={student.RollNo}
              degree={student.Degree}
              branch={student.Branch}
              year={student.Year}
              email={student.Email}
            />
            {/* </Grid.Column>
            <Grid.Column width="1"></Grid.Column> */}
          </Grid.Row>
          <Grid.Row style={{ padding: "15px", paddingBottom: "0" }}>
            <Grid.Column width="6" style={{ paddingLeft: "0" }}>
              <AttendancePreview
                present={student["Classes Present"]}
                total={student["Total Classes"]}
              />
            </Grid.Column>
            <Grid.Column width="10" style={{ paddingRight: "0" }}>
              <MPWidget />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
