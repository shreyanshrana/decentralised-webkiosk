import React from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../Components/KioskTable/KioskTable";

const ExamSchedule = () => {
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
              tableData={[
                [
                  "1",
                  "29-08-2020",
                  "10:00 AM",
                  "Computer Architecture",
                  "A 808",
                ],

                [
                  "2",
                  "30-08-2020",
                  "10:00 AM",
                  "Artificial Intelligence",
                  "A 908",
                ],

                ["3", "02-09-2020", "01:00 PM", "Matrix Computation", "A 808"],

                [
                  "4",
                  "09-08-2020",
                  "10:00 AM",
                  "Financial Mathematics",
                  "A 808",
                ],

                ["5", "12-08-2020", "10:00 AM", "Computer Networks", "A 808"],
              ]}
            />
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default ExamSchedule;
