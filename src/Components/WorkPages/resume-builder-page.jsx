import React, { useState, useEffect } from "react";
import "../CSS/main-style.css";
import "../CSS/comps-styles.css";
import "../CSS/case-study-page.css";

import ReactLogo from "../Assets/React_logo.png";
import TailWindLogo from "../Assets/tailwind.png";

import HomePage from "../Assets/WorkSS/ResumeBuilder_Home.png";
import Templates from "../Assets/WorkSS/ResumeBuilder_Templates.png";
import TemplatesEdit from "../Assets/WorkSS/ResumeBuilder_TemplateEdit.png";
import SSAlbum from "../Helpers/ss-album";

function ResumeBuilderPage() {
  const [images, _setImages] = useState([
    {
      img: HomePage,
      title: "Dashboard",
      details: `This is dashboard of the application,
      Here You have four options currently only Crete My Resume is Completed and I am working on adding remaining features also.
      `,
    },

    {
      img: Templates,
      title: "Templates",
      details: `Here user can select any templates from these and i am working on this to add more templates designs.`,
    },
    {
      img: TemplatesEdit,
      title: "Resume Builder",
      details: `So here you can build your reseme according to template selected and after that you can download the pdf file.`,
    },
  ]);
  // useEffect = (() => {}, [ curr_img_index ]);
  const [curr_img_index, _set_Index] = useState(0);
  const next = () => {
    if (curr_img_index < images.length - 1)
      _set_Index((curr_img_index) => curr_img_index + 1);
  };

  const prev = () => {
    if (curr_img_index > 0) _set_Index((curr_img_index) => curr_img_index - 1);
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

          <h1>Resume Builder</h1>
        </div>
        <div className="case-study-para">
          <p>
            Lots of time we try to make our resume more interesting but end up
            just thinking about design, and lasltly we drop our creative ideas
            and keep it very simple way. But if you want to have some unique
            design for your resume please take look at my Resume Builder.
          </p>

          <button
            onClick={() => {
              window.open("https://resume-builder-five-topaz.vercel.app/");
            }}
          >
            See Website
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              window.open(
                "https://github.com/Kshirsagar-Govind/resume-builder"
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
              It is made in React only. I used tailwind CSS for designing the
              app.
              Currently working on adding more templates and some ui design.
              <ul>
                <li>
                  <img src={ReactLogo} alt="" />
                </li>
                <li>
                  <img src={TailWindLogo} alt="" />
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
            <p>Using this app we can create our resume.</p>
          </div>
        </div>
        <div className="case-stidy-detail">
          <div className="c-header">
            <h2>Challenges Faced</h2>
            <span className="c-hr" />
          </div>
          <div className="c-info">
            <p>
              1. Creating template was difficult for me because it needs to add
              tags dynamically 2. Removing tags dynamically
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default ResumeBuilderPage;
