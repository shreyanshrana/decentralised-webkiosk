import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Form, Container, Button } from 'semantic-ui-react'
import firebase from "../firebase";


//SmartContract
import Web3 from "web3";
import {AuthContractABI} from "../abi/abis";
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xa0AE00443D7754174965Bb89008eF6A74c77C272';
const AuthContract = new web3.eth.Contract(AuthContractABI, contractAddr);

const DeleteUser = () => {
    const [userID, setUserID] = useState();
    const [userType, setUserType] = useState("");
    
    const handleDelete = async (e) => {
        e.preventDefault();
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        const result = await AuthContract.methods.removeUser(userID, userType).send({ from: account });
        // console.log(result)
        // setGetNumber(result);
        console.log(result);
    }


    return (
        <React.Fragment>
            <Navbar/>
            <Container>
                <Form>
                    <Form.Field>
                        <label>
                            UserID :
                            <input required type="text" name="name" value={userID} onChange={ e => setUserID(e.target.value) }  />
                        </label>
                    </Form.Field>
                    <Form.Field>
                        <label>
                            UserType :
                        </label>
                        <select name="userType" id="userType" onChange={ e => setUserType(e.target.value)} required>
                            <option value="" defaultValue>--Please choose an option--</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                        </select>
                    </Form.Field>
                    <Button primary floated="right" onClick={handleDelete}>Delete</Button>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default DeleteUser
