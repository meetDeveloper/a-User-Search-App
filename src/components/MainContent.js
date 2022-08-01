import React from "react";
import SearchSection from "./sub-components/SearchSection";
import ProfileSection from "./sub-components/ProfileSection";

export default function MainContent({ currentMode }) {
  const [searchstring, setSearchString] = React.useState("");
  const [user, setUser] = React.useState(" ");

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function handleEvent() {
    if (!searchstring) return;
    const request = new XMLHttpRequest();
    request.open("GET", `https://api.github.com/users/${searchstring}`);
    request.send();

    request.addEventListener("load", function () {
      let user;
      if (request.status !== 200) {
        user = "";
        setUser(user);
        return;
      }
      user = JSON.parse(request.responseText);
      setUser(user);
    });
  }

  return (
    <main>
      <SearchSection
        currentMode={currentMode}
        searchstring={searchstring}
        handleChange={handleChange}
        handleEvent={handleEvent}
        user={user}
      />
      <ProfileSection currentMode={currentMode} user={user} />
    </main>
  );
}
