import firebase from "firebase/app";
import "firebase/auth";
import "../firebase";
import Img from "../assets/images/pic1.png";
import Logo from "../assets/images/Pattarai_logo.svg";

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
      <section className="landing-bg full-vh">
        <div className="landing-main d-md-flex justify-content-between p-5">
          <div className="">
            <div className="text-start">
              <img src={Logo} height="200" width="auto" alt="" />
              <p className="landing-text">P A T T A R A I' S</p>
              <h1 className="">HELIX</h1>
              <h3>Let's grow to together</h3>
              <button className="btn btn-danger" onClick={signInWithGoogle}>
                Login
              </button>
            </div>
          </div>

          <img
            className="img-fluid"
            src={Img}
            height="425"
            width="auto"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
