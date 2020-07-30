import React, { useState } from "react";
import { Grid, Dropdown, Form, Button } from "semantic-ui-react";

let batchList = {
  "2": [
    {
      key: "2COE1",
      text: "2COE1",
      value: "2COE1",
    },
  ],
  "3": [
    {
      key: "3COE11",
      text: "3COE11",
      value: "3COE11",
    },
    {
      key: "3COE12",
      text: "3COE12",
      value: "3COE12",
    },
  ],
  "4": [
    {
      key: "4COE1",
      text: "4COE1",
      value: "4COE1",
    },
  ],
};

let studentList = {
  "2COE1": [
    {
      key: "Shreyansh Rana (101803524)",
      text: "Shreyansh Rana (101803524)",
      value: "101803524",
    },
  ],
  "3COE11": [
    {
      key: "Shruti Sharma (10703527)",
      text: "Shruti Sharma (10703527)",
      value: "101703527",
    },
    {
      key: "Shubham Goyal (101703530)",
      text: "Shubham Goyal (101703530)",
      value: "101703530",
    },
  ],
  "3COE12": [
    {
      key: "Manmeet Kaur Chawla (101603329)",
      text: "Manmeet Kaur Chawla (101603329)",
      value: "101703329",
    },
  ],
  "4COE1": [
    {
      key: "Rohit Mohanty (101603456)",
      text: "Rohit Mohanty (101603456)",
      value: "101603456",
    },
  ],
};

const AcademicRecords = () => {
  const [year, setYear] = useState("");
  const [batch, setBatch] = useState("");
  const [student, setStudent] = useState("");

  const handleSubmit = () => {
    if (year === "" || batch === "" || student === "")
      alert("Kindly select a student");
  };
  return (
    <React.Fragment>
      <Grid style={{}}>
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
          <Dropdown
            placeholder="Select Year"
            //   fluid
            style={{ marginRight: "50px" }}
            selection
            options={[
              {
                key: "Second Year",
                text: "Second Year",
                value: "2",
              },
              {
                key: "Third Year",
                text: "Third Year",
                value: "3",
              },
              {
                key: "Fourth Year",
                text: "Fourth Year",
                value: "4",
              },
            ]}
            onChange={(event, data) => {
              setYear(data.value);
            }}
          />
          <Dropdown
            style={{ marginLeft: "" }}
            placeholder="Select Batch"
            //   fluid
            selection
            options={batchList[year]}
            onChange={(event, data) => {
              setBatch(data.value);
              //   alert(data.value);
            }}
          />
          <Dropdown
            placeholder="Select Student"
            // fluid
            style={{ marginLeft: "50px" }}
            selection
            search
            options={studentList[batch]}
            onChange={(event, data) => {
              setStudent(data.value);
              //   alert(data.value);
            }}
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <Grid
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "#eff2f9",
                boxShadow: "10px 0px 45px rgba(203, 45, 62, 0.15)",
                fontSize: "110%",
              }}
            >
              <Grid.Row
                style={{
                  padding: "0",
                  fontWeight: "bold",
                  fontSize: "150%",
                  color: "#cb2d3e",
                }}
              >
                <Grid.Column width="4"></Grid.Column>
                <Grid.Column width="8">{student}</Grid.Column>
                <Grid.Column width="4"></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Form style={{ width: "100%", textAlign: "left" }}>
                  <Form.Field>
                    <label>MST Score</label>
                    <input placeholder="Score in MST" />
                  </Form.Field>
                  <Form.Field>
                    <label>Sessional Score</label>
                    <input placeholder="Score in sessional" />
                  </Form.Field>
                  <Form.Field>
                    <label>EST Score</label>
                    <input placeholder="Score in EST" />
                  </Form.Field>
                  <Button
                    type="submit"
                    primary
                    floated="right"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default AcademicRecords;
