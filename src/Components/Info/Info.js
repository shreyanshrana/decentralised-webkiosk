import React from "react";
import { Grid } from "semantic-ui-react";
import "./Info.scss";

const Info = (props) => {
  return (
    <div className="InfoWidget">
      <Grid>
        <Grid.Row className="InfoWidget__Name">
          <Grid.Column width="sixteen">{props.name}</Grid.Column>
        </Grid.Row>
        <Grid.Row className="perfectly-center">
          <div className="InfoWidget__Rectangle " />
        </Grid.Row>
        <Grid.Row className="perfectly-center InfoWidget__Labels">
          <Grid.Column width="3">Enrollment Number</Grid.Column>
          <Grid.Column width="3">Enrollment Email</Grid.Column>
          <Grid.Column width="3">Graduation Degree</Grid.Column>
          <Grid.Column width="3">Choice of Major</Grid.Column>
          <Grid.Column width="3">Graduation Year</Grid.Column>
        </Grid.Row>

        <Grid.Row className="perfectly-center InfoWidget__Details">
          <Grid.Column width="3">{props.rollno}</Grid.Column>
          <Grid.Column width="3">{props.email}</Grid.Column>
          <Grid.Column width="3">{props.degree}</Grid.Column>
          <Grid.Column width="3">{props.branch}</Grid.Column>
          <Grid.Column width="3">{props.year}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Info;
