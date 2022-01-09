import { Navbar, Nav } from "react-bootstrap";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Toggle from "../components/DarkTheme";


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
       <Navbar expand="lg" className="mx-2">
       <Toggle />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
         <div>
         <div className="margin-left">
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
              </div>
         </div>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
