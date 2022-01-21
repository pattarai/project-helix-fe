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
  faSignOutAlt,
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
        <section className="d-flex  align-items-center mx-4 my-3 justify-content-between">
          <Toggle />

          <div class="d-flex flex-row">
            <Button
              class="customButton d-flex justify-content-between align-items-center"
              onClick={() => {
                history.push("/home");
              }}
            >
              <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faHome} />{" "}
              <span className="d-md-block d-none ms-2">HOME</span>
            </Button>

            <Button
              class="customButton d-flex  justify-content-between align-items-center mx-4"
              onClick={() => {
                history.push("/live");
              }}
            >
              <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faPodcast} />{" "}
              <span className="d-md-block d-none ms-2">LIVE NOW</span>
            </Button>
            <Button
              class="customButton d-flex  justify-content-between align-items-center"
              onClick={logout}
            >
              <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faSignOutAlt} />{" "}
              <span className="d-md-block d-none ms-2">SIGN OUT</span>
            </Button>
          </div>
        </section>
        <section className="d-flex justify-content-center align-items-center mt-3">
          <section className="container-fluid">{props.children}</section>
        </section>
        <Footer />
      </FadeIn>
      <Particles />
    </>
  );
}
