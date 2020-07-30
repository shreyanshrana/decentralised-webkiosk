import React, { useState } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";

const AcademicSessions = [
  {
    key: "1718ODDSEM",
    text: "1718ODDSEM",
    value: "1718ODDSEM",
  },
  {
    key: "1718EVENSEM",
    text: "1718EVENSEM",
    value: "1718EVENSEM",
  },
  {
    key: "1819ODDSEM",
    text: "1819ODDSEM",
    value: "1819ODDSEM",
  },
  {
    key: "1819EVENSEM",
    text: "1819EVENSEM",
    value: "1819EVENSEM",
  },

  {
    key: "1920ODDSEM",
    text: "1920ODDSEM",
    value: "1920ODDSEM",
  },
  {
    key: "1920EVENSEM",
    text: "1920EVENSEM",
    value: "1920EVENSEM",
  },
];
const ExamGrades = () => {
  const [session, setSession] = useState("1920EVENSEM");

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
            }}
          />
        </Grid.Row>
        <Grid.Row style={{ height: "85%" }}>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="14">
            <KioskTable
              tableTitle="Your Performance"
              tableColWidth={[1, 3, 6, 3, 3]}
              tableHead={[
                "S.No.",
                "Course Code",
                "Course Name",
                "Grade Obtained",
                "Credits",
              ]}
              tableData={[
                ["1", "UCS616", "Artificial Intelligence", "C", "4.5"],
                ["2", "UCS616", "Artificial Intelligence", "C", "4.5"],
                ["3", "UCS616", "Artificial Intelligence", "C", "4.5"],
                ["4", "UCS616", "Artificial Intelligence", "C", "4.5"],
                [
                  "5",
                  "UCS619",
                  "Computer Architecture & Organisation",
                  "D",
                  "4.5",
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

export default ExamGrades;
