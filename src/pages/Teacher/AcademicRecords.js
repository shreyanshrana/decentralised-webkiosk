import React, { useState, useContext } from "react";
import { Grid, Dropdown, Form, Button } from "semantic-ui-react";
import firebase from "../../firebase";
import { TeacherContext } from "../../context/TeacherContext";

let branchList = [{ key: "COE", text: "COE", value: "COE" }];
let studentList = [];

const AcademicRecords = () => {
  const { teacher } = useContext(TeacherContext);
  const [branch, setBranch] = useState("");
  const [student, setStudent] = useState("");
  const [est, setEST] = useState("");
  const [mst, setMST] = useState("");
  const [sessional, setSessional] = useState("");
  firebase.getBranchList().then((res) => {
    console.log(res);
    branchList = [{}];
    res.map((branch) => {
      console.log(branch);
      branchList.push({
        key: branch,
        text: branch,
        value: branch,
      });
    });
    console.log(branchList);
  });
  console.log(branchList);
  const handleSubmit = async () => {
    if (branch === "" || student === "") alert("Kindly select a student");
    else {
      const stu = await firebase.getStudentData(student);
      await firebase.submitMarksChange(
        stu["RollNo"],
        teacher["Subject"],
        mst,
        est,
        sessional
      );
    }
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
            style={{ marginLeft: "" }}
            placeholder="Select Branch"
            //   fluid
            selection
            options={branchList}
            onChange={async (event, data) => {
              setBranch(data.value);
              studentList = [];
              (await firebase.getStudentList(data.value)).map((stu) => {
                studentList.push({
                  key: stu,
                  text: stu,
                  value: stu,
                });
              });
              //   alert(data.value);
            }}
            onClick={() => {
              console.log(branchList);
            }}
          />
          <Dropdown
            placeholder="Select Student"
            // fluid
            style={{ marginLeft: "50px" }}
            selection
            search
            options={studentList}
            onChange={async (event, data) => {
              setStudent(data.value);
              const stu = await firebase.getStudentData(data.value);
              const subject = teacher["Subject"];
              console.log(stu["Marks"]["SEM1"][subject]);
              setMST(stu["Marks"]["SEM1"][subject]["MST"]);
              setSessional(stu["Marks"]["SEM1"][subject]["Sessional"]);
              setEST(stu["Marks"]["SEM1"][subject]["EST"]);
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
                    <input
                      placeholder="Score in MST"
                      onChange={(event) => {
                        setMST(event.target.value);
                      }}
                      value={mst}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Sessional Score</label>
                    <input
                      placeholder="Score in sessional"
                      onChange={(event) => {
                        setSessional(event.target.value);
                      }}
                      value={sessional}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>EST Score</label>
                    <input
                      placeholder="Score in EST"
                      onChange={(event) => {
                        setEST(event.target.value);
                      }}
                      value={est}
                    />
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
