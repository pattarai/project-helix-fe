import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  // your creds here
};

firebase.initializeApp(firebaseConfig);
