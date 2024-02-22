import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-16 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
       <h1 className="text-3xl font-bold ml-4">DG.</h1>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-titleFont text-gray-400 tracking-wide cursor-pointer hover:text-amber-400 duration-300 "
              key={_id}
            >
              <Link
                activeClass="active font-titleFont"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full text-amber-400 cursor-pointer"
        >
          <FiMenu />
        </span>
        { showMenu && (
          <div className="w-[80%] h-fit overflow-scroll absolute top-0 left-0 bg-gray-800 px-4 scrollbar-hide">
            <div className="flex flex-col py-8 relative">
              
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-poppins font-bold text-gray-400 tracking-wide cursor-pointer hover:text-amber-400 duration-300"
                  >
                  <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-0 right-0 text-gray-400 hover:text-amber-400 duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar