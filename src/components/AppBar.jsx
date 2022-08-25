import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const AppBar = () => {
  let [open, setOpen] = useState(false);
  const icon = <FontAwesomeIcon icon={faBars} />;
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Github", link: "https://github.com/Subhoniddin/" },
    { name: "Instagram", link: "https://www.instagram.com/_anonimous_8_/" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 bg-slate-900 left-0 z-[15]">
      <div className="md:flex text-white bg-slate-900 items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-white text-2xl cursor-pointer flex items-center font-[Poppins]">
          <span className="text-3xl mr-1 pt-2"></span>
          Anonymous
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden bg-slate-900  hover:text-grey-400 duration-700"
        >
          <i name={open ? "close" : "menu"} className="text-white">
            {icon}
          </i>
        </div>

        <ul
          className={`md:flex md:items-center bg-slate-900 z-[-3] md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-380px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ng ">
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
