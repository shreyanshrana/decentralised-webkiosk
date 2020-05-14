import React from "react";
import { Grid, Image, GridColumn } from "semantic-ui-react";
import { useState } from "react";
import "./info.scss";
const Info = (props) => {
  const [rollno, setRollno] = useState(props.rollno);
  const [name, setName] = useState(props.name);
  const [degree, setDegree] = useState(props.degree);
  const [branch, setBranch] = useState(props.branch);
  const [email, setEmail] = useState(props.email);
  const [gradyear, setGradyear] = useState(props.year);

  return (
    <div className="widget">
      <Grid>
        <Grid.Row className="Name">
          <Grid.Column width="sixteen">
            {name}
            <div id="rectangle"></div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="labels">
          <Grid.Column width="3">Enrollment Number</Grid.Column>
          <Grid.Column width="3">Enrollment Email</Grid.Column>
          <Grid.Column width="3">Graduation Degree</Grid.Column>
          <Grid.Column width="3">Choice of Major</Grid.Column>
          <Grid.Column width="3">Graduation Year</Grid.Column>
        </Grid.Row>

        <Grid.Row className="details">
          <Grid.Column width="3">{rollno}</Grid.Column>
          <Grid.Column width="3">{email}</Grid.Column>
          <Grid.Column width="3">{degree}</Grid.Column>
          <Grid.Column width="3">{branch}</Grid.Column>
          <Grid.Column width="3">{gradyear}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Info;
