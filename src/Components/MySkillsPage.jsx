import React, { useEffect } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/skills-page-style.css";
import CSSLogo from "./Assets/CSS_logo.png";
import HTMLLogo from "./Assets/HTML_logo.png";
import Firebase_logo from "./Assets/Firebase_logo.png";
import JavaLogo from "./Assets/Java_log.png";
import JSLogo from "./Assets/Javascript_logo.png";
import MongoLogo from "./Assets/MongoDB_logo.png";
import SQLLogo from "./Assets/MySQL_logo.png";
import NodeLogo from "./Assets/node_js_logo.png";
import ReactLogo from "./Assets/React_logo.png";
import ReduxLogo from "./Assets/Redux_logo.png";
import SocketLogo from "./Assets/socket_logo.png";
import CPPLogo from "./Assets/c++_icon.png";
import Aos from "aos";
import "aos/dist/aos.css";
function MySkills() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div id="skills" className="MySkillsPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          My
          <span className="prim-color"> Skills</span>
        </h1>
      </div>
      <div className="skill-section" data-aos="fade-up" data-aos-once="true">
        <div className="skills-part-1">
          <div className="skill-1-wrapper">
            <div className="s-1-circle">
              <img src={JSLogo} alt="" />
            </div>
            <div className="s-1-detail">
              <h1>Javascript</h1>
              {/* <p>details</p> */}
            </div>
          </div>

          <div className="skill-1-wrapper">
            <div className="s-1-circle">
              <img src={ReactLogo} alt="" />
            </div>
            <div className="s-1-detail">
              <h1>React JS</h1>
              {/* <p>details</p> */}
            </div>
          </div>

          <div className="skill-1-wrapper">
            <div className="s-1-circle">
              <img src={NodeLogo} alt="" />
            </div>
            <div className="s-1-detail">
              <h1>Node JS</h1>
              {/* <p>details</p> */}
            </div>
          </div>

          <div className="skill-1-wrapper">
            <div className="s-1-circle">
              <img src={MongoLogo} width="50" alt="" />
            </div>
            <div className="s-1-detail">
              <h1>Mongo DB</h1>
              {/* <p>details</p> */}
            </div>
          </div>
        </div>

        <div className="skills-part-1">
          {Skills2.map(item => (
            <div className="skill-2-wrapper">
              <span>
                <div className="s-2-icon">
                  <img src={item.img} alt="" />
                </div>
                <div className="s-2-text">
                  <h1>{item.text}</h1>
                </div>
              </span>
              <div className={item.class} />
            </div>
          ))}
        </div>
        <div className="" />
      </div>
    </div>
  );
}

export default MySkills;
const Skills2 = [
  {
    img: HTMLLogo,
    text: "HTML",
    class: "s-2-line",
  },

  {
    img: CSSLogo,
    text: "CSS",
    class: "s-2-line",
  },

  {
    img: SocketLogo,
    text: "Socket.io",
    class: "s-2-line",
  },

  {
    img: ReduxLogo,
    text: "React Redux",
    class: "s-2-line",
  },

  {
    img: JavaLogo,
    text: "JAVA",
    class: "s-2-line",
  },

  {
    img: CPPLogo,
    text: "C++",
    class: "s-2-line",
  },

  {
    img: SQLLogo,
    text: "SQL",
    class: "s-2-line",
  },

  {
    img: Firebase_logo,
    text: "Firebase",
    class: "s-2-line",
  },
];
