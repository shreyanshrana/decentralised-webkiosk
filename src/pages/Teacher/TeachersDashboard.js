import React from "react";
import { Grid } from "semantic-ui-react";

const TeachersDashboard = () => {
  return (
    <React.Fragment>
      <div style={{ height: "94%" }}>
        <Grid>
          <Grid.Row style={{ padding: "15px", paddingBottom: "0" }}>
            {/* <Grid.Column width="1"></Grid.Column>
            <Grid.Column width="14"> */}
            <Grid
              style={{
                boxShadow: "10px 0px 45px rgba($primary, 0.05)",
                background: "#eff2f9",
                padding: "10px",
              }}
            >
              <Grid.Row className="InfoWidget__Name">
                <Grid.Column width="sixteen">Dr. Inderveer Channa</Grid.Column>
              </Grid.Row>
              <Grid.Row className="perfectly-center">
                <div className="InfoWidget__Rectangle " />
              </Grid.Row>
              <Grid.Row className="perfectly-center InfoWidget__Labels">
                <Grid.Column width="3">Enrollment Number</Grid.Column>
                <Grid.Column width="3">Enrollment Email</Grid.Column>
                <Grid.Column width="3">Designation</Grid.Column>
                <Grid.Column width="3">Department</Grid.Column>
                <Grid.Column width="3">Working Since</Grid.Column>
              </Grid.Row>

              <Grid.Row className="perfectly-center InfoWidget__Details">
                <Grid.Column width="3">101010101</Grid.Column>
                <Grid.Column width="3">inderveer@thapar.edu</Grid.Column>
                <Grid.Column width="3">Dean of Student Affairs</Grid.Column>
                <Grid.Column width="3">Computer Science</Grid.Column>
                <Grid.Column width="3">2000</Grid.Column>
              </Grid.Row>
            </Grid>
            {/* </Grid.Column>
            <Grid.Column width="1"></Grid.Column> */}
          </Grid.Row>
          <Grid.Row style={{ padding: "15px", paddingBottom: "0" }}>
            {/* <Grid.Column width="1"></Grid.Column> */}
            <Grid.Column
              width="16"
              style={{
                boxShadow: "10px 0px 45px rgba($primary, 0.05)",
                background: "#eff2f9",
                padding: "20px",
              }}
            >
              <h3 style={{ padding: "0px", fontSize: "150%" }}>
                Notices & Announcements
              </h3>
              <Grid.Row className="">
                <div className="InfoWidget__Rectangle " />
              </Grid.Row>

              <Grid.Row style={{ paddingTop: "15px" }}>
                <h3>30-07-2020 | Meeting for Admissions for 2021 batch</h3>
                <p>
                  All respective department heads are requested to be present at
                  LP-101 for discussion of the admission for the new 2021 batch
                  of TIET.
                </p>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: "15px" }}>
                <h3>21-07-2020 | Capstone 2020 : Evaluation Dates Finalised</h3>
                <p>
                  All respective mentors are hereby notified that the Mid
                  Semester Evaluation of the Capstone for batch 2017 will take
                  place on 31st July. They are kindly requested to make sure
                  that their teams have succesfully completed their reports
                  before that.
                </p>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: "15px" }}>
                <h3>20-06-2020 | TIET ranks 31st in NIRF Rankings 2020</h3>
                <p>
                  Among the universities, TIET emerged as the best in Punjab
                  with 31st spot. Guru Nanak Dev University improved its ranking
                  by 8 notches to bag 51th position, while Punjabi University
                  made in list of top 100 universities for the first time by
                  bagging 64th place. Lovely Professional University is ranked
                  78th, while Central University, Bathinda, is at 87th position.
                </p>
              </Grid.Row>
            </Grid.Column>
            {/* <Grid.Column width="1"></Grid.Column> */}
          </Grid.Row>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default TeachersDashboard;
