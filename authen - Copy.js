import app from 'firebase/app';
import 'firebase/auth';

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


class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;