import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";
import { StudentContext } from "../../context/StudentContext";

const StudentInfo = () => {
  const { student } = useContext(StudentContext);
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row
          style={{
            height: "10%",
            textAlign: "center",
          }}
        >
          <h1 style={{ width: "100%" }} className="perfectly-center">
            2021ODDSEM
          </h1>
        </Grid.Row>
        <Grid.Row className="perfectly-center">
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <KioskTable
              tableTitle="Student's Details"
              tableColWidth={[6, 6]}
              tableHead={["", ""]}
              tableData={[
                ["Name  ", student["Name"]],
                ["Enrollment Number  ", student["RollNo"]],
                ["Email ID  ", student["Email"]],
                ["Mobile Number  ", student["Mobile Number"]],

                ["Scholarships (if any)  ", student["Scholarships"]],
                ["Current CGPA", student["CGPA"]],
                ["Awards and Achievements  ", student["Awards"]],
                ["Class X Performance  ", student["Class X Performance"]],
                ["Class XII Performance  ", student["Class XII Performance"]],
              ]}
            />
          </Grid.Column>
          <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default StudentInfo;
