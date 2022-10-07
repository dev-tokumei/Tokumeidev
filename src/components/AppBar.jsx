import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export const AppBar = () => {
  let [open, setOpen] = useState(false);
  const icon = <FontAwesomeIcon icon={faBars} />;
  let Links = [
    { name: 'Home', link: '/', isExtremal: false },
    {
      name: 'Blog',
      link: 'https://www.instagram.com/_anonimous_8_/',
      isExtremal: true,
    },
    { name: 'About me', link: '/about', isExtremal: false },
    {
      name: 'Github',
      link: 'https://github.com/Subhoniddin/',
      isExtremal: true,
    },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 bg-slate-900 left-0 z-[15]">
      <div className="md:flex text-white bg-slate-900 items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-white text-2xl cursor-pointer flex items-center w-[180px] justify-between font-[Poppins]">
          <img className="w-[50px] " src={logo} alt="" />
          <span className="text-3xl mr-1 ">Tokumei</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden bg-slate-900  hover:text-grey-400 duration-700"
        >
          <i name={open ? 'close' : 'menu'} className="text-white">
            {icon}
          </i>
        </div>

        <ul
          className={`md:flex md:items-center bg-slate-900 z-[-3] md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-380px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ng ">
              {link.isExtremal ? (
                <a
                  className="text-white hover:text-gray-400 duration-500"
                  href={link.link}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  className="text-white hover:text-gray-400 duration-500"
                  to={link.link}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
