import React, { useState } from "react";
import { Form, Radio, Grid, Button } from "semantic-ui-react";

let hostels = [
  {
    key: "Hostel M",
    text: "Hostel M",
    value: "M",
  },

  {
    key: "Hostel H",
    text: "Hostel H",
    value: "H",
  },

  {
    key: "Hostel A",
    text: "Hostel A",
    value: "A",
  },
];
const HostelAllotment = () => {
  const [hostel1, setHostel1] = useState("");
  const [hostel2, setHostel2] = useState("");
  const [hostel3, setHostel3] = useState("");
  const [hostel4, setHostel4] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row
          style={{
            height: "10%",
            textAlign: "center",
          }}
        >
          <h1 style={{ width: "100%" }} className="perfectly-center">
            2021ODDSEM
          </h1>
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
              <Grid.Row style={{ fontWeight: "bold" }}>
                <Grid.Column width="4"></Grid.Column>
                <Grid.Column width="3">Hostel H</Grid.Column>
                <Grid.Column width="3">Hostel M</Grid.Column>
                <Grid.Column width="3">Hostel A</Grid.Column>
                <Grid.Column width="3">Hostel J</Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="4">
                  <b>First Choice</b>
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice1H"
                    value="H"
                    onChange={() => {
                      setChoice1("H");
                      setHostel1("1");
                    }}
                    checked={choice1 === "H" && hostel1 === "1"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice1M"
                    value="M"
                    onChange={() => {
                      setChoice1("M");
                      setHostel2("1");
                    }}
                    checked={choice1 === "M" && hostel2 === "1"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice1A"
                    value="A"
                    onChange={() => {
                      setChoice1("A");
                      setHostel3("1");
                    }}
                    checked={choice1 === "A" && hostel3 === "1"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice1J"
                    value="J"
                    onChange={() => {
                      setChoice1("J");
                      setHostel4("1");
                    }}
                    checked={choice1 === "J" && hostel4 === "1"}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="4">
                  <b>Second Choice</b>
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice2H"
                    value="H"
                    onChange={() => {
                      setChoice2("H");
                      setHostel1("2");
                    }}
                    checked={choice2 === "H" && hostel1 === "2"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice2M"
                    value="M"
                    onChange={() => {
                      setChoice2("M");
                      setHostel2("2");
                    }}
                    checked={choice2 === "M" && hostel2 === "2"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice2A"
                    value="A"
                    onChange={() => {
                      setChoice2("A");
                      setHostel3("2");
                    }}
                    checked={choice2 === "A" && hostel3 === "2"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice2J"
                    value="J"
                    onChange={() => {
                      setChoice2("J");
                      setHostel4("2");
                    }}
                    checked={choice2 === "J" && hostel4 === "2"}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="4">
                  <b>Third Choice</b>
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice3H"
                    value="H"
                    onChange={() => {
                      setChoice3("H");
                      setHostel1("3");
                    }}
                    checked={choice3 === "H" && hostel1 === "3"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice3M"
                    value="M"
                    onChange={() => {
                      setChoice3("M");
                      setHostel2("3");
                    }}
                    checked={choice3 === "M" && hostel2 === "3"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice3A"
                    value="A"
                    onChange={() => {
                      setChoice3("A");
                      setHostel3("3");
                    }}
                    checked={choice3 === "A" && hostel3 === "3"}
                  />
                </Grid.Column>
                <Grid.Column width="3">
                  <Radio
                    label=""
                    name="Choice3J"
                    value="J"
                    onChange={() => {
                      setChoice3("J");
                      setHostel4("3");
                    }}
                    checked={choice3 === "J" && hostel4 === "3"}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
        <Grid.Row className="perfectly-center">
          <Button primary>Submit</Button>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default HostelAllotment;
