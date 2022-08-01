import React from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

export default function Header({ handleClick, currentMode }) {
  return (
    <header className="header">
      <h1
        className={
          "title " + ((currentMode === "false" && "dark-white") || " ")
        }
      >
        devfinder
      </h1>
      <button
        className={
          currentMode === "true" ? "change-mode" : "change-mode dark-mode"
        }
        onClick={handleClick}
      >
        {currentMode === "true" ? "DARK" : "LIGHT"}

        {currentMode === "false" ? (
          <BsMoonFill className="change-mode-icon" />
        ) : (
          <BsFillSunFill className="change-mode-icon" />
        )}
      </button>
    </header>
  );
}
