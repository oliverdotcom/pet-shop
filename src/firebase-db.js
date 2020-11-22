import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyDXS-PL_o7Dv4KpbxE-nnzGQa_h--iWxA8",
    authDomain: "petapp-ef212.firebaseapp.com",
    databaseURL: "https://petapp-ef212.firebaseio.com",
    projectId: "petapp-ef212",
    storageBucket: "petapp-ef212.appspot.com",
    messagingSenderId: "71729662456",
    appId: "1:71729662456:web:0893fe1c1a5e3946e26e0d"
  })
  .firestore();

export const postRef = db.collection("pets");
