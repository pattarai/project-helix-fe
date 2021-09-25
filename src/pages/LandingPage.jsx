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
          <h1 className="landing-text">LandingPage</h1>
          <button className="btn btn-primary" onClick={signInWithGoogle}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
