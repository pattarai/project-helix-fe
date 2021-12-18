import firebase from "firebase/app";
import "firebase/auth";
import "../firebase";
// import Img from "../assets/images/pic1.png";
import Logo from "../assets/images/Pattarai_logo.svg";
import Helix from "../assets/images/helix_logo.svg";

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
      <section className="vh-100 d-flex flex-row justify-content-evenly align-items-center">
        <div className="text-center">
          <img src={Logo} height="200" width="auto" alt="" className="mb-3" />
          <p className="land-logo">P A T T A R A I' S</p>
          <img className="land-title img-fluid" src={Helix} alt="" />
          <h3 className="display-5">Let's grow to together</h3>
          <button className="btn btn-danger" onClick={signInWithGoogle}>
            Login
          </button>
        </div>

        {/* <img
          className="img-fluid d-md-block d-none"
          src={Img}
          height="425"
          width="auto"
          alt=""
        /> */}
      </section>
    </>
  );
}
