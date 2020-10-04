import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";
import { StudentContext } from "../../context/StudentContext";

let timeTableDB = [];
const TimeTable = () => {
  const { student } = useContext(StudentContext);
  // console.log(student["Time Table"]);
  Object.entries(student["Time Table"]).map((time) => {
    timeTableDB.push([
      time[0],
      time[1].Mon,
      time[1].Tue,
      time[1].Wed,
      time[1].Thur,
      time[1].Fri,
      time[1].Sat,
    ]);
  });
  timeTableDB.sort();
  // console.log(timeTableDB);
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
              tableData={timeTableDB}
            />
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default TimeTable;
