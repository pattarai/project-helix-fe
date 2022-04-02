import { useHistory } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [auth, setAuth] = useState({});
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZ2lzcmF5bW9uZEBnbWFpbC5jb20iLCJ1c2VySWQiOjEzLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY0NzI4MjM4OCwiZXhwIjoxNjQ3MzI1NTg4fQ.92xsz629tTybKvaxAWEmiE6GujPKNogF0KXnMScaFdI";

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const history = useHistory();

  const back = () => {
    history.push("/");
  };

  const logIn = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      let obj = setAuth(auth);
      if (auth.name) {
        console.log();
      }
    }
    axios
      .post("http://localhost:5000/v1/auth/login", {
        email: "cool@gmail.com",
        password: "cool@2003",
      })
      .then(function (response) {
        console.log(response);
        history.push("/live");
      })
      .catch(function (error) {
        console.log(error);
      });
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
            <h3>HELLO, WELCOME BACK</h3>
            <form>
              <lable>EMAIL ID</lable>
              <br />
              <input type="text"></input>
              <br />
              <lable>PASSWORD</lable>
              <br />
              <input type="password" />
            </form>
            <div className="d-flex">
              <button className="button customButton mt-3" onClick={back}>
                BACK
              </button>
              <button
                className="button customButton customb mt-3 ms-auto"
                onClick={logIn}
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
