import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

export default function Home() {
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
      <div className="landing-main">
        <div className="text-center">
          <h1>Home Page</h1>
          <button className="btn btn-primary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
