import React from "react";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";

const ItemProject = ({ src, link, stack, name, title }) => {
  return (
    <>
      <div className="w-full shadow_tech rounded-3xl bg-white p-5  flex items-center  mb-16 gap-32 flex-row flex-wrap justify-center">
        <div className="w-[530px] h-[360px] rounded-3xl overflow-hidden shadow_tech">
          <img
            className={
              name === "Water Simulation"
                ? "rounded-3xl img_ianimation img"
                : "rounded-3xl img_ianimation"
            }
            src={src}
            alt="img"
          />
        </div>
        <div className="w-[300px] h-[360px] flex flex-col items-center pt-[30px]">
          <h1 className="text-[#2d2e32] text-xl font-bold ">{name}</h1>
          <p className="text-[#767676] text-xl text-center pt-2 capitalize">
            {title}
          </p>
          <div className=" w-full flex gap-10 justify-center pt-3 ">
            <div className="shadow_tech cursor-pointer p-3 pt-3 font-bold h-[50px] text-center flex items-center justify-center hover:text-[#147efb] duration-300">
              {stack.vue}
            </div>
            <div className="shadow_tech cursor-pointer p-3 pt-2 font-bold h-[50px] text-center flex items-center justify-center hover:text-[#147efb] duration-300">
              {stack.tw}
            </div>
          </div>
          <div className="w-full flex justify-center items-center pt-5 font-bold text-lg">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#147efb] duration-300"
            >
              Живая демонстрация <OutboundOutlinedIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemProject;
