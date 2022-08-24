import React from "react";
import userImg from "../../src/assets/img/user_image.png";
import blueElips from "../../src/assets/img/blueelips.png";

const HomePage = () => {
  return (
    <div className="md:flex h-[400px] justify-between pl-20 items-center">
      <div className="md:flex">
        <div className="text-white">
          <h1 className="font-bold text-4xl">Hello</h1>
          <h1 className="font-bold md:text-5xl text-4xl">I`m</h1>
          <h1 className="font-bold md:text-5xl text-4xl">Subhoniddin</h1>
          <div className="md:w-[430px] w-[270px]">
            <p>
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              tajik website? Then contact me
            </p>
            <div>
              <button>Contact me</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-h-fitt block">
        <div className="">
          <div className="relative">
            <img className="" src={blueElips} alt="" />
            <img
              className="w-[323px] h-[350px] absolute top-[120px] left-[140px] z-10"
              src={userImg}
              alt="userimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
