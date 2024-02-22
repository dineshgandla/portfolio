import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn ,FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
     
        <div className="flex gap-4">
        <span className="skillIcon">
        <a href='https://www.linkedin.com/in/dinesh-gandla-01b0b120b' target="_blank"><FaLinkedinIn/></a>
          </span>
          <span className="skillIcon">
          <a href='https://github.com/dineshgandla' target="_blank"><FaGithub/></a>
          </span>
          <span className="skillIcon">
            <FaTwitter />
          </span>
       
      
        </div>
        <div className="leading-8">
     <span className="text-md hover:text-amber-400">+91 6302528535</span>
      <h6 className="text-md"><span className="text-md hover:text-amber-400">dineshgandla9@gmail.com</span></h6>
      </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-amber-400 tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
        <li>
        <Link
            to="home"
             spy={true}
             smooth={true}
             duration={500}
             className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer"
          >Home
      <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </Link>
        </li>
        <li>
        <Link
            to="projects"
             spy={true}
             smooth={true}
             duration={500}
             className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer"
          >Projects
      <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </Link>
        </li>
          <li>
          <Link
              to="about"
               spy={true}
               smooth={true}
               duration={500}
               className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer"
            >About Me
        <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
        </Link>
          </li>
          <li>
          <Link
              to="contact"
               spy={true}
               smooth={true}
               duration={500}
               className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer"
            >Contact
        <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
        </Link>
          </li>
          <li>
          <Link
              to="blog"
               spy={true}
               smooth={true}
               duration={500}
               className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer"
            >Blog
        <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
        </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-amber-400 tracking-wider">
          Follow me
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Github
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Instagram
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Linkedin
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Twitter
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Discord
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-amber-400 tracking-wider">
          Legal
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Privacy Policy
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Terms & Conditions
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-amber-400 duration-300 group cursor-pointer">
              Help Center
              <span className="w-full h-[1px] bg-amber-400 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer