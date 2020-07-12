pragma solidity >=0.4.22 <0.7.0;

contract Ballot {
    struct Student {
        uint256 rollno;
        string name;
        string email;
        Marks[] Subjects;
    }

    struct Marks {
        string name_of_subject;
        uint256 mst;
        uint256 est;
        uint256 sessional;
    }

    constructor(bytes32[] memory subjectNames) public {
        for (uint256 i = 0; i < subjectNames.length; i++) {}
    }

    address teacher;

    function addMarks(
        address student,
        uint256 marks,
        string memory marks_type
    ) public {
        require(msg.sender == teacher, "Only teachers can add marks.");
        student.Subjects[marks_type] = marks;
    }
}
