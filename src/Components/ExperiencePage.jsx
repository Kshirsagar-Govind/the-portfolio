import React, { Component, useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/my-self-style.css";

function ExperiencePage() {
  return (
    <div className="MyWorkPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          Work
          <span className="prim-color"> Experience</span>
        </h1>
      </div>
      <div className="exp-section">
        <h3>HACK-X Security, Pune</h3>
        <h4>May 2021 - Present </h4>
        <p>
          I am working here as Software Developer, just before final exams I got
          job in HACK-X Security startup. So, I am here from May 2021 in this
          company, I am having the responsibilities of developing and designing
          the websites and web applications. Specifically we are using MERN
          stack for development. <br />
          My Work includes: <br /> <br />
          <u style={{ textDecoration: "none" }}>
            <li>Deploying websites and web apps to AWS.</li>

            <li>Applying react-redux and socket for realtime data changes.</li>

            <li>Creating reusable React components.</li>

            <li>Designing better UX/UI designs in figma.</li>
          </u>
        </p>
      </div>
    </div>
  );
}

export default ExperiencePage;
