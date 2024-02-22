import React from 'react'
import { FaReact,FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiExpress } from "react-icons/si";
const BestSkills= () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        
        <div>
          <h2 className="text-base font-poppins mb-4">
            BEST SKILLS ON
          </h2>
          <div className="flex gap-4">
            <span className="skillIcon">
              <FaReact />
            </span>
            <span className="skillIcon">
            <FaNodeJs />
          </span>
            <span className="skillIcon">
              <SiExpress />
            </span>
            <span className="skillIcon">
              <SiTailwindcss />
            </span>
            <span className="skillIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default BestSkills;