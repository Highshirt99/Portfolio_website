import React from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { options } from "./NavLists";

const NavBar = ({ handleClose }) => {
  return (
    <div className="z-[1000000] lg:hidden bg-white min-h-screen w-[60%] md:w-[30%]  p-4 text-[1.5rem] fixed top-0 bottom-0 left-0 ">
      <div className="relative">
        <AiOutlineClose
          onClick={handleClose}
          className=" rounded-md absolute -right-2 -top-3 cursor-pointer p-1 hover:bg-btn hover:text-white text-[2.2rem]"
        />
        <ul className="relative text-blue-700 top-12">
          {options.map((item) => (
            <li  className="flex items-center justify-start gap-2">
              <div className="text-[18px] text-white flex justify-center items-center rounded-[50%] p-3 bg-lightBg">
                {item.icon}
              </div>

              <Link
                to={item.link}
                smooth
               
              
                className="my-8 cursor-pointer hover:bg-lightBg text-[18px]
                w-[150px] px-3 py-1 rounded-md font-extrabold hover:text-white"
                onClick={handleClose}    key={item.name}>
                    {item.name}
              </Link>
          
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
