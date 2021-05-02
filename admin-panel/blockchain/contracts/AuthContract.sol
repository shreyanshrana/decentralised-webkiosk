pragma solidity >=0.4.22 <0.8.0;

pragma experimental ABIEncoderV2;

contract AuthContract {
    struct user {
        uint256 userID;
        bytes32 hashedPassword;
        string userType;
    }

    user[] userList;

    function string_tobytes(string memory s)
        public
        pure
        returns (bytes memory)
    {
        bytes memory b3 = bytes(s);
        return b3;
    }

    function addData(
        uint256 userID,
        string memory password,
        string memory userType
    ) public {
        bytes memory convert = string_tobytes(password);
        bytes32 pswd = sha256(convert);
        userList.push(
            user({userID: userID, hashedPassword: pswd, userType: userType})
        );
    }

    function verifyUser(
        uint256 userID,
        string memory password,
        string memory userType
    ) public view returns (bool) {
        bytes memory convert = string_tobytes(password);
        bytes32 pswd = sha256(convert);
        for (uint256 i = 0; i < userList.length; i++) {
            if (
                userID == userList[i].userID &&
                pswd == userList[i].hashedPassword &&
                keccak256(string_tobytes(userType)) ==
                keccak256(string_tobytes(userList[i].userType))
            ) return true;
        }
        return false;
    }

    function getUsers() public view returns (user[] memory) {
        return userList;
    }

    function removeUser(uint256 userID, string memory userType) public {
        uint256 i = 0;
        for (i = 0; i < userList.length; i++) {
            if (
                userID == userList[i].userID &&
                keccak256(string_tobytes(userType)) ==
                keccak256(string_tobytes(userList[i].userType))
            ) break;
        }
        delete userList[i];
    }
}
