import React, { useState } from 'react';
import { Form, Container, Button, Table } from 'semantic-ui-react'

import Web3 from "web3";
import {AuthContractABI} from "../abi/abis";
import Navbar from '../Components/Navbar';
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xa0AE00443D7754174965Bb89008eF6A74c77C272';
const AuthContract = new web3.eth.Contract(AuthContractABI, contractAddr);

export const ListUser = () => {
  const[data,setData] = useState([]);
    
  const handleGet = async (e) => {
    e.preventDefault();
    const result = await AuthContract.methods.getUsers().call();
    // setGetNumber(result);
    console.log(result);
    setData(result);
  }
  
  // const handleVerify = async (e) => {
  //   e.preventDefault();
  //   const result = await AuthContract.methods.verifyUser(userID, password, userType).call();
  //   console.log(result);
  // }


  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   const result = await AuthContract.methods.clearArray().call();
  //   // setGetNumber(result);
  //   console.log(result);
  // }
    return (
        <React.Fragment>
          <Navbar/>
          <Container style={{ textAlign:"center" }}>
            <br/>
        <Button onClick={handleGet} primary >Get Records</Button>
        {
          (data.length != 0) ?
          (
            <Table celled>
            <Table.Header>
            <Table.Row>
                  <Table.HeaderCell>UserID </Table.HeaderCell>
                  <Table.HeaderCell>Hashed Password </Table.HeaderCell>
                  <Table.HeaderCell>User Type </Table.HeaderCell>
                 </Table.Row>
                 </Table.Header>
            {
              data.map(item=>{
                return (
                  (item.userID != 0) ? (
                    <Table.Body>
                    <Table.Row>
                          <Table.Cell>{item.userID}</Table.Cell>
                          <Table.Cell>{item.hashedPassword}</Table.Cell>
                          <Table.Cell>{item.userType}</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                  ) : <React.Fragment/>
                 

              )
            })
          }
            </Table>
          )
          :
          <React.Fragment/>
        }
      
        </Container>  
        </React.Fragment>
    )
}
