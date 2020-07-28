import React from "react";
import "./SRSQuestions.scss";
import { Grid, Dropdown, Button } from "semantic-ui-react";
// import srs_svg from "../../img/undraw_key_points_ig28.svg";

const score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const rating = [
  { key: "1", text: "1", value: 1 },
  { key: "2", text: "2", value: 2 },
  { key: "3", text: "3", value: 3 },
  { key: "4", text: "4", value: 4 },
  { key: "5", text: "5", value: 5 },
];

const Ques_L = [
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
];

const Ques_T = [
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
];

const Ques_P = [
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
  "Did the teacher use any digital medium to teach ?",
];

const clickHandler = () => {
  console.log(score);
  let sum = 0,
    count = 0;
  score.map((score) => {
    if (score > 0) {
      sum += score;
      count++;
    }
  });
  console.log(sum / count);
};
const Question = (props) => {
  return (
    <Grid.Row>
      <Grid.Column width="10" className="a">
        {props.question}
      </Grid.Column>
      <Grid.Column width="6">
        <Dropdown
          className={"Rating_" + props.index}
          fluid
          options={rating}
          placeholder="Select Rating"
          selection
          onChange={(event, data) => {
            score[props.index] = data.value;
          }}
        />
      </Grid.Column>
    </Grid.Row>
  );
};
const SRSQuestions = (props) => {
  return (
    <div className="SRSQuestions">
      <Grid>
        {props.type === "L" ? (
          Ques_L.map((ques, index) => {
            return <Question question={ques} index={index} />;
          })
        ) : props.type === "P" ? (
          Ques_P.map((ques, index) => {
            return <Question question={ques} index={index} />;
          })
        ) : props.type === "T" ? (
          Ques_T.map((ques, index) => {
            return <Question question={ques} index={index} />;
          })
        ) : (
          <div className="SRSQuestions__Illustration">
            <h3>Select subject to continue</h3>
            {/* <img src={srs_svg} /> */}
          </div>
        )}
      </Grid>
      {props.type === "L" || props.type === "T" || props.type === "P" ? (
        <div className="perfectly-center">
          <Button onClick={clickHandler} primary>
            Submit
          </Button>
        </div>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default SRSQuestions;
