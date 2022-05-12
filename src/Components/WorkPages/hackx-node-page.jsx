import React, { useState, useEffect } from "react";
import "../CSS/main-style.css";
import "../CSS/comps-styles.css";
import "../CSS/case-study-page.css";

import MakeNoteSS from "../Assets/WorkSS/Dashboard.png";
import AllNotes from "../Assets/WorkSS/All Notes.png";
import Expense from "../Assets/WorkSS/Expenses.png";

import SSAlbum from "../Helpers/ss-album";

function HackxPage() {
  const [ images, _setImages ] = useState([
    {
      img: MakeNoteSS,
      details: "lorem1",
    },

    {
      img: AllNotes,
      details: "lorem2",
    },

    {
      img: Expense,
      details: "lorem3",
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
          <h1>HACK-X Node</h1>
        </div>
        <div className="case-study-para">
          <p>
            Most of the time, I work on some ideas and get into some important
            issues or solutions but I need to note all this things somewhere,
            and that's what my project is - NoteItDown. So You can wite notes,
            you can add your expenses and your tasks. All at one place.
          </p>
        </div>

        {/* <SSAlbum images={images} /> */}

        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Technologies Used</h2>
          </div>
          <div className="c-info">
            <p>
              It is web app, and I used Javascripts’s REACT JS library for
              frontend part and for the backend part i used javascripts web app
              framework express js.
            </p>
          </div>
        </div>

        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Use Case</h2>
          </div>
          <div className="c-info">
            <p>
              As I stated earlier, it is web app which is used for security
              testing of digital assets like, websites, web apps, network,
              mobile apps or apis.
            </p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Challenges Faced</h2>
          </div>
          <div className="c-info">
            <p>
              Actually i faced lots of problems while i was working on this
              project. But I can not disclose as this is not my personal project
              but eventually i solved all the issues which i was facing. and
              that was so proud moment for me but i continued to getting errors
              and frustrating comlications in coding but i had never given up
              and ultimately i was always able to came up with some work around
              for that particular problem.
            </p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>New Learnings</h2>
          </div>
          <div className="c-info">
            <p>
              Lots of, to tell in short I learnt how to optimise my code, and
              make all functionalities efficient. One of my favourite thing i
              learnt is to make re usable components which we can use on
              multiple places with different parameters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackxPage;
