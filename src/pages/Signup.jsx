import { useHistory } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";

export default function Signup() {
    const history = useHistory();
  
    const back = () =>{
      history.push("/");
    }
  
    const signpage= () =>{
      history.push("/Signup");
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
            <div className="text-center">
              <p className="mb-0">
                <span className="text-pattarai">PATTARAI</span>{" "}
                <span className="text-pattarai-s">'S</span>
              </p>
              <p className="title-word text-center">H E L I X</p>
              <button
                className="button customButton mt-3 mx-4"
                onClick={back}
              >
                BACK
              </button>
              <button
                className="button customButton customb mt-3 mx-5"
                onClick={signpage}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </FadeIn>
        <Particles />
      </>
    );
  }
  