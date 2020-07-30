import React, { useState } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";

const AcademicSessions = [
  {
    key: "1920ODDSEM-MST",
    text: "1920ODDSEM-MST",
    value: "1920ODDSEM-MST",
  },
  {
    key: "1920ODDSEM-EST",
    text: "1920ODDSEM-EST",
    value: "1920ODDSEM-EST",
  },

  {
    key: "1920EVENSEM-MST",
    text: "1920EVENSEM-MST",
    value: "1920EVENSEM-MST",
  },
  {
    key: "1920EVENSEM-EST",
    text: "1920EVENSEM-EST",
    value: "1920EVENSEM-EST",
  },
];

let table = [
  {
    "1920EVENSEM-EST": [
      ["1", "Software Engineering", "5", "-", "5", "5"],
      ["2", "Computer Networks", "5", "-", "5", "5"],
      ["3", "Computer Architecture & Organisation", "5", "-", "5", "5"],
    ],
    "1920EVENSEM-MST": [
      ["1", "Software Engineering", "5", "-", "4", "4.5"],
      ["2", "Computer Networks", "5", "-", "5", "5"],
      ["3", "Computer Architecture & Organisation", "5", "-", "5", "5"],
    ],
    "1920ODDSEM-EST": [
      ["1", "Software Engineering", "5", "-", "5", "5"],
      ["2", "Artificial Intelligence", "5", "-", "5", "5"],
      ["3", "Microprocessors", "5", "-", "5", "5"],
      ["4", "Advanced Software Engineering", "-", "-", "4", "4"],
    ],
    "1920ODDSEM-MST": [
      ["1", "Software Engineering", "5", "-", "5", "5"],
      ["2", "Artificial Intelligence", "5", "-", "5", "5"],
      ["3", "Microprocessors", "5", "-", "5", "5"],
      ["4", "Advanced Software Engineering", "-", "-", "5", "5"],
    ],
  },
];

let tableVal = [
  ["1", "Software Engineering", "5", "-", "5", "5"],
  ["2", "Computer Networks", "5", "-", "5", "5"],
  ["3", "Computer Architecture & Organisation", "5", "-", "5", "5"],
];
const SRSDetails = () => {
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
              //   console.log(temp);
              //   console.log(table[0]);
              //   console.log(table[0][temp]);
              tableVal = table[0][temp];
            }}
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <KioskTable
              tableTitle=""
              tableColWidth={[1, 6, 2, 2, 2, 3]}
              tableHead={["S.No.", "Subject", "L", "T", "P", "LTP"]}
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
