import { useHistory } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";

export default function Login() {
    const history = useHistory();
  
    const back = () =>{
      history.push("/");
    }
  
    const loginpage= () =>{
      history.push("/login");
    }
  
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
            <div className="cus-page">
              <h3>HELLO, WELCOME BACK</h3>
            <form>
              <lable>EMAIL ID</lable><br/>
              <input type="text"></input><br/>
              <lable>PASSWORD</lable><br/>
              <input type="password"/>
            </form>
              <div className="d-flex">
              <button
                className="button customButton mt-3"
                onClick={back}
              >
                BACK
              </button>
              <button
                className="button customButton customb mt-3 ms-auto"
                onClick={loginpage}
              >
                LOGIN
              </button>
              </div>
            </div>
          </div>
        </FadeIn>
        <Particles />
      </>
    );
  }
  