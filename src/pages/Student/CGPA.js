import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";

const CGPA = () => {
  const [session] = useState("2021ODDSEM");
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
            Current Session : {session}
          </h1>
        </Grid.Row>
        <Grid.Row style={{ height: "85%" }}>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <KioskTable
              tableTitle="Overall CGPA/SGPA"
              tableColWidth={[2, 8, 3, 3]}
              tableHead={[
                "S.No.",
                "Academic Session",
                "SGPA Earned",
                "Overall CGPA",
              ]}
              tableData={[
                ["1", "1718ODDSEM", "8", "8"],
                ["2", "1718EVENSEM", "8", "8"],
                ["3", "1819ODDSEM", "8", "8"],
                ["4", "1819EVENSEM", "8", "8"],
                ["5", "1920ODDSEM", "8", "8"],
                ["6", "1920EVENSEM", "8", "8"],
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

export default CGPA;
