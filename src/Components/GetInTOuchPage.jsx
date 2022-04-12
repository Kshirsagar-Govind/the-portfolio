import React, { Component, useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/get-in-touch-style.css";

function GetInTouch() {
  return (
    <div className="MySelfPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          Let's
          <span className="prim-color"> Talk</span>
        </h1>
      </div>
      <form>
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
            <label>Your Subject</label>
            <input type="text" placeholder="enter subject" />
          </div>
          <div>
            <textarea placeholder="enter message" />
          </div>
          <div className="make-it-centered">
            <input className="work-btn" type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default GetInTouch;
