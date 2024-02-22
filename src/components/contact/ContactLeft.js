import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
   
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg  flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Dinesh Gandla</h3>
        <p className="text-lg font-normal text-gray-400">
          React Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide leading-8">
        Iam a professional React developer with 1+ year of experience. Expertise in converting design mockups and wireframes into a high-quality code.Experience in developing UI Components using React.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone : <span className="text-lightText">+91 6302528535</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email : <span className="text-lightText">dineshgandla9@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Get in Touch with me in</h2>
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
      </div>
    </div>
  );
}

export default ContactLeft