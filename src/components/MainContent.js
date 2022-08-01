import React from "react";

import SearchSection from "./SearchSection";
import ProfileSection from "./ProfileSection";

export default function MainContent({ currentMode }) {
  const [user, setUser] = React.useState(" ");

  function handleEvent(searchstring) {
    if (!searchstring) return;

    const request = new XMLHttpRequest();
    request.open("GET", `https://api.github.com/users/${searchstring}`);
    request.send();

    request.addEventListener("load", () => {
      // eslint-disable-next-line no-shadow
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
        handleEvent={handleEvent}
        user={user}
      />
      <ProfileSection currentMode={currentMode} user={user} />
    </main>
  );
}
