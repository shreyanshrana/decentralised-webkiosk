import React from "react";
import { Grid } from "semantic-ui-react";
import { KioskTable } from "../Components/KioskTable/KioskTable";

const FeeReceipt = () => {
  return (
    <React.Fragment>
      <Grid style={{ height: "94%" }}>
        <Grid.Row
          style={{
            height: "15%",
            textAlign: "center",
          }}
        >
          <h1 style={{ width: "100%" }} className="perfectly-center">
            1920EVENSEM
          </h1>
        </Grid.Row>
        <Grid.Row style={{ height: "85%" }}>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <KioskTable
              tableTitle="Pay Fee Online"
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
