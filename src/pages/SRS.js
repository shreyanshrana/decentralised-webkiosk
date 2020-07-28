import React, { useState } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import SRSQuestions from "../Components/SRSQuestions/SRSQuestions";

const Teachers = [
  {
    key: "Operating System (Lecture)",
    text: "Operating System (Lecture)",
    value: "Operating System (L)",
  },
  {
    key: "Operating System (Practical)",
    text: "Operating System (Practical)",
    value: "Operating System (P)",
  },
  {
    key: "Computer Architecture & Organisation (Lecture)",
    text: "Computer Architecture & Organisation (Lecture)",
    value: "Computer Architecture & Organisation (L)",
  },
  {
    key: "Computer Architecture & Organisation (Practical)",
    text: "Computer Architecture & Organisation (Practical)",
    value: "Computer Architecture & Organisation (P)",
  },

  {
    key: "Applied Physics (Lecture)",
    text: "Applied Physics (Lecture)",
    value: "Applied Physics (L)",
  },
  {
    key: "Applied Physics (Tutorial)",
    text: "Applied Physics (Tutorial)",
    value: "Applied Physics (T)",
  },
  {
    key: "Applied Physics (Practical)",
    text: "Applied Physics (Practical)",
    value: "Applied Physics (P)",
  },
];

const SRS = () => {
  const [teacher, setTeacher] = useState("");

  return (
    <div>
      <Grid style={{ height: "94%" }}>
        <Grid.Row
          style={{
            height: "10%",
            textAlign: "center",
          }}
        >
          <h1 style={{ width: "100%" }} className="perfectly-center">
            1920EVENSEM
          </h1>
        </Grid.Row>
        <Grid.Row className="perfectly-center">
          <Grid.Column width="4"></Grid.Column>
          <Grid.Column width="8">
            <Dropdown
              placeholder="Select Desired Subject"
              fluid
              selection
              options={Teachers}
              onChange={(event, data) => {
                setTeacher(data.value);
              }}
            />
          </Grid.Column>
          <Grid.Column width="4"></Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ height: "85%" }}>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="14">
            <SRSQuestions type={teacher.substr(-2, 1)} />
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default SRS;
