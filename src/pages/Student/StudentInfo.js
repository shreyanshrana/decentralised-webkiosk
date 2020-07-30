import React from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";

const StudentInfo = () => {
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
                ["Name  ", "Shreyansh Rana"],
                ["Enrollment Number  ", "101703524"],
                ["Email ID  ", "srana_be17@thapar.edu"],
                ["Mobile Number  ", "8146547717"],

                ["Scholarships (if any)  ", "None"],
                ["Current CGPA", "7.69"],
                ["Name  ", "Shreyansh Rana"],
                [
                  "Awards and Achievements  ",
                  "Ninja Coding (Winner); SIH 2019 (Finalist)",
                ],
                [
                  "Previous Academic Performances  ",
                  "10th (95%); 12th (88.8%)",
                ],
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
