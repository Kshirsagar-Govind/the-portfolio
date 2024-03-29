import React, { useState, useEffect } from "react";
import "../CSS/main-style.css";
import "../CSS/comps-styles.css";
import "../CSS/case-study-page.css";
import MongoDB from "../Assets/MongoDB_logo.png";

import ReactLogo from "../Assets/React_logo.png";
import NodeLogo from "../Assets/node_js_logo.png";
import ReduxLogo from "../Assets/Redux_logo.png";
import CSSLogo from "../Assets/sass_logo.png";
import Note from "../Assets/WorkSS/note.png";
import Note_dash from "../Assets/WorkSS/note_dash.png";

import SSAlbum from "../Helpers/ss-album";
function MakeNotePage() {
  const [ images, _setImages ] = useState([
    {
      img: Note_dash,
      title: "Dashboard",
      details: `Simple dashboard, consisting of multiple notes which are created by user. And new notes can be added, and old notes can be edited.`,
    },
    {
      img: Note,
      title: "Notes",
      details: `View when user opens a note, here he can continue he's note writing and can rename or edit note.`,
    },
  ]);
  // useEffect = (() => {}, [ curr_img_index ]);
  const [ curr_img_index, _set_Index ] = useState(0);
  const next = () => {
    if (curr_img_index < images.length - 1)
      _set_Index(curr_img_index => curr_img_index + 1);
  };

  const prev = () => {
    if (curr_img_index > 0) _set_Index(curr_img_index => curr_img_index - 1);
  };

  return (
    <div className="make-it-centered">
      <div className="CaseStudyPage">
        <div className="case-study-header d-flex-ac">
          <button className="back-btn" onClick={() => window.history.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-left"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="9" y2="16" />
              <line x1="5" y1="12" x2="9" y2="8" />
            </svg>
          </button>

          {/* <a href="/">
           
          </a> */}
          <h1>Make Note</h1>
        </div>
        <div className="case-study-para">
          <p>
            Most of the time, I work on some ideas and get into some important
            issues or solutions but I need to note all this things somewhere,
            and that's what my project is - Make Not. This is similar to Note It
            Down project to the some extent.
          </p>
          <button
            onClick={() => {
              window.open("https://make-note.vercel.app/");
            }}
          >
            See Website
          </button>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              window.open("https://github.com/Kshirsagar-Govind/make-note-app");
            }}
          >
            Git Repo
          </button>
        </div>

        <SSAlbum images={images} />

        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Technologies Used</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              Medium scaled web app, I used MERN stack for this app. Some charts
              apis like graph and pie chart.
              <ul>
                <li>
                  <img src={ReactLogo} alt="" />
                </li>

                <li>
                  <img src={NodeLogo} alt="" />{" "}
                </li>

                <li>
                  <img src={ReduxLogo} alt="" />{" "}
                </li>
                <li>
                  <img src={CSSLogo} alt="" />{" "}
                </li>
                <li>
                  <img src={MongoDB} alt="" />{" "}
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Use Case</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              For me this was project for my skill testing. But as user it ahs
              quite good uses like
              <span>
                <li>Adding Tasks</li>
                <li>Adding Passwords</li>
                <li>Adding Notes</li>
                <li>Adding Expenses</li>
              </span>
              Additional Features for user I took inspiration from google keep,
              where user can add tasks and can give different colors to that
              tasks. So in this project I have implemented that functionality
              where user can give different background color shades to the
              tasks.
            </p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Challenges Faced</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              Honestly I did faced any major problems in this project as this
              project is not that large scaled. But that different color shades
              feature was something which took some extra time while
              implementing this project.
            </p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>New Learnings</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              As always first learning was, optimization of codes with different
              ways, code cleanlyness. And I enjoyed implementing all of the
              features for this project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeNotePage;
