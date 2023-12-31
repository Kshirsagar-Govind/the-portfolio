import React from "react";
import "./global.css";
import Menu from "./Components/menu";
import Home from "./Components/Pages/home";
import Exp from "./Components/Pages/exp";
import Projects from "./Components/Pages/projects";
import Skills from "./Components/Pages/skills";
import About from "./Components/Pages/about";
function App() {
  return (
    <div className="w-screen h-screen flex p-10">
      <div className="h-full flex justify-center flex-col w-1/5">
        <Menu />
      </div>

      <div className="w-4/5 h-full overflow-auto">
        <Home />
        <Exp />
        <Projects />
        <Skills />
        <About />
      </div>
    </div>
  );
}

export default App;
