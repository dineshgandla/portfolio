import React from 'react'

const AboutCard = ({course,institution}) => {
  return (
    
       <div className="w-full bg-black bg-opacity-25 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-4">
        
        
            <h3 className="text-xl md:text-2xl font-semibold">
              {course}
            </h3>
            <p className="text-base text-white">
              {institution}
            </p>
         
          <div>
         
          </div>
       
      </div>
   
  );
}

export default AboutCard;