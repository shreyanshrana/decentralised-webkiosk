import React, { useState } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import { KioskTable } from "../../Components/KioskTable/KioskTable";

const Ques_L = [
  ["1", "Did the teacher use any digital medium to teach ?", "5"],
  ["2", "Did the teacher use any digital medium to teach ?", "5"],
  ["3", "Did the teacher use any digital medium to teach ?", "5"],
  ["4", "Did the teacher use any digital medium to teach ?", "5"],
  ["5", "Did the teacher use any digital medium to teach ?", "5"],
];

const Ques_T = [
  ["1", "Did the teacher use any digital medium to teach ?", "5"],
  ["2", "Did the teacher use any digital medium to teach ?", "5"],
  ["3", "Did the teacher use any digital medium to teach ?", "5"],
  ["4", "Did the teacher use any digital medium to teach ?", "5"],
];

const Ques_P = [
  ["1", "Did the teacher use any digital medium to teach ?", "5"],
  ["2", "Did the teacher use any digital medium to teach ?", "5"],
  ["3", "Did the teacher use any digital medium to teach ?", "5"],
];

const subjects = [
  {
    "1718ODDSEM": [
      {
        key: "Applied Chemistry (Practical)",
        text: "Applied Chemistry (Practical)",
        value: "Applied Chemistry (P)",
      },
      {
        key: "Applied Chemistry (Lecture)",
        text: "Applied Chemistry (Lecture)",
        value: "Applied Chemistry (L)",
      },
      {
        key: "Applied Chemistry (Tutorial)",
        text: "Applied Chemistry (Tutorial)",
        value: "Applied Chemistry (T)",
      },
    ],
    "1718EVENSEM": [
      {
        key: "Applied Physics (Practical)",
        text: "Applied Physics (Practical)",
        value: "Applied Physics (P)",
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
    ],
    "1819ODDSEM": [
      {
        key: "Numerical Analysis (Practical)",
        text: "Numerical Analysis (Practical)",
        value: "Numerical Analysis (P)",
      },
      {
        key: "Numerical Analysis (Lecture)",
        text: "Numerical Analysis (Lecture)",
        value: "Numerical Analysis (L)",
      },
      {
        key: "Numerical Analysis (Tutorial)",
        text: "Numerical Analysis (Tutorial)",
        value: "Numerical Analysis (T)",
      },
    ],
    "1819EVENSEM": [
      {
        key: "Computer Networks (Practical)",
        text: "Computer Networks (Practical)",
        value: "Computer Networks (P)",
      },
      {
        key: "Computer Networks (Lecture)",
        text: "Computer Networks (Lecture)",
        value: "Computer Networks (L)",
      },
    ],
    "1920ODSEM": [
      {
        key: "Mathematical Modelling & Simulation (Practical)",
        text: "Mathematical Modelling & Simulation (Practical)",
        value: "Mathematical Modelling & Simulation (P)",
      },
      {
        key: "Mathematical Modelling & Simulation (Lecture)",
        text: "Mathematical Modelling & Simulation (Lecture)",
        value: "Mathematical Modelling & Simulation (L)",
      },
    ],
    "1920EVENSEM": [
      {
        key: "Computer Architecture & Organisation (Practical)",
        text: "Computer Architecture & Organisation (Practical)",
        value: "Computer Architecture & Organisation (P)",
      },
      {
        key: "Computer Architecture & Organisation (Lecture)",
        text: "Computer Architecture & Organisation (Lecture)",
        value: "Computer Architecture & Organisation (L)",
      },
    ],
  },
];
const AcademicSessions = [
  {
    key: "1718ODDSEM",
    text: "1718ODDSEM",
    value: "1718ODDSEM",
  },
  {
    key: "1718EVENSEM",
    text: "1718EVENSEM",
    value: "1718EVENSEM",
  },
  {
    key: "1819ODDSEM",
    text: "1819ODDSEM",
    value: "1819ODDSEM",
  },
  {
    key: "1819EVENSEM",
    text: "1819EVENSEM",
    value: "1819EVENSEM",
  },

  {
    key: "1920ODDSEM",
    text: "1920ODDSEM",
    value: "1920ODDSEM",
  },
  {
    key: "1920EVENSEM",
    text: "1920EVENSEM",
    value: "1920EVENSEM",
  },
];

let table = [
  ["1", "Did the teacher use any digital medium to teach ?", "5"],
  ["1", "Did the teacher use any digital medium to teach ?", "5"],
  ["1", "Did the teacher use any digital medium to teach ?", "5"],
  ["1", "Did the teacher use any digital medium to teach ?", "5"],
  ["1", "Did the teacher use any digital medium to teach ?", "5"],
];
const PrevSRS = () => {
  const [session, setSession] = useState("1920EVENSEM");
  const [subject, setSubject] = useState("");
  console.log("session : ", session);
  console.log("session : ", subjects[0]);
  console.log("subjects : ", subjects[0][session]);
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
            {session}
          </h1>
        </Grid.Row>
        <Grid.Row
          className="perfectly-center"
          style={{
            height: "10%",
          }}
        >
          <Dropdown
            placeholder="Select Academic Session"
            //   fluid
            selection
            options={AcademicSessions}
            onChange={(event, data) => {
              setSession(data.value);
            }}
          />
        </Grid.Row>
        <Grid.Row
          className="perfectly-center"
          style={{
            maxHeight: "5%",
            textAlign: "center",
          }}
        >
          <Dropdown
            placeholder="Select Subject"
            //   fluid
            selection
            options={subjects[0][session]}
            onChange={(event, data) => {
              setSubject(data.value);
              if (data.value.substr(-2, 1) === "L") table = Ques_L;
              else if (data.value.substr(-2, 1) === "P") table = Ques_P;
              else if (data.value.substr(-2, 1) === "T") table = Ques_T;
              //   console.log(table);
            }}
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12">
            <KioskTable
              tableTitle={subject}
              tableColWidth={[2, 12, 2]}
              tableHead={["S.No.", "Question", "Score"]}
              tableData={table}
            />
          </Grid.Column>
          <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
        <Grid.Row />
        <Grid.Row />
      </Grid>
    </React.Fragment>
  );
};

export default PrevSRS;
