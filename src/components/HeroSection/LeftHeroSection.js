import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { RxDownload } from "react-icons/rx";
import { FaHireAHelper } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import BestSkills from "./BestSkills";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["React Developer...", "Nodejs Developer...", "UI Designer..."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleDownloadCV = () => {
    
    const link = document.createElement("a");
    link.download = "Dinesh_Gandla_CV.pdf";
    link.href = "/dinesh.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className="w-full mb-16 lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span
            className="text-amber-400
           capitalize"
          >
            Dinesh Gandla
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ffbf00"
          />
        </h2>
        <p className="text-base font-bodyFont leading-8 tracking-wide">
          Iam a professional React developer with 1+ year of experience.
          Expertise in converting design mockups and wireframes into a
          high-quality code.Experience in developing UI Components using React.
        </p>
        <div className="mt-6 flex flex-row">
          <button className="flex items-center justify-center w-56 bg-black bg-opacity-25 text-white font-bold py-2 px-4 rounded-full mr-4 hover:bg-gray-900 hover:text-amber-400"  onClick={handleDownloadCV}>
            <span>Download CV</span>
            <RxDownload className="ml-3 text-xl" />
          </button>

          <button className="flex items-center justify-center w-48 bg-black bg-opacity-25 hover:bg-gray-900 text-white font-bold py-2 px-10 rounded-full mr-8 hover:text-amber-400 hover:border-amber-400">
            <span>HireMe</span>
            <FaHireAHelper className="ml-3 text-lg" />
          </button>
        </div>
      </div>

   <BestSkills/>
    </div>
  );
};

export default LeftBanner;
