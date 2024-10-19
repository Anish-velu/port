import avatar from "../Assets/avatar.jpeg";
import Button from "./Button";
import Highlights from "./Highlights";
import git from "../Assets/git-logo.png"
import leetcode from "../Assets/leetcode.webp"
import insta from "../Assets/insta logo.jpeg"
import hackrank from "../Assets/HackerRank_logo.png"

import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="avatar-status-circle">
        <img src={avatar} className="avatar-profile" alt="" />
      </div>

      <h4 className="avatar-name">Anish </h4>
      <h6>Web-Devloper</h6>
      <p className="avatar-degree">Computer Science Engineer</p>

      <div>
        <button className="custom-button-cv">Download CV</button>
        <button className="custom-button">Mail</button>
        <button className="custom-button-extn">↓</button>
      </div>

      <div className="highlights-container">
        <div className="highlights">
          <img src={git} alt="" />
          <div className="status-circle"></div>
          <p>descripton</p>
        </div>

        <div className="highlights">
          <img src={leetcode} alt="" />
          <div className="status-circle"></div>
          <p>descripton</p>
        </div>

        <div className="highlights">
          <img src={insta} alt="" />
          <div className="status-circle"></div>
          <p>descripton</p>
        </div>

        <div className="highlights">
          <img src={hackrank} alt="" />
          <div className="status-circle"></div>
          <p>descripton</p>
        </div>
      </div>

      {/* <Highlights />
      <Highlights />
      <Highlights />
      <Highlights /> */}
    </div>
  );
}
