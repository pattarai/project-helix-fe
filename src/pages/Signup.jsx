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
    admin: false,
    token: "",
  });
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signUp = () => {
    axios
      .post("http://localhost:5000/v1/auth/signup", {
        name: auth.name,
        email: auth.email,
        password: password,
        admin: false,
      })
      .then((response) => {
        setAuth({
          ...auth,
          token: response.data.token,
          name: response.data.createdUser.name,
          email: response.data.createdUser.email,
          admin: response.data.createdUser.admin,
        });
        localStorage.setItem("auth", JSON.stringify(auth));
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
        <div className="d-flex justify-content-center align-items-center flex-column vh-75">
          <div className="form-group">
            <form className="d-flex justify-content-center flex-column">
              <label className="form-label">Username</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setAuth({ ...auth, name: e.target.value })}
              />
              <label className="form-label">Email id</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
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
            onClick={signUp}
          >
            SignUp
          </button>
        </div>
      </FadeIn>
    </>
  );
}
