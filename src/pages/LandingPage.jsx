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
          <button className="mystyle">About Us</button>
        </div>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,224L30,192C60,160,120,96,180,80C240,64,300,96,360,128C420,160,480,192,540,224C600,256,660,288,720,288C780,288,840,256,900,213.3C960,171,1020,117,1080,117.3C1140,117,1200,171,1260,160C1320,149,1380,75,1410,37.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
   
    </>
  );
}
