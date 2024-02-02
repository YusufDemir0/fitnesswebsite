import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDYVr_nIa--fLDfM-wQe7T-tYDhQCMPqhU",
  authDomain: "kartal-fit.firebaseapp.com",
  projectId: "kartal-fit",
  storageBucket: "kartal-fit.appspot.com",
  messagingSenderId: "850637962588",
  appId: "1:850637962588:web:85b0c260a941e07583d599",
  databaseURL: "https://kartal-fit-default-rtdb.firebaseio.com/",
  measurementId: "G-C1GFH4J2KW",
};
const App = firebase.initializeApp(firebaseConfig);
var db = firebase.database();
const auth = App.auth();
const database = App.database();
export { auth, database ,db };


