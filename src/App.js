import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LiveStream from "./pages/LiveStream";
import Error404 from "./pages/Error404";
import UserProfile from "./pages/UserProfile.jsx";
import PrivateRoute from "./PrivateRoute";
import { checkTheme } from "./pages/theme";

export default function App() {
  useEffect(() => {
    checkTheme();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/live" component={LiveStream} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/profile" component={UserProfile} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
