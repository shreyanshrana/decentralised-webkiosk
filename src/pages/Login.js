import React, { useState, useContext } from "react";
import { Grid, Form, Button, Select, Input, Message } from "semantic-ui-react";
import logo from "../img/tiet.png";
import "../styles/Login.scss";
import { UserContext } from "../context/UserContext";

export const Login = (props) => {
  const { setUserType } = useContext(UserContext);
  const [eno, setEno] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [hasError, setError] = useState(false);
  const submitEvent = (event) => {
    event.preventDefault();
    setError(false);
    if (type === "student" && eno === "123" && password === "123") {
      console.log("correct");
      // console.log(context);
      setUserType(type);
      props.history.push("/");
    } else if (type === "teacher" && eno === "121" && password === "121") {
      console.log("correct");
      // console.log(context);
      setUserType(type);
      props.history.push("/");
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <Grid className="Login">
        <Grid.Column width="10" className="Login__Graphic perfectly-center">
          <div className="Login__Graphic-BG"></div>
          <div className="Login__Graphic-Logo">
            <Grid>
              <Grid.Column width="8" style={{ padding: "0" }}>
                <img
                  src={logo}
                  alt="Thapar Institue of Engineering & Technology"
                />
              </Grid.Column>
            </Grid>
          </div>
        </Grid.Column>
        <Grid.Column width="6" className="Login__Form perfectly-center">
          <div>
            <h1>
              Login
              <br />
              to Webkiosk
            </h1>
            <Form onSubmit={submitEvent}>
              <Form.Field
                required
                onChange={(event, data) => {
                  setType(data.value);
                }}
                control={Select}
                label="User Type"
                placeholder="User Type"
                width="16"
                options={[
                  { key: "s", text: "Student", value: "student" },
                  { key: "t", text: "Teacher", value: "teacher" },
                ]}
              />
              <Form.Field width="16">
                <label>Enrollment Number</label>
                <Input
                  placeholder="Your enrollment number"
                  value={eno}
                  required
                  onChange={(event) => {
                    setEno(event.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width="16">
                <label>Password</label>
                <input
                  placeholder="Your password"
                  type="password"
                  value={password}
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Field>

              <Message negative visible={hasError} hidden={!hasError}>
                <p>Invalid Credentials</p>
              </Message>

              <div className="Login__Form-CenterButton">
                <Button type="submit">Login</Button>
              </div>
            </Form>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};
