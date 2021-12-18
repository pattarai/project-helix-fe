import { Navbar, Nav } from "react-bootstrap";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

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
      <Navbar bg="light" expand="lg" className="mx-2">
        <Navbar.Brand href="#home">HELIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Go Live</Nav.Link>
            <div>
              <div
                className="btn btn-danger btn-md col-xs-2 margin-left "
                onClick={() => {
                  history.push("/record");
                }}
              >
                Recent Broadcasts!
              </div>
            </div>

            <div>
              <div
                className="btn btn-danger btn-md col-xs-2 margin-left"
                onClick={logout}
              >
                Log out
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
