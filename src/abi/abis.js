export const AuthContractABI = [
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "string",
        "name": "s",
        "type": "string"
      }
    ],
    "name": "string_tobytes",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "userID",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "password",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "userType",
        "type": "string"
      }
    ],
    "name": "addData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "userID",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "password",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "userType",
        "type": "string"
      }
    ],
    "name": "verifyUser",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getUsers",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "userID",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "hashedPassword",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "userType",
            "type": "string"
          }
        ],
        "internalType": "struct AuthContract.user[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "userID",
        "type": "uint256"
      }
    ],
    "name": "removeUser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "clearArray",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]