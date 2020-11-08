import React, { useContext } from "react";
import Routes from "./routes";
import { Grid } from "semantic-ui-react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { UserContext } from "./context/UserContext";
import { loaderio } from "./pages/loaderio-d62a3851f0dcfa243a5888114bbbd680";

const Comp = () => {
  return (
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
  );
};

function App() {
  const { userType } = useContext(UserContext);
  console.log(userType);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/loaderio-d62a3851f0dcfa243a5888114bbbd680" component={loaderio} />
          {userType === "new" ? (
            // <Switch>
              <Route exact path="/" component={Login} />
            // </Switch>
          ) : (
            <Route path="/" component={Comp} />
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
