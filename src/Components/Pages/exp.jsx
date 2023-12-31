import React from "react";

const Exp = () => {
  return (
    <div className="h-full w-full grid grid-cols-5 grid-flow-col">
      <div className="border-2 p-4 w-[400px] h-[350px] border-secondary col-start-0">
        <h1>
          <span className="font-semibold">MERNSTACK DEVELOPER</span>
          <br /> 2022 Dec - Present
          <br /> medtigo, Remote
        </h1>
        <p className="mt-4">
          I am working here as a MERN stack Developer. My work includes:
          Maintaining The web application and websites. Creating reusable or
          efficient React components. Creating Complex APIs and DB Model
          Designing.
        </p>
      </div>
      <div className="border-2 p-4 w-[400px] h-[350px] border-secondary col-start-3">
        <h1>
          <span className="font-semibold">SOFTWARE DEVELOPER</span>
          <br /> 2021 May - 2022 Dec
          <br /> HACK-X Security, Pune
        </h1>
        <p className="mt-4">
          I worked there as a Software Developer. I had the responsibilities of
          developing and designing the websites and web applications.
          Specifically, we were using MERN stack for the development. My work
          includes: Deploying websites and web apps to AWS. Maintaining The web
          applicatio and websites. Creating reusable or efficient React
          components. Designing better UX/UI designs.
        </p>
      </div>
    </div>
  );
};

export default Exp;
