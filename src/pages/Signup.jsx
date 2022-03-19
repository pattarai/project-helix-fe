import { useHistory } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";

export default function Signup() {
  const history = useHistory();

  const back = () => {
    history.push("/");
  };

  const signpage = () => {
    history.push("/Signup");
  };

  return (
    <>
      <FadeIn>
        <p className="p-3">
          <Toggle />
        </p>
        <div
          className="d-flex align-items-center justify-content-center main-bg w-100"
          style={{ height: "80vh" }}
        >
          <div className="cus-page welcome-text">
            <h4>SETUP YOUR PROFILE</h4>
            <form>
              <lable>USER NAME</lable>
              <br />
              <input type="text"></input>
              <br />
              <lable>EMAIL ID</lable>
              <br />
              <input type="text"></input>
              <br />
              <lable>PASSWORD</lable>
              <br />
              <input type="password" />
              <br />
              <lable>CONFIRM PASSWORD</lable>
              <br />
              <input type="password" />
            </form>
            <div className="d-flex">
              <button className="button customButton mt-3" onClick={back}>
                BACK
              </button>
              <button
                className="button customButton customb mt-3 ms-auto"
                onClick={signpage}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
      <Particles />
    </>
  );
}
