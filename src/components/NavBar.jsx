import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Toggle from "../components/DarkTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPodcast,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const history = useHistory();
  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((error) => {});
  }
  return (
    <>
      <section className="d-flex align-items-center justify-content-between mx-4 my-3 ">
        <Toggle />

        <div className="d-flex">
          <Button
            className="customButton"
            onClick={() => {
              history.push("/home");
            }}
          >
            <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faHome} />{" "}
            <span className="d-md-block d-none ms-2">HOME</span>
          </Button>

          <Button
            className="customButton mx-4"
            onClick={() => {
              history.push("/live");
            }}
          >
            <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faPodcast} />{" "}
            <span className="d-md-block d-none ms-2">LIVE NOW</span>
          </Button>
          <Button className="customButton" onClick={logout}>
            <FontAwesomeIcon color="#0c4ec9" size="1x" icon={faSignOutAlt} />{" "}
            <span className="d-md-block d-none ms-2">SIGN OUT</span>
          </Button>
        </div>
      </section>
    </>
  );
}
