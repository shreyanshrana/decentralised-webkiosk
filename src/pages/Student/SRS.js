import React, { useState, useContext } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import SRSQuestions from "../../Components/SRSQuestions/SRSQuestions";
import StudentInfo from "./StudentInfo";
import { StudentContext } from "../../context/StudentContext";

let Teachers = [];

const SRS = () => {
  const [teacher, setTeacher] = useState("");
  const { student } = useContext(StudentContext);
  // console.log(student["SRS"]);
  Teachers = [];
  Object.entries(student["PendingSRS"]).map((subject) => {
    Teachers.push({
      key: subject[0],
      text: subject[1].Name,
      value: subject[1].TeacherID,
    });
  });
  console.log(Teachers);
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
                console.log(data.value);
                setTeacher(data.value);
              }}
            />
          </Grid.Column>
          <Grid.Column width="4"></Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ height: "85%" }}>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="14">
            <SRSQuestions
              type="P"
              teacherID={teacher}
              studentID={student["RollNo"]}
              batch={student["Batch"]}
            />
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default SRS;
