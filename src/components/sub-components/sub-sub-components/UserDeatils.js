import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsTwitter, BsBuilding } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";

export default function UserDetails({ currentMode, user }) {
  let date = new Date(user.created_at);
  const dateArray = date.toDateString().slice(4).split(" ");
  date = `${dateArray[1]} ${dateArray[0]} ${dateArray[2]}`;
  const repoDetailsArray = [user.public_repos, user.followers, user.following];

  return (
    <>
      <div
        className={"user " + ((currentMode === "LIGHT" && "dark-white") || "")}
      >
        <div className="md-margin">
          <p className="name">{user.name || "null"}</p>
          <p className="login">
            @<span>{user.login || "null"}</span>
          </p>
        </div>
        <span
          className={
            "created-at " + ((currentMode === "LIGHT" && "dark-white") || "")
          }
        >
          Joined <span>{dateArray[0] === "lid" ? "null" : date}</span>
        </span>
      </div>

      <div
        className={
          "user-details " + ((currentMode === "LIGHT" && "dark-white") || "")
        }
      >
        <p className="bio">{user.bio || "This profile has no bio"}</p>
        <div
          className={
            "repo-details-container " +
            ((currentMode === "LIGHT" && "dark-container") || "")
          }
        >
          <table className="repo-details">
            <thead className="thead">
              <tr>
                <th>Repos</th>
                <th>Followers</th>
                <th>Following</th>
              </tr>
            </thead>
            <tbody
              className={
                "tbody " + ((currentMode === "LIGHT" && "dark-white") || "")
              }
            >
              <tr>
                {repoDetailsArray.map((item, key) => {
                  return <td key={key}>{item}</td>;
                })}
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="other-lists ">
          <li className={"other-list " + (!user.location && "other")}>
            <MdLocationOn className="other-list-icon" />
            {user.location || "Not available"}
          </li>
          <li className={"other-list " + (!user.twitter_username && "other")}>
            <BsTwitter className="other-list-icon" />
            <a
              href="www.twitter.com"
              className={
                "other-list-link twitter-name " +
                ((currentMode === "LIGHT" &&
                  user.twitter_username &&
                  "dark-link ") ||
                  "") +
                (!user.twitter_username && "other-link")
              }
            >
              {user.twitter_username || "Not available"}
            </a>
          </li>
          <li className={"other-list " + (!user.blog && "other")}>
            <ImAttachment className="other-list-icon" />
            <a
              href="www.blog.com"
              className={
                "other-list-link blog " +
                ((currentMode === "LIGHT" && user.blog && "dark-link ") || "") +
                (!user.blog && "other-link")
              }
            >
              {user.blog || "Not available"}
            </a>
          </li>
          <li className={"other-list " + (!user.company && "other")}>
            <BsBuilding className={"other-list-link building"} />
            {user.company || "Not available"}
          </li>
        </ul>
      </div>
    </>
  );
}
