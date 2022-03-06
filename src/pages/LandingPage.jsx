import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "../firebase";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";

export default function LandingPage() {
  const history = useHistory();

  const loginpage= () =>{
    history.push("/login");
  }

  const signpage= () =>{
    history.push("/Signup");
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const username = user.displayName;
      localStorage.setItem("username", username);
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
      });
  }

  return (
    <>
      <FadeIn>
        <p className="p-3">
          <Toggle />
        </p>
        <div
          className="d-flex align-items-center justify-content-center main-bg w-100"
          style={{ height: "80vh" }}
        >
          <div className="text-center">
            <p className="mb-0">
              <span className="text-pattarai">PATTARAI</span>{" "}
              <span className="text-pattarai-s">'S</span>
            </p>
            <p className="title-word text-center">H E L I X</p>
            <button
              className="button customButton mt-3 mx-4"
              onClick={loginpage}
            >
              LOGIN
            </button>
            <button
              className="button customButton customb mt-3 mx-5"
              onClick={signpage}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </FadeIn>
      <Particles />
    </>
  );
}
