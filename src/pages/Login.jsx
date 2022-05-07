import { useHistory } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import Toggle from "../components/DarkTheme";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState();
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
        email: email,
        password: password,
      })
      .then(function (response) {
        const auth = {
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.token,
          admin: response.data.user.admin,
        };
        localStorage.setItem("auth", JSON.stringify(auth));
        history.push("/live");
      })
      .catch(function (error) {
        if (error.response.data["errorMessage"] == "Invalid Email") {
          alert("Invalid Email");
        } else if (error.response.data["errorMessage"] == "Invalid Password") {
          alert("Invalid Password");
        }
      });
  };

  return (
    <>
      <FadeIn>
        <p className="p-3">
          <Toggle />
        </p>
        <div className="d-flex justify-content-center align-items-center flex-column vh-75">
          <div className="form-group">
            <form className="d-flex justify-content-center flex-column">
              <label className="form-label">Email id</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label mt-3">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
          </div>
          <button
            className="btn customButton align-self-center mt-3"
            onClick={logIn}
          >
            Login
          </button>
        </div>
      </FadeIn>
    </>
  );
}
