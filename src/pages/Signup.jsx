import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";
import axios from "axios";

export default function Signup() {
  const [auth, setAuth] = useState({
    name: "",
    email: "",
    password: "",
    admin: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const back = () => {
    history.push("/");
  };

  useEffect(() => {
    console.log(auth);
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const signUp = () => {
    axios
      .post("http://localhost:5000/v1/auth/signup", {
        name: name,
        email: email,
        password: password,
        institute: "Loyola-ICAM",
        department: "CSE",
        year: 4,
        admin: false,
      })
      .then((response) => {
        setAuth({
          name: name,
          email: email,
          password: password,
          admin: false,
        });
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
          <div className="cus-page">
            <h4>SETUP YOUR PROFILE</h4>
            <form>
              <lable>USER NAME</lable>
              <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br />
              <lable>EMAIL ID</lable>
              <br />
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />
              <lable>PASSWORD</lable>
              <br />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
                onClick={signUp}
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
