import Button from "@material-ui/core/Button";
import FadeIn from "../animations/FadeIn";
import firebase from "firebase/app";
import React from "react";
import { useHistory } from "react-router-dom";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";
import Footer from "./Footer";

export default function BaseLayout(props) {
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  }

  return (
    <>
      <FadeIn>
        <section className="d-flex align-items-center justify-content-between mx-4 my-3">
          <Toggle />
          <Button
            class="customButton"
            onClick={() => {
              history.push("/live");
            }}
          >
            LIVE NOW
          </Button>
          <Button class="customButton " onClick={logout}>
            LOGOUT
          </Button>
        </section>
        <section className="d-flex justify-content-center align-items-center mt-3">
          <div
            className="card main-bg"
            style={{
              minHeight: "80vh",
              width: "90%",
              boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
            }}
          >
            <section className="container-fluid">{props.children}</section>
          </div>
        </section>
        <Footer />
      </FadeIn>
      <Particles />
    </>
  );
}
