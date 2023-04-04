import React from 'react';
import { Container } from '@mui/material';
import ItemProject from './itemproject.component';
import doodge from '../../assets/project/doodge.avif';
import ssb from '../../assets/project/ssb.png';
import gravity from '../../assets/project/gravity.png'

const projects = [
  {
    name: 'SSB.TJ',
    title:
      'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars',
    stack: { vue: 'Vue JS', tw: 'Tailwind css' },
    src: ssb,
    link: 'https://www.ssb.tj/',
  },
  {
    name: 'SSB.TJ',
    title:
      'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars',
    stack: { vue: 'Vue JS', tw: 'Tailwind css' },
    src: gravity,
    link: 'https://www.ssb.tj/',
  },
];

const Project = () => {
  return (
    <div className='w-full bg-[#f9f9f9] pt-20'>
      <Container>
        <div className='w-full justify-center snap-center py-20'>
          <div>
            <h1 className='text-[#147efb] font-bold text-lg mb-4'>PORTFOLIO</h1>
            <p className='text-[#2d2e32] font-bold text-3xl'>
              Каждый проект — это уникальная разработка 🧩
            </p>
          </div>
          <div className='pt-10 w-full'>
            {projects.map((item, idx) => (
              <ItemProject key={idx} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
