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
              <h3>User Information</h3>
            <p>NAME</p>
            <p>email id</p>
              <div className="d-flex">
              <button
                className="button customButton mt-3"
                onClick={back}
              >
                BACK
              </button>
              
              </div>
            </div>
          </div>
        </FadeIn>
        <Particles />
      </>
    );
  }
  