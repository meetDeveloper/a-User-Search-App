import React from "react";

import UserDetails from "./UserDetails";

export default function ProfileSection({ currentMode, user }) {
  return (
    <section
      className={
        "profile-section " +
        ((currentMode === "false" && "dark-blue ") || "") +
        (user !== " " && user ? "" : "hide")
      }
    >
      <img
        src={
          user.avatar_url ||
          "https://avatars.githubusercontent.com/u/583231?v=4"
        }
        className="avatar"
        width="117px"
        height="117px"
        alt="avatar"
      />
      <UserDetails currentMode={currentMode} user={user} />
    </section>
  );
}
