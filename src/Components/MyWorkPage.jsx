import React, { useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/my-work-style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Git from "./Assets/WorkSS/git.png";
import Linkedin from "./Assets/WorkSS/linkedin.png";
import Medium from "./Assets/WorkSS/medium.png";
import { useEffect } from "react";

function MyWork() {
  const [showWork, _setShowWork] = useState();
  const [curr_index, _setCurr_index] = useState(0);
  const newTabLink = (valu) => {
    const linkedin_url = "https://www.linkedin.com/in/govind-kshirsagar";
    const git_url = "https://github.com/Kshirsagar-Govind";
    const medium_url = "https://medium.com/@kshirsagar.govind";
    const resume_url =
      "https://drive.google.com/file/d/1c1ujUMWOxfJf1_Dbqq1qGohonEzuegLQ/view?usp=sharing";
    const url =
      valu == 1
        ? resume_url
        : valu == 2
        ? git_url
        : valu == 3
        ? medium_url
        : valu == 4
        ? linkedin_url
        : resume_url;
    window.open(url, "_blank");
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <div className="MyWorkPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          Personal
          <span className="prim-color"> Projects</span>
        </h1>
      </div>
      <div className="make-it-centered">
        <div className="work-section">
          <div
            className="work-card-container"
            data-aos-once="true"
            data-aos="fade-up"
          >
            <span>
              <h1>Resume Builder</h1>
              <p>
                Lots of time we try to make our resume more interesting but end
                up just thinking about design, and lasltly we drop our creative
                ideas and keep it very simple way. But if you want to have some
                unique design for your resume please take look at my Resume
                Builder.
              </p>
            </span>
            <div className="show-work">
              <span>
                <a
                  className="work-btn text-no-style"
                  href="/project-resume-builder"
                >
                  Case Study
                </a>
              </span>
            </div>
          </div>

          <div
            className="work-card-container"
            data-aos-once="true"
            data-aos="fade-up"
          >
            <span>
              <h1>eCommerce Website</h1>
              <p>
                To learn and practice advance functionalities in MERN stack, I
                have created this ecommerce website, where user can see
                different electronics product and can do various things on the
                website related to product.
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

          <div
            className="work-card-container"
            data-aos-once="true"
            data-aos="fade-up"
          >
            <span>
              <h1>Note It Down</h1>
              <p>
                We have lot's of things to note in everyday, so simple
                application I made in react where we can add notes, expense,
                save password and can add tasks.
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

          <div
            className="work-card-container"
            data-aos-once="true"
            data-aos="fade-up"
          >
            <span>
              <h1>Make Note</h1>
              <p>
                Most of the time, I work on some ideas and get into some
                important issues or solutions but I need to note all this things
                somewhere, and that's what my project is - Make Not. This is
                similar to Note It Down project to the some extent.
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
        </div>

        <div className="social-section">
          <div className="socials-logo">
            <img onClick={() => newTabLink(2)} src={Git} alt="img" />
            {/* <img onClick={() => newTabLink(3)} src={Medium} alt="img" /> */}
            <img onClick={() => newTabLink(4)} src={Linkedin} alt="img" />
          </div>
          <div className="hr-line" />
          <div className="resume-btn">
            <button style={{ cursor: "pointer" }} onClick={() => newTabLink(1)}>
              RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
