import "./MarksPrevWdgt.scss";

import React, { useContext } from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { NavContext } from "../../context/NavContext";

function Grow(props) {
  return (
    <Grid.Row className="MPWidget__colInfo perfectly-center">
      <Grid.Column width="4">{props.cc}</Grid.Column>
      <Grid.Column width="4">{props.et}</Grid.Column>
      <Grid.Column width="4">{props.mo}</Grid.Column>
      <Grid.Column width="4">{props.mm}</Grid.Column>
    </Grid.Row>
  );
}
function MPWdgt() {
  const { setActiveItem } = useContext(NavContext);

  return (
    <div className="MPWidget clearfix">
      <Grid>
        <Grid.Row className="MPWidget__recentMarks">
          <Grid.Column width="16">Recent Marks</Grid.Column>
        </Grid.Row>
        <Grid.Row className="perfectly-center">
          <div className="MPWidget__hrLine" />
        </Grid.Row>

        <Grid.Row className="MPWidget__colNames perfectly-center">
          <Grid.Column width="4">Course Code</Grid.Column>
          <Grid.Column width="4">Exam Type</Grid.Column>
          <Grid.Column width="4">Marks Obtained</Grid.Column>
          <Grid.Column width="4">Maximum Marks</Grid.Column>
        </Grid.Row>

        <Grow cc="UCS555" et="MST" mo="25" mm="50" />
        <Grow cc="UCS555" et="MST" mo="25" mm="50" />
        <Grow cc="UCS555" et="MST" mo="25" mm="50" />
        <Grow cc="UCS555" et="MST" mo="25" mm="50" />
      </Grid>
      <Link to="/exam-marks">
        <Button
          className="MPWidget__button"
          primary
          floated="right"
          onClick={() => {
            setActiveItem("exam-marks");
          }}
        >
          See Detailed
        </Button>
      </Link>
    </div>
  );
}

export default MPWdgt;
