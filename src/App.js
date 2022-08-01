import React from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent.js";

export default function App() {
  const [currentMode, setCurrentMode] = React.useState("true");

  function changeMode() {
    let set;
    if (currentMode === "true") {
      set = "false";
    } else {
      set = "true";
    }
    setCurrentMode(set);
  }
  return (
    <div
      className={
        "outer-container " +
        ((currentMode === "false" && "dark-container") || "")
      }
    >
      <div className="inner-container">
        <Header handleClick={changeMode} currentMode={currentMode} />
        <MainContent currentMode={currentMode} />
      </div>
    </div>
  );
}
