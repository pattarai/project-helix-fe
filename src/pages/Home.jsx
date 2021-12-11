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
            <h1 class="main">Hey Welcome to Helix!</h1>
            <button class="btn btn-primary btn-md col-xs-2 margin-left" onClick={logout}>
              Logout
            </button>
            <button
              className="btn btn-secondary btn-md col-xs-2 margin-left"
              onClick={() => {
                history.push("/live");
              }}
            >
              {" "}
              Live{" "}
            </button>
            <button
              className="btn btn-danger btn-md col-xs-2 margin-left"
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
