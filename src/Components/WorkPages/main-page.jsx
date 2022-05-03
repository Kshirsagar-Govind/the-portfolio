import React, { Component, useState } from "react";
import GetInTouch from "../GetInTOuchPage";
import HeroPage from "../HeroPage";
import MySelf from "../MySelfPage";
import MySkills from "../MySkillsPage";
import MyWork from "../MyWorkPage";
import NoteItDownPage from "./note-it-down-page";
import Illustration from "../Assets/coder.gif";
function MainPage() {
  const [ menu, set_menu ] = useState(true);
  const ShowMenu = () => {
    if (menu) {
      document.getElementById("mobile-navbar-section").style.transform =
        "scaleY(100%)";
      document.getElementById("mobile-navbar-section-menu").style.display =
        "block";
    } else {
      document.getElementById("mobile-navbar-section").style.transform =
        "scaleY(0%)";
      document.getElementById("mobile-navbar-section-menu").style.display =
        "none";
    }
    set_menu(!menu);
  };

  return (
    <div>
      {/* <HeroPage /> */}
      <div className="HeroPage">
        <div className="navbar-section">
          <div className="brand">
            <h3>
              portfol<span>io</span>
            </h3>
          </div>
          <div className="menus">
            <ul>
              <li>Home</li>

              <li>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="#skills"
                >
                  Skill
                </a>
              </li>

              <li>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="#experience"
                >
                  Experience
                </a>
              </li>

              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="mobile-navbar-section">
          <div className="brand">
            <h3>
              portfol<span className="prim-color">io</span>
            </h3>
            <div
              className={menu ? "menu-btn" : "menu-btn-open"}
              onClick={() => ShowMenu()}
            >
              <div />
              <div />
              <div />
            </div>
          </div>
          <div id="mobile-navbar-section" className="menus">
            <ul id="mobile-navbar-section-menu">
              <li>Home</li>

              <li>Skill</li>

              <li>Experience</li>

              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="hero-section">
          <div className="title-part">
            <h4>I am Govind Kshirsagar,</h4>
            <h1>
              UI/UX <span className="prim-color">DESIGN</span>ER
              <br />
              FULL STACK <span className="prim-color">DEVELOP</span>ER
            </h1>
            <button
              onClick={() => {
                window.open("mailto:govindkshgk@gmail.com?subject=&body=");
              }}
            >
              Hi
            </button>
          </div>
          <div className="illustration-part">
            <img src={Illustration} alt="" />
          </div>
        </div>
      </div>
      <div id="#skills">
        <MySkills />
      </div>
      <MyWork />
      <MySelf />
      <GetInTouch />
    </div>
  );
}

export default MainPage;
