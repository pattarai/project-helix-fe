import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import LiveStream from "./pages/LiveStream";
import Error404 from "./pages/Error404";
import PrivateRoute from "./PrivateRoute";
import RecordedVids from "./pages/RecordedVids";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/live" component={LiveStream} />
       <Route exact path="/404" component={Error404} />
       <Route exact path="/record" component={RecordedVids} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}