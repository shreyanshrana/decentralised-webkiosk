import firebase from "./firebase";
const data = {
  name: "Aloo",
};
await db.collection("ThaparDB").doc("Students").set(data);
