import React from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent.js";
import Container from "./Container";

export default function App() {
  const [currentMode, setCurrentMode] = React.useState("DARK");

  function changeMode() {
    let set;
    if (currentMode === "DARK") {
      set = "LIGHT";
    } else {
      set = "DARK";
    }
    setCurrentMode(set);
  }
  return (
    <Container currentMode={currentMode}>
      <div className="inner-container">
        <Header handleClick={changeMode} currentMode={currentMode} />
        <MainContent currentMode={currentMode} />
      </div>
    </Container>
  );
}
