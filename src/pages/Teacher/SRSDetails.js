import React, { useState, useContext } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";
import { TeacherContext } from "../../context/TeacherContext";

let AcademicSessions = [];

let tableVal = [];
const SRSDetails = () => {
  const { teacher } = useContext(TeacherContext);
  // console.log(teacher["SRS"]);
  AcademicSessions = [];
  Object.entries(teacher["SRS"]).map((year) => {
    AcademicSessions.push({
      key: year[0],
      text: year[0],
      value: year[0],
    });
  });
  // console.log(AcademicSessions);
  const [session, setSession] = useState("1920EVENSEM-EST");
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
            {session}
          </h1>
        </Grid.Row>
        <Grid.Row
          className="perfectly-center"
          style={{
            height: "10%",
          }}
        >
          <Dropdown
            placeholder="Select SRS Event"
            //   fluid
            selection
            options={AcademicSessions}
            onChange={(event, data) => {
              setSession(data.value);
              let temp = data.value;
              tableVal = [];
              Object.entries(teacher["SRS"][data.value]).map((batch) => {
                tableVal.push(["1", batch[0], batch[1]]);
                // console.log(batch);
              });
              // tableVal = table[0][temp];
            }}
            // onClick={() => {
            //   console.log(AcademicSessions);
            // }}
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <KioskTable
              tableTitle=""
              tableColWidth={[3, 9, 4]}
              tableHead={["S.No.", "Batch", "Score"]}
              tableData={tableVal}
            />
          </Grid.Column>
          <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
        <Grid.Row />
        <Grid.Row />
      </Grid>
    </React.Fragment>
  );
};

export default SRSDetails;
