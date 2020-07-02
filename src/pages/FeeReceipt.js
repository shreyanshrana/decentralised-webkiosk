import React, { useState } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import { KioskTable } from "../Components/KioskTable/KioskTable";

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
const FeeReceipt = () => {
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
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <KioskTable
              tableTitle="Fee Receipt"
              tableHead={["S.No.", "Section", "Fee"]}
              tableData={[
                ["1", "Academic", "1000"],
                ["2", "Academic", "1000"],
                ["3", "Academic", "1000"],
                ["4", "Academic", "1000"],
                ["5", "Ninja Skillz", "69"],
              ]}
              tableButton="Download as PDF"
            />
          </Grid.Column>
          <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default FeeReceipt;
