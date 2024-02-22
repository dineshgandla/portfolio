import React from "react";
import {motion} from "framer-motion"
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont"
    >
      <div>
        <div className="flex flex-col gap-4 px-6">
        <h2 className="text-3xl font-bold">Job Experience</h2>
          <p className="text-sm text-amber-400 tracking-[4px]">2022 - 2024</p>
        </div>
        <div className="mt-14 w-[50%]  flex flex-col gap-10 px-4">
          <ExperienceCard
            title="Software Engineer"
            subTitle="LTIMindtree ( 2022 - 2024 )"
            des=" Iam a professional React developer with 1+ year of experience. Expertise in converting design mockups and wireframes into a high-quality code.Experience in developing UI Components using React."
            skills="REACT , TAILWIND CSS"
          />
          
          
        </div>
      </div>
      <div>
      </div>
    </motion.div>
  );
};

export default Experience;
