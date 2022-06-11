import React, { Component, useEffect, useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/my-self-style.css";
import Self from "./Assets/self.gif";
import Aos from "aos";
import "aos/dist/aos.css";
function MySelf() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="MySelfPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          My
          <span className="prim-color"> Self</span>
        </h1>
      </div>

      <div className="my-self-section" data-aos-once="true" data-aos="fade-up">
        <div>
          <img src={Self} />
        </div>
        <div>
          <p>
            I would like to join a organization, where I can use my strengths to
            grow myself as well as the organization. I always try to learn new
            things, to enhance my knowledge. I wanted to be the best at my work
            and I am confident I will be.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MySelf;
