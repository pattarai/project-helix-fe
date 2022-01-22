import { useState } from "react";
import { setLocalTheme } from "../pages/theme";

export default function Toggle() {
  const [btnImage, setBtnImage] = useState(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      return "🌛";
    } else if (localStorage.getItem("theme") === "theme-light") {
      return "🌞";
    } else {
      return "🌞";
    }
  });

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-light") {
      setLocalTheme("theme-dark");
      setBtnImage("🌛");
    } else {
      setLocalTheme("theme-light");
      setBtnImage("🌞");
    }
  };

  return (
    <>
      <button className="themeButton" onClick={handleOnClick}>
        {btnImage}
      </button>
    </>
  );
}
