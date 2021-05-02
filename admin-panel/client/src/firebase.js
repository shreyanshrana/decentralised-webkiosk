import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDKC1On-Ao1oZ7cPYDrDt3-tijjioteLHM",
  authDomain: "capstonedb-4ba2f.firebaseapp.com",
  databaseURL: "https://capstonedb-4ba2f.firebaseio.com",
  projectId: "capstonedb-4ba2f",
  storageBucket: "capstonedb-4ba2f.appspot.com",
  messagingSenderId: "1098615220739",
  appId: "1:1098615220739:web:8f585ce3f5ff85b042fc36",
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  getStudentData = async (rollno) => {
    const res = await firebase
      .firestore()
      .collection("Students")
      .doc("COE")
      .collection("COE1")
      .doc(rollno);
    return await (await res.get()).data();
  };
  getTeacherData = async (rollno) => {
    const res = await firebase.firestore().collection("Faculty").doc(rollno);
    return await (await res.get()).data();
  };
  getBranchList = async () => {
    const res = await firebase.firestore().collection("Students").get();
    let ret = [];
    res.forEach((doc) => {
      console.log(doc.id);
      ret.push(doc.id);
    });
    return ret;
  };
  getStudentList = async (branch) => {
    const res = await firebase
      .firestore()
      .collection("Students")
      .doc(branch)
      .collection(branch + "1")
      .get();
    let ret = [];
    res.forEach((doc) => {
      console.log(doc.id);
      ret.push(doc.id);
    });
    return ret;
  };
  createStudent = async (rollno,name) => {
    const newStudent = {
      Awards :  "",
      Batch:"COE1",
      Branch:"COE",
      CGPA:"",
      "Class X Performance":"",
      "Class XII Performance":"",
      "Classes Present":"0",
      Degree : "Bachelor of Technology",
      Email : "",
      "Exam Schedule" : {
          1 : {
              Date : "28-09-2020",
              Room : "A 808",
      Subject : "Computer Architecture",
      Time : "10:00 AM"
          }
      },
      FilledSRS :{},
      HostelAllotment : {
          "Choice 1" : "",
      "Choice 2" : "",
      "Choice 3" : "",
      },
      Marks : {
          "SEM1" : {
              "UEC001" : {
                  EST:"",
                  MST:"",
                  Name:"Electronics",
                  Sessional:""
              }
          }
      },
      "Mobile Number" : "",
      Name : name,
      PendingSRS : {
          "UEC001" : {
              Name : "Electronics",
              TeacherID :"101011"
          }
      },
      RollNo:rollno,
      SGPA :{
          SEM1:
          "7",
          SEM2:
          "7",
          SEM3 : 
          "7"    
      },
      Scholarships:
      "None",
      "Time Table":{
          "8 AM":
          {Fri:
          "",
          Mon:
          "",
          Sat:
          "",
          Thur:
          "Computer Architecture (L) A-101",
          Tue:
          "",
          Wed:
          ""}
      },
      "Total Classes":
      "20",
      Year:
      "2021",
      newMarks : {
          "SEM1" : {
              "UEC001" : {
                  EST:"",
                  MST:"",
                  Name:"Electronics",
                  Sessional:""
              }
          }
      }}
    const res = await firebase
      .firestore()
      .collection("Students")
      .doc("COE")
      .collection("COE1")
      .doc(rollno);
    console.log(await res.set(newStudent));
  };
}

export default new Firebase();
