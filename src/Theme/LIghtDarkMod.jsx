import React, { useState } from "react";
import useLocalTheme from "./useLocalTheme";
import "./style.css"
function LIghtDarkMod() {
  const [Theme, setTheme] = useLocalTheme("theme", "dark");
  const handleToggleTheme = () => {
    setTheme(Theme === "light" ? "dark" : "light");
    console.log(Theme);
  };
  return (
    <div className="main" data-theme={Theme} >
      <h1>hello world !</h1>
      <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  );
}

export default LIghtDarkMod;
