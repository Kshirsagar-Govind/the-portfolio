import React, { Component, useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/get-in-touch-style.css";
import ContactPic from "../Components/Assets/contact_me.png";

function GetInTouch() {
  const [ subject, _setSubject ] = useState("");
  const [ body, _setBody ] = useState("");
  const [ myEmail, _setMyEmail ] = useState("kshirsagar.govind@outlook.com");
  const sendMail = () => {
    if (subject == "" || body == "") {
      return alert("Empty Field Not Allowed");
    }
    window.open(`mailto:${myEmail}?subject=${subject}&body=${body}`);
  };
  return (
    <div className="MySelfPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          Let's
          <span className="prim-color"> Talk</span>
        </h1>
      </div>
      <div className="get-in-touct-section">
        <img src={ContactPic} alt="" />
        <div className="form">
          <div className="input-div">
            <label>Your Name</label>
            <input type="text" placeholder="enter your name" />
          </div>
          <div className="input-div">
            <label>Your Email</label>
            <input type="email" placeholder="enter your email" />
          </div>
          <div className="input-div">
            <label>Your Subject </label>
            <input
              type="text"
              placeholder="enter subject"
              value={subject}
              onChange={e => _setSubject(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="enter message"
              value={body}
              onChange={e => _setBody(e.target.value)}
            />
          </div>
          <div className="make-it-centered">
            {/* <input className="submit-button" type="submit" value="Submit" /> */}
            <button className="submit-button" onClick={() => sendMail()}>
              Start The Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//

export default GetInTouch;
