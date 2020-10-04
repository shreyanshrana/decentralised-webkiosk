import React, { useState, useContext, useEffect } from "react";
import { Radio, Grid, Button } from "semantic-ui-react";
import { StudentContext } from "../../context/StudentContext";

import firebase from "../../firebase";
const HostelAllotment = (props) => {
  const { student } = useContext(StudentContext);
  const [hostel, setHostel] = useState("");
  let hostelState =
    student["HostelAllotment"]["Choice 1"] === "" ? "to fill" : "filled";
  const [hostel1, setHostel1] = useState("");
  const [hostel2, setHostel2] = useState("");
  const [hostel3, setHostel3] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  // const [hostelState, setHostelState] = useState()

  useEffect(() => {
    hostelState =
      student["HostelAllotment"]["Choice 1"] === "" ? "to fill" : "filled";
    setHostel(hostelState);
  }, [hostelState]);
  return (
    <React.Fragment>
      {hostel === "filled" ? (
        <h1 style={{ width: "100%" }} className="perfectly-center">
          You have successfully submitted your preference.
        </h1>
      ) : (
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
                  <Grid.Column width="4">Hostel H</Grid.Column>
                  <Grid.Column width="4">Hostel M</Grid.Column>
                  <Grid.Column width="4">Hostel J</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width="4">
                    <b>First Choice</b>
                  </Grid.Column>
                  <Grid.Column width="4">
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
                  <Grid.Column width="4">
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
                  <Grid.Column width="4">
                    <Radio
                      label=""
                      name="Choice1J"
                      value="J"
                      onChange={() => {
                        setChoice1("J");
                        setHostel3("1");
                      }}
                      checked={choice1 === "J" && hostel3 === "1"}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width="4">
                    <b>Second Choice</b>
                  </Grid.Column>
                  <Grid.Column width="4">
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
                  <Grid.Column width="4">
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
                  <Grid.Column width="4">
                    <Radio
                      label=""
                      name="Choice2J"
                      value="J"
                      onChange={() => {
                        setChoice2("J");
                        setHostel3("2");
                      }}
                      checked={choice2 === "J" && hostel3 === "2"}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width="4">
                    <b>Third Choice</b>
                  </Grid.Column>
                  <Grid.Column width="4">
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
                  <Grid.Column width="4">
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
                  <Grid.Column width="4">
                    <Radio
                      label=""
                      name="Choice3J"
                      value="J"
                      onChange={() => {
                        setChoice3("J");
                        setHostel3("3");
                      }}
                      checked={choice3 === "J" && hostel3 === "3"}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width="2"></Grid.Column>
          </Grid.Row>
          <Grid.Row className="perfectly-center">
            <Button
              primary
              onClick={() => {
                if (
                  choice1 === "" ||
                  choice2 === "" ||
                  choice3 === "" ||
                  hostel1 === "" ||
                  hostel2 === "" ||
                  hostel3 === ""
                )
                  alert("Please select all preferences");
                else {
                  const hostelChoice = {
                    "Choice 1": choice1,
                    "Choice 2": choice2,
                    "Choice 3": choice3,
                  };
                  firebase.submitHostelPreference(
                    hostelChoice,
                    student["RollNo"]
                  );
                  hostelState = "filled";
                  props.history.push("/");
                }
              }}
            >
              Submit
            </Button>
          </Grid.Row>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default HostelAllotment;
