import React from "react";
import { Container } from "@mui/material";
import { ProjectsModel } from "../../models";
import ItemProject from "./itemproject.component";

const Project = () => {
  return (
    <div className="w-full bg-[#f9f9f9] pt-20">
      <Container>
        <div className="w-full justify-center snap-center py-20">
          <div className="block_text_project">
            <h1 className="text-[#147efb] font-bold text-lg mb-4">ПОРТФОЛИО</h1>
            <p className="text-[#2d2e32] font-bold text-3xl">
              Каждый проект — это уникальная разработка 🧩
            </p>
          </div>
          <div className="pt-10 w-full">
            {ProjectsModel.map((item, idx) => (
              <ItemProject key={idx} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
