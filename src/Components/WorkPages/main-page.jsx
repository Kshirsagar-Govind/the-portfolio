import React, { Component, useState } from "react";
import GetInTouch from "../GetInTOuchPage";
import HeroPage from "../HeroPage";
import MySelf from "../MySelfPage";
import MySkills from "../MySkillsPage";
import MyWork from "../MyWorkPage";
import NoteItDownPage from "./note-it-down-page";

function MainPage() {
  return (
    <div>
      <HeroPage />
      <MySkills />
      <MyWork />
      <MySelf />
      <GetInTouch />
      {/* <NoteItDownPage /> */}
    </div>
  );
}

export default MainPage;
