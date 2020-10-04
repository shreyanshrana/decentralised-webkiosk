import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";
import { StudentContext } from "../../context/StudentContext";

let examDB = [];
const ExamSchedule = () => {
  const { student } = useContext(StudentContext);
  console.log(student["Exam Schedule"]);
  Object.entries(student["Exam Schedule"]).map((exam) => {
    examDB.push([
      exam[0],
      exam[1].Date,
      exam[1].Time,
      exam[1].Subject,
      exam[1].Room,
    ]);
    // console.log(exam);
  });
  examDB.sort();
  console.log(examDB);
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row
          style={{
            height: "15%",
            textAlign: "center",
          }}
        >
          <h1 style={{ width: "100%" }} className="perfectly-center">
            2021ODDSEM
          </h1>
        </Grid.Row>
        <Grid.Row />
        <Grid.Row>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="14">
            <KioskTable
              tableTitle="Exam Schedule"
              tableColWidth={[2, 3, 2, 7, 2]}
              tableHead={["S.No.", "Date", "Time", "Subject", "Room"]}
              tableData={examDB}
            />
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default ExamSchedule;
