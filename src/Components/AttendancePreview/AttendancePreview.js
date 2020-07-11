import "./AttendancePreview.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import { Grid, Button } from "semantic-ui-react";

const AttendancePreview = (props) => {
  return (
    <React.Fragment>
      <div className="AttendancePreview clearfix">
        <Grid>
          <Grid.Row className="MPWidget__recentMarks">
            <Grid.Column width="16">Attendance</Grid.Column>
          </Grid.Row>
          <Grid.Row className="perfectly-center">
            <div className="MPWidget__hrLine" />
          </Grid.Row>
          <Grid.Row className="perfectly-center">
            <div className="AttendancePreview__ProgressBar">
              <CircularProgressbar
                value={(100 * props.present) / props.total}
                text={`${((100 * props.present) / props.total).toFixed(0)}%`}
              />
            </div>
          </Grid.Row>
          <Grid.Row className="perfectly-center">
            <h3>
              Classes Attended = {props.present}/{props.total}
            </h3>
          </Grid.Row>
        </Grid>
        <Button className="MPWidget__button" primary floated="right" disabled>
          See Detailed
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AttendancePreview;
