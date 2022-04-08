import React, { Component, useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import Illustration from "./Assets/coder.gif";
function HeroPage() {
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

            <li>Skill</li>

            <li>Experience</li>

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
          <button>Hi</button>
        </div>
        <div className="illustration-part">
          <img src={Illustration} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
