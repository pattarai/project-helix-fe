import firebase from "firebase/app";
import "firebase/auth";
import "../firebase";

import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const history = useHistory();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      history.push("/home");
    }
  });

  function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
      })
      .catch((error) => {});
  }
  return (
    <>
      <div className="landing-main">
        <div className="text-center">
          <h1 className="landing-text">H E L I X</h1>
          <button className="btn btn-danger" onClick={signInWithGoogle}>
            Login
          </button>
          <button className="btn btn-primary">About Us</button>
        </div>
      </div>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,64L16,85.3C32,107,64,149,96,144C128,139,160,85,192,69.3C224,53,256,75,288,101.3C320,128,352,160,384,154.7C416,149,448,107,480,122.7C512,139,544,213,576,245.3C608,277,640,267,672,250.7C704,235,736,213,768,186.7C800,160,832,128,864,96C896,64,928,32,960,48C992,64,1024,128,1056,149.3C1088,171,1120,149,1152,133.3C1184,117,1216,107,1248,112C1280,117,1312,139,1344,128C1376,117,1408,75,1424,53.3L1440,32L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg>
    </>
  );
}
