import React from "react";
import Info from "../Components/Info/Info";
import { Grid } from "semantic-ui-react";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div style={{ height: "94%" }}>
        <Grid>
          <Grid.Row style={{ padding: "20px 25px" }}>
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
            <Grid.Column width="1"></Grid.Column>
            <Grid.Column width="14"></Grid.Column>
            <Grid.Column width="1"></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
