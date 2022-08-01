import React from "react";

export default function Container({ children, currentMode }) {
  return (
    <div
      className={
        "outer-container " +
        ((currentMode === "LIGHT" && "dark-container") || " ")
      }
    >
      {children}
    </div>
  );
}
