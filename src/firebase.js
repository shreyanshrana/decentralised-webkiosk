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
  addStudentData = async (rollno) => {
    const data = {
      Name: "Shreyansh",
      Marks: {
        SEM1: {
          UMC001: {
            Name: "Mathematics 1",
            MST: "20",
            EST: "45",
            Sessional: "20",
          },
          UEC001: {
            Name: "Applied Chemistry",
            MST: "20",
            EST: "45",
            Sessional: "20",
          },
        },
        SEM2: {
          UMC002: {
            Name: "Mathematics 2",
            MST: "20",
            EST: "45",
            Sessional: "20",
          },
        },
      },
    };
    const res = await firebase
      .firestore()
      .collection("Students")
      .doc("COE")
      .collection("COE1")
      .doc("101703524");
    console.log(await res.set(data));
  };

  submitSRS = async (studentID, teacherID, score, sem, batch) => {
    const teacher = await (
      await firebase.firestore().collection("Faculty").doc(teacherID).get()
    ).data();
    // const student = await (
    //   await firebase
    //     .firestore()
    //     .collection("Students")
    //     .doc("COE")
    //     .collection("COE1")
    //     .doc(studentID)
    //     .get()
    // ).data();
    // console.log(studentID);
    let SRS = {};
    SRS[sem] = {};
    SRS[sem][batch] = score;
    // let PendingSRS = student["PendingSRS"];
    // let FilledSRS = student["FilledSRS"];

    // FilledSRS[teacher] = {
    //   TeacherID: teacher,
    //   Score: score,
    // };
    console.log(teacher);
    await firebase
      .firestore()
      .collection("Faculty")
      .doc(teacherID)
      .set({ ...teacher, SRS });
    // await firebase
    //   .firestore()
    //   .collection("Students")
    //   .doc("COE")
    //   .collection("COE1")
    //   .doc(studentID)
    //   .set({ ...student, FilledSRS });
  };

  submitHostelPreference = async (HostelAllotment, studentID) => {
    const student = await (
      await firebase
        .firestore()
        .collection("Students")
        .doc("COE")
        .collection("COE1")
        .doc(studentID)
        .get()
    ).data();
    await firebase
      .firestore()
      .collection("Students")
      .doc("COE")
      .collection("COE1")
      .doc(studentID)
      .set({ ...student, HostelAllotment });
  };

  submitMarksChange = async (studentID, subject, mst, est, sessional) => {
    const student = await (
      await firebase
        .firestore()
        .collection("Students")
        .doc("COE")
        .collection("COE1")
        .doc(studentID)
        .get()
    ).data();
    let newMarks = {
      ...student["Marks"],
    };
    newMarks["SEM1"][subject]["MST"] = mst;
    newMarks["SEM1"][subject]["EST"] = est;
    newMarks["SEM1"][subject]["Sessional"] = sessional;

    student["Marks"] = newMarks;
    console.log(student);
    await firebase
      .firestore()
      .collection("Students")
      .doc("COE")
      .collection("COE1")
      .doc(studentID)
      .set({ ...student, newMarks });
  };
}

export default new Firebase();
