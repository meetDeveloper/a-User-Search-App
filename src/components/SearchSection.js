import React from "react";
import { GrSearch } from "react-icons/gr";

export default function SearchSection({ currentMode, handleEvent, user }) {
  const [searchString, setSearchString] = React.useState("");

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  return (
    <section className={"search-section  " + (!user && "not-found")}>
      <GrSearch className="magnifying-glass" />
      <input
        type="text"
        className={
          "input " + ((currentMode === "false" && "dark-blue dark-white") || "")
        }
        placeholder="Search GitHub username..."
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleEvent(searchString);
          }
        }}
        value={searchString}
      />
      <button
        className="submit-btn"
        onClick={() => {
          handleEvent(searchString);
        }}
      >
        Search
      </button>
    </section>
  );
}
