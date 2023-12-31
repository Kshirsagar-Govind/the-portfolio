import React from "react";
import "../global.css";
import Home from "./Assets/Menu/home";
import Exp from "./Assets/Menu/exp";
import Projects from "./Assets/Menu/projects";
import Skills from "./Assets/Menu/skills";

const Menu = () => {
  return (
      <ul className="">
        <li className="flex justify-start p-2 hover:text-primary hover:font-medium cursor-pointer">
          <Home />
          <span className="pl-2 ">Home</span>
        </li>

         <li className="flex justify-start p-2 hover:text-primary hover:font-medium cursor-pointer">
          <Exp />
          <span className="pl-2">Experience</span>
        </li>

         <li className="flex justify-start p-2 hover:text-primary hover:font-medium cursor-pointer">
          <Projects />
          <span className="pl-2">Projects</span>
        </li>

         <li className="flex justify-start p-2 hover:text-primary hover:font-medium cursor-pointer">
          <Skills />
          <span className="pl-2">Skills</span>
        </li>

         <li className="flex justify-start p-2 hover:text-primary hover:font-medium cursor-pointer">
          <Home />
          <span className="pl-2">About</span>
        </li>
 
      </ul>
  );
};

export default Menu;
