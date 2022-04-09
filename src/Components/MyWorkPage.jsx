import React from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/my-work-style.css";

function MyWork() {
  return (
    <div className="MyWorkPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          My
          <span className="prim-color"> Work</span>
        </h1>
      </div>
      <div className="work-section">
        <div className="work-card-container">
          <span>
            <h1>HACK-X Node</h1>
            <p>
              What is the last time when you have tested your digital assets
              like website or your web apps? So, When I was in HACK-X Security I
              have developed this security assessment product. Which helps you
              to keep your digital assets healthy and it is actually very big
              and complex product. But I was able to complete it alone.
            </p>
          </span>
          <div className="float-right">
            <button className="work-btn">See Work</button>
          </div>
        </div>
        <div className="work-card-container">
          <span>
            <h1>Note It Down</h1>
            <p>
              Most of the time, I work on some ideas and get into some important
              issues or solutions but I need to note all this things somewhere,
              and that's what my project is - NoteItDown. So You can wite notes,
              you can add your expenses and your tasks. All at one place.
            </p>
          </span>
          <div className="float-right">
            <button className="work-btn">See Work</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
