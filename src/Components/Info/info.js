import React from "react";
import { Grid, Image, GridColumn } from "semantic-ui-react";
import { useState } from "react";

const Info = (props) => {
  const [rollno, setRollno] = useState(props.rollno);
  const [name, setName] = useState(props.name);
  const [degree, setDegree] = useState(props.degree);
  const [branch, setBranch] = useState(props.branch);
  const [email, setEmail] = useState(props.email);
  const [gradyear, setGradyear] = useState(props.year);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="sixteen">
          <h3>{name}</h3>
        </Grid.Column>
      </Grid.Row>
      <div className="labels">
        <Grid.Row>
          <Grid.Column width="4">Enrollment Number</Grid.Column>
          <Grid.Column width="4">Enrollment Email</Grid.Column>
          <Grid.Column width="4">Graduation Degree</Grid.Column>
          <Grid.Column width="4">Choice of Major</Grid.Column>
          <Grid.Column width="4">Graduation Year</Grid.Column>
        </Grid.Row>
      </div>
      <div className="details">
        <Grid.Row>
          <Grid.Column width="4">{rollno}</Grid.Column>
          <Grid.Column width="4">{email}</Grid.Column>
          <Grid.Column width="4">{degree}</Grid.Column>
          <Grid.Column width="4">{branch}</Grid.Column>
          <Grid.Column width="4">{gradyear}</Grid.Column>
        </Grid.Row>
      </div>
    </Grid>
  );
};

export default Info;
