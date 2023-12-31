import React from "react";
import LinkedInlogo from "../Assets/WorkSS/linkedin.png";
import Gitlogo from "../Assets/WorkSS/git.png";
import CoderImg from "../Assets/coder.gif";
// import LinkedInlogo from "../Assets/WorkSS/linkedin.png";
const Home = () => {
  return (
    <div className="h-full flex flex-col  justify-center">
      <div className="flex">
        <div className="img">
          <img src={CoderImg} className="w-[500px] mr-10" alt="" />
        </div>
        <div className="title relative">
          <p>My Name is Govind Kshirsagar, I am a</p>
          <p className="text-[40px] uppercase">
            UI/UX
            <span className="text-primary font-semibold"> Designer</span>
            <br />
            FULL STACK{" "}
            <span className="text-primary font-semibold">DEVELOPE</span>
          </p>
          <div className="quick-link flex relative w-25  border-red-100 mt-5 transition-all hover:translate-x-1">
            <div className="icon-sec flex justify-center h-[50px] w-[50px] py-2 relative bg-secondary ">
              <img src={LinkedInlogo} alt="" className="h-[35px] relative" />
            </div>
            <a
              className="flex flex-col justify-center text-center text-sec border-2 w-32 border-secondary"
              href="https://www.linkedin.com/in/govind-kshirsagar/"
              target="_blank"
            >
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="quick-link flex relative w-25  border-red-100 my-3  transition-all hover:translate-x-1">
            <div className="icon-sec flex justify-center h-[50px] w-[50px] py-2 relative bg-secondary">
              <img src={Gitlogo} alt="" className="h-[35px] relative" />
            </div>
            <a
              className="flex flex-col justify-center text-center text-sec border-2 w-32 border-secondary"
              href="https://github.com/Kshirsagar-Govind"
              target="_blank"
            >
              <span>Github</span>
            </a>
          </div>

          <div className="quick-link flex relative w-25  border-red-100 transition-all hover:translate-x-1">
            <div className="icon-sec flex flex-row justify-center align-middle p-3 h-[50px] w-[50px] relative bg-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-download"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#323232"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
            </div>
            <div className="flex flex-col justify-center text-center text-sec border-2 w-32 border-secondary">
              <span>Resume</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
