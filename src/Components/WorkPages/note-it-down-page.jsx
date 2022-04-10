import React from "react";
import "../CSS/main-style.css";
import "../CSS/comps-styles.css";
import "../CSS/case-study-page.css";

import MakeNoteSS from "../Assets/WorkSS/dash_ss.png";
import AllNotes from "../Assets/WorkSS/all_notes.png";
import Expense from "../Assets/WorkSS/expense.png";
import Password from "../Assets/WorkSS/password.png";
import Tasks from "../Assets/WorkSS/tasks.png";

function NoteItDownPage() {
  return (
    <div className="make-it-centered">
      <div className="CaseStudyPage">
        <div className="case-study-header d-flex-ac">
          <a href="/">
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
          </a>
          <h1>Note It Down</h1>
        </div>
        <div className="case-study-para">
          <p>
            Most of the time, I work on some ideas and get into some important
            issues or solutions but I need to note all this things somewhere,
            and that's what my project is - NoteItDown. So You can wite notes,
            you can add your expenses and your tasks. All at one place.
          </p>
          <div className="case-study-section">
            <img src={MakeNoteSS} alt="" />
            <span>
              <div className="case-study-header">
                <h1>Dashboard</h1>
              </div>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - NoteItDown. So You
                can wite notes, you can add your expenses and your tasks. All at
                one place.
              </p>
            </span>
          </div>

          <div className="case-study-section">
            <img src={AllNotes} alt="" />
            <span>
              <div className="case-study-header">
                <h1>Note It Down</h1>
              </div>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - NoteItDown. So You
                can wite notes, you can add your expenses and your tasks. All at
                one place.
              </p>
            </span>
          </div>

          <div className="case-study-section">
            <img src={Tasks} alt="" />
            <span>
              <div className="case-study-header">
                <h1>Note It Down</h1>
              </div>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - NoteItDown. So You
                can wite notes, you can add your expenses and your tasks. All at
                one place.
              </p>
            </span>
          </div>

          <div className="case-study-section">
            <img src={Expense} alt="" />
            <span>
              <div className="case-study-header">
                <h1>Note It Down</h1>
              </div>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - NoteItDown. So You
                can wite notes, you can add your expenses and your tasks. All at
                one place.
              </p>
            </span>
          </div>

          <div className="case-study-section">
            <img src={Password} alt="" />
            <span>
              <div className="case-study-header">
                <h1>Note It Down</h1>
              </div>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - NoteItDown. So You
                can wite notes, you can add your expenses and your tasks. All at
                one place.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItDownPage;
