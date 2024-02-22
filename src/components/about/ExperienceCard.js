import React from 'react'

const ExperienceCard = ({title,subTitle,des,skills}) => {
  return (
    
       <div className="w-full bg-black bg-opacity-25 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10">
        <div className="flex flex-col lgl:flex-column justify-between gap-4 lgl:gap-0">
        
            <h3 className="text-xl md:text-2xl font-semibold">
              {title}
            </h3>
            <p className="text-base mt-2 text-white">
              {subTitle}
            </p>
         
          <div>
         
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-white">
          {des}
        </p>
        <p className="text-sm md:text-base font-medium text-white">
        {skills}
      </p>
      </div>
   
  );
}

export default ExperienceCard;