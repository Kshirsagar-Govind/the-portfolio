import React, { Component, useState } from "react";
import HeroPage from "../HeroPage";
import MySkills from "../MySkillsPage";
import MyWork from "../MyWorkPage";
import NoteItDownPage from "./note-it-down-page";

function MainPage() {
  return (
    <div>
      <HeroPage />
      <MySkills />
      <MyWork />
      {/* <NoteItDownPage /> */}
    </div>
  );
}

export default MainPage;
