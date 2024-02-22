import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-amber-400 tracking-wide">
       {title}
      </h3>
      <h4 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize">{des}</h4>
    </div>
  );
}

export default Title