import * as firebase from "firebase/app";
import 'firebase/firebase-firestore'
import 'firebase/auth';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyDGEGiIqqyxJc-gXim-bu_XG7TSBPC3Bco",
  authDomain: "renting-project-40596.firebaseapp.com",
  databaseURL: "https://renting-project-40596.firebaseio.com",
  projectId: "renting-project-40596",
  storageBucket: "renting-project-40596.appspot.com",
  messagingSenderId: "1015851639259",
  appId: "1:1015851639259:web:df3c1e812da7cd858807fe",
  measurementId: "G-T5WTJWZTZ2"
};

var hasRan = false;
if (!hasRan) {
  firebase.initializeApp(config);
  console.log("Constructor Ran")
  hasRan = true
  var db = firebase.firestore();
}


function myConfig() {
  console.log("myConfig made in")
  firebase.initializeApp(config);
  console.log("myConfig made out")
}



function createUser(email, password) {
  console.log("entered create user");
  firebase.auth().createUserWithEmailAndPassword(email, password);
  console.log("exited create user");
}

function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password);
}

function writeUserData(addressI, emailI, descriptionI) {
  // e.preventDefault();
  console.log("In my function");

  db.collection("test").add({
    Address: addressI,
    Email: emailI,
    Description: descriptionI
  })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.log("Error writing document: ", error);
    });
}




export { createUser, signIn, writeUserData}