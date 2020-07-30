import React from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";

const TimeTable = () => {
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
            2021ODDSEM
          </h1>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="14">
            <KioskTable
              tableTitle="Semester Time Table"
              tableColWidth={[3, 2, 2, 2, 2, 2, 2]}
              tableHead={["Time", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]}
              tableData={[
                [
                  "8 AM",
                  "Computer Architecture (L) A-101",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "9 AM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "10 AM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "11 AM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "12 PM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "1 PM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "2 PM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "3 PM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "4 PM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
                [
                  "5 PM",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                  "Computer Architecture",
                ],
              ]}
            />
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default TimeTable;
