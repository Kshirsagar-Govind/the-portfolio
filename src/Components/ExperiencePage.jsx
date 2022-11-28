import React, { Component, useEffect, useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/my-self-style.css";
import Aos from "aos";
import "aos/dist/aos.css";

function ExperiencePage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="MyWorkPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          Work
          <span className="prim-color"> Experience</span>
        </h1>
      </div>
      <div className="exp-section" data-aos="fade-in" data-aos-once="true">
        <h3>HACK-X Security, Pune</h3>
        <h4>May 2021 - November 2022</h4>
        <p>
          I am working here as a Software Developer. Just before final exams, I
          got a job at HACK-X Security startup. So, I am here from May 2021 at
          this company. <br /> I have the responsibility of developing and
          designing the websites and web applications. Specifically, we are
          using MERN stack for development. <br />
          My work includes:<br /> <br />
          <u style={{ textDecoration: "none" }}>
            <li>Deploying websites and web apps to AWS.</li>

            <li>Maintaining The web applicatio and websites.</li>

            <li>Creating reusable or efficient React components.</li>

            <li>Designing better UX/UI designs.</li>
          </u>
        </p>
      </div>
    </div>
  );
}

export default ExperiencePage;
