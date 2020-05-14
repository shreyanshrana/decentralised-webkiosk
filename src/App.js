import React from "react";
import { Button } from "semantic-ui-react";
import Routes from "./routes";
import Info from "./Components/Info/info.js";

function App() {
  const manmeet = {};
  return (
    <div className="App">
      <Routes />
      <Info
        name="Manmeet"
        rollno="101703329"
        email="mkcshs@gmail.com"
        branch="Computer Science"
        year="2021"
        degree="Bachelor of Engineering"
      />
    </div>
  );
}

export default App;
