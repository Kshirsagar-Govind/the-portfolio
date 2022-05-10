import React, { useState, useEffect } from "react";
import "../CSS/main-style.css";
import "../CSS/comps-styles.css";
import "../CSS/case-study-page.css";

import MakeNoteSS from "../Assets/WorkSS/Dashboard.png";
import AllNotes from "../Assets/WorkSS/All Notes.png";
import Expense from "../Assets/WorkSS/Expenses.png";
import Password from "../Assets/WorkSS/Password.png";
import Tasks from "../Assets/WorkSS/Tasks.png";
import SSAlbum from "../Helpers/ss-album";

function NoteItDownPage() {
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

    {
      img: Password,
      details: "lorem4",
    },

    {
      img: Tasks,
      details: "lorem5",
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
            Most of the time, I work on some ideas and get into some important
            issues or solutions but I need to note all this things somewhere,
            and that's what my project is - NoteItDown. So You can wite notes,
            you can add your expenses and your tasks. All at one place.
          </p>
        </div>

        <SSAlbum images={images} />
      </div>
    </div>
  );
}

export default NoteItDownPage;
