import React from 'react';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 px-2">

      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-courseFont flex flex-col gap-4 px-4">
         
          <h2 className="text-3xl md:text-3xl font-bold">Education Qualification</h2>
          <p className="text-sm text-amber-400 tracking-[4px]">2016 - 2022</p>
        </div>
        <div className="mt-2 lgl:mt-6 w-full flex flex-col gap-6">
          <EducationCard
            course="B.Tech (Computer Science and Engineering)"
            institution="Guru Nanak Institutions Technical Campus (2018- 2022)"
          />
          <EducationCard
            course="Intermediate (MPC)"
            institution="Sri Vijaya Sai Junior College (2016 - 2018)"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className=" lgl:mt-48 w-full flex flex-col">
          <EducationCard
            course="SSC"
            institution="Little Flower High School (2015 - 2016)"
          />
          
        </div>
      </div>


     
    </div>
  );
}

export default Education;
