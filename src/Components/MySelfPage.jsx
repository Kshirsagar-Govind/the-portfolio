import React, { Component, useState } from "react";
import "./CSS/main-style.css";
import "./CSS/comps-styles.css";
import "./CSS/my-self-style.css";

function MySelf() {
  return (
    <div className="MySelfPage">
      <div className="page-title-div">
        <div className="vr-line" />
        <h1>
          My
          <span className="prim-color"> Self</span>
        </h1>
      </div>
    </div>
  );
}

export default MySelf;
