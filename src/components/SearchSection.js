import React from "react";
import { GrSearch } from "react-icons/gr";

export default function SearchSection({
  currentMode,
  handleChange,
  handleEvent,
  searchstring,
  user,
}) {
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
        onKeyPress={function (e) {
          if (e.key === "Enter") {
            handleEvent(searchString);
          } else {
            return;
          }
        }}
        value={searchString}
      />
      <button
        className="submit-btn"
        onClick={function () {
          handleEvent(searchString);
        }}
        disabled={user ? false : true}
      >
        Search
      </button>
    </section>
  );
}
