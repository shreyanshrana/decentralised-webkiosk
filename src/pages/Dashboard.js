import React from "react";
import Info from "../Components/Info/Info";
import MPWidget from "../Components/MarksPrevWdgt/MarksPrevWdgt";
import { Grid } from "semantic-ui-react";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div style={{ height: "94%" }}>
        <Grid>
          <Grid.Row style={{ padding: "15px", paddingBottom: "0" }}>
            {/* <Grid.Column width="1"></Grid.Column>
            <Grid.Column width="14"> */}
            <Info
              name="Shreyansh Rana"
              rollno="101703524"
              degree="Bachelor of Technology"
              branch="COE"
              year="2021"
              email="shreyanshrana@gmail.com"
            />
            {/* </Grid.Column>
            <Grid.Column width="1"></Grid.Column> */}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column
              width="8"
              style={{ padding: "15px", paddingBottom: "0" }}
            >
              <MPWidget />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
