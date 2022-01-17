import Button from "@material-ui/core/Button";
import FadeIn from "../animations/FadeIn";
import firebase from "firebase/app";
import React from "react";
import { useHistory } from "react-router-dom";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPodcast,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

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
        <section className="d-flex align-items-center mx-4 my-3 justify-content-between">
            <Toggle />
     

          <div class="">
          <Button class="customButton me-4"  onClick={() => {
              history.push("/home");
            }} >
              <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faHome} /> HOME
           </Button>

          <Button
            class="customButton me-4"
            onClick={() => {
              history.push("/live");
            }}
          >
            <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faPodcast} /> LIVE NOW
          </Button>
          <Button class="customButton me-4" onClick={logout}>
          <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faSignOutAlt} /> SIGN OUT
          </Button>
          </div>
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
