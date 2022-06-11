import React, { Component, useState, useEffect } from "react";
import GetInTouch from "../GetInTOuchPage";
import HeroPage from "../HeroPage";
import MySelf from "../MySelfPage";
import MySkills from "../MySkillsPage";
import MyWork from "../MyWorkPage";
import NoteItDownPage from "./note-it-down-page";
import Illustration from "../Assets/coder.gif";
import ExperiencePage from "../ExperiencePage";
import Aos from "aos";
import "aos/dist/aos.css";
function MainPage() {
  const [ menu, set_menu ] = useState(true);
  const [ shadow, set_shadow ] = useState(true);
  const [ y, setY ] = useState(window.scrollY);

  useEffect(
    () => {
      Aos.init({ duration: 2000 });
      window.addEventListener("scroll", e => handleNavigation(e));

      return () => {
        // return a cleanup function to unregister our function since its gonna run multiple times
        window.removeEventListener("scroll", e => handleNavigation(e));
      };
    },
    [ y ]
  );
  const handleNavigation = () => {
    set_shadow(false);
  };
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
        <div className="fixed-navbar">
          <div className="navbar-section">
            <div className="brand">
              <h3>
                portfol<span>io</span>
              </h3>
            </div>
            <div className="menus">
              <ul>
                <li>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="#home"
                  >
                    Home
                  </a>
                </li>

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

                <li>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="#about"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
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
            <ul id="mobile-navbar-section-menu" />
            <ul>
              <li>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="#home"
                >
                  Home
                </a>
              </li>

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

              <li>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="#about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="home"
          className="hero-section"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="title-part">
            <h4>
              I am{" "}
              <span style={{ fontWeight: "500", textTransform: "uppercase" }}>
                {" "}
                Govind Kshirsagar
              </span>,
            </h4>
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
      <div id="skills">
        <MySkills />
      </div>

      <div id="experience">
        <ExperiencePage />
        <MyWork />
      </div>
      <div id="about">
        <MySelf />
      </div>
      <div id="contact">
        <GetInTouch />
      </div>
    </div>
  );
}

export default MainPage;
