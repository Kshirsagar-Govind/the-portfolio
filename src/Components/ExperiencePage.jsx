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
        <h3>⦾ HACK-X Security, Pune</h3>
        <h4>May 2021 - November 2022</h4>
        <p>
          I worked there as a Software Developer. <br /> I had the
          responsibilities of developing and designing the websites and web
          applications. Specifically, we were using MERN stack for the
          development. <br /> <br />
          My work includes:<br />
          <u style={{ textDecoration: "none" }}>
            <li>Deploying websites and web apps to AWS.</li>
            <li>Maintaining The web applicatio and websites.</li>
            <li>Creating reusable or efficient React components.</li>
            <li>Designing better UX/UI designs.</li>
          </u>
        </p>
      </div>
      <br />
      <br />
      <div className="exp-section" data-aos="fade-in" data-aos-once="true">
        <h3>⦾ medtigo, Pune</h3>
        <h4>Dec 2022 - Present</h4>
        <p>
          I am working here as a MERN stack Developer. <br />
          <br />
          My work includes:<br />
          <u style={{ textDecoration: "none" }}>
            <li>Maintaining The web applicatio and websites.</li>
            <li>Creating reusable or efficient React components.</li>
          </u>
        </p>
      </div>
    </div>
  );
}

export default ExperiencePage;
