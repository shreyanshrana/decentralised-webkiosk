import React, { useState } from 'react';
// import './App.css';
 // note, contract address must match the address provided by Truffle after migrations

import Navbar from './Components/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateUser } from './pages/CreateUser';
import { ListUser } from './pages/ListUser';
import DeleteUser from './pages/DeleteUser';

function App() {
  // co
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component={CreateUser}/>
      <Route exact path = "/list" component={ListUser}/>
      <Route exact path = "/delete" component={DeleteUser}/>
</Switch>
</BrowserRouter>
  );
}

export default App;