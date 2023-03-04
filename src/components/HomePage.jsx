import React from 'react';
import userImg from '../../src/assets/img/userImg.jpg';
import IconPage from './IconPage';

const HomePage = () => {
  return (
    <>
      <div className="md:flex h-full pb-10 justify-between main_content lg:pr-20 lg:pl-20 pl-4 pr-4 items-center pt-8 mobile">
        <div className="md:flex">
          <div className="text-white user_title">
            <h1 className="font-bold text-3xl">Hello</h1>
            <h1 className="font-bold md:text-4xl text-3xl">I`m</h1>
            <h1 className="font-bold md:text-4xl text-3xl">Subhoniddin</h1>
            <div className="lg:w-[400px] w-[270px] pt-5">
              <p className="pb-5 font=[Arodora Pro]">
                I've been doing web design, front-end and back-end development
                for a year now. Do you need a website design, site layout, or
                maybe a tajik website? Then contact me
              </p>
              <div className="w-[200px] h-[47px] bg-amber-400 rounded-2xl flex items-center justify-center hover:shadow-amber-600">
                <button className="font-bold font-serif text-black">
                  <a href="https://t.me/tokumei_dev">Contact me</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[400px] main md:h-[400px]  flex user_img rounded-full pl-2">
          <img className="rounded-full userimg" src={userImg} alt="" />
        </div>
      </div>
      <IconPage />
    </>
  );
};

export default HomePage;
