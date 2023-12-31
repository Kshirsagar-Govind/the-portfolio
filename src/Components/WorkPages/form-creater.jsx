import React, { useState, useEffect } from "react";
import "../CSS/main-style.css";
import "../CSS/comps-styles.css";
import "../CSS/case-study-page.css";
import ReactLogo from "../Assets/React_logo.png";
import NodeLogo from "../Assets/node_js_logo.png";
import ReduxLogo from "../Assets/Redux_logo.png";
import CSSLogo from "../Assets/sass_logo.png";
import MongoDB from "../Assets/MongoDB_logo.png";

import Create from "../Assets/WorkSS/forms_create.png";
import Dashboard from "../Assets/WorkSS/forms_dash.png";
import Edit from "../Assets/WorkSS/forms_edit.png";

import SSAlbum from "../Helpers/ss-album";

function FormsPage() {
  const [ images, _setImages ] = useState([
    {
      img: Dashboard,
      title: "Dashboard Page",
      details: `All created forms`,
    },

    {
      img: Create,
      title: "Edit Forms",
      details: `Here we can edit created forms and save them.`,
    },

    {
      img: Edit,
      title: "Create Forms",
      details: `Here is the form to design form.
      `,
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
          <h1>E-Commerce Website</h1>
        </div>
        <div className="case-study-para">
          <p>
          Created a form generater. Here you can design forms with different types of inputs and also edit them after saving.
          </p>
          <button
            onClick={() => {
              window.open("https://form-creater.vercel.app/");
            }}
          >
            See Website
          </button>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              window.open(
                "https://github.com/Kshirsagar-Govind/ecommerce-site"
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
              I used MERN stack for this app.
              <ul>
                <li>
                  <img src={ReactLogo} alt="" />
                </li>

                <li>
                  <img src={NodeLogo} alt="" />{" "}
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
              Simply using thisa we can create different forms and access them where we need
            </p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Challenges Faced</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>I was stucked at editing the forms after creating them, then I used element manipulation to edit particular input. </p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>New Learnings</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              <span>
                <li>Using dom creating multiple inputs</li>
                <li>Dynamically adding and saving form inputs with label and placeholder  </li>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormsPage;
