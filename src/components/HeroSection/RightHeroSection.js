import React from 'react'
import {profileImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[450px] lgl:w-[300px] lgl:h-[420px] z-10 object-cover mb-40"
        src={profileImg}
        alt="bannerImg"
      />
      
    </div>
  );
}

export default RightBanner