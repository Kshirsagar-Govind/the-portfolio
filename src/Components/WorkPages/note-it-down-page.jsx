import React, { useState, useEffect } from "react";
import "../CSS/main-style.css";
import "../CSS/comps-styles.css";
import "../CSS/case-study-page.css";

import ReactLogo from "../Assets/React_logo.png";
import NodeLogo from "../Assets/node_js_logo.png";
import ReduxLogo from "../Assets/Redux_logo.png";
import MongoDB from "../Assets/MongoDB_logo.png";

import MakeNoteSS from "../Assets/WorkSS/Dashboard.png";
import AllNotes from "../Assets/WorkSS/All Notes.png";
import Expense from "../Assets/WorkSS/Expenses.png";
import Password from "../Assets/WorkSS/password.png";
import Tasks from "../Assets/WorkSS/tasks.png";
import SSAlbum from "../Helpers/ss-album";

function NoteItDownPage() {
  const [ images, _setImages ] = useState([
    {
      img: MakeNoteSS,
      title: "Dashboard",
      details: `This is dashboard of the application,
      here user can see expense of current month in grpah chart
      and some other details in different charts.
      `,
    },

    {
      img: AllNotes,
      title: "All Notes",
      details: `Here User can add new notes, and can see previously added notes.`,
    },
    {
      img: Tasks,
      title: "Tasks",
      details: `In this tab user can add tasks, and can tick the tasks which are completed .`,
    },
    {
      img: Expense,
      title: "Expense",
      details: `In thi expenses tab, user can see his expeditures. And obviously he can add more expenses.
      And from on the dashboard he can see overview of this expense.`,
    },

    {
      img: Password,
      title: "Password",
      details: `So here user can save he's passwords. And can edit his password if needed.`,
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
              stroke="#000000"
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
          <h1>Note It Down</h1>
        </div>
        <div className="case-study-para">
          <p>
            We have lot's of things to note in everyday, so simple application I
            made in react where we can add notes, expense, save password and can
            add tasks.
          </p>

          <button
            onClick={() => {
              window.open("https://note-it-down-project.vercel.app/");
            }}
          >
            See Website
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              window.open(
                "https://github.com/Kshirsagar-Govind/note-it-down-project"
              );
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
              Seems similar to Make Note app? Wait... Yes it is. but to some
              extent, let me explain This app allows user to add notebook in
              which user can add notes and keep multiple notebook with mulitple
              notes inside notebooks. I made this project in my early time when
              i was learning optimization of codes and fetching data from
              database and posting data to database.
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
              I faced most of the problems on backend. Like renaming notes,
              editing and then saving that edited notes.
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

export default NoteItDownPage;
