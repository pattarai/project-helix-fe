import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
// import LiveStream from "./LiveStream";

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
      <section className="home-bg full-vh">
        <div className="landing-main">
          <div className="text-center">
            <h1>Hey Welcome to pattarai's workshopHub!</h1>
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                history.push("/live");
              }}
            >
              {" "}
              Live{" "}
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.push("/record");
              }}
            >
              PRE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
