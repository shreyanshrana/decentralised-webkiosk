import React from "react";
import Info from "../Components/Info/Info";
import MPWidget from "../Components/MarksPrevWdgt/MarksPrevWdgt";
import { Grid } from "semantic-ui-react";
import AttendancePreview from "../Components/AttendancePreview/AttendancePreview";

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
          <Grid.Row style={{ padding: "15px", paddingBottom: "0" }}>
            <Grid.Column width="6" style={{ paddingLeft: "0" }}>
              <AttendancePreview present="10" total="20" />
            </Grid.Column>
            <Grid.Column width="10" style={{ paddingRight: "0" }}>
              <MPWidget />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
