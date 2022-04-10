import React, { Component, useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/my-self-style.css";

function GetInTouch() {
  return (
    <div className="MySelfPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          Let's
          <span className="prim-color"> Talk</span>
        </h1>
      </div>
    </div>
  );
}

export default GetInTouch;
