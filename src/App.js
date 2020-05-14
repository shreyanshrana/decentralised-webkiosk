import React from "react";
import Routes from "./routes";
import { Grid } from "semantic-ui-react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grid style={{ margin: "0", padding: "0", height: "100%" }}>
          <Grid.Row style={{ margin: "0", padding: "0", height: "100%" }}>
            <Grid.Column width="2" style={{ padding: "0" }}>
              <Navbar />
            </Grid.Column>
            <Grid.Column width="14" style={{ padding: "0" }}>
              <Header />
              <Routes />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
