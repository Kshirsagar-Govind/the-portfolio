import React, { useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/my-work-style.css";

import Git from "./Assets/WorkSS/git.png";
import Linkedin from "./Assets/WorkSS/linkedin.png";
import Medium from "./Assets/WorkSS/medium.png";

function MyWork() {
  const [ showWork, _setShowWork ] = useState();
  const [ curr_index, _setCurr_index ] = useState(0);
  const newTabLink = valu => {
    const linkedin_url = "https://www.linkedin.com/in/govind-kshirsagar";
    const git_url = "https://github.com/Kshirsagar-Govind";
    const medium_url = "https://medium.com/@kshirsagar.govind";
    const resume_url =
      "https://drive.google.com/file/d/1sQTIaxO3xC9a9UnE_pmZBhOJ2VH5xYet/view?usp=sharing";
    const url =
      valu == 1
        ? resume_url
        : valu == 2
          ? git_url
          : valu == 3 ? medium_url : valu == 4 ? linkedin_url : resume_url;
    window.open(url, "_blank");
  };
  return (
    <div className="MyWorkPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          My
          <span className="prim-color"> Work</span>
        </h1>
      </div>
      <div className="make-it-centered">
        <div className="work-section">
          <div className="work-card-container">
            <span>
              <h1>HACK-X Node</h1>
              <p>
                What is the last time when you have tested your digital assets
                like website or your web apps? So, When I was in HACK-X Security
                I have developed this security assessment product. Which helps
                you to keep your digital assets healthy and it is actually very
                big and complex product. But I was able to complete it alone.
              </p>
            </span>
            <div className="show-work">
              <span>
                <a
                  className="work-btn text-no-style"
                  href="/project-hack-x-node"
                >
                  Case Study
                </a>
              </span>
            </div>
          </div>
          <div className="work-card-container">
            <span>
              <h1>Note It Down</h1>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - NoteItDown. So You
                can wite notes, you can add your expenses and your tasks. All at
                one place.
              </p>
            </span>
            <div className="show-work">
              <span>
                <a
                  className="work-btn text-no-style"
                  href="/project-note-it-down"
                >
                  Case Study
                </a>
              </span>
            </div>
          </div>

          <div className="work-card-container">
            <span>
              <h1>Make Note</h1>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - NoteItDown. So You
                can wite notes, you can add your expenses and your tasks. All at
                one place.
              </p>
            </span>
            <div className="show-work">
              <span>
                <a className="work-btn text-no-style" href="/project-make-note">
                  Case Study
                </a>
              </span>
            </div>
          </div>

          <div className="work-card-container">
            <span>
              <h1>eCommerce Website</h1>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - NoteItDown. So You
                can wite notes, you can add your expenses and your tasks. All at
                one place.
              </p>
            </span>
            <div className="show-work">
              <span>
                <a className="work-btn text-no-style" href="/project-ecom">
                  Case Study
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="social-section">
          <div className="socials-logo">
            <img onClick={() => newTabLink(2)} src={Git} alt="img" />
            {/* <img onClick={() => newTabLink(3)} src={Medium} alt="img" /> */}
            <img onClick={() => newTabLink(4)} src={Linkedin} alt="img" />
          </div>
          <div className="hr-line" />
          <div className="resume-btn">
            <button onClick={() => newTabLink(1)}>RESUME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
