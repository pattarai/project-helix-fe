import { useHistory } from "react-router-dom";
import FadeIn from "../animations/FadeIn";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";
import Login from "./Login";

export default function UserProfile() {
  const history = useHistory();

  const back = () => {
    history.push("/");
  };

  return <></>;
}
