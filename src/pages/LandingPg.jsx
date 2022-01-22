import React from "react";
import LandingImage from "../assets/images/landing.svg";
import bg from "../assets/images/bg.svg";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import "firebase/auth";
import "../firebase";
import { useHistory } from "react-router-dom";

export default function LandingPg() {
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
      });
  }

  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          className="card bg-white"
          style={{
            minHeight: "75vh",
            width: "85%",
            boxShadow:
              "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
          }}
        >
          <div className="row mt-md-5 mt-3">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div
                className="text-md-start text-center"
                style={{ paddingInline: "10%" }}
              >
                <p className="mb-0 fs-md-6" style={{ letterSpacing: "5px" }}>
                  PATTARAI'S
                </p>
                <p
                  className="fs-1 fw-bold"
                  style={{ letterSpacing: "9px", color: "#032940" }}
                >
                  HELIX
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  mollitia nihil consequuntur rem! Ea, vel! Atque ea blanditiis
                  cumque, ex nam vel laudantium quis. Distinctio enim voluptate
                  natus odit nisi!
                </p>
                <Button
                  className="fw-bold"
                  variant="contained"
                  size="large"
                  style={{ backgroundColor: "#032940", color: "white" }}
                  onClick={signInWithGoogle}
                >
                  SIGN IN
                </Button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src={LandingImage}
                alt="helix"
                style={{ height: "auto", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
