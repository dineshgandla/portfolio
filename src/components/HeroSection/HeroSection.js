import React from 'react'
import LeftHeroSection from './LeftHeroSection';
import RightHeroSection from './RightHeroSection';
const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full pt-20 px-8 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftHeroSection />
     <RightHeroSection />
    </section>
  );
}

export default HeroSection