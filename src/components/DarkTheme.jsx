import { setLocalTheme } from "../pages/theme";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

export default function Toggle() {
  const [btnImage, setBtnImage] = useState(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      return "H E L I X";
    } else if (localStorage.getItem("theme") === "theme-light") {
      return "H E L I X";
    } else {
      return "H E L I X";
    }
  });

  useEffect(() => {
    setLocalTheme("theme-light");
  }, []);

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-light") {
      setLocalTheme("theme-dark");
      setBtnImage("H E L I X");
    } else {
      setLocalTheme("theme-light");
      setBtnImage("H E L I X");
    }
  };

  return (
    <>
      <Button class="themeButton logoButton" onClick={handleOnClick}>
        {btnImage}
      </Button>
    </>
  );
}
