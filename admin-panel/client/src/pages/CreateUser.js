import React, { useState } from 'react';
import { Form, Container, Button } from 'semantic-ui-react'
import firebase from "../firebase";

  import Web3 from "web3";
 import {AuthContractABI} from "../abi/abis";
import Navbar from '../Components/Navbar';
 const web3 = new Web3(Web3.givenProvider);
 const contractAddr = '0xa0AE00443D7754174965Bb89008eF6A74c77C272';
 const AuthContract = new web3.eth.Contract(AuthContractABI, contractAddr);


export const CreateUser = () => {
    const [userID, setUserID] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState();
  
  const createNewUser = async (e) => {
    e.preventDefault();
    // console.log(userType);
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const result = await AuthContract.methods.addData(userID, password, userType).send({ from: account });
    if(userType === "student")
      await firebase.createStudent(userID,name);
    alert("Successfully Create User");
    console.log(result);
  }

    return (
      <React.Fragment>
      <Navbar/>

        <Container>
            <Form>
          <h1>Create New User</h1>
          <Container>
            <Form.Field>
          <label>
            UserID :
            <input type="text" name="name" value={userID} onChange={ e => setUserID(e.target.value) }  />
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            Name :
            <input type="text" name="name" value={name} onChange={ e => setName(e.target.value) }  />
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            Password :
            <input type="text" name="name" value={password} onChange={ e => setPassword(e.target.value) }  />
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            UserType :
            {/* <input type="text" name="name" value={userType} onChange={ e => setUserType(e.target.value) }  /> */}
            <select name="userType" id="userType" onChange={ e => setUserType(e.target.value)} required>
              <option value="" defaultValue>--Please choose an option--</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          </Form.Field>
          <Button floated="right" primary onClick={createNewUser}>Add New User</Button>
          </Container>
        </Form>
        </Container>
        </React.Fragment>
    )
}
