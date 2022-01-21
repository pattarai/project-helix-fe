import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let { REACT_APP_API_KEY } = process.env;
let { REACT_APP_AUTH_DOMAIN } = process.env;
let { REACT_APP_PROJECT_ID } = process.env;
let { REACT_APP_STORAGE_BUCKET } = process.env;
let { REACT_APP_MESSAGING_SENDER_ID } = process.env;
let { REACT_APP_APP_ID } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);
