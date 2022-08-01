import React from "react";
import { GrSearch } from "react-icons/gr";

export default function SearchSection({
  currentMode,
  handleChange,
  handleEvent,
  searchstring,
  user,
}) {
  return (
    <section className={"search-section  " + (!user && "not-found")}>
      <GrSearch className="magnifying-glass" />
      <input
        type="text"
        className={
          "input " + ((currentMode === "LIGHT" && "dark-blue dark-white") || "")
        }
        placeholder="Search GitHub username..."
        onChange={handleChange}
        onKeyPress={function (e) {
          if (e.key === "Enter") {
            handleEvent();
          } else {
            return;
          }
        }}
        value={searchstring}
      />
      <button
        className="submit-btn"
        onClick={handleEvent}
        disabled={user ? false : true}
      >
        Search
      </button>
    </section>
  );
}
